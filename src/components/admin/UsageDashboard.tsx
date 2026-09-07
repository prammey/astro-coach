"use client";

// Internal figures: subscriptions, grading volume, what a grade costs, and
// how often the provider fails. Aggregate only.

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/pro/client";

type Usage = {
  windowDays: number;
  mockGrading: boolean;
  stripe: { configured: boolean; liveKey: boolean };
  subscriptions: { activePro: number; foundingPrice: number };
  grading: {
    total: number;
    proGrades: number;
    freeGrades: number;
    distinctUsers: number;
    averagePerUser: number;
    usersAtCap: number;
    percentAtCap: number;
    averagePagesPerGrade: number;
    averageLatencyMs: number;
  };
  cost: { estimatedTotalUsd: number; estimatedPerGradeUsd: number };
  provider: { calls: number; failures: number; errorRatePercent: number; extractionCalls: number };
  questionBank: Record<string, number>;
};

export default function UsageDashboard() {
  const [usage, setUsage] = useState<Usage | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    apiGet<Usage>("/api/admin/usage")
      .then((response) => active && setUsage(response))
      .catch(() => active && setError("Could not load usage."));

    return () => {
      active = false;
    };
  }, []);

  if (error) return <p className="mt-6 rounded-lg border-4 border-black bg-red-100 p-4">{error}</p>;
  if (!usage) return <p className="mt-6">Loading…</p>;

  return (
    <div className="mt-6 space-y-8">
      {/* Mock grading must never be mistaken for real grading. */}
      {usage.mockGrading && (
        <p className="rounded-lg border-4 border-black bg-[var(--color-yellow)] p-4 font-extrabold text-[var(--color-navy)]">
          Mock grading is active. Grades are simulated and cost nothing — set
          GEMINI_API_KEY to grade for real.
        </p>
      )}
      {usage.stripe.liveKey && (
        <p className="rounded-lg border-4 border-black bg-red-200 p-4 font-extrabold">
          A LIVE Stripe key is configured. Real cards can be charged.
        </p>
      )}
      {!usage.stripe.configured && (
        <p className="rounded-lg border-4 border-black bg-[var(--color-cream)] p-4 font-bold">
          Stripe is not configured — subscriptions are unavailable.
        </p>
      )}

      <Group title="Subscriptions">
        <Stat label="Active Pro" value={usage.subscriptions.activePro} />
        <Stat label="On the founding price" value={usage.subscriptions.foundingPrice} />
      </Group>

      <Group title={`Grading — last ${usage.windowDays} days`}>
        <Stat label="Grades run" value={usage.grading.total} />
        <Stat label="Pro grades" value={usage.grading.proGrades} />
        <Stat label="Free grades" value={usage.grading.freeGrades} />
        <Stat label="Students grading" value={usage.grading.distinctUsers} />
        <Stat label="Average per student" value={usage.grading.averagePerUser} />
        <Stat
          label="Hit the credit cap"
          value={`${usage.grading.usersAtCap} (${usage.grading.percentAtCap}%)`}
        />
        <Stat label="Average pages per grade" value={usage.grading.averagePagesPerGrade} />
        <Stat label="Average latency" value={`${(usage.grading.averageLatencyMs / 1000).toFixed(1)}s`} />
      </Group>

      <Group title="Estimated AI spend">
        <Stat label="Total" value={`$${usage.cost.estimatedTotalUsd.toFixed(2)}`} />
        <Stat label="Per grade" value={`$${usage.cost.estimatedPerGradeUsd.toFixed(4)}`} />
        <Stat label="Provider calls" value={usage.provider.calls} />
        <Stat label="Error rate" value={`${usage.provider.errorRatePercent}%`} />
        <Stat label="Import extractions" value={usage.provider.extractionCalls} />
      </Group>

      <Group title="Question bank">
        {Object.entries(usage.questionBank).map(([status, count]) => (
          <Stat key={status} label={status} value={count} />
        ))}
      </Group>

      <p className="text-xs text-[var(--color-navy)]/60">
        Costs are estimates from the rates table in src/lib/pro/config.ts, not
        a provider bill.
      </p>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-extrabold text-[var(--color-navy)]">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{children}</div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border-4 border-black bg-[var(--color-cream)] p-4">
      <p className="text-xs text-[var(--color-navy)]/70">{label}</p>
      <p className="mt-1 text-2xl font-extrabold text-[var(--color-navy)]">{value}</p>
    </div>
  );
}
