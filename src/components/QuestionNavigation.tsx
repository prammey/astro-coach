'use client';

import { useRouter } from 'next/navigation';
import { useTrainingMode } from '@/lib/training-mode-context';
import BrutalButton from './ui/BrutalButton';

// Previous / Skip / Next for a question, with the same look and the same
// meaning wherever a question is opened from.
//
// The only difference is what "next" means:
//   - inside a training run, it steps through that run's queue
//   - opening a question directly, it steps through the question bank in
//     order, so the sequence is predictable rather than random
//
// Skip and Next are the same move; which one shows depends on whether the
// learner has answered yet, so the button always describes what it does.
export default function QuestionNavigation({
  isAnswered,
  previousQuestionId,
  nextQuestionId,
}: {
  isAnswered: boolean;
  previousQuestionId?: string | null;
  nextQuestionId?: string | null;
}) {
  const router = useRouter();
  const {
    isInTrainingMode,
    currentIndex,
    getProgress,
    nextQuestion,
    previousQuestion,
    skipQuestion,
    exitTrainingMode,
  } = useTrainingMode();

  const progress = getProgress();

  const atStart = isInTrainingMode ? currentIndex === 0 : !previousQuestionId;
  const atEnd = isInTrainingMode ? false : !nextQuestionId;

  function goPrevious() {
    if (isInTrainingMode) {
      if (previousQuestion()) router.refresh();
      return;
    }
    if (previousQuestionId) router.push(`/training/${previousQuestionId}`);
  }

  // Skip and Next differ only in label; both advance.
  function advance() {
    if (isInTrainingMode) {
      const moved = isAnswered ? nextQuestion() : skipQuestion();
      if (!moved) {
        exitTrainingMode();
        router.push('/training');
        return;
      }
      router.refresh();
      return;
    }
    if (nextQuestionId) router.push(`/training/${nextQuestionId}`);
  }

  return (
    <div className="mt-8">
      {isInTrainingMode && (
        <p className="mb-3 text-center text-sm font-bold text-navy/70">
          Question {progress.current} of {progress.total}
        </p>
      )}

      <div className="flex flex-wrap justify-center gap-4">
        <BrutalButton variant="dark" onClick={goPrevious} disabled={atStart}>
          ← Previous
        </BrutalButton>

        {/* Blue once answered (move on), yellow before (skip for now). */}
        <BrutalButton
          variant={isAnswered ? 'primary' : 'accent'}
          onClick={advance}
          disabled={atEnd}
        >
          {isAnswered ? 'Next →' : 'Skip →'}
        </BrutalButton>
      </div>
    </div>
  );
}
