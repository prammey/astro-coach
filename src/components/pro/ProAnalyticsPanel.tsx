"use client";

// The Pro analytics section of the dashboard, and the locked preview a Free
// account sees in its place.
//
// The lock is real: for a Free account the server sends no figures at all,
// so the preview describes what Pro shows rather than blurring anything.

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet } from "@/lib/pro/client";
import { labelForMistakeTag } from "@/lib/ai/mistakes";
import type { ProAnalytics } from "@/lib/pro/analytics";

type AnalyticsResponse =
  | { locked: true; plan: "FREE" | "PRO" }
  | { locked: false; analytics: ProAnalytics };

export default function ProAnalyticsPanel() {
  const [data, setData] = useState<AnalyticsResponse | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    apiGet<AnalyticsResponse>("/api/dashboard/pro-analytics")
      .then((response) => active && setData(response))
      .catch(() => active && setFailed(true));

    return () => {
      active = false;
    };
  }, []);

  if (failed) return null;
  if (!data) {
    return <p className="text-white/70">Loading your analytics…</p>;
  }
  if (data.locked) return <LockedPreview />;

  const { analytics } = data;

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-2xl font-extrabold text-white">Free-response overview</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Questions attempted" value={String(analytics.frqOverview.questionsAttempted)} />
          <Stat label="Grading attempts" value={String(analytics.frqOverview.gradingAttempts)} />
          <Stat
            label="Average score"
            value={
              analytics.frqOverview.averagePercentage === null
                ? "—"
                : `${analytics.frqOverview.averagePercentage}%`
            }
            sub={`${analytics.frqOverview.pointsEarned} / ${analytics.frqOverview.pointsPossible} points`}
          />
          <Stat
            label="AI grades left"
            value={`${analytics.entitlements.creditsRemaining} / ${analytics.entitlements.creditsTotal}`}
            sub={
              analytics.entitlements.creditsResetAt
                ? `Resets ${new Date(analytics.entitlements.creditsResetAt).toLocaleDateString()}`
                : undefined
            }
          />
        </div>

        {analytics.entitlements.hitPeriodCap && (
          <p className="mt-4 rounded-lg border-4 border-black bg-[var(--color-yellow)] p-4 font-bold text-[var(--color-navy)]">
            You have used all {analytics.entitlements.creditsTotal} AI grades for this
            billing period.
            {analytics.entitlements.creditsResetAt &&
              ` Your credits reset on ${new Date(analytics.entitlements.creditsResetAt).toLocaleDateString()}.`}
          </p>
        )}
      </section>

      <section>
        <h2 className="mb-1 text-2xl font-extrabold text-white">Performance by topic</h2>
        <p className="mb-4 text-sm text-white/70">
          Multiple choice and free-response are shown separately — they measure
          different things, so combining them into one number would hide more
          than it showed.
        </p>

        <div className="space-y-3">
          {analytics.topics.map((topic) => (
            <div
              key={topic.topic}
              className="rounded-lg border-4 border-black bg-[var(--color-cream)] p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-extrabold text-[var(--color-navy)]">{topic.topic}</h3>
                {!topic.hasEnoughData && (
                  <span className="text-xs font-semibold text-[var(--color-navy)]/60">
                    Not enough data yet
                  </span>
                )}
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Meter
                  label="Multiple choice"
                  percentage={topic.mcqAccuracy}
                  detail={`${topic.mcqAttempted} attempt${topic.mcqAttempted === 1 ? "" : "s"}`}
                  colour="var(--color-electric-blue)"
                />
                <Meter
                  label="Free response"
                  percentage={topic.frqPercentage}
                  detail={
                    topic.frqAttempted > 0
                      ? `${topic.frqPointsEarned} / ${topic.frqPointsPossible} points`
                      : "No attempts yet"
                  }
                  colour="var(--color-purple)"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {(analytics.strongestTopic || analytics.topicToPractiseNext) && (
        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border-4 border-black bg-[var(--color-electric-blue)] p-5 text-white">
            <p className="text-sm font-bold uppercase">Strongest topic</p>
            <p className="mt-1 text-xl font-extrabold">{analytics.strongestTopic}</p>
          </div>
          <div className="rounded-lg border-4 border-black bg-[var(--color-purple)] p-5 text-white">
            <p className="text-sm font-bold uppercase">Practise next</p>
            <p className="mt-1 text-xl font-extrabold">{analytics.topicToPractiseNext}</p>
          </div>
        </section>
      )}

      {analytics.trend.length > 1 && (
        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-white">Progress over time</h2>
          <TrendChart points={analytics.trend} />
        </section>
      )}

      {analytics.commonMistakes.length > 0 && (
        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-white">Common mistakes</h2>
          <ul className="space-y-2">
            {analytics.commonMistakes.map((mistake) => (
              <li
                key={mistake.tag}
                className="flex items-center justify-between rounded-lg border-4 border-black bg-[var(--color-cream)] px-4 py-2"
              >
                <span className="font-bold text-[var(--color-navy)]">
                  {labelForMistakeTag(mistake.tag)}
                </span>
                <span className="font-extrabold text-[var(--color-purple)]">{mistake.count}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {analytics.recentAttempts.length > 0 && (
        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-white">Recent free-response work</h2>
          <div className="space-y-2">
            {analytics.recentAttempts.map((attempt) => (
              <Link
                key={attempt.submissionId}
                href={`/training/frq/${attempt.frqQuestionId}`}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border-4 border-black bg-[var(--color-cream)] px-4 py-3 transition hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-yellow)]"
              >
                <span className="font-bold text-[var(--color-navy)]">
                  {attempt.competition} {attempt.year} — Q{attempt.questionNumber}
                  {attempt.attemptNumber && (
                    <span className="ml-2 font-normal text-[var(--color-navy)]/60">
                      attempt {attempt.attemptNumber}
                    </span>
                  )}
                </span>
                <span className="text-sm font-extrabold text-[var(--color-purple)]">
                  {attempt.awardedPoints ?? 0} / {attempt.maximumPoints}
                  {attempt.solutionUnlocked && (
                    <span className="ml-2 font-normal text-[var(--color-navy)]/60">
                      solution unlocked
                    </span>
                  )}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-2 text-xs text-white/60">
            Opening past feedback costs no grading credits — it is read straight
            from your saved attempts.
          </p>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border-4 border-black bg-[var(--color-cream)] p-5 shadow-[6px_6px_0_0_#000]">
      <p className="text-sm text-[var(--color-navy)]">{label}</p>
      <p className="mt-1 text-3xl font-extrabold text-[var(--color-purple)]">{value}</p>
      {sub && <p className="mt-1 text-xs text-[var(--color-navy)]/60">{sub}</p>}
    </div>
  );
}

/// A bar, or an honest blank when there is not enough evidence to draw one.
function Meter({
  label,
  percentage,
  detail,
  colour,
}: {
  label: string;
  percentage: number | null;
  detail: string;
  colour: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-bold text-[var(--color-navy)]">{label}</span>
        <span className="font-extrabold text-[var(--color-navy)]">
          {percentage === null ? "—" : `${percentage}%`}
        </span>
      </div>

      <div
        className="mt-1 h-3 w-full overflow-hidden rounded border-2 border-black bg-white"
        role="img"
        aria-label={
          percentage === null
            ? `${label}: not enough data yet`
            : `${label}: ${percentage} percent`
        }
      >
        {percentage !== null && (
          <div style={{ width: `${percentage}%`, background: colour }} className="h-full" />
        )}
      </div>

      <p className="mt-1 text-xs text-[var(--color-navy)]/60">{detail}</p>
    </div>
  );
}

/// A small inline SVG line chart. Deliberately hand-drawn rather than
/// pulling in a charting library for one sparkline.
function TrendChart({ points }: { points: ProAnalytics["trend"] }) {
  const width = 600;
  const height = 160;
  const padding = 24;

  const coordinates = points.map((point, index) => {
    const x =
      padding + (index / Math.max(points.length - 1, 1)) * (width - padding * 2);
    const y = height - padding - (point.percentage / 100) * (height - padding * 2);
    return `${x},${y}`;
  });

  const latest = points[points.length - 1];

  return (
    <div className="overflow-x-auto rounded-lg border-4 border-black bg-[var(--color-cream)] p-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-40 w-full min-w-[500px]"
        role="img"
        aria-label={`Free-response score over your last ${points.length} graded attempts. Most recent: ${latest.percentage} percent.`}
      >
        {[0, 50, 100].map((value) => {
          const y = height - padding - (value / 100) * (height - padding * 2);
          return (
            <g key={value}>
              <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="#0b0f2e22" strokeWidth={2} />
              <text x={4} y={y + 4} fontSize={11} fill="#0b0f2e88">
                {value}%
              </text>
            </g>
          );
        })}

        <polyline
          points={coordinates.join(" ")}
          fill="none"
          stroke="var(--color-purple)"
          strokeWidth={3}
        />
        {coordinates.map((coordinate, index) => {
          const [x, y] = coordinate.split(",");
          return <circle key={index} cx={x} cy={y} r={4} fill="var(--color-purple)" />;
        })}
      </svg>

      <p className="mt-2 text-xs text-[var(--color-navy)]/70">
        Your last {points.length} graded free-response attempts, oldest first.
      </p>
    </div>
  );
}

function LockedPreview() {
  return (
    <section className="rounded-xl border-4 border-black bg-[var(--color-purple)] p-6 text-white shadow-[6px_6px_0_0_#000]">
      <div className="flex items-start gap-3">
        <span aria-hidden className="text-2xl">🔒</span>
        <div>
          <h2 className="text-2xl font-extrabold">Detailed topic analytics</h2>
          <p className="mt-2 max-w-2xl text-white/90">
            Track your accuracy by topic, identify weaknesses, and monitor
            improvement over time.
          </p>
        </div>
      </div>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {[
          "Multiple-choice accuracy for every curriculum topic",
          "Free-response scores against the original marking schemes",
          "Your strongest topic and the one to practise next",
          "Score trends across your graded attempts",
          "Your most common mistakes, grouped",
          "Every past attempt and its feedback, kept",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-white/90">
            <span aria-hidden className="text-[var(--color-yellow)]">★</span>
            {item}
          </li>
        ))}
      </ul>

      <Link
        href="/pricing"
        className="mt-6 inline-block rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-3 font-extrabold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
      >
        Unlock Astro Coach Pro
      </Link>
    </section>
  );
}
