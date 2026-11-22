"use client";

// The free-response half of Training.
//
// This browses metadata only. Which questions a student can actually open
// is decided by the server and arrives on each card as `accessible`; the
// list itself is safe to show anyone.

import { useEffect, useMemo, useState } from "react";
import { apiGet } from "@/lib/pro/client";
import { PUBLIC_PRO_CONFIG } from "@/lib/pro/public-config";
import type { FrqCard as FrqCardData } from "@/lib/pro/frq-service";
import FrqCard from "./FrqCard";
import BrutalCard from "../BrutalCard";
import BrutalButton from "../ui/BrutalButton";
import ShowMore from "../ui/ShowMore";
import LoadingStar from "../ui/LoadingStar";
import Reveal from "../ui/Reveal";

type FrqListResponse = {
  questions: FrqCardData[];
  signedIn: boolean;
  plan: "FREE" | "PRO" | null;
  creditsRemaining: number | null;
};

const ALL = "All";

// How a question is answered: checked instantly for free, or AI-graded.
const QUICK_CHECK = "Free instant check";
const AI_GRADED = "AI graded";
const DIFFICULTY_ORDER = ["Beginner", "Intermediate", "Advanced"];

/// How many cards to show at first, and how many more each "Show more"
/// click adds (the same as the multiple-choice bank).
const PAGE_SIZE = 24;

export default function FrqBrowser() {
  const [data, setData] = useState<FrqListResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(ALL);
  const [competition, setCompetition] = useState(ALL);
  const [year, setYear] = useState(ALL);
  const [difficulty, setDifficulty] = useState(ALL);
  const [answerType, setAnswerType] = useState(ALL);
  // How many of the matching questions are currently shown.
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Wraps a filter's setter so changing it also starts the list from the top.
  function resetsPaging(setter: (value: string) => void) {
    return (value: string) => {
      setter(value);
      setVisibleCount(PAGE_SIZE);
    };
  }

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

  // Newest year first, like the question list itself.
  const years = useMemo(
    () => [ALL, ...unique(data?.questions.map((q) => String(q.year)) ?? []).reverse()],
    [data],
  );
  const difficulties = useMemo(() => {
    const present = new Set(data?.questions.map((q) => q.difficulty ?? "") ?? []);
    return [ALL, ...DIFFICULTY_ORDER.filter((level) => present.has(level))];
  }, [data]);

  const visible = useMemo(
    () =>
      (data?.questions ?? []).filter(
        (question) =>
          (topic === ALL || question.primaryCurriculumTopic === topic) &&
          (competition === ALL || question.competition === competition) &&
          (year === ALL || String(question.year) === year) &&
          (difficulty === ALL || question.difficulty === difficulty) &&
          (answerType === ALL || (answerType === QUICK_CHECK) === question.quickCheck),
      ),
    [data, topic, competition, year, difficulty, answerType],
  );

  if (loading) {
    return <LoadingStar label="Loading free-response questions…" />;
  }

  if (error) {
    return (
      <div
        role="alert"
        className="mt-6 border-[3px] border-danger bg-white p-4 font-semibold text-danger"
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
      {/* Filters, framed like the Training page's search tool: a tidy
          two-column grid on phones, one row on wider screens. */}
      <div className="grid grid-cols-2 gap-3 border-[3px] border-ink bg-white p-4 shadow-brutal sm:flex sm:flex-wrap sm:items-end sm:gap-4 sm:p-5">
        <Filter
          label="Topic"
          value={topic}
          options={topics}
          onChange={resetsPaging(setTopic)}
          className="col-span-2"
        />
        <Filter
          label="Competition"
          value={competition}
          options={competitions}
          onChange={resetsPaging(setCompetition)}
        />
        <Filter label="Year" value={year} options={years} onChange={resetsPaging(setYear)} />
        <Filter
          label="Difficulty"
          value={difficulty}
          options={difficulties}
          onChange={resetsPaging(setDifficulty)}
        />
        <Filter
          label="Answer type"
          value={answerType}
          options={[ALL, QUICK_CHECK, AI_GRADED]}
          onChange={resetsPaging(setAnswerType)}
        />

        {data.signedIn && data.creditsRemaining !== null && (
          <p className="col-span-2 text-sm font-bold text-navy sm:ml-auto">
            {data.creditsRemaining} AI grade{data.creditsRemaining === 1 ? "" : "s"} left
          </p>
        )}
      </div>

      {data.signedIn && data.plan === "FREE" && data.creditsRemaining === 0 && (
        <BrutalCard tone="purple" className="mt-4">
          <p className="font-extrabold">
            You have used your {PUBLIC_PRO_CONFIG.freeLifetimeGrades} free AI grades
          </p>
          <p className="mt-1 text-sm text-white/90">
            Everything you have already worked on stays yours. Astro Coach Pro
            opens the rest of the free-response bank and {PUBLIC_PRO_CONFIG.proPeriodGrades} AI
            grades a month.
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
        {visible.slice(0, visibleCount).map((question, index) => (
          <Reveal key={question.id} delay={Math.min(index, 5) * 50} className="h-full">
            <FrqCard question={question} signedIn={data.signedIn} />
          </Reveal>
        ))}
      </div>

      <ShowMore
        shown={Math.min(visibleCount, visible.length)}
        total={visible.length}
        pageSize={PAGE_SIZE}
        onShowMore={() => setVisibleCount((count) => count + PAGE_SIZE)}
      />
    </div>
  );
}

function Filter({
  label,
  value,
  options,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  /// Extra layout classes, e.g. to span both columns on phones.
  className?: string;
}) {
  return (
    <label className={`block text-xs font-extrabold uppercase tracking-widest text-navy ${className}`}>
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 block w-full cursor-pointer border-[3px] border-ink bg-cream px-3 py-2 text-base font-semibold normal-case tracking-normal text-navy hover:bg-yellow/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
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
