"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import SearchInput from "@/components/SearchInput";
import CollapsibleFilterPanel, { type FilterState } from "@/components/CollapsibleFilterPanel";
import QuestionCard from "@/components/QuestionCard";
import { PublicQuestion } from "@/data/mcq/types";
import { CURRICULUM_TOPICS } from "@/data/mcq/topicTaxonomy";
import { useAuth } from "@/lib/auth-context";
import { useTrainingMode } from "@/lib/training-mode-context";
import { supabase } from "@/lib/auth";

// Client Component that owns the search/filter state for the Training
// page. The question list itself comes from the server as a prop, so
// no answer keys or explanations ever reach the browser here.
export default function TrainingBrowser({ questions }: { questions: PublicQuestion[] }) {
  const [search, setSearch] = useState("");
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<Set<string>>(new Set());
  const { user } = useAuth();
  const router = useRouter();
  const { startTrainingMode } = useTrainingMode();

  // Fetch the user's answered questions when component mounts
  useEffect(() => {
    if (!user) return;

    const fetchAnsweredQuestions = async () => {
      try {
        const token = await supabase.auth.getSession().then((session) => session.data.session?.access_token);
        if (!token) return;

        const response = await fetch('/api/user/answered-questions', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setAnsweredQuestionIds(new Set(data.answeredQuestionIds));
        }
      } catch (error) {
        console.error('Error fetching answered questions:', error);
      }
    };

    fetchAnsweredQuestions();
  }, [user]);

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

      {filteredQuestions.length > 0 && (
        <div className="mt-6">
          <button
            onClick={() => {
              const questionIds = filteredQuestions.map((q) => q.id);
              startTrainingMode(questionIds);
              router.push(`/training/mode`);
            }}
            className="w-full rounded-lg border-4 border-black bg-[var(--color-electric-blue)] px-6 py-4 text-center font-extrabold text-white shadow-[6px_6px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Start Training
          </button>
        </div>
      )}

      <p className="mt-6 text-sm font-bold text-[var(--color-navy)]/70">
        {filteredQuestions.length} question{filteredQuestions.length === 1 ? "" : "s"} found
      </p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {filteredQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            isAnswered={answeredQuestionIds.has(question.id)}
          />
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
