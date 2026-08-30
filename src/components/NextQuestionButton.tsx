'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NextQuestionButton({
  currentQuestionId,
}: {
  currentQuestionId: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNextQuestion = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/questions/random?exclude=${currentQuestionId}`);
      if (response.ok) {
        const data = await response.json();
        router.push(`/training/${data.id}`);
      }
    } catch (error) {
      console.error('Error fetching random question:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleNextQuestion}
      disabled={loading}
      className="rounded-lg border-4 border-black bg-[var(--color-electric-blue)] px-6 py-2 font-bold text-white shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? 'Loading...' : 'Next Question →'}
    </button>
  );
}
