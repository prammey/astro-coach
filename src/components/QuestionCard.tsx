import Link from "next/link";
import BrutalCard from "./BrutalCard";
import BookmarkButton from "./BookmarkButton";
import Chip from "./ui/Chip";
import ScientificText from "./ScientificText";
import { PublicQuestion } from "@/data/mcq/types";
import { questionNumberLabel } from "@/lib/question-label";

// Shortens long question text so the card preview stays a readable length.
function previewText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

// "Q12" for one question, "Questions 3–4" for a joined multi-part item.
function shortNumberLabel(question: PublicQuestion) {
  return questionNumberLabel(question).replace(/^Question (\d)/, "Q$1");
}

// One question's summary card on the Training page.
//
// The whole card opens the question: the title link stretches over the
// card (its ::after covers it), so there is one big target instead of a
// separate button on every card. The bookmark star sits above that layer
// so it can still be clicked on its own.
//
// `onBookmarkChange` tells the parent list when the star is toggled, so
// the list's record of saved questions stays in step with the stars.
export default function QuestionCard({
  question,
  isAnswered = false,
  isBookmarked = false,
  onBookmarkChange,
}: {
  question: PublicQuestion;
  isAnswered?: boolean;
  isBookmarked?: boolean;
  onBookmarkChange: (questionId: string, isBookmarked: boolean) => void;
}) {
  // Show primary topic and up to 1 additional topic, with a +N indicator for more
  const displayTopics = question.curriculumTopics.slice(0, 2);
  const moreTopicsCount = Math.max(0, question.curriculumTopics.length - 2);

  return (
    <BrutalCard tone="white" hover className="relative flex flex-col p-5">
      {/* Bookmark star and "already answered" eye, top right, above the
          card-wide link so they stay clickable. */}
      <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
        <BookmarkButton
          questionId={question.id}
          isBookmarked={isBookmarked}
          onBookmarkChange={(nowBookmarked) => onBookmarkChange(question.id, nowBookmarked)}
        />
        {isAnswered && <AnsweredEye />}
      </div>

      {/* Competition, year and number: what students scan for first. */}
      <h3 className="pr-16 text-lg font-extrabold leading-snug text-navy">
        <Link
          href={`/training/${question.id}`}
          className="after:absolute after:inset-0 after:content-[''] focus:outline-none focus-visible:after:ring-4 focus-visible:after:ring-electric/40"
        >
          {question.competition} {question.year} · {shortNumberLabel(question)}
        </Link>
      </h3>
      <p className="text-sm text-navy/60">{question.examName}</p>

      <p className="mt-3 flex-1 leading-relaxed text-navy">
        <ScientificText text={previewText(question.questionText, 140)} />
      </p>

      {/* Difficulty and topics, then a quiet "open" cue. */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Chip tone="difficulty">{question.difficulty}</Chip>
        {displayTopics.map((topic) => (
          <Chip key={topic} tone="topic">
            {topic}
          </Chip>
        ))}
        {moreTopicsCount > 0 && <Chip tone="topic">+{moreTopicsCount}</Chip>}
        {question.parts?.length ? <Chip tone="parts">{question.parts.length} parts</Chip> : null}
        <span aria-hidden className="ml-auto text-sm font-bold text-purple">
          Open →
        </span>
      </div>
    </BrutalCard>
  );
}

// A small eye icon meaning "you have answered this one before".
function AnsweredEye() {
  return (
    <svg
      role="img"
      aria-label="Question answered"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-navy/60"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
