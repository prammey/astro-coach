import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.slice(7);
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const prisma = getPrisma();
    const userId = user.id;
    const body = await request.json();
    const { questionId, submittedAnswer, isCorrect } = body;

    if (!questionId || submittedAnswer === undefined || isCorrect === undefined) {
      return NextResponse.json(
        { error: 'Missing: questionId, submittedAnswer, isCorrect' },
        { status: 400 }
      );
    }

    await prisma.userAttempt.create({
      data: { userId, questionId, submittedAnswer, isCorrect },
    });

    await prisma.userQuestionProgress.upsert({
      where: { userId_questionId: { userId, questionId } },
      create: {
        userId,
        questionId,
        isCorrect,
        firstCorrectAt: isCorrect ? new Date() : null,
        attemptCount: 1,
        correctAttemptCount: isCorrect ? 1 : 0,
      },
      update: {
        isCorrect,
        lastAttemptAt: new Date(),
        attemptCount: { increment: 1 },
        correctAttemptCount: { increment: isCorrect ? 1 : 0 },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving attempt:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed' },
      { status: 500 }
    );
  }
}
