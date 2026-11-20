'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PageContainer from '@/components/PageContainer';
import BrutalCard from '@/components/BrutalCard';
import QuestionView from '@/components/QuestionView';
import { useTrainingMode } from '@/lib/training-mode-context';
import { PublicQuestion } from '@/data/mcq/types';
import LoadingStar from '@/components/ui/LoadingStar';

export const dynamic = 'force-dynamic';

// A training run. The question itself is rendered by the same QuestionView
// used when a question is opened directly, so the two never differ; only
// the queue that decides what comes next lives here.
export default function TrainingModePage() {
  const router = useRouter();
  const { getCurrentQuestionId, isInTrainingMode } = useTrainingMode();
  const [question, setQuestion] = useState<PublicQuestion | null>(null);
  const [loading, setLoading] = useState(true);

  const currentQuestionId = getCurrentQuestionId();

  useEffect(() => {
    if (!isInTrainingMode || !currentQuestionId) {
      router.push('/training');
      return;
    }

    // `active` goes false when the student moves to another question before
    // this one finishes loading, so a slow answer for an earlier question
    // can never be shown under a later one.
    let active = true;

    const fetchQuestion = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/questions/${currentQuestionId}`);
        const data = response.ok ? await response.json() : null;
        if (active) setQuestion(data);
      } catch (error) {
        console.error('Error fetching question:', error);
        if (active) setQuestion(null);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchQuestion();

    // Cleanup: ignore this request's result once the question changes.
    return () => {
      active = false;
    };
  }, [currentQuestionId, isInTrainingMode, router]);

  if (loading) {
    return (
      <PageContainer>
        <div className="flex justify-center py-8">
          <LoadingStar label="Loading question…" />
        </div>
      </PageContainer>
    );
  }

  if (!currentQuestionId) {
    return null;
  }

  return (
    <PageContainer>
      {question ? (
        // `key` remounts the view on each question, so the answered state
        // and any selected choices reset between questions.
        // `inTrainingRun` turns on the run's own controls (Exit Training,
        // "Question 3 of 40", stepping through the queue).
        <QuestionView key={currentQuestionId} question={question} inTrainingRun />
      ) : (
        <BrutalCard tone="yellow">
          <p className="font-bold">Question not found</p>
        </BrutalCard>
      )}
    </PageContainer>
  );
}
