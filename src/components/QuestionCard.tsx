import Link from "next/link";
import BrutalCard from "./BrutalCard";
import { PublicQuestion } from "@/data/mcq/types";

// Shortens long question text so the card preview stays a readable length.
function previewText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

// One question's summary card on the Training page.
export default function QuestionCard({
  question,
  isAnswered = false,
}: {
  question: PublicQuestion;
  isAnswered?: boolean;
}) {
  // Show primary topic and up to 1 additional topic, with a +N indicator for more
  const displayTopics = question.curriculumTopics.slice(0, 2);
  const moreTopicsCount = Math.max(0, question.curriculumTopics.length - 2);

  return (
    <BrutalCard className="relative flex flex-col bg-[var(--color-cream)]">
      {isAnswered && (
        <div className="absolute top-3 right-3">
          <img
            src="/icons/eye.png"
            alt="Question answered"
            className="w-5 h-5 object-contain"
          />
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
        <span className="rounded bg-[var(--color-electric-blue)] px-2 py-1 text-white">
          {question.type}
        </span>
        <span className="rounded bg-[var(--color-purple)] px-2 py-1 text-white">
          {question.difficulty}
        </span>
        {displayTopics.map((topic) => (
          <span
            key={topic}
            className="rounded bg-[var(--color-yellow)] px-2 py-1 text-[var(--color-navy)]"
          >
            {topic}
          </span>
        ))}
        {moreTopicsCount > 0 && (
          <span className="rounded bg-[var(--color-yellow)] px-2 py-1 text-[var(--color-navy)] font-bold">
            +{moreTopicsCount}
          </span>
        )}
      </div>

      <h3 className="mt-3 text-lg font-extrabold text-[var(--color-navy)]">
        {question.competition} — {question.year} {question.examName}
      </h3>
      <p className="text-sm text-black/60">Question {question.questionNumber}</p>

      <p className="mt-3 text-sm text-[var(--color-navy)]">
        {previewText(question.questionText, 120)}
      </p>

      <Link
        href={`/training/${question.id}`}
        className="mt-4 inline-block rounded-lg border-4 border-black bg-[var(--color-navy)] px-4 py-2 text-center font-bold text-white shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
      >
        Open Question
      </Link>
    </BrutalCard>
  );
}
