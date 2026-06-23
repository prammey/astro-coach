import Link from "next/link";
import { notFound } from "next/navigation";
import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";
import McqPractice from "@/components/McqPractice";
import { findCatalogQuestionById, toPublicQuestion } from "@/data/mcq/catalog.server";

// Server Component: looks up the full question (with the correct answer)
// only on the server, strips the sensitive fields via toPublicQuestion,
// and passes only the safe version down to the client practice component.
export default async function QuestionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = findCatalogQuestionById(id);

  if (!question) {
    notFound();
  }

  const publicQuestion = toPublicQuestion(question);

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
          {publicQuestion.type}
        </span>
        <span className="rounded bg-[var(--color-purple)] px-2 py-1 text-white">
          {publicQuestion.difficulty}
        </span>
        <span className="rounded bg-[var(--color-yellow)] px-2 py-1 text-[var(--color-navy)]">
          {publicQuestion.topic}
        </span>
      </div>

      <h1 className="mt-3 text-2xl font-extrabold text-[var(--color-navy)] sm:text-3xl">
        {publicQuestion.competition} — {publicQuestion.year} {publicQuestion.examName}
      </h1>
      <p className="text-sm text-black/60">Question {publicQuestion.questionNumber}</p>

      {publicQuestion.questionMediaMissing && (
        <div className="mt-4 rounded-lg border-4 border-black bg-[var(--color-yellow)] p-3 text-sm font-bold text-[var(--color-navy)]">
          Question image coming soon. This question may be incomplete until its
          figure is added.
        </div>
      )}

      <BrutalCard className="mt-6 bg-[var(--color-cream)]">
        <p className="text-lg text-[var(--color-navy)]">{publicQuestion.questionText}</p>
      </BrutalCard>

      <McqPractice question={publicQuestion} />

      <BrutalCard className="mt-8 bg-white">
        <h2 className="font-bold text-[var(--color-purple)]">Source Metadata</h2>
        <dl className="mt-2 space-y-1 text-sm text-[var(--color-navy)]">
          <div>
            <dt className="inline font-bold">Source URL: </dt>
            <dd className="inline">{publicQuestion.sourceUrl}</dd>
          </div>
          <div>
            <dt className="inline font-bold">PDF URL: </dt>
            <dd className="inline">{publicQuestion.pdfUrl}</dd>
          </div>
          <div>
            <dt className="inline font-bold">Attribution: </dt>
            <dd className="inline">{publicQuestion.attributionText}</dd>
          </div>
          <div>
            <dt className="inline font-bold">Permission Status: </dt>
            <dd className="inline">{publicQuestion.permissionStatus}</dd>
          </div>
        </dl>
      </BrutalCard>
    </PageContainer>
  );
}
