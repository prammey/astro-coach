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
//
// `inTrainingRun` comes from the /training/mode page only, so a question
// opened directly always steps through the bank even if an old run is
// still held in memory.
export default function QuestionNavigation({
  isAnswered,
  previousQuestionId,
  nextQuestionId,
  inTrainingRun = false,
}: {
  isAnswered: boolean;
  previousQuestionId?: string | null;
  nextQuestionId?: string | null;
  inTrainingRun?: boolean;
}) {
  const router = useRouter();
  const {
    currentIndex,
    getProgress,
    nextQuestion,
    previousQuestion,
    skipQuestion,
    exitTrainingMode,
  } = useTrainingMode();

  const progress = getProgress();

  const atStart = inTrainingRun ? currentIndex === 0 : !previousQuestionId;
  const atEnd = inTrainingRun ? false : !nextQuestionId;

  function goPrevious() {
    if (inTrainingRun) {
      if (previousQuestion()) router.refresh();
      return;
    }
    if (previousQuestionId) router.push(`/training/${previousQuestionId}`);
  }

  // Skip and Next differ only in label; both advance.
  function advance() {
    if (inTrainingRun) {
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

  // A compact group (counter, Previous, Next/Skip) that sits at the right
  // end of the question's control row.
  return (
    // On a phone the group takes the full width and the two buttons share
    // it equally; on wider screens it shrinks to fit at the row's end.
    <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto">
      {inTrainingRun && (
        <p className="w-full text-sm font-bold text-navy/70 sm:w-auto">
          Question {progress.current} of {progress.total}
        </p>
      )}

      <BrutalButton
        variant="ghost"
        className="flex-1 sm:flex-none"
        onClick={goPrevious}
        disabled={atStart}
      >
        ← Previous
      </BrutalButton>

      {/* Blue once answered (move on), white before (skip for now), so the
          yellow Check button stays the one obvious next step. */}
      <BrutalButton
        variant={isAnswered ? 'primary' : 'ghost'}
        className="flex-1 sm:flex-none"
        onClick={advance}
        disabled={atEnd}
      >
        {isAnswered ? 'Next →' : 'Skip →'}
      </BrutalButton>
    </div>
  );
}
