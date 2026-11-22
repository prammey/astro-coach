"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import CollapsibleFilterPanel, { type FilterState } from "@/components/CollapsibleFilterPanel";
import QuestionCard from "@/components/QuestionCard";
import BrutalButton from "@/components/ui/BrutalButton";
import ShowMore from "@/components/ui/ShowMore";
import { PublicQuestion } from "@/data/mcq/types";
import { CURRICULUM_TOPICS } from "@/data/mcq/topicTaxonomy";
import { useAuth } from "@/lib/auth-context";
import { useTrainingMode } from "@/lib/training-mode-context";
import { supabase } from "@/lib/auth";

/// How many question cards to show at first, and how many more each
/// "Show more" click adds. Rendering all ~700 at once made the page slow
/// to load and scroll, especially on phones.
const PAGE_SIZE = 24;

// Client Component that owns the search/filter state for the Training
// page. The question list itself comes from the server as a prop, so
// no answer keys or explanations ever reach the browser here.
export default function TrainingBrowser({
  questions,
  initialCompetition,
}: {
  questions: PublicQuestion[];
  /// From /training?competition=…, e.g. a link on the Olympiad Guide.
  /// Starts the list filtered to that competition (if it exists).
  initialCompetition?: string;
}) {
  const [search, setSearch] = useState("");
  // How many of the matching questions are currently shown.
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<Set<string>>(new Set());
  const [bookmarkedQuestionIds, setBookmarkedQuestionIds] = useState<Set<string>>(new Set());
  const { user } = useAuth();
  const router = useRouter();
  const { startTrainingMode } = useTrainingMode();

  // Fetch the user's answered and bookmarked questions when component mounts
  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      try {
        const session = await supabase.auth.getSession();
        const token = session.data.session?.access_token;
        if (!token) return;

        // Fetch answered questions
        const answeredResponse = await fetch('/api/user/answered-questions', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (answeredResponse.ok) {
          const data = await answeredResponse.json();
          setAnsweredQuestionIds(new Set(data.answeredQuestionIds));
        }

        // Fetch bookmarked questions
        const bookmarkedResponse = await fetch('/api/bookmarks', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (bookmarkedResponse.ok) {
          const data = await bookmarkedResponse.json();
          setBookmarkedQuestionIds(new Set(data.bookmarkedQuestionIds));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [user]);

  // Called when a bookmark star is toggled: add or remove that question
  // from our set of saved questions. A new Set is made so React re-renders.
  function handleBookmarkChange(questionId: string, isBookmarked: boolean) {
    setBookmarkedQuestionIds((previous) => {
      const next = new Set(previous);
      if (isBookmarked) {
        next.add(questionId);
      } else {
        next.delete(questionId);
      }
      return next;
    });
  }

  // Calculate initial year range and competitions from questions
  const initialYearRange = useMemo(() => {
    if (questions.length === 0) return { min: 2000, max: 2026 };
    const years = questions.map((q) => q.year);
    return { min: Math.min(...years), max: Math.max(...years) };
  }, [questions]);

  const initialCompetitions = useMemo(() => {
    return Array.from(new Set(questions.map((q) => q.competition))).sort();
  }, [questions]);

  // Initialize filters with all competitions, topics, and difficulties
  // selected, or just one competition when the URL asked for it.
  const [filters, setFilters] = useState<FilterState>(() => ({
    competitions:
      initialCompetition && initialCompetitions.includes(initialCompetition)
        ? new Set([initialCompetition])
        : new Set(initialCompetitions),
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
      // Search: match question text, competition, year, topic, subtopic, curriculum topics, or tags.
      // For a multi-part item, every part's text is searchable.
      const searchableText = [
        question.questionText,
        ...(question.parts?.map((part) => part.questionText) ?? []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        lowerSearch === "" ||
        searchableText.includes(lowerSearch) ||
        question.competition.toLowerCase().includes(lowerSearch) ||
        question.year.toString().includes(lowerSearch) ||
        question.topic.toLowerCase().includes(lowerSearch) ||
        question.subtopic.toLowerCase().includes(lowerSearch) ||
        question.curriculumTopics.some((topic) => topic.toLowerCase().includes(lowerSearch)) ||
        question.tags.some((tag) => tag.toLowerCase().includes(lowerSearch));

      // Competition filter: OR logic (match any selected competition).
      // Unticking every box means nothing is selected, so nothing matches.
      const matchesCompetition = filters.competitions.has(question.competition);

      // Curriculum topic filter: OR logic (match if any selected topic is in question's topics)
      const matchesTopics = question.curriculumTopics.some((topic) =>
        filters.curriculumTopics.has(topic)
      );

      // Difficulty filter: OR logic (match any selected difficulty)
      const matchesDifficulty = filters.difficulty.has(question.difficulty);

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

  // A new search or filter starts the list from the top again.
  function handleSearchChange(value: string) {
    setSearch(value);
    setVisibleCount(PAGE_SIZE);
  }
  function handleFiltersChange(value: FilterState) {
    setFilters(value);
    setVisibleCount(PAGE_SIZE);
  }

  // Only the first `visibleCount` matches are drawn; "Show more" adds more.
  const visibleQuestions = filteredQuestions.slice(0, visibleCount);

  return (
    <>
      {/* Search box, Filters button and the filter options. */}
      <CollapsibleFilterPanel
        questions={questions}
        search={search}
        onSearchChange={handleSearchChange}
        filters={filters}
        onFiltersChange={handleFiltersChange}
      />

      {/* Results bar: how many match, and the button that turns them into
          a practice run. One row on wider screens. */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-extrabold text-navy">
          {filteredQuestions.length} question{filteredQuestions.length === 1 ? "" : "s"}
        </p>
        {filteredQuestions.length > 0 && (
          <BrutalButton
            variant="primary"
            className="w-full sm:w-auto"
            onClick={() => {
              const questionIds = filteredQuestions.map((q) => q.id);
              startTrainingMode(questionIds);
              router.push(`/training/mode`);
            }}
          >
            Start training ({filteredQuestions.length}) →
          </BrutalButton>
        )}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {visibleQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            isAnswered={answeredQuestionIds.has(question.id)}
            isBookmarked={bookmarkedQuestionIds.has(question.id)}
            onBookmarkChange={handleBookmarkChange}
          />
        ))}
      </div>

      <ShowMore
        shown={visibleQuestions.length}
        total={filteredQuestions.length}
        pageSize={PAGE_SIZE}
        onShowMore={() => setVisibleCount((count) => count + PAGE_SIZE)}
      />

      {filteredQuestions.length === 0 && (
        <div className="mt-8 border-[3px] border-dashed border-navy/40 p-8 text-center">
          <p className="font-bold text-navy">No questions match your search and filters.</p>
          <p className="mt-1 text-sm text-navy/70">
            Try fewer filters, or a shorter search term.
          </p>
        </div>
      )}
    </>
  );
}
