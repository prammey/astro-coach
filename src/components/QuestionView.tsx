'use client';

import { useState } from 'react';
import Link from 'next/link';
import BrutalCard from './BrutalCard';
import McqPractice from './McqPractice';
import QuestionAnsweredIndicator from './QuestionAnsweredIndicator';
import BookmarkButtonWrapper from './BookmarkButtonWrapper';
import QuestionFigure from './QuestionFigure';
import QuestionNavigation from './QuestionNavigation';
import ReportProblemButton from './ReportProblemButton';
import { questionNumberLabel } from '@/lib/question-label';
import { useTrainingMode } from '@/lib/training-mode-context';
import type { PublicQuestion } from '@/data/mcq/types';
import Chip from './ui/Chip';
import ScientificText from './ScientificText';

// The single rendering of a question, used both when a question is opened
// directly and when it comes up inside a training run.
//
// This exists because the two routes previously had their own copies of
// this markup and quietly drifted: one gained a bookmark button, the other
// gained working navigation. Anything added here now shows up in both.
//
// `inTrainingRun` is passed only by the /training/mode page. We do not read
// the shared training flag here, because a run stays "on" in memory after
// the student leaves it through the navbar or the back button, and a
// directly-opened question must never show the run's controls.
export default function QuestionView({
  question,
  previousQuestionId,
  nextQuestionId,
  inTrainingRun = false,
}: {
  question: PublicQuestion;
  previousQuestionId?: string | null;
  nextQuestionId?: string | null;
  inTrainingRun?: boolean;
}) {
  const { exitTrainingMode } = useTrainingMode();
  const [isAnswered, setIsAnswered] = useState(false);
  const isMultiPart = Boolean(question.parts?.length);

  return (
    <>
      <Link
        href="/training"
        onClick={() => inTrainingRun && exitTrainingMode()}
        className="inline-flex items-center gap-1 font-bold text-purple transition-colors duration-200 hover:text-navy hover:underline"
      >
        {inTrainingRun ? '← Exit Training' : '← Back to Training'}
      </Link>

      {/* Same title format and topic tags as the question bank's cards, so
          a question looks like the same thing in both places. */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-navy sm:text-3xl">
            {question.competition} {question.year} · {questionNumberLabel(question)}
          </h1>
          <p className="mt-1 text-navy/60">{question.examName}</p>
        </div>
        <div className="flex shrink-0 gap-1 pt-1">
          <QuestionAnsweredIndicator questionId={question.id} />
          <BookmarkButtonWrapper questionId={question.id} />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Chip tone="difficulty">{question.difficulty}</Chip>
        {question.curriculumTopics.map((topic) => (
          <Chip key={topic} tone="topic">
            {topic}
          </Chip>
        ))}
        {isMultiPart && <Chip tone="parts">{question.parts!.length} parts</Chip>}
      </div>

      {question.questionMediaMissing && (
        <div className="mt-4 rounded-lg border-[3px] border-ink bg-yellow p-3 text-sm font-bold text-navy">
          Question image coming soon. This question may be incomplete until its
          figure is added.
        </div>
      )}

      {isMultiPart ? (
        // Each part carries its own prompt, so they are rendered together
        // with their choices rather than as one shared prompt up here.
        <div className="mt-6 rounded-lg border-[3px] border-ink bg-yellow p-3 text-sm font-bold text-navy">
          This question has {question.parts!.length} parts that build on each
          other. Answer both — it only counts as correct if every part is right.
        </div>
      ) : (
        <BrutalCard tone="cream" className="mt-6">
          <p className="text-lg text-navy">
            <ScientificText text={question.questionText} />
          </p>
          <QuestionFigure
            assets={question.questionMedia?.assets as readonly string[] | undefined}
            alt={`Figure for ${question.competition} ${question.year} question ${question.questionNumber}`}
          />
        </BrutalCard>
      )}

      <McqPractice
        question={question}
        onAnswerSubmitted={() => setIsAnswered(true)}
        actions={
          <QuestionNavigation
            isAnswered={isAnswered}
            previousQuestionId={previousQuestionId}
            nextQuestionId={nextQuestionId}
            inTrainingRun={inTrainingRun}
          />
        }
      />

      {/* Where this question came from, and the place to flag a problem
          with it. The permission status stays in the data for our own
          records; it is not something students need. */}
      <BrutalCard tone="white" className="mt-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-bold text-purple">Source</h2>
          <ReportProblemButton questionId={question.id} />
        </div>
        {question.attributionText && (
          <p className="mt-2 text-sm text-navy">
            {/* The heading already says "Source", so drop the repeat. */}
            {question.attributionText.replace(/^Source:\s*/, '')}
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
          {question.pdfUrl && (
            <a
              href={question.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric underline decoration-2 underline-offset-4 hover:text-purple"
            >
              Original paper (PDF) ↗
            </a>
          )}
          {question.sourceUrl && (
            <a
              href={question.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric underline decoration-2 underline-offset-4 hover:text-purple"
            >
              Source page ↗
            </a>
          )}
        </div>
      </BrutalCard>
    </>
  );
}
