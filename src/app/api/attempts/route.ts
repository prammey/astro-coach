import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';
import { findCatalogQuestionById } from '@/data/mcq/catalog.server';
import type { CatalogQuestion } from '@/data/mcq/types';

// Everything a student may read once they have answered a question
// correctly: the worked solution, why each other choice is wrong, the
// solution figure if there is one, and the key takeaway.
type RevealedSolution = {
  correctAnswer: string;
  steps: string[];
  wrongChoices: Array<{ label: string; text: string; reason: string }>;
  takeaway: string;
  solutionMediaMissing: boolean;
  solutionMediaAssets: string[];
};

// The graded result for one question — a standalone question, or one part
// of a multi-part item. On a wrong answer only `wrongChoiceReason` is
// filled in; on a right answer only `solution` is. The correct letter is
// never sent with a wrong answer, so a student cannot learn it by peeking.
type GradedPart = {
  id: string;
  partLabel?: string;
  questionNumber: number;
  submittedAnswer: string;
  isCorrect: boolean;
  wrongChoiceReason?: string;
  solution?: RevealedSolution;
};

// Shown when a question has not been written up in detail yet.
const FALLBACK_WRONG_REASON =
  "Not quite. Think it through once more and try a different answer.";

// Builds the full solution for a question the student has just solved.
// Questions without a detailed write-up fall back to the short one-line
// explanation stored with the question.
function buildSolution(question: CatalogQuestion): RevealedSolution {
  const solutionMediaMissing = question.solutionMedia?.status === 'required-missing';
  const detailed = question.detailedExplanation;

  const wrongChoices = detailed
    ? question.choices
        .filter((choice) => choice.label !== question.correctAnswer)
        .map((choice) => ({
          label: choice.label,
          text: choice.text,
          reason: detailed.wrongChoices[choice.label] ?? '',
        }))
        .filter((choice) => choice.reason !== '')
    : [];

  return {
    correctAnswer: question.correctAnswer,
    steps: detailed ? detailed.solution : [question.explanation],
    wrongChoices,
    takeaway: detailed?.takeaway ?? '',
    solutionMediaMissing,
    // Solution figures are only revealed once an answer has been checked,
    // which is why they are sent from here rather than with the question.
    solutionMediaAssets: solutionMediaMissing
      ? []
      : ((question.solutionMedia?.assets ?? []) as string[]),
  };
}

// Grades one question against the catalog and collects exactly what the
// browser is allowed to see for that outcome — and nothing more.
function gradePart(question: CatalogQuestion, submittedAnswer: string): GradedPart {
  const isCorrect = submittedAnswer === question.correctAnswer;
  const base = {
    id: question.id,
    partLabel: question.partLabel,
    questionNumber: question.questionNumber,
    submittedAnswer,
    isCorrect,
  };

  if (isCorrect) {
    return { ...base, solution: buildSolution(question) };
  }

  return {
    ...base,
    wrongChoiceReason:
      question.detailedExplanation?.wrongChoices[submittedAnswer] ?? FALLBACK_WRONG_REASON,
  };
}

// Updates the student's progress row for this question.
//
// Retrying after a wrong answer must not pile up "wrong" marks, so the
// counters only move at two moments: the first ever try on a question,
// and a fresh correct answer to a question they had already solved. In
// between, a wrong try just refreshes lastAttemptAt, and the eventual
// correct answer flips isCorrect without touching the counters — that
// sitting was already counted, as a miss, on its first try.
async function recordProgress(userId: string, questionId: string, isCorrect: boolean) {
  const prisma = getPrisma();
  const now = new Date();
  const where = { userId_questionId: { userId, questionId } };

  const existing = await prisma.userQuestionProgress.findUnique({ where });

  if (!existing) {
    await prisma.userQuestionProgress.create({
      data: {
        userId,
        questionId,
        isCorrect,
        firstCorrectAt: isCorrect ? now : null,
        lastAttemptAt: now,
        attemptCount: 1,
        correctAttemptCount: isCorrect ? 1 : 0,
      },
    });
    return;
  }

  if (!existing.isCorrect) {
    // Still working on it: a retry in the same sitting, or coming back later.
    await prisma.userQuestionProgress.update({
      where,
      data: {
        lastAttemptAt: now,
        isCorrect,
        firstCorrectAt: isCorrect ? now : null,
      },
    });
    return;
  }

  // Already solved before. Re-practising counts again only when they get
  // it right; a wrong try on a solved question is logged but not scored.
  await prisma.userQuestionProgress.update({
    where,
    data: {
      lastAttemptAt: now,
      attemptCount: isCorrect ? { increment: 1 } : undefined,
      correctAttemptCount: isCorrect ? { increment: 1 } : undefined,
    },
  });
}

// Checks submitted answers against the real catalog and, only for a
// logged-in user, saves the attempt and updates their progress.
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

      // Every try is kept in the raw history; the progress rule above
      // decides which of them count towards the student's stats.
      await prisma.userAttempt.create({
        data: { userId: user.id, questionId, submittedAnswer: recordedAnswer, isCorrect },
      });

      await recordProgress(user.id, questionId, isCorrect);

      saved = true;
    }

    const [only] = graded;

    return NextResponse.json({
      // Single-question fields sit at the top level; a multi-part item also
      // lists every part in order. `isCorrect` comes last so that, for a
      // multi-part item, it means "every part right", not just the first.
      ...only,
      parts: isMultiPart ? graded : undefined,
      isCorrect,
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
