import BrutalCard from "./BrutalCard";
import BookmarkButton from "./BookmarkButton";
import BrutalButton from "./ui/BrutalButton";
import Chip from "./ui/Chip";
import { PublicQuestion } from "@/data/mcq/types";
import { questionNumberLabel } from "@/lib/question-label";

// Shortens long question text so the card preview stays a readable length.
function previewText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

// One question's summary card on the Training page.
export default function QuestionCard({
  question,
  isAnswered = false,
  isBookmarked = false,
}: {
  question: PublicQuestion;
  isAnswered?: boolean;
  isBookmarked?: boolean;
}) {
  // Show primary topic and up to 1 additional topic, with a +N indicator for more
  const displayTopics = question.curriculumTopics.slice(0, 2);
  const moreTopicsCount = Math.max(0, question.curriculumTopics.length - 2);

  return (
    <BrutalCard tone="cream" hover className="relative flex flex-col">
      {/* Bookmark star and "already answered" eye, top right. */}
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <BookmarkButton questionId={question.id} isBookmarked={isBookmarked} />
        {isAnswered && <AnsweredEye />}
      </div>

      <div className="flex flex-wrap items-center gap-2 pr-14">
        <Chip tone="type">{question.type}</Chip>
        <Chip tone="difficulty">{question.difficulty}</Chip>
        {displayTopics.map((topic) => (
          <Chip key={topic} tone="topic">
            {topic}
          </Chip>
        ))}
        {moreTopicsCount > 0 && <Chip tone="topic">+{moreTopicsCount}</Chip>}
        {question.parts?.length ? <Chip tone="parts">{question.parts.length} parts</Chip> : null}
      </div>

      <h3 className="mt-3 text-lg font-extrabold leading-snug text-navy">
        {question.competition} — {question.year} {question.examName}
      </h3>
      <p className="text-sm text-navy/60">{questionNumberLabel(question)}</p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy">
        {previewText(question.questionText, 120)}
      </p>

      <BrutalButton
        href={`/training/${question.id}`}
        variant="dark"
        size="sm"
        className="mt-4 self-start"
      >
        Open question
      </BrutalButton>
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
