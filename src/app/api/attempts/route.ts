import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';
import { findCatalogQuestionById } from '@/data/mcq/catalog.server';

// Checks a submitted answer against the real catalog and, only for a
// logged-in user, saves the attempt and updates unique-correct progress.
// The browser only ever sends questionId + submittedAnswer — it never
// tells the server whether the answer was correct.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { questionId, submittedAnswer } = body;

    if (!questionId || typeof submittedAnswer !== 'string') {
      return NextResponse.json(
        { error: 'Missing: questionId, submittedAnswer' },
        { status: 400 }
      );
    }

    const question = findCatalogQuestionById(questionId);
    if (!question) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }

    const isCorrect = submittedAnswer === question.correctAnswer;
    const solutionMediaMissing = question.solutionMedia?.status === 'required-missing';

    let saved = false;

    const authHeader = request.headers.get('Authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.slice(7);
      const { data: { user }, error } = await supabase.auth.getUser(token);

      if (error || !user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      const prisma = getPrisma();
      const userId = user.id;

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

      saved = true;
    }

    return NextResponse.json({
      isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      solutionMediaMissing,
      saved,
    });
  } catch (error) {
    console.error('Error checking answer:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed' },
      { status: 500 }
    );
  }
}
