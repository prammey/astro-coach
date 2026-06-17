import Link from "next/link";
import { notFound } from "next/navigation";
import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";
import McqPractice from "@/components/McqPractice";
import FrqPractice from "@/components/FrqPractice";
import { sampleQuestions } from "@/data/sampleQuestions";

// This is a Server Component (no "use client") because it only reads
// data and renders text — it doesn't need any interactivity itself.
// The interactive parts are delegated to McqPractice / FrqPractice.
// Auth state is checked in the client components using useAuth hook.
export default async function QuestionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = sampleQuestions.find((q) => q.id === id);

  if (!question) {
    notFound();
  }

  return (
    <PageContainer>
      <Link
        href="/training"
        className="inline-block font-bold text-[var(--color-purple)] hover:underline"
      >
        ← Back to Training
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold">
        <span className="rounded bg-[var(--color-electric-blue)] px-2 py-1 text-white">
          {question.type}
        </span>
        <span className="rounded bg-[var(--color-purple)] px-2 py-1 text-white">
          {question.difficulty}
        </span>
        <span className="rounded bg-[var(--color-yellow)] px-2 py-1 text-[var(--color-navy)]">
          {question.topic}
        </span>
      </div>

      <h1 className="mt-3 text-2xl font-extrabold text-[var(--color-navy)] sm:text-3xl">
        {question.competition} — {question.year} {question.round}
      </h1>
      <p className="text-sm text-black/60">Question {question.questionNumber}</p>

      <BrutalCard className="mt-6 bg-[var(--color-cream)]">
        <p className="text-lg text-[var(--color-navy)]">{question.questionText}</p>
      </BrutalCard>

      {question.type === "MCQ" ? (
        <McqPractice question={question} isLoggedIn={true} />
      ) : (
        <FrqPractice question={question} />
      )}

      <BrutalCard className="mt-8 bg-white">
        <h2 className="font-bold text-[var(--color-purple)]">Source Metadata</h2>
        <dl className="mt-2 space-y-1 text-sm text-[var(--color-navy)]">
          <div>
            <dt className="inline font-bold">Source URL: </dt>
            <dd className="inline">{question.sourceUrl}</dd>
          </div>
          <div>
            <dt className="inline font-bold">PDF URL: </dt>
            <dd className="inline">{question.pdfUrl}</dd>
          </div>
          <div>
            <dt className="inline font-bold">Attribution: </dt>
            <dd className="inline">{question.attributionText}</dd>
          </div>
          <div>
            <dt className="inline font-bold">Permission Status: </dt>
            <dd className="inline">{question.permissionStatus}</dd>
          </div>
        </dl>
      </BrutalCard>
    </PageContainer>
  );
}
