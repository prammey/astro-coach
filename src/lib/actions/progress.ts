"use server";

import { getPrisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";

// Saves one MCQ attempt and updates that user's unique-correct progress
// for the question. We always re-derive the user from the server-side
// Supabase session (cookies) instead of trusting a userId passed in from
// the browser — that's what stops one user from writing another user's
// progress.
export async function saveAttempt(
  questionId: string,
  submittedAnswer: string,
  isCorrect: boolean,
) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;

  if (!user) {
    return { saved: false as const };
  }

  const prisma = getPrisma();

  await prisma.userAttempt.create({
    data: {
      userId: user.id,
      questionId,
      submittedAnswer,
      isCorrect,
    },
  });

  const existing = await prisma.userQuestionProgress.findUnique({
    where: { userId_questionId: { userId: user.id, questionId } },
  });

  if (existing) {
    // Already has a progress row — bump the counters, but only set
    // firstCorrectAt the first time they ever get it right. isCorrect
    // stays true forever once true, so repeated correct answers don't
    // change the unique-correct count.
    await prisma.userQuestionProgress.update({
      where: { userId_questionId: { userId: user.id, questionId } },
      data: {
        lastAttemptAt: new Date(),
        attemptCount: { increment: 1 },
        correctAttemptCount: isCorrect ? { increment: 1 } : undefined,
        isCorrect: existing.isCorrect || isCorrect,
        firstCorrectAt: existing.firstCorrectAt ?? (isCorrect ? new Date() : null),
      },
    });
  } else {
    await prisma.userQuestionProgress.create({
      data: {
        userId: user.id,
        questionId,
        isCorrect,
        firstCorrectAt: isCorrect ? new Date() : null,
        lastAttemptAt: new Date(),
        attemptCount: 1,
        correctAttemptCount: isCorrect ? 1 : 0,
      },
    });
  }

  return { saved: true as const };
}
