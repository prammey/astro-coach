"use client";

// One free-response question in the browse list.
//
// A card shows metadata only — competition, year, topic, point value and
// the student's own progress. It never carries question text, so a locked
// card is safe to render: there is nothing on it to hide.

import Link from "next/link";
import type { FrqCard as FrqCardData } from "@/lib/pro/frq-service";
import Chip from "../ui/Chip";

// Locked cards get a faint diagonal hatch so "locked" reads as a state
// rather than as a broken or greyed-out card.
const LOCKED_CLASSES =
  "bg-white [background-image:repeating-linear-gradient(135deg,transparent_0_10px,rgba(11,15,46,0.06)_10px_12px)]";

const UNLOCKED_CLASSES =
  "bg-white transition-[translate,box-shadow] duration-200 ease-snappy " +
  "hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg";

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
      className={`h-full rounded-xl border-[3px] border-ink p-5 shadow-brutal ${
        locked ? LOCKED_CLASSES : UNLOCKED_CLASSES
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <Chip tone="pro">FRQ</Chip>
        <Chip tone="topic">
          {question.totalPoints} {question.totalPoints === 1 ? "point" : "points"}
        </Chip>
      </div>

      <h3 className="mt-3 font-extrabold text-navy">
        {question.competition} {question.year} — Q{question.questionNumber}
      </h3>
      <p className="text-sm text-navy/70">{question.examName}</p>

      {question.title && (
        <p className="mt-2 text-sm font-semibold text-navy">{question.title}</p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        <Chip tone="neutral">{question.primaryCurriculumTopic}</Chip>
        {question.partCount > 0 && <Chip tone="neutral">{question.partCount} parts</Chip>}
        {question.quickCheck && <Chip tone="neutral">Free instant check</Chip>}
        {question.difficulty && <Chip tone="neutral">{question.difficulty}</Chip>}
      </div>

      <div className="mt-4 border-t-2 border-navy/10 pt-3 text-sm">
        {locked ? (
          <p className="flex items-center gap-2 font-bold text-purple">
            <LockIcon />
            {signedIn ? "Unlock with Astro Coach Pro" : "Sign in to practise"}
          </p>
        ) : question.quickCheck && question.bestScore !== null ? (
          <p className="font-semibold text-navy">
            Best {question.bestScore} / {question.totalPoints}
            {question.solutionUnlocked && " · solution unlocked"}
          </p>
        ) : attempted ? (
          <p className="font-semibold text-navy">
            Best {question.bestScore ?? 0} / {question.totalPoints} · attempt{" "}
            {question.attemptsUsed} of {question.maxAttempts}
            {question.solutionUnlocked && " · solution unlocked"}
          </p>
        ) : (
          <p className="font-semibold text-electric">Not attempted yet</p>
        )}
      </div>
    </div>
  );

  // A locked card is not a link to the question — there is no page behind
  // it to open — so it leads to the place that unlocks it instead.
  if (locked) {
    return (
      <Link
        href={signedIn ? "/pricing" : "/login"}
        className="block rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-electric"
        aria-label={`${question.competition} ${question.year} question ${question.questionNumber} — locked. ${signedIn ? "Upgrade to Astro Coach Pro" : "Sign in"}`}
      >
        {card}
      </Link>
    );
  }

  return (
    <Link
      href={`/training/frq/${question.id}`}
      className="block rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-electric"
    >
      {card}
    </Link>
  );
}

// A small padlock, drawn inline so it matches the text color.
function LockIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
