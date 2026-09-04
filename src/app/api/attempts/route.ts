import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';
import { findCatalogQuestionById } from '@/data/mcq/catalog.server';
import type { CatalogQuestion } from '@/data/mcq/types';

// The graded result for one question — a standalone question, or one part
// of a multi-part item.
type GradedPart = {
  id: string;
  partLabel?: string;
  questionNumber: number;
  isCorrect: boolean;
  correctAnswer: string;
  explanation: string;
  solutionMediaMissing: boolean;
  solutionMediaAssets: string[];
};

// Grades one question against the catalog and collects everything the
// browser is allowed to see now that an answer has been submitted.
function gradePart(question: CatalogQuestion, submittedAnswer: string): GradedPart {
  const solutionMediaMissing = question.solutionMedia?.status === 'required-missing';

  return {
    id: question.id,
    partLabel: question.partLabel,
    questionNumber: question.questionNumber,
    isCorrect: submittedAnswer === question.correctAnswer,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
    solutionMediaMissing,
    // Solution figures are only revealed once an answer has been checked,
    // which is why they are sent from here rather than with the question.
    solutionMediaAssets: solutionMediaMissing
      ? []
      : ((question.solutionMedia?.assets ?? []) as string[]),
  };
}

// Checks submitted answers against the real catalog and, only for a
// logged-in user, saves the attempt and updates unique-correct progress.
// The browser only ever sends the answers it picked — it never tells the
// server whether they were correct.
//
// Single questions send `submittedAnswer`; multi-part items send `answers`,
// a map of part ID to chosen label. A multi-part item is recorded as one
// attempt that is correct only when every part is correct.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { questionId, submittedAnswer, answers } = body;

    if (!questionId) {
      return NextResponse.json({ error: 'Missing: questionId' }, { status: 400 });
    }

    const question = findCatalogQuestionById(questionId);
    if (!question) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }

    const isMultiPart = Boolean(question.parts?.length);

    if (isMultiPart && (typeof answers !== 'object' || answers === null)) {
      return NextResponse.json(
        { error: 'This question has multiple parts; send an `answers` map.' },
        { status: 400 }
      );
    }
    if (!isMultiPart && typeof submittedAnswer !== 'string') {
      return NextResponse.json(
        { error: 'Missing: submittedAnswer' },
        { status: 400 }
      );
    }

    const graded: GradedPart[] = isMultiPart
      ? question.parts!.map((part) => gradePart(part, String(answers[part.id] ?? '')))
      : [gradePart(question, submittedAnswer)];

    // Every part must be right for the item to count as correct.
    const isCorrect = graded.every((part) => part.isCorrect);

    // What gets stored in the attempt history, e.g. "A, C" for two parts.
    const recordedAnswer = isMultiPart
      ? question.parts!.map((part) => answers[part.id] ?? '—').join(', ')
      : submittedAnswer;

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
        data: { userId, questionId, submittedAnswer: recordedAnswer, isCorrect },
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

    const [only] = graded;

    return NextResponse.json({
      isCorrect,
      // Single-question fields stay in place so existing callers keep working.
      correctAnswer: only.correctAnswer,
      explanation: only.explanation,
      solutionMediaMissing: only.solutionMediaMissing,
      solutionMediaAssets: only.solutionMediaAssets,
      // Present only for multi-part items, one entry per part in order.
      parts: isMultiPart ? graded : undefined,
      saved,
    });
  } catch (error) {
    console.error('Error checking answer:', error);
    return NextResponse.json(
      { error: 'Failed to check answer. Please try again.' },
      { status: 500 }
    );
  }
}
