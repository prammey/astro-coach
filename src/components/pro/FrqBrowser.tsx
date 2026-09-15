"use client";

// The free-response half of Training.
//
// This browses metadata only. Which questions a student can actually open
// is decided by the server and arrives on each card as `accessible`; the
// list itself is safe to show anyone.

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { apiGet } from "@/lib/pro/client";
import type { FrqCard as FrqCardData } from "@/lib/pro/frq-service";
import FrqCard from "./FrqCard";

type FrqListResponse = {
  questions: FrqCardData[];
  signedIn: boolean;
  plan: "FREE" | "PRO" | null;
  creditsRemaining: number | null;
};

const ALL = "All";

export default function FrqBrowser() {
  const [data, setData] = useState<FrqListResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(ALL);
  const [competition, setCompetition] = useState(ALL);

  useEffect(() => {
    let active = true;

    apiGet<FrqListResponse>("/api/frq")
      .then((response) => active && setData(response))
      .catch(() => active && setError("Could not load free-response questions."))
      .finally(() => active && setLoading(false));

    return () => {
      active = false;
    };
  }, []);

  // Filter options come from the questions themselves, so the curriculum
  // taxonomy stays owned in one place rather than duplicated here.
  const topics = useMemo(
    () => [ALL, ...unique(data?.questions.map((q) => q.primaryCurriculumTopic) ?? [])],
    [data],
  );
  const competitions = useMemo(
    () => [ALL, ...unique(data?.questions.map((q) => q.competition) ?? [])],
    [data],
  );

  const visible = useMemo(
    () =>
      (data?.questions ?? []).filter(
        (question) =>
          (topic === ALL || question.primaryCurriculumTopic === topic) &&
          (competition === ALL || question.competition === competition),
      ),
    [data, topic, competition],
  );

  if (loading) {
    return <p className="mt-6 text-[var(--color-navy)]">Loading free-response questions…</p>;
  }

  if (error) {
    return (
      <div className="mt-6 rounded-lg border-4 border-black bg-red-100 p-4 text-[var(--color-navy)]">
        {error}
      </div>
    );
  }

  if (!data || data.questions.length === 0) {
    return (
      <div className="mt-6 rounded-lg border-4 border-black bg-[var(--color-cream)] p-6">
        <h3 className="font-extrabold text-[var(--color-navy)]">
          Free-response questions are on the way
        </h3>
        <p className="mt-2 text-sm text-[var(--color-navy)]/80">
          Real olympiad free-response problems are being added, each checked
          against its official marking scheme before it is published.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-end gap-4">
        <Filter label="Topic" value={topic} options={topics} onChange={setTopic} />
        <Filter
          label="Competition"
          value={competition}
          options={competitions}
          onChange={setCompetition}
        />

        {data.signedIn && data.creditsRemaining !== null && (
          <p className="ml-auto text-sm font-bold text-[var(--color-navy)]">
            {data.creditsRemaining} AI grade{data.creditsRemaining === 1 ? "" : "s"} left
          </p>
        )}
      </div>

      {data.signedIn && data.plan === "FREE" && data.creditsRemaining === 0 && (
        <div className="mt-4 rounded-lg border-4 border-black bg-[var(--color-purple)] p-4 text-white">
          <p className="font-extrabold">You have used your 3 free AI grades</p>
          <p className="mt-1 text-sm text-white/90">
            Everything you have already worked on stays yours. Astro Coach Pro
            opens the rest of the free-response bank and 50 AI grades a month.
          </p>
          <Link
            href="/pricing"
            className="mt-3 inline-block rounded-lg border-4 border-black bg-[var(--color-yellow)] px-4 py-2 font-extrabold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Unlock Astro Coach Pro
          </Link>
        </div>
      )}

      <p className="mt-4 text-sm text-[var(--color-navy)]/70">
        {visible.length} question{visible.length === 1 ? "" : "s"}
      </p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((question) => (
          <FrqCard key={question.id} question={question} signedIn={data.signedIn} />
        ))}
      </div>
    </div>
  );
}

function Filter({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm font-bold text-[var(--color-navy)]">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 block rounded-lg border-4 border-black bg-white px-3 py-2 font-semibold text-[var(--color-navy)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values)).sort();
}
