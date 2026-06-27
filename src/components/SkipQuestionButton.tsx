'use client';

import { useRouter } from 'next/navigation';
import { useTrainingMode } from '@/lib/training-mode-context';

export default function SkipQuestionButton() {
  const router = useRouter();
  const { skipQuestion, nextQuestion, isInTrainingMode } = useTrainingMode();

  if (!isInTrainingMode) {
    return null;
  }

  return (
    <button
      onClick={() => {
        if (!skipQuestion()) {
          alert('You have reached the end of training');
          router.push('/training');
        } else {
          router.push('/training/mode');
        }
      }}
      className="rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-2 font-bold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
    >
      Skip Question
    </button>
  );
}
