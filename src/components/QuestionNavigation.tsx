'use client';

import { useRouter } from 'next/navigation';
import { useTrainingMode } from '@/lib/training-mode-context';

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

  // Shared button styling, so the two modes cannot drift apart again.
  const base =
    'rounded-lg border-4 border-black px-6 py-2 font-bold shadow-[4px_4px_0_0_#000] transition';
  const enabled = 'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none';
  const disabled = 'bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed opacity-50';

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
        <p className="mb-3 text-center text-sm font-bold text-[var(--color-navy)]/70">
          Question {progress.current} of {progress.total}
        </p>
      )}

      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={goPrevious}
          disabled={atStart}
          className={`${base} ${
            atStart ? disabled : `bg-[var(--color-space-blue)] text-white ${enabled}`
          }`}
        >
          ← Previous
        </button>

        <button
          type="button"
          onClick={advance}
          disabled={atEnd}
          className={`${base} ${
            atEnd
              ? disabled
              : isAnswered
                ? `bg-[var(--color-electric-blue)] text-white ${enabled}`
                : `bg-[var(--color-yellow)] text-[var(--color-navy)] ${enabled}`
          }`}
        >
          {isAnswered ? 'Next →' : 'Skip →'}
        </button>
      </div>
    </div>
  );
}
