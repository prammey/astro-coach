'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PageContainer from '@/components/PageContainer';
import BrutalCard from '@/components/BrutalCard';
import QuestionView from '@/components/QuestionView';
import { useTrainingMode } from '@/lib/training-mode-context';
import { PublicQuestion } from '@/data/mcq/types';

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

    const fetchQuestion = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/questions/${currentQuestionId}`);
        setQuestion(response.ok ? await response.json() : null);
      } catch (error) {
        console.error('Error fetching question:', error);
        setQuestion(null);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [currentQuestionId, isInTrainingMode, router]);

  if (loading) {
    return (
      <PageContainer>
        <div className="py-8 text-center">
          <p className="font-bold text-[var(--color-navy)]">Loading question...</p>
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
        <QuestionView key={currentQuestionId} question={question} />
      ) : (
        <BrutalCard className="border-4 border-black bg-[var(--color-yellow)]">
          <p className="font-bold text-[var(--color-navy)]">Question not found</p>
        </BrutalCard>
      )}
    </PageContainer>
  );
}
