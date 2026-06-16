import Link from "next/link";
import BrutalCard from "./BrutalCard";
import { Question } from "@/types/question";

// Shortens long question text so the card preview stays a readable length.
function previewText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

// One question's summary card on the Training page.
export default function QuestionCard({ question }: { question: Question }) {
  return (
    <BrutalCard className="flex flex-col bg-[var(--color-cream)]">
      <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
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

      <h3 className="mt-3 text-lg font-extrabold text-[var(--color-navy)]">
        {question.competition} — {question.year} {question.round}
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
