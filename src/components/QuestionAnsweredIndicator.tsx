'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';

export default function QuestionAnsweredIndicator({ questionId }: { questionId: string }) {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const checkIfAnswered = async () => {
      try {
        setIsLoading(true);
        const token = await supabase.auth.getSession().then((session) => session.data.session?.access_token);
        if (!token) {
          setIsLoading(false);
          return;
        }

        const response = await fetch('/api/user/answered-questions', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setIsAnswered(data.answeredQuestionIds.includes(questionId));
        } else {
          setIsAnswered(false);
        }
      } catch (error) {
        console.error('Error checking if question answered:', error);
        setIsAnswered(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkIfAnswered();
  }, [user, questionId]);

  if (!isAnswered || isLoading) return null;

  return (
    <div className="inline-flex items-center gap-2 ml-3">
      <img
        src="/icons/eye.png"
        alt="You've answered this question before"
        className="w-5 h-5 object-contain"
        title="You've answered this question before"
      />
    </div>
  );
}
