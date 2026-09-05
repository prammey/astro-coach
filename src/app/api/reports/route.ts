import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';
import { findCatalogQuestionById } from '@/data/mcq/catalog.server';
import { sendReportEmail } from '@/lib/email';

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

// Caps that keep an open, unauthenticated endpoint from being used to
// flood the reports table or the notification inbox. Both are generous
// enough that a genuine learner will never meet them.
const MAX_OPEN_PER_QUESTION = 10;
const MAX_PER_HOUR = 60;

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

    // Reporting deliberately works without an account, because a guest who
    // hits a broken question is exactly who we want to hear from. That
    // leaves the endpoint open, so two caps keep it from being used to
    // flood the database or the notification inbox.
    //
    // Neither depends on knowing who the caller is, so no IP address or
    // other identifying data has to be stored to make them work.
    const openForQuestion = await prisma.questionReport.count({
      where: { questionId, status: 'open' },
    });
    if (openForQuestion >= MAX_OPEN_PER_QUESTION) {
      // Already flagged plenty; say thanks rather than showing an error,
      // since from the learner's side nothing is wrong.
      return NextResponse.json({ message: 'Report already received' }, { status: 200 });
    }

    const reportsInLastHour = await prisma.questionReport.count({
      where: { createdAt: { gte: new Date(Date.now() - 60 * 60 * 1000) } },
    });
    if (reportsInLastHour >= MAX_PER_HOUR) {
      console.warn(`Report rate limit hit: ${reportsInLastHour} in the last hour`);
      return NextResponse.json(
        { error: 'Too many reports right now. Please try again later.' },
        { status: 429 },
      );
    }

    await prisma.questionReport.create({
      data: { questionId, reason, details: details || null, userId, userEmail },
    });

    // Only notify for the first open report of a given problem. Ten people
    // hitting the same missing figure is one thing to fix, not ten emails.
    const alreadyReported = await prisma.questionReport.count({
      where: { questionId, reason, status: 'open' },
    });

    if (alreadyReported <= 1) {
      // The report is already saved, so a failure to send must not fail the
      // request — the learner did their part.
      try {
        await sendReportEmail({
          questionId,
          reason,
          details: details || null,
          userId,
          userEmail,
          siteUrl: new URL(request.url).origin,
        });
      } catch (emailError) {
        console.error('Could not email question report:', emailError);
      }
    }

    return NextResponse.json({ message: 'Report received' }, { status: 201 });
  } catch (error) {
    console.error('Error saving question report:', error);
    return NextResponse.json(
      { error: 'Could not send your report. Please try again.' },
      { status: 500 },
    );
  }
}
