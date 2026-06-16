"use client";

import { useMemo, useState } from "react";
import PageContainer from "@/components/PageContainer";
import SearchInput from "@/components/SearchInput";
import FilterBar, { TrainingFilters } from "@/components/FilterBar";
import QuestionCard from "@/components/QuestionCard";
import { sampleQuestions } from "@/data/sampleQuestions";

// Pulls the unique, sorted set of values for one field across all questions.
// Used to build the dropdown options for each filter.
function uniqueValues<T extends string>(values: T[]): T[] {
  return Array.from(new Set(values)).sort();
}

const FILTER_OPTIONS = {
  competitions: uniqueValues(sampleQuestions.map((q) => q.competition)),
  topics: uniqueValues(sampleQuestions.map((q) => q.topic)),
  difficulties: uniqueValues(sampleQuestions.map((q) => q.difficulty)),
  types: uniqueValues(sampleQuestions.map((q) => q.type)),
};

const EMPTY_FILTERS: TrainingFilters = {
  competition: "",
  topic: "",
  difficulty: "",
  type: "",
};

// This page needs to be a Client Component because the search box and
// filter dropdowns update state in the browser and need to re-render the
// question list live as the user types or picks an option.
export default function TrainingPage() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<TrainingFilters>(EMPTY_FILTERS);

  const filteredQuestions = useMemo(() => {
    const lowerSearch = search.trim().toLowerCase();

    return sampleQuestions.filter((question) => {
      const matchesSearch =
        lowerSearch === "" ||
        question.questionText.toLowerCase().includes(lowerSearch) ||
        question.topic.toLowerCase().includes(lowerSearch);

      const matchesCompetition =
        filters.competition === "" || question.competition === filters.competition;
      const matchesTopic = filters.topic === "" || question.topic === filters.topic;
      const matchesDifficulty =
        filters.difficulty === "" || question.difficulty === filters.difficulty;
      const matchesType = filters.type === "" || question.type === filters.type;

      return (
        matchesSearch &&
        matchesCompetition &&
        matchesTopic &&
        matchesDifficulty &&
        matchesType
      );
    });
  }, [search, filters]);

  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)] sm:text-4xl">
        Training
      </h1>
      <p className="mt-2 max-w-2xl text-[var(--color-navy)]/80">
        Browse original placeholder practice questions. Search by keyword or
        filter by competition, topic, difficulty, and question type.
      </p>

      <div className="mt-6 space-y-4">
        <SearchInput value={search} onChange={setSearch} />
        <FilterBar filters={filters} options={FILTER_OPTIONS} onChange={setFilters} />
      </div>

      <p className="mt-6 text-sm font-bold text-[var(--color-navy)]/70">
        {filteredQuestions.length} question{filteredQuestions.length === 1 ? "" : "s"} found
      </p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>

      {filteredQuestions.length === 0 && (
        <p className="mt-8 text-center text-[var(--color-navy)]/60">
          No questions match your search and filters.
        </p>
      )}
    </PageContainer>
  );
}
