import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { sampleQuestions } from "@/data/sampleQuestions";

// Looks up a question's display name from its id, for the recent
// attempts list. Falls back to the raw id if the question can't be found
// (e.g. placeholder data changed since the attempt was made).
function questionLabel(questionId: string) {
  const question = sampleQuestions.find((q) => q.id === questionId);
  if (!question) return questionId;
  return `${question.competition} — Question ${question.questionNumber}`;
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;

  if (!user) {
    return (
      <PageContainer>
        <h1 className="text-3xl font-extrabold text-[var(--color-navy)]">Dashboard</h1>
        <BrutalCard className="mt-6 bg-[var(--color-cream)]">
          <p className="text-[var(--color-navy)]">Sign in to track your progress.</p>
        </BrutalCard>
      </PageContainer>
    );
  }

  const totalQuestions = sampleQuestions.length;

  const [uniqueCorrectCount, totalAttempts, recentAttempts] = await Promise.all([
    prisma.userQuestionProgress.count({
      where: { userId: user.id, isCorrect: true },
    }),
    prisma.userAttempt.count({ where: { userId: user.id } }),
    prisma.userAttempt.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
  ]);

  const progressPercent =
    totalQuestions === 0 ? 0 : Math.round((uniqueCorrectCount / totalQuestions) * 100);

  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)]">Dashboard</h1>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <BrutalCard className="bg-[var(--color-cream)]">
          <h2 className="font-bold text-[var(--color-purple)]">Unique Questions Correct</h2>
          <p className="mt-2 text-3xl font-extrabold text-[var(--color-navy)]">
            {uniqueCorrectCount} / {totalQuestions}
          </p>
          <p className="mt-1 text-sm text-[var(--color-navy)]/70">{progressPercent}% complete</p>
        </BrutalCard>

        <BrutalCard className="bg-[var(--color-cream)]">
          <h2 className="font-bold text-[var(--color-purple)]">Total Attempts</h2>
          <p className="mt-2 text-3xl font-extrabold text-[var(--color-navy)]">{totalAttempts}</p>
          <p className="mt-1 text-sm text-[var(--color-navy)]/70">
            Includes repeated attempts on the same question
          </p>
        </BrutalCard>
      </div>

      <h2 className="mt-10 text-xl font-extrabold text-[var(--color-navy)]">Recent Attempts</h2>
      {recentAttempts.length === 0 ? (
        <p className="mt-4 text-[var(--color-navy)]/70">No attempts yet — go answer a question!</p>
      ) : (
        <div className="mt-4 space-y-3">
          {recentAttempts.map((attempt) => (
            <BrutalCard key={attempt.id} className="bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-bold text-[var(--color-navy)]">
                  {questionLabel(attempt.questionId)}
                </p>
                <span
                  className={`rounded px-2 py-1 text-xs font-bold ${
                    attempt.isCorrect ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900"
                  }`}
                >
                  {attempt.isCorrect ? "Correct" : "Incorrect"}
                </span>
              </div>
              <p className="mt-1 text-xs text-black/50">
                Submitted &quot;{attempt.submittedAnswer}&quot; on{" "}
                {attempt.createdAt.toLocaleString()}
              </p>
            </BrutalCard>
          ))}
        </div>
      )}
    </PageContainer>
  );
}
