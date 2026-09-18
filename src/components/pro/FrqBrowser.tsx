"use client";

// The free-response half of Training.
//
// This browses metadata only. Which questions a student can actually open
// is decided by the server and arrives on each card as `accessible`; the
// list itself is safe to show anyone.

import { useEffect, useMemo, useState } from "react";
import { apiGet } from "@/lib/pro/client";
import type { FrqCard as FrqCardData } from "@/lib/pro/frq-service";
import FrqCard from "./FrqCard";
import BrutalCard from "../BrutalCard";
import BrutalButton from "../ui/BrutalButton";
import LoadingStar from "../ui/LoadingStar";
import Reveal from "../ui/Reveal";

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
    return <LoadingStar label="Loading free-response questions…" />;
  }

  if (error) {
    return (
      <div
        role="alert"
        className="mt-6 rounded-lg border-[3px] border-danger bg-white p-4 font-semibold text-danger"
      >
        {error}
      </div>
    );
  }

  if (!data || data.questions.length === 0) {
    return (
      <BrutalCard tone="cream" className="mt-6">
        <h3 className="font-extrabold text-navy">Free-response questions are on the way</h3>
        <p className="mt-2 text-sm text-navy/80">
          Real olympiad free-response problems are being added, each checked
          against its official marking scheme before it is published.
        </p>
      </BrutalCard>
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
          <p className="ml-auto text-sm font-bold text-navy">
            {data.creditsRemaining} AI grade{data.creditsRemaining === 1 ? "" : "s"} left
          </p>
        )}
      </div>

      {data.signedIn && data.plan === "FREE" && data.creditsRemaining === 0 && (
        <BrutalCard tone="purple" className="mt-4">
          <p className="font-extrabold">You have used your 3 free AI grades</p>
          <p className="mt-1 text-sm text-white/90">
            Everything you have already worked on stays yours. Astro Coach Pro
            opens the rest of the free-response bank and 50 AI grades a month.
          </p>
          <BrutalButton href="/pricing" variant="accent" size="sm" className="mt-3">
            Unlock Astro Coach Pro
          </BrutalButton>
        </BrutalCard>
      )}

      <p className="mt-4 text-sm font-bold text-navy/70">
        {visible.length} question{visible.length === 1 ? "" : "s"}
      </p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((question, index) => (
          <Reveal key={question.id} delay={Math.min(index, 5) * 50} className="h-full">
            <FrqCard question={question} signedIn={data.signedIn} />
          </Reveal>
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
    <label className="block text-sm font-bold text-navy">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 block rounded-lg border-[3px] border-ink bg-white px-3 py-2 font-semibold text-navy shadow-brutal-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
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
