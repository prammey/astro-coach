"use client";

// One free-response question in the browse list.
//
// A card shows metadata only — competition, year, topic, point value and
// the student's own progress. It never carries question text, so a locked
// card is safe to render: there is nothing on it to hide.

import Link from "next/link";
import type { FrqCard as FrqCardData } from "@/lib/pro/frq-service";

export default function FrqCard({
  question,
  signedIn,
}: {
  question: Omit<FrqCardData, "id"> & { id: string };
  signedIn: boolean;
}) {
  const locked = !question.accessible;
  const attempted = question.attemptsUsed > 0;

  const card = (
    <div
      className={`h-full rounded-xl border-4 border-black p-5 shadow-[6px_6px_0_0_#000] transition ${
        locked
          ? "bg-gray-100"
          : "bg-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_#000]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="rounded border-2 border-black bg-[var(--color-purple)] px-2 py-0.5 text-xs font-extrabold uppercase text-white">
          FRQ
        </span>
        <span className="rounded border-2 border-black bg-[var(--color-yellow)] px-2 py-0.5 text-xs font-extrabold text-[var(--color-navy)]">
          {question.totalPoints} {question.totalPoints === 1 ? "point" : "points"}
        </span>
      </div>

      <h3 className="mt-3 font-extrabold text-[var(--color-navy)]">
        {question.competition} {question.year} — Q{question.questionNumber}
      </h3>
      <p className="text-sm text-[var(--color-navy)]/70">{question.examName}</p>

      {question.title && (
        <p className="mt-2 text-sm font-semibold text-[var(--color-navy)]">{question.title}</p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded border-2 border-black bg-[var(--color-cream)] px-2 py-0.5 text-xs font-semibold text-[var(--color-navy)]">
          {question.primaryCurriculumTopic}
        </span>
        {question.partCount > 0 && (
          <span className="rounded border-2 border-black bg-[var(--color-cream)] px-2 py-0.5 text-xs font-semibold text-[var(--color-navy)]">
            {question.partCount} parts
          </span>
        )}
        {question.difficulty && (
          <span className="rounded border-2 border-black bg-[var(--color-cream)] px-2 py-0.5 text-xs font-semibold text-[var(--color-navy)]">
            {question.difficulty}
          </span>
        )}
      </div>

      <div className="mt-4 border-t-2 border-black/10 pt-3 text-sm">
        {locked ? (
          <p className="font-bold text-[var(--color-purple)]">
            {signedIn ? "🔒 Unlock with Astro Coach Pro" : "🔒 Sign in to practise"}
          </p>
        ) : attempted ? (
          <p className="font-semibold text-[var(--color-navy)]">
            Best {question.bestScore ?? 0} / {question.totalPoints} · attempt{" "}
            {question.attemptsUsed} of {question.maxAttempts}
            {question.solutionUnlocked && " · solution unlocked"}
          </p>
        ) : (
          <p className="font-semibold text-[var(--color-electric-blue)]">Not attempted yet</p>
        )}
      </div>
    </div>
  );

  // A locked card is not a link — there is no page behind it to open.
  if (locked) {
    return (
      <Link
        href={signedIn ? "/pricing" : "/login"}
        className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)]"
        aria-label={`${question.competition} ${question.year} question ${question.questionNumber} — locked. ${signedIn ? "Upgrade to Astro Coach Pro" : "Sign in"}`}
      >
        {card}
      </Link>
    );
  }

  return (
    <Link
      href={`/training/frq/${question.id}`}
      className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)]"
    >
      {card}
    </Link>
  );
}
