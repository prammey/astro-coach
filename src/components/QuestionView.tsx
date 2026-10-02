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

// The single rendering of a question, used both when a question is opened
// directly and when it comes up inside a training run.
//
// This exists because the two routes previously had their own copies of
// this markup and quietly drifted: one gained a bookmark button, the other
// gained working navigation. Anything added here now shows up in both.
export default function QuestionView({
  question,
  previousQuestionId,
  nextQuestionId,
}: {
  question: PublicQuestion;
  previousQuestionId?: string | null;
  nextQuestionId?: string | null;
}) {
  const { isInTrainingMode, exitTrainingMode } = useTrainingMode();
  const [isAnswered, setIsAnswered] = useState(false);
  const isMultiPart = Boolean(question.parts?.length);

  return (
    <>
      <Link
        href="/training"
        onClick={() => isInTrainingMode && exitTrainingMode()}
        className="inline-flex items-center gap-1 font-bold text-purple transition-colors duration-200 hover:text-navy hover:underline"
      >
        {isInTrainingMode ? '← Exit Training' : '← Back to Training'}
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Chip tone="type">{question.type}</Chip>
        <Chip tone="difficulty">{question.difficulty}</Chip>
        <Chip tone="topic">{question.topic}</Chip>
        {isMultiPart && <Chip tone="parts">{question.parts!.length} parts</Chip>}
      </div>

      <div className="flex items-center gap-2">
        <h1 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
          {question.competition} — {question.year} {question.examName}
        </h1>
        <div className="flex gap-1">
          <QuestionAnsweredIndicator questionId={question.id} />
          <BookmarkButtonWrapper questionId={question.id} />
        </div>
      </div>
      <p className="text-sm text-black/60">{questionNumberLabel(question)}</p>

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
          <p className="text-lg text-navy">{question.questionText}</p>
          <QuestionFigure
            assets={question.questionMedia?.assets as readonly string[] | undefined}
            alt={`Figure for ${question.competition} ${question.year} question ${question.questionNumber}`}
          />
        </BrutalCard>
      )}

      <McqPractice question={question} onAnswerSubmitted={() => setIsAnswered(true)} />

      <QuestionNavigation
        isAnswered={isAnswered}
        previousQuestionId={previousQuestionId}
        nextQuestionId={nextQuestionId}
      />

      <div className="mt-6 flex justify-center">
        <ReportProblemButton questionId={question.id} />
      </div>

      {/* Where this question came from. The permission status stays in the
          data for our own records; it is not something students need. */}
      <BrutalCard tone="white" className="mt-8">
        <h2 className="font-bold text-purple">Source</h2>
        {question.attributionText && (
          <p className="mt-2 text-sm text-navy">{question.attributionText}</p>
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
