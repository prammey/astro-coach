"use client";

// Shows one graded attempt: the score against the competition's own point
// value, the part-by-part breakdown, and the coaching feedback.
//
// This renders stored data. Looking back at an old attempt never calls the
// AI again and never costs a credit.

import { labelForMistakeTag } from "@/lib/ai/mistakes";

export type PartScore = {
  partId: string;
  label: string;
  awardedPoints: number;
  maxPoints: number;
  comment: string;
};

export type Feedback = {
  overall: string;
  strengths: string[];
  improvements: string[];
  nextStep: string;
  confidence: "high" | "medium" | "low";
  legibilityNote: string | null;
};

export default function GradeResult({
  attemptNumber,
  maxAttempts,
  awardedPoints,
  maximumPoints,
  partScores,
  feedback,
  mistakeTags,
  gradedAt,
}: {
  attemptNumber: number | null;
  maxAttempts: number;
  awardedPoints: number;
  maximumPoints: number;
  partScores: PartScore[];
  feedback: Feedback | null;
  mistakeTags: string[];
  gradedAt?: string | Date;
}) {
  const isFullMarks = maximumPoints > 0 && awardedPoints >= maximumPoints;

  return (
    <div className="rounded-xl border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#000]">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-lg font-extrabold text-[var(--color-navy)]">
          {attemptNumber ? `Attempt ${attemptNumber} of ${maxAttempts}` : "Attempt"}
        </h3>
        {gradedAt && (
          <p className="text-xs text-[var(--color-navy)]/60">
            {new Date(gradedAt).toLocaleDateString()}
          </p>
        )}
      </div>

      {/* The score is always out of the competition's own total, never /10. */}
      <p
        className={`mt-2 text-4xl font-extrabold ${
          isFullMarks ? "text-[var(--color-electric-blue)]" : "text-[var(--color-purple)]"
        }`}
      >
        {awardedPoints} <span className="text-2xl text-[var(--color-navy)]/60">/ {maximumPoints}</span>
      </p>

      {partScores.length > 1 && (
        <div className="mt-4">
          <h4 className="text-sm font-extrabold uppercase text-[var(--color-navy)]/70">
            Part by part
          </h4>
          <ul className="mt-2 space-y-2">
            {partScores.map((part) => (
              <li
                key={part.partId}
                className="rounded-lg border-2 border-black bg-[var(--color-cream)] p-3"
              >
                <p className="font-bold text-[var(--color-navy)]">
                  {part.label}: {part.awardedPoints} / {part.maxPoints}
                </p>
                {part.comment && (
                  <p className="mt-1 text-sm text-[var(--color-navy)]/80">{part.comment}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {feedback && (
        <div className="mt-5 space-y-4">
          <p className="text-[var(--color-navy)]">{feedback.overall}</p>

          {feedback.legibilityNote && (
            <p className="rounded-lg border-2 border-black bg-[var(--color-yellow)]/40 p-3 text-sm text-[var(--color-navy)]">
              <strong>On your uploaded work:</strong> {feedback.legibilityNote}
            </p>
          )}

          <FeedbackList title="What went well" items={feedback.strengths} />
          <FeedbackList title="What to improve" items={feedback.improvements} />

          {feedback.nextStep && (
            <div>
              <h4 className="text-sm font-extrabold uppercase text-[var(--color-navy)]/70">
                Try next
              </h4>
              <p className="mt-1 text-sm text-[var(--color-navy)]">{feedback.nextStep}</p>
            </div>
          )}
        </div>
      )}

      {mistakeTags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {mistakeTags.map((tag) => (
            <span
              key={tag}
              className="rounded border-2 border-black bg-[var(--color-cream)] px-2 py-0.5 text-xs font-semibold text-[var(--color-navy)]"
            >
              {labelForMistakeTag(tag)}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function FeedbackList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div>
      <h4 className="text-sm font-extrabold uppercase text-[var(--color-navy)]/70">{title}</h4>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[var(--color-navy)]">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
