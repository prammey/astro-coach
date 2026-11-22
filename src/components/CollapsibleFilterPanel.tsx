"use client";

import { useMemo, useState } from "react";
import { CURRICULUM_TOPICS, type CurriculumTopic } from "@/data/mcq/topicTaxonomy";
import { PublicQuestion } from "@/data/mcq/types";
import SearchInput from "./SearchInput";

// Filter state: competitions, topics and difficulty are sets of the values
// that are allowed. A full set means "no filter" for that group.
export type FilterState = {
  competitions: Set<string>;
  curriculumTopics: Set<CurriculumTopic>;
  difficulty: Set<string>;
  yearMin: number;
  yearMax: number;
  includeAllEarlierYears: boolean;
};

const DIFFICULTY_LEVELS = ["Beginner", "Intermediate", "Advanced"];

/// Tapping an option. While every option in a group is allowed (no filter),
/// a tap picks just that one. After that, taps add or remove options, and
/// removing the last one goes back to "everything".
function toggleInGroup<T>(current: Set<T>, all: readonly T[], value: T): Set<T> {
  if (current.size === all.length) return new Set([value]);

  const next = new Set(current);
  if (next.has(value)) {
    next.delete(value);
  } else {
    next.add(value);
  }
  return next.size === 0 ? new Set(all) : next;
}

// One option you can tap, e.g. "BAAO" or "Light & Spectra". Plain while
// its group is unfiltered; navy once it is one of the picked options.
function OptionChip({
  label,
  selected,
  onToggle,
}: {
  label: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className={`shrink-0 whitespace-nowrap border-2 px-3 py-1 text-sm font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 ${
        selected
          ? "border-ink bg-navy text-yellow"
          : "border-navy/20 bg-white text-navy/80 hover:border-ink hover:text-navy"
      }`}
    >
      {label}
    </button>
  );
}

// One labelled row of the filter panel: the label on the left on wider
// screens, above the options on phones.
function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-start sm:gap-4">
      <h3 className="text-xs font-bold uppercase tracking-widest text-navy/60 sm:pt-2">{label}</h3>
      {children}
    </div>
  );
}

// A small year dropdown ("From 2014", "To 2026").
function YearSelect({
  label,
  value,
  years,
  onChange,
}: {
  label: string;
  value: number;
  years: number[];
  onChange: (year: number) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm font-semibold text-navy/70">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="cursor-pointer border-2 border-navy/20 bg-white px-2 py-1 font-semibold text-navy hover:border-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </label>
  );
}

