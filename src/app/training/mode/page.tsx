'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PageContainer from '@/components/PageContainer';
import BrutalCard from '@/components/BrutalCard';
import McqPractice from '@/components/McqPractice';
import QuestionAnsweredIndicator from '@/components/QuestionAnsweredIndicator';
import { useTrainingMode } from '@/lib/training-mode-context';
import { PublicQuestion } from '@/data/mcq/types';

export const dynamic = 'force-dynamic';

export default function TrainingModePage() {
  const router = useRouter();
  const { currentIndex, getCurrentQuestionId, getProgress, nextQuestion, previousQuestion, skipQuestion, exitTrainingMode, isInTrainingMode } = useTrainingMode();
  const [question, setQuestion] = useState<PublicQuestion | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAnswered, setIsAnswered] = useState(false);

  const isFirstQuestion = currentIndex === 0;

  const currentQuestionId = getCurrentQuestionId();
  const progress = getProgress();

  useEffect(() => {
    if (!isInTrainingMode || !currentQuestionId) {
      router.push('/training');
      return;
    }

    const fetchQuestion = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/questions/${currentQuestionId}`);
        if (response.ok) {
          const data = await response.json();
          setQuestion(data);
        } else {
          setQuestion(null);
        }
      } catch (error) {
        console.error('Error fetching question:', error);
        setQuestion(null);
      } finally {
        setLoading(false);
        setIsAnswered(false);
      }
    };

    fetchQuestion();
  }, [currentQuestionId, isInTrainingMode, router]);

  if (loading) {
    return (
      <PageContainer>
        <div className="text-center py-8">
          <p className="text-[var(--color-navy)] font-bold">Loading question...</p>
        </div>
      </PageContainer>
    );
  }

  if (!currentQuestionId) {
    return null;
  }

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/training"
          onClick={() => exitTrainingMode()}
          className="inline-block font-bold text-[var(--color-purple)] hover:underline"
        >
          ← Exit Training
        </Link>
        <div className="text-sm font-bold text-[var(--color-navy)] bg-[var(--color-yellow)] px-4 py-2 rounded">
          Question {progress.current} of {progress.total}
        </div>
      </div>

      {question ? (
        <TrainingQuestion
          question={question}
          questionId={currentQuestionId}
          onAnswerSubmitted={() => setIsAnswered(true)}
        />
      ) : (
        <BrutalCard className="bg-[var(--color-yellow)] border-4 border-black">
          <p className="font-bold text-[var(--color-navy)]">Question not found</p>
        </BrutalCard>
      )}

      <div className="mt-8 flex gap-4 justify-center">
        <button
          disabled={isFirstQuestion}
          onClick={() => {
            if (!previousQuestion()) {
              alert('This is the first question');
            } else {
              router.refresh();
            }
          }}
          className={`rounded-lg border-4 border-black px-6 py-2 font-bold shadow-[4px_4px_0_0_#000] transition ${
            isFirstQuestion
              ? 'bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed opacity-50'
              : 'bg-[var(--color-space-blue)] text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
          }`}
        >
          ← Previous
        </button>

        {!isAnswered ? (
          <button
            onClick={() => {
              if (!skipQuestion()) {
                alert('You have reached the end of training');
                exitTrainingMode();
                router.push('/training');
              } else {
                router.refresh();
              }
            }}
            className="rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-2 font-bold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Skip
          </button>
        ) : (
          <button
            onClick={() => {
              if (!nextQuestion()) {
                alert('You have reached the end of training');
                exitTrainingMode();
                router.push('/training');
              } else {
                router.refresh();
              }
            }}
            className="rounded-lg border-4 border-black bg-[var(--color-electric-blue)] px-6 py-2 font-bold text-white shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Next →
          </button>
        )}
      </div>
    </PageContainer>
  );
}

function TrainingQuestion({
  question,
  questionId,
  onAnswerSubmitted,
}: {
  question: PublicQuestion;
  questionId: string;
  onAnswerSubmitted?: () => void;
}) {
  return (
    <>
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
      </div>

      <div className="flex items-center gap-2">
        <h1 className="mt-3 text-2xl font-extrabold text-[var(--color-navy)] sm:text-3xl">
          {question.competition} — {question.year} {question.examName}
        </h1>
        <QuestionAnsweredIndicator questionId={questionId} />
      </div>
      <p className="text-sm text-black/60">Question {question.questionNumber}</p>

      {question.questionMediaMissing && (
        <div className="mt-4 rounded-lg border-4 border-black bg-[var(--color-yellow)] p-3 text-sm font-bold text-[var(--color-navy)]">
          Question image coming soon. This question may be incomplete until its figure is added.
        </div>
      )}

      <BrutalCard className="mt-6 bg-[var(--color-cream)]">
        <p className="text-lg text-[var(--color-navy)]">{question.questionText}</p>
      </BrutalCard>

      <McqPractice question={question} onAnswerSubmitted={onAnswerSubmitted} />

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
