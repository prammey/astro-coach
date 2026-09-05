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
        className="inline-block font-bold text-[var(--color-purple)] hover:underline"
      >
        {isInTrainingMode ? '← Exit Training' : '← Back to Training'}
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold">
        <span className="rounded bg-[var(--color-electric-blue)] px-2 py-1 text-white">
          {question.type}
        </span>
        <span className="rounded bg-[var(--color-purple)] px-2 py-1 text-white">
          {question.difficulty}
        </span>
        <span className="rounded bg-[var(--color-yellow)] px-2 py-1 text-[var(--color-navy)]">
          {question.topic}
        </span>
        {isMultiPart && (
          <span className="rounded bg-[var(--color-navy)] px-2 py-1 text-[var(--color-yellow)]">
            {question.parts!.length} parts
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <h1 className="mt-3 text-2xl font-extrabold text-[var(--color-navy)] sm:text-3xl">
          {question.competition} — {question.year} {question.examName}
        </h1>
        <div className="flex gap-1">
          <QuestionAnsweredIndicator questionId={question.id} />
          <BookmarkButtonWrapper questionId={question.id} />
        </div>
      </div>
      <p className="text-sm text-black/60">{questionNumberLabel(question)}</p>

      {question.questionMediaMissing && (
        <div className="mt-4 rounded-lg border-4 border-black bg-[var(--color-yellow)] p-3 text-sm font-bold text-[var(--color-navy)]">
          Question image coming soon. This question may be incomplete until its
          figure is added.
        </div>
      )}

      {isMultiPart ? (
        // Each part carries its own prompt, so they are rendered together
        // with their choices rather than as one shared prompt up here.
        <div className="mt-6 rounded-lg border-4 border-black bg-[var(--color-yellow)] p-3 text-sm font-bold text-[var(--color-navy)]">
          This question has {question.parts!.length} parts that build on each
          other. Answer both — it only counts as correct if every part is right.
        </div>
      ) : (
        <BrutalCard className="mt-6 bg-[var(--color-cream)]">
          <p className="text-lg text-[var(--color-navy)]">{question.questionText}</p>
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

      <BrutalCard className="mt-8 bg-white">
        <h2 className="font-bold text-[var(--color-purple)]">Source Metadata</h2>
        <dl className="mt-2 space-y-1 text-sm text-[var(--color-navy)]">
          <div>
            <dt className="inline font-bold">Source URL: </dt>
            <dd className="inline">{question.sourceUrl}</dd>
          </div>
          <div>
            <dt className="inline font-bold">PDF URL: </dt>
            <dd className="inline">{question.pdfUrl}</dd>
          </div>
          <div>
            <dt className="inline font-bold">Attribution: </dt>
            <dd className="inline">{question.attributionText}</dd>
          </div>
          <div>
            <dt className="inline font-bold">Permission Status: </dt>
            <dd className="inline">{question.permissionStatus}</dd>
          </div>
        </dl>
      </BrutalCard>
    </>
  );
}