// The search tool on the Training page: the search box and a Filters
// button on one row, and the filter options underneath (open on arrival).
export default function CollapsibleFilterPanel({
  questions,
  search,
  onSearchChange,
  filters,
  onFiltersChange,
}: {
  questions: PublicQuestion[];
  search: string;
  onSearchChange: (value: string) => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}) {
  // Open on arrival, so students see every way to narrow the bank.
  const [isOpen, setIsOpen] = useState(true);

  // The first and last year in the bank, and every year between.
  const yearRange = useMemo(() => {
    if (questions.length === 0) return { min: 2000, max: 2026 };
    const years = questions.map((q) => q.year);
    return { min: Math.min(...years), max: Math.max(...years) };
  }, [questions]);
  const allYears = useMemo(
    () => Array.from({ length: yearRange.max - yearRange.min + 1 }, (_, i) => yearRange.min + i),
    [yearRange],
  );

  const competitions = useMemo(
    () => Array.from(new Set(questions.map((q) => q.competition))).sort(),
    [questions],
  );

  // A group shows picked options only once it is actually filtered.
  const competitionsFiltered = filters.competitions.size < competitions.length;
  const difficultyFiltered = filters.difficulty.size < DIFFICULTY_LEVELS.length;
  const topicsFiltered = filters.curriculumTopics.size < CURRICULUM_TOPICS.length;
  const yearsFiltered = filters.yearMin !== yearRange.min || filters.yearMax !== yearRange.max;

  const activeFilterCount = [competitionsFiltered, difficultyFiltered, topicsFiltered, yearsFiltered]
    .filter(Boolean).length;

  // A new "from" year later than the "to" year moves "to" along with it,
  // and the other way round, so the range is never empty.
  function changeYears(yearMin: number, yearMax: number) {
    onFiltersChange({ ...filters, yearMin, yearMax, includeAllEarlierYears: false });
  }

  function resetFilters() {
    onFiltersChange({
      competitions: new Set(competitions),
      curriculumTopics: new Set(CURRICULUM_TOPICS),
      difficulty: new Set(DIFFICULTY_LEVELS),
      yearMin: yearRange.min,
      yearMax: yearRange.max,
      includeAllEarlierYears: false,
    });
  }

  return (
    <section aria-label="Search and filter" className="mt-6 border-[3px] border-ink bg-white shadow-brutal">
      {/* Search box and the Filters button, side by side. */}
      <div className="flex gap-3 p-3 sm:p-4">
        <div className="min-w-0 flex-1">
          <SearchInput value={search} onChange={onSearchChange} />
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="training-filters"
          aria-label={activeFilterCount > 0 ? `Filters, ${activeFilterCount} active` : "Filters"}
          className={`flex shrink-0 items-center gap-2 border-[3px] border-ink px-3 font-bold transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 sm:px-4 ${
            isOpen ? "bg-navy text-yellow" : "bg-white text-navy hover:bg-cream"
          }`}
        >
          {/* Three slider lines: the usual "filters" symbol. */}
          <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
            <path d="M4 7h16M7 12h10M10 17h4" />
          </svg>
          <span className="hidden sm:inline">Filters</span>
          {activeFilterCount > 0 && (
            <span className="bg-yellow px-1.5 text-sm text-navy">{activeFilterCount}</span>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          id="training-filters"
          className="animate-rise-in space-y-4 border-t-2 border-navy/10 px-3 pb-4 pt-4 sm:px-4"
        >
          <FilterRow label="Competition">
            <div className="flex flex-wrap gap-2">
              {competitions.map((competition) => (
                <OptionChip
                  key={competition}
                  label={competition}
                  selected={competitionsFiltered && filters.competitions.has(competition)}
                  onToggle={() =>
                    onFiltersChange({
                      ...filters,
                      competitions: toggleInGroup(filters.competitions, competitions, competition),
                    })
                  }
                />
              ))}
            </div>
          </FilterRow>

          <FilterRow label="Difficulty">
            <div className="flex flex-wrap gap-2">
              {DIFFICULTY_LEVELS.map((difficulty) => (
                <OptionChip
                  key={difficulty}
                  label={difficulty}
                  selected={difficultyFiltered && filters.difficulty.has(difficulty)}
                  onToggle={() =>
                    onFiltersChange({
                      ...filters,
                      difficulty: toggleInGroup(filters.difficulty, DIFFICULTY_LEVELS, difficulty),
                    })
                  }
                />
              ))}
            </div>
          </FilterRow>

          <FilterRow label="Years">
            <div className="flex flex-wrap items-center gap-4">
              <YearSelect
                label="From"
                value={filters.yearMin}
                years={allYears}
                onChange={(year) => changeYears(year, Math.max(year, filters.yearMax))}
              />
              <YearSelect
                label="to"
                value={filters.yearMax}
                years={allYears}
                onChange={(year) => changeYears(Math.min(year, filters.yearMin), year)}
              />
            </div>
          </FilterRow>

          <FilterRow label="Topic">
            {/* On phones the ten topics sit in one row you swipe sideways,
                so the open panel does not push the questions far down. */}
            <div className="-mr-3 flex gap-2 overflow-x-auto pb-1 pr-3 sm:mr-0 sm:flex-wrap sm:overflow-visible sm:pr-0">
              {CURRICULUM_TOPICS.map((topic) => (
                <OptionChip
                  key={topic}
                  label={topic}
                  selected={topicsFiltered && filters.curriculumTopics.has(topic)}
                  onToggle={() =>
                    onFiltersChange({
                      ...filters,
                      curriculumTopics: toggleInGroup(filters.curriculumTopics, CURRICULUM_TOPICS, topic),
                    })
                  }
                />
              ))}
            </div>
          </FilterRow>

          {/* Reset only matters once something has been changed. */}
          {activeFilterCount > 0 && (
            <div className="sm:pl-[8.5rem]">
              <button
                type="button"
                onClick={resetFilters}
                className="text-sm font-bold text-purple underline decoration-2 underline-offset-4 hover:text-navy"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
