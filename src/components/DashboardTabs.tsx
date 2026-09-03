'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';
import { PublicQuestion } from '@/data/mcq/types';

type TabType = 'all' | 'bookmarked' | 'incorrect';

const TABS = [
  { id: 'all', label: 'All Questions', icon: '📋' },
  { id: 'bookmarked', label: 'Bookmarked', icon: '⭐' },
  { id: 'incorrect', label: 'Incorrect', icon: '❌' },
] as const;

export default function DashboardTabs() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [allQuestions, setAllQuestions] = useState<PublicQuestion[]>([]);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<PublicQuestion[]>([]);
  const [incorrectQuestions, setIncorrectQuestions] = useState<PublicQuestion[]>([]);
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const session = await supabase.auth.getSession();
        const token = session.data.session?.access_token;
        if (!token) return;

        // Fetch answered questions IDs
        const answeredResponse = await fetch('/api/user/answered-questions', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (answeredResponse.ok) {
          const data = await answeredResponse.json();
          setAnsweredQuestionIds(new Set(data.answeredQuestionIds));
        }

        // Fetch attempted questions with full metadata
        const attemptedResponse = await fetch('/api/user/attempted-questions', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (attemptedResponse.ok) {
          const data = await attemptedResponse.json();
          setAllQuestions(data.attemptedQuestions);
        }

        // Fetch bookmarked questions
        const bookmarkedResponse = await fetch('/api/user/bookmarked-questions', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (bookmarkedResponse.ok) {
          const data = await bookmarkedResponse.json();
          setBookmarkedQuestions(data.bookmarkedQuestions);
        }

        // Fetch incorrect questions
        const incorrectResponse = await fetch('/api/user/incorrect-questions', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (incorrectResponse.ok) {
          const data = await incorrectResponse.json();
          setIncorrectQuestions(data.incorrectQuestions);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const currentQuestions = (() => {
    switch (activeTab) {
      case 'all':
        return allQuestions;
      case 'bookmarked':
        return bookmarkedQuestions;
      case 'incorrect':
        return incorrectQuestions;
      default:
        return [];
    }
  })();

  const currentCount = currentQuestions.length;

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b-4 border-black pb-2">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`px-4 py-2 font-bold transition rounded-lg ${
              activeTab === tab.id
                ? 'bg-[var(--color-navy)] text-white border-2 border-black'
                : 'border-2 border-black bg-white text-[var(--color-navy)] hover:bg-[var(--color-cream)]'
            }`}
          >
            <span>{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {isLoading ? (
        <div className="py-12 text-center text-[var(--color-navy)]/60">
          Loading {TABS.find((t) => t.id === activeTab)?.label.toLowerCase()}...
        </div>
      ) : currentCount === 0 ? (
        <div className="rounded-lg border-4 border-black bg-[var(--color-cream)] p-8 text-center">
          <p className="text-lg font-bold text-[var(--color-navy)]">
            {activeTab === 'bookmarked' && '⭐ No bookmarked questions yet'}
            {activeTab === 'incorrect' && '❌ No incorrect attempts yet'}
            {activeTab === 'all' && '📋 No questions attempted yet'}
          </p>
          <p className="mt-2 text-sm text-[var(--color-navy)]/60">
            {activeTab === 'bookmarked' && 'Save questions to review them here'}
            {activeTab === 'incorrect' && 'Keep practicing to improve!'}
            {activeTab === 'all' && 'Start training to see your attempted questions'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm font-bold text-[var(--color-navy)]/70">
            {currentCount} question{currentCount === 1 ? '' : 's'}
          </p>
          <div className="rounded-lg border-4 border-black bg-[var(--color-cream)] overflow-hidden">
            <div className="divide-y-2 divide-black">
              {currentQuestions.map((q) => (
                <div
                  key={q.id}
                  className="p-4 hover:bg-[var(--color-yellow)]/20 transition flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <Link
                      href={`/training/${q.id}`}
                      className="block text-sm font-bold text-[var(--color-electric-blue)] hover:underline"
                    >
                      {q.competition} — {q.year} Q{q.questionNumber}
                    </Link>
                    <p className="text-xs text-[var(--color-navy)]/60 mt-1">
                      {q.topic}
                      {q.difficulty && ` • ${q.difficulty}`}
                    </p>
                    <p className="text-sm text-[var(--color-navy)] mt-2 line-clamp-2">
                      {q.questionText}
                    </p>
                  </div>
                  {answeredQuestionIds.has(q.id) && (
                    <div className="text-lg" title="Question attempted">
                      ✓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
