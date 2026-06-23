"use client";

import { useMemo, useState } from "react";
import SearchInput from "@/components/SearchInput";
import CollapsibleFilterPanel, { type FilterState } from "@/components/CollapsibleFilterPanel";
import QuestionCard from "@/components/QuestionCard";
import { PublicQuestion } from "@/data/mcq/types";
import { CURRICULUM_TOPICS } from "@/data/mcq/topicTaxonomy";

// Client Component that owns the search/filter state for the Training
// page. The question list itself comes from the server as a prop, so
// no answer keys or explanations ever reach the browser here.
export default function TrainingBrowser({ questions }: { questions: PublicQuestion[] }) {
  const [search, setSearch] = useState("");

  // Calculate initial year range and competitions from questions
  const initialYearRange = useMemo(() => {
    if (questions.length === 0) return { min: 2000, max: 2026 };
    const years = questions.map((q) => q.year);
    return { min: Math.min(...years), max: Math.max(...years) };
  }, [questions]);

  const initialCompetitions = useMemo(() => {
    return Array.from(new Set(questions.map((q) => q.competition))).sort();
  }, [questions]);

  // Initialize filters with all competitions, topics, and difficulties selected
  const [filters, setFilters] = useState<FilterState>(() => ({
    competitions: new Set(initialCompetitions),
    curriculumTopics: new Set(CURRICULUM_TOPICS),
    difficulty: new Set(["Beginner", "Intermediate", "Advanced"]),
    yearMin: initialYearRange.min,
    yearMax: initialYearRange.max,
    includeAllEarlierYears: false,
  }));

  // Filter logic: match search, then apply multi-select filters
  const filteredQuestions = useMemo(() => {
    const lowerSearch = search.trim().toLowerCase();

    return questions.filter((question) => {
      // Search: match question text, topic, subtopic, or tags
      const matchesSearch =
        lowerSearch === "" ||
        question.questionText.toLowerCase().includes(lowerSearch) ||
        question.topic.toLowerCase().includes(lowerSearch) ||
        question.subtopic.toLowerCase().includes(lowerSearch) ||
        question.tags.some((tag) => tag.toLowerCase().includes(lowerSearch));

      // Competition filter: OR logic (match any selected competition)
      const matchesCompetition =
        filters.competitions.size === 0 ||
        filters.competitions.has(question.competition);

      // Curriculum topic filter: OR logic (match if any selected topic is in question's topics)
      const matchesTopics =
        filters.curriculumTopics.size === 0 ||
        question.curriculumTopics.some((topic) => filters.curriculumTopics.has(topic));

      // Difficulty filter: OR logic (match any selected difficulty)
      const matchesDifficulty =
        filters.difficulty.size === 0 || filters.difficulty.has(question.difficulty);

      // Year filter
      const matchesYear = filters.includeAllEarlierYears
        ? question.year <= filters.yearMax
        : question.year >= filters.yearMin && question.year <= filters.yearMax;

      // Combine all filters with AND logic
      return (
        matchesSearch &&
        matchesCompetition &&
        matchesTopics &&
        matchesDifficulty &&
        matchesYear
      );
    });
  }, [questions, search, filters]);

  return (
    <>
      <div className="mt-6 space-y-4">
        <SearchInput value={search} onChange={setSearch} />
        <CollapsibleFilterPanel
          questions={questions}
          filters={filters}
          onFiltersChange={setFilters}
        />
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
    </>
  );
}
