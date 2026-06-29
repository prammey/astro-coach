import { NextRequest, NextResponse } from 'next/server';
import { findCatalogQuestionById, toPublicQuestion } from '@/data/mcq/catalog.server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const question = findCatalogQuestionById(id);

    if (!question) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }

    const publicQuestion = toPublicQuestion(question);
    return NextResponse.json(publicQuestion);
  } catch (error) {
    console.error('Error fetching question:', error);
    return NextResponse.json(
      { error: 'Failed to fetch question. Please try again.' },
      { status: 500 }
    );
  }
}
