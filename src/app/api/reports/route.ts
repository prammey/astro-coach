import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';
import { findCatalogQuestionById } from '@/data/mcq/catalog.server';

// The reasons the report form offers. Anything else is rejected, so the
// stored values stay consistent and easy to group when reviewing reports.
const VALID_REASONS = [
  'needs_image',
  'wrong_answer',
  'wrong_explanation',
  'typo',
  'other',
];

const MAX_DETAILS = 1000;

// Records a problem a learner reported with a question.
//
// Signing in is not required — a broken question is worth hearing about
// either way — but when a token is sent the report is attributed, so we
// can follow up.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { questionId, reason } = body;
    const details = typeof body.details === 'string' ? body.details.trim() : '';

    if (!questionId || typeof questionId !== 'string') {
      return NextResponse.json({ error: 'Missing questionId' }, { status: 400 });
    }
    if (!VALID_REASONS.includes(reason)) {
      return NextResponse.json({ error: 'Please choose a reason' }, { status: 400 });
    }
    // "Other" says nothing on its own, so it needs the explanation.
    if (reason === 'other' && details.length === 0) {
      return NextResponse.json(
        { error: 'Please describe the problem' },
        { status: 400 },
      );
    }
    if (details.length > MAX_DETAILS) {
      return NextResponse.json({ error: 'That description is too long' }, { status: 400 });
    }

    // Reject reports against questions that do not exist, so the table
    // cannot be filled with junk IDs.
    if (!findCatalogQuestionById(questionId)) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }

    // Attribute the report when a valid token is sent; stay anonymous
    // otherwise rather than refusing the report.
    let userId: string | null = null;
    let userEmail: string | null = null;

    const authHeader = request.headers.get('Authorization');
    if (authHeader?.startsWith('Bearer ')) {
      const {
        data: { user },
      } = await supabase.auth.getUser(authHeader.slice(7));
      if (user) {
        userId = user.id;
        userEmail = user.email ?? null;
      }
    }

    const prisma = getPrisma();

    // One open report per person per question per reason, so a repeated
    // click does not create duplicates to wade through.
    if (userId) {
      const existing = await prisma.questionReport.findFirst({
        where: { userId, questionId, reason, status: 'open' },
      });
      if (existing) {
        return NextResponse.json({ message: 'Report already received' }, { status: 200 });
      }
    }

    await prisma.questionReport.create({
      data: { questionId, reason, details: details || null, userId, userEmail },
    });

    return NextResponse.json({ message: 'Report received' }, { status: 201 });
  } catch (error) {
    console.error('Error saving question report:', error);
    return NextResponse.json(
      { error: 'Could not send your report. Please try again.' },
      { status: 500 },
    );
  }
}
