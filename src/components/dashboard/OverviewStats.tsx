"use client";

// The dashboard's at-a-glance numbers in one compact card: multiple-choice
// progress on the left, free-response progress on the right.
//
// Free-response scores come from the Pro analytics, so a Free account sees
// its remaining AI grades and a pointer to Pro instead.

import Link from "next/link";
import type { ProAnalytics } from "@/lib/pro/analytics";

export type McqStats = {
  totalAttempted: number;
  uniqueCorrect: number;
  totalQuestions: number;
  accuracy: number;
};

export type Credits = {
  remaining: number;
  total: number;
  resetsAt: string | null;
  hitPeriodCap: boolean;
};

export default function OverviewStats({
  mcq,
  frq,
  credits,
  isPro,
}: {
  mcq: McqStats;
  /// Pro only; null for a Free account.
  frq: ProAnalytics["frqOverview"] | null;
  credits: Credits | null;
  isPro: boolean | null;
}) {
  const outOfCredits = credits !== null && credits.remaining === 0;

  return (
    <section className="rounded-xl border-[3px] border-ink bg-cream p-5 text-navy shadow-brutal">
      <div className="grid gap-5 md:grid-cols-2 md:divide-x-2 md:divide-ink/15">
        {/* Multiple choice */}
        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-wide text-navy/60">Multiple choice</h2>
          <div className="mt-2 grid grid-cols-3 gap-3">
            <Stat label="Attempted" value={String(mcq.totalAttempted)} colour="text-electric" />
            <Stat
              label="Unique correct"
              value={String(mcq.uniqueCorrect)}
              sub={`of ${mcq.totalQuestions}`}
              colour="text-navy"
            />
            <Stat label="Accuracy" value={`${mcq.accuracy}%`} colour="text-purple" />
          </div>
        </div>

        {/* Free response */}
        <div className="md:pl-5">
          <h2 className="text-xs font-extrabold uppercase tracking-wide text-navy/60">Free response</h2>
          <div className="mt-2 grid grid-cols-3 gap-3">
            {frq ? (
              <>
                <Stat label="Attempted" value={String(frq.questionsAttempted)} colour="text-electric" />
                <Stat
                  label="Average score"
                  value={frq.averagePercentage === null ? "—" : `${frq.averagePercentage}%`}
                  colour="text-navy"
                />
              </>
            ) : (
              <p className="col-span-2 self-center text-xs text-navy/70">
                <Link href="/pricing" className="font-bold text-electric underline">
                  Astro Coach Pro
                </Link>{" "}
                shows your free-response scores and trends.
              </p>
            )}
            <Stat
              label="AI grades left"
              value={credits ? `${credits.remaining}` : "—"}
              sub={credits ? `of ${credits.total}` : undefined}
              colour={outOfCredits ? "text-danger" : "text-purple"}
            />
          </div>
        </div>
      </div>

      {/* Out of AI grades: say so in red, and what to do next. */}
      {outOfCredits && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border-2 border-danger bg-danger/10 px-4 py-3">
          <p className="text-sm font-bold text-danger">
            You&apos;re out of AI grades.
            {isPro && credits?.resetsAt && (
              <span className="font-semibold text-navy/80">
                {" "}Your 50 reset on {new Date(credits.resetsAt).toLocaleDateString()}.
              </span>
            )}
            {!isPro && <span className="font-semibold text-navy/80"> Pro gives you 50 every month.</span>}
          </p>
          {isPro ? (
            <a
              href="#buy-credits"
              className="rounded-lg border-2 border-ink bg-yellow px-4 py-1.5 text-sm font-extrabold shadow-brutal-sm"
            >
              Buy credits
            </a>
          ) : (
            <Link
              href="/pricing"
              className="rounded-lg border-2 border-ink bg-yellow px-4 py-1.5 text-sm font-extrabold shadow-brutal-sm"
            >
              Upgrade to Pro
            </Link>
          )}
        </div>
      )}
    </section>
  );
}

function Stat({ label, value, sub, colour }: { label: string; value: string; sub?: string; colour: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-navy/70">{label}</p>
      <p className={`text-2xl font-extrabold leading-tight sm:text-3xl ${colour}`}>
        {value}
        {sub && <span className="ml-1 text-sm font-bold text-navy/50">{sub}</span>}
      </p>
    </div>
  );
}
