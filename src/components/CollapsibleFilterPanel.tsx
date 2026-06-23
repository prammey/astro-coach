"use client";

import { useState, useMemo } from "react";
import { CURRICULUM_TOPICS, type CurriculumTopic } from "@/data/mcq/topicTaxonomy";
import { PublicQuestion } from "@/data/mcq/types";

// Filter state: competitions, topics, and difficulty are sets of selected values
export type FilterState = {
  competitions: Set<string>;
  curriculumTopics: Set<CurriculumTopic>;
  difficulty: Set<string>;
  yearMin: number;
  yearMax: number;
  includeAllEarlierYears: boolean;
};

function Checkbox({
  label,
  checked,
  indeterminate,
  onChange,
}: {
  label: string;
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer py-1">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        ref={(ref) => {
          if (ref) {
            ref.indeterminate = indeterminate || false;
          }
        }}
        className="w-4 h-4 border-2 border-black rounded cursor-pointer"
      />
      <span className="text-sm text-[var(--color-navy)]">{label}</span>
    </label>
  );
}

// Dual-handle range slider for years using overlapped HTML range inputs
function DualRangeSlider({
  min,
  max,
  value,
  onChange,
}: {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}) {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(parseInt(e.target.value), value[1]);
    onChange([newMin, value[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(parseInt(e.target.value), value[0]);
    onChange([value[0], newMax]);
  };

  // Calculate the percentage positions for visual feedback
  const minPercent = ((value[0] - min) / (max - min)) * 100;
  const maxPercent = ((value[1] - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      {/* Range display */}
      <div className="text-sm font-bold text-[var(--color-navy)]">
        {value[0]} — {value[1]}
      </div>

      {/* Dual handle slider */}
      <div className="relative h-8 flex items-center">
        {/* Track background */}
        <div className="absolute w-full h-2 bg-gray-300 rounded-full border-2 border-black"></div>

        {/* Active range highlight */}
        <div
          className="absolute h-2 bg-[var(--color-electric-blue)] rounded-full"
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        ></div>

        {/* Min handle */}
        <input
          type="range"
          min={min}
          max={max}
          value={value[0]}
          onChange={handleMinChange}
          aria-label="Start year"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value[0]}
          className="absolute w-full h-2 bg-transparent rounded-full appearance-none pointer-events-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-[2px_2px_0_#000] [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-black [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&:focus-visible]:[&::-webkit-slider-thumb]:outline [&:focus-visible]:[&::-webkit-slider-thumb]:outline-2 [&:focus-visible]:[&::-webkit-slider-thumb]:outline-offset-2 [&:focus-visible]:[&::-webkit-slider-thumb]:outline-[var(--color-electric-blue)]"
          style={{ zIndex: value[0] > max - (max - min) / 2 ? 5 : 3 }}
        />

        {/* Max handle */}
        <input
          type="range"
          min={min}
          max={max}
          value={value[1]}
          onChange={handleMaxChange}
          aria-label="End year"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value[1]}
          className="absolute w-full h-2 bg-transparent rounded-full appearance-none pointer-events-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-[2px_2px_0_#000] [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-black [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&:focus-visible]:[&::-webkit-slider-thumb]:outline [&:focus-visible]:[&::-webkit-slider-thumb]:outline-2 [&:focus-visible]:[&::-webkit-slider-thumb]:outline-offset-2 [&:focus-visible]:[&::-webkit-slider-thumb]:outline-[var(--color-electric-blue)]"
          style={{ zIndex: value[1] < max - (max - min) / 2 ? 5 : 3 }}
        />
      </div>
    </div>
  );
}

// Main collapsible filter panel component
export default function CollapsibleFilterPanel({
  questions,
  filters,
  onFiltersChange,
}: {
  questions: PublicQuestion[];
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Calculate min/max years from the catalog
  const yearRange = useMemo(() => {
    if (questions.length === 0) return { min: 2000, max: 2026 };
    const years = questions.map((q) => q.year);
    return { min: Math.min(...years), max: Math.max(...years) };
  }, [questions]);

  // Get unique competitions
  const competitions = useMemo(() => {
    return Array.from(new Set(questions.map((q) => q.competition))).sort();
  }, [questions]);

  // Handle "All competitions" toggle
  const allCompetitionsSelected = competitions.every((c) => filters.competitions.has(c));
  const someCompetitionsSelected = competitions.some((c) => filters.competitions.has(c));

  const handleToggleAllCompetitions = (checked: boolean) => {
    const newFilters = { ...filters };
    if (checked) {
      newFilters.competitions = new Set(competitions);
    } else {
      newFilters.competitions = new Set();
    }
    onFiltersChange(newFilters);
  };

  const handleToggleCompetition = (comp: string) => {
    const newFilters = { ...filters };
    const newComps = new Set(newFilters.competitions);
    if (newComps.has(comp)) {
      newComps.delete(comp);
    } else {
      newComps.add(comp);
    }
    newFilters.competitions = newComps;
    onFiltersChange(newFilters);
  };

  // Handle "All topics" toggle
  const allTopicsSelected = CURRICULUM_TOPICS.every((t) => filters.curriculumTopics.has(t));
  const someTopicsSelected = CURRICULUM_TOPICS.some((t) => filters.curriculumTopics.has(t));

  const handleToggleAllTopics = (checked: boolean) => {
    const newFilters = { ...filters };
    if (checked) {
      newFilters.curriculumTopics = new Set(CURRICULUM_TOPICS);
    } else {
      newFilters.curriculumTopics = new Set();
    }
    onFiltersChange(newFilters);
  };

  const handleToggleTopic = (topic: CurriculumTopic) => {
    const newFilters = { ...filters };
    const newTopics = new Set(newFilters.curriculumTopics);
    if (newTopics.has(topic)) {
      newTopics.delete(topic);
    } else {
      newTopics.add(topic);
    }
    newFilters.curriculumTopics = newTopics;
    onFiltersChange(newFilters);
  };

  // Difficulty levels
  const difficultyLevels = ["Beginner", "Intermediate", "Advanced"];

  // Handle "All difficulties" toggle
  const allDifficultiesSelected = difficultyLevels.every((d) => filters.difficulty.has(d));
  const someDifficultiesSelected = difficultyLevels.some((d) => filters.difficulty.has(d));

  const handleToggleAllDifficulties = (checked: boolean) => {
    const newFilters = { ...filters };
    if (checked) {
      newFilters.difficulty = new Set(difficultyLevels);
    } else {
      newFilters.difficulty = new Set();
    }
    onFiltersChange(newFilters);
  };

  const handleToggleDifficulty = (difficulty: string) => {
    const newFilters = { ...filters };
    const newDifficulties = new Set(newFilters.difficulty);
    if (newDifficulties.has(difficulty)) {
      newDifficulties.delete(difficulty);
    } else {
      newDifficulties.add(difficulty);
    }
    newFilters.difficulty = newDifficulties;
    onFiltersChange(newFilters);
  };

  // Handle year range changes
  const handleYearRangeChange = (value: [number, number]) => {
    const newFilters = { ...filters, yearMin: value[0], yearMax: value[1] };
    if (filters.includeAllEarlierYears) {
      newFilters.yearMin = yearRange.min;
    }
    onFiltersChange(newFilters);
  };

  const handleToggleIncludeAllEarlierYears = (checked: boolean) => {
    const newFilters = { ...filters, includeAllEarlierYears: checked };
    if (checked) {
      newFilters.yearMin = yearRange.min;
    }
    onFiltersChange(newFilters);
  };

  // Reset filters
  const handleResetFilters = () => {
    onFiltersChange({
      competitions: new Set(competitions),
      curriculumTopics: new Set(CURRICULUM_TOPICS),
      difficulty: new Set(difficultyLevels),
      yearMin: yearRange.min,
      yearMax: yearRange.max,
      includeAllEarlierYears: false,
    });
  };

  // Count active filters (excluding defaults)
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (
      filters.competitions.size > 0 &&
      filters.competitions.size < competitions.length
    ) {
      count++;
    }
    if (
      filters.curriculumTopics.size > 0 &&
      filters.curriculumTopics.size < CURRICULUM_TOPICS.length
    ) {
      count++;
    }
    if (filters.difficulty.size > 0 && filters.difficulty.size < difficultyLevels.length) count++;
    if (
      filters.yearMin !== yearRange.min ||
      filters.yearMax !== yearRange.max ||
      filters.includeAllEarlierYears
    ) {
      count++;
    }
    return count;
  }, [filters, competitions.length, yearRange]);

  return (
    <div className="border-4 border-black bg-white">
      {/* Header / Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[var(--color-navy)]">Filters</span>
          {activeFilterCount > 0 && (
            <span className="text-xs font-bold bg-[var(--color-electric-blue)] text-white px-2 py-1 rounded">
              {activeFilterCount} active
            </span>
          )}
        </div>
        <svg
          className={`w-6 h-6 transition-transform text-[var(--color-navy)] ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="border-t-4 border-black px-4 py-4 space-y-6">
          {/* Year Range - Full Width */}
          <div>
            <h3 className="text-sm font-bold text-[var(--color-navy)] mb-3">Year Range</h3>
            <DualRangeSlider
              min={yearRange.min}
              max={yearRange.max}
              value={[filters.yearMin, filters.yearMax]}
              onChange={handleYearRangeChange}
            />
            <div className="mt-4">
              <Checkbox
                label="Include all years"
                checked={filters.includeAllEarlierYears}
                onChange={handleToggleIncludeAllEarlierYears}
              />
            </div>
          </div>

          {/* Three-column filter groups (desktop) / stacked (mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Competitions */}
            <div>
              <h3 className="text-sm font-bold text-[var(--color-navy)] mb-2">Competitions</h3>
              <div className="space-y-1">
                <Checkbox
                  label="All competitions"
                  checked={allCompetitionsSelected}
                  indeterminate={someCompetitionsSelected && !allCompetitionsSelected}
                  onChange={handleToggleAllCompetitions}
                />
                <div className="ml-4 space-y-1">
                  {competitions.map((comp) => (
                    <Checkbox
                      key={comp}
                      label={comp}
                      checked={filters.competitions.has(comp)}
                      onChange={() => handleToggleCompetition(comp)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Topics */}
            <div>
              <h3 className="text-sm font-bold text-[var(--color-navy)] mb-2">Topics</h3>
              <div className="space-y-1">
                <Checkbox
                  label="All topics"
                  checked={allTopicsSelected}
                  indeterminate={someTopicsSelected && !allTopicsSelected}
                  onChange={handleToggleAllTopics}
                />
                <div className="ml-4 space-y-1 max-h-48 overflow-y-auto">
                  {CURRICULUM_TOPICS.map((topic) => (
                    <Checkbox
                      key={topic}
                      label={topic}
                      checked={filters.curriculumTopics.has(topic)}
                      onChange={() => handleToggleTopic(topic)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <h3 className="text-sm font-bold text-[var(--color-navy)] mb-2">Difficulty</h3>
              <div className="space-y-1">
                <Checkbox
                  label="All difficulties"
                  checked={allDifficultiesSelected}
                  indeterminate={someDifficultiesSelected && !allDifficultiesSelected}
                  onChange={handleToggleAllDifficulties}
                />
                <div className="ml-4 space-y-1">
                  {difficultyLevels.map((difficulty) => (
                    <Checkbox
                      key={difficulty}
                      label={difficulty}
                      checked={filters.difficulty.has(difficulty)}
                      onChange={() => handleToggleDifficulty(difficulty)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reset button */}
          <button
            onClick={handleResetFilters}
            className="w-full px-4 py-2 bg-[var(--color-navy)] text-white font-bold rounded-lg border-2 border-black hover:bg-[var(--color-navy)]/90 transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
