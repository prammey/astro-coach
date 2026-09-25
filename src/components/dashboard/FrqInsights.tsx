"use client";

// Free-response insights for Pro students, in two columns: recent graded
// work on the left (scrollable), and the score trend plus most common
// mistakes on the right.

import Link from "next/link";
import { labelForMistakeTag } from "@/lib/ai/mistakes";
import type { ProAnalytics } from "@/lib/pro/analytics";

export default function FrqInsights({ analytics }: { analytics: ProAnalytics }) {
  const { recentAttempts, trend, commonMistakes } = analytics;

  if (recentAttempts.length === 0) {
    return (
      <section className="rounded-xl border-[3px] border-ink bg-cream p-5 text-navy shadow-brutal">
        <h2 className="text-2xl font-extrabold">Free response</h2>
        <p className="mt-1 text-sm text-navy/70">
          Your graded free-response attempts, score trend and common mistakes will appear here.{" "}
          <Link href="/training/frq" className="font-bold text-electric underline">
            Try a free-response question
          </Link>
          .
        </p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="mb-4 text-2xl font-extrabold text-white">Free response</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent work */}
        <div className="flex flex-col rounded-xl border-[3px] border-ink bg-cream p-5 text-navy shadow-brutal">
          <h3 className="font-extrabold">Recent graded work</h3>
          <p className="text-xs text-navy/60">Reopening feedback never uses a grading credit.</p>
          <ul className="mt-3 max-h-[340px] space-y-2 overflow-y-auto pr-1">
            {recentAttempts.map((attempt) => (
              <li key={attempt.submissionId}>
                <Link
                  href={`/training/frq/${attempt.frqQuestionId}`}
                  className="flex items-center justify-between gap-3 rounded-lg border-2 border-ink bg-white px-3 py-2 text-sm transition hover:bg-yellow/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                >
                  <span className="font-bold">
                    {attempt.competition} {attempt.year} · Q{attempt.questionNumber}
                    {attempt.attemptNumber && (
                      <span className="ml-1 font-normal text-navy/60">(attempt {attempt.attemptNumber})</span>
                    )}
                  </span>
                  <span className="whitespace-nowrap font-extrabold text-purple">
                    {attempt.awardedPoints ?? 0} / {attempt.maximumPoints}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          {/* Score trend */}
          <div className="rounded-xl border-[3px] border-ink bg-cream p-5 text-navy shadow-brutal">
            <h3 className="font-extrabold">Score over time</h3>
            {trend.length > 1 ? (
              <TrendChart points={trend} />
            ) : (
              <p className="mt-1 text-sm text-navy/70">Grade two attempts to see your trend.</p>
            )}
          </div>

          {/* Common mistakes */}
          <div className="rounded-xl border-[3px] border-ink bg-cream p-5 text-navy shadow-brutal">
            <h3 className="font-extrabold">Common mistakes</h3>
            {commonMistakes.length > 0 ? (
              <ul className="mt-2 flex flex-wrap gap-2">
                {commonMistakes.map((mistake) => (
                  <li
                    key={mistake.tag}
                    className="rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-bold"
                  >
                    {labelForMistakeTag(mistake.tag)} <span className="text-purple">×{mistake.count}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-1 text-sm text-navy/70">No repeated mistakes yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/// A small inline SVG line chart of recent free-response scores. Drawn by
/// hand rather than pulling in a charting library for one sparkline.
function TrendChart({ points }: { points: ProAnalytics["trend"] }) {
  const width = 600;
  const height = 150;
  const padding = 24;

  const coordinates = points.map((point, index) => {
    const x = padding + (index / Math.max(points.length - 1, 1)) * (width - padding * 2);
    const y = height - padding - (point.percentage / 100) * (height - padding * 2);
    return { x, y };
  });
  const latest = points[points.length - 1];

  return (
    <div className="mt-2">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-32 w-full"
        role="img"
        aria-label={`Free-response score over your last ${points.length} graded attempts. Most recent: ${latest.percentage} percent.`}
      >
        {[0, 50, 100].map((value) => {
          const y = height - padding - (value / 100) * (height - padding * 2);
          return (
            <g key={value}>
              <line x1={padding + 16} y1={y} x2={width - padding} y2={y} stroke="#0b0f2e22" strokeWidth={2} />
              <text x={0} y={y + 4} fontSize={13} fill="#0b0f2e88">
                {value}%
              </text>
            </g>
          );
        })}
        <polyline
          points={coordinates.map(({ x, y }) => `${x},${y}`).join(" ")}
          fill="none"
          stroke="var(--color-purple)"
          strokeWidth={3}
        />
        {coordinates.map(({ x, y }, index) => (
          <circle key={index} cx={x} cy={y} r={5} fill="var(--color-purple)" />
        ))}
      </svg>
      <p className="text-xs text-navy/60">Your last {points.length} graded attempts, oldest first.</p>
    </div>
  );
}
