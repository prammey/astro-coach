'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';

type TabType = 'all' | 'bookmarked' | 'incorrect';

interface AttemptRow {
  id: string;
  questionId: string;
  submittedAnswer: string | null;
  isCorrect: boolean | null;
  createdAt: string;
}

const TABS: { id: TabType; label: string }[] = [
  { id: 'all', label: 'All Questions' },
  { id: 'bookmarked', label: 'Bookmarked' },
  { id: 'incorrect', label: 'Incorrect' },
];

export default function DashboardTabs() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [allAttempts, setAllAttempts] = useState<AttemptRow[]>([]);
  const [bookmarkedAttempts, setBookmarkedAttempts] = useState<AttemptRow[]>([]);
  const [incorrectAttempts, setIncorrectAttempts] = useState<AttemptRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const session = await supabase.auth.getSession();
        const token = session.data.session?.access_token;
        if (!token) return;

        const headers = { Authorization: `Bearer ${token}` };

        const [allRes, bookmarkedRes, incorrectRes] = await Promise.all([
          fetch('/api/user/all-attempts', { headers }),
          fetch('/api/user/bookmarked-questions', { headers }),
          fetch('/api/user/incorrect-questions', { headers }),
        ]);

        if (allRes.ok) setAllAttempts((await allRes.json()).attempts);
        if (bookmarkedRes.ok) setBookmarkedAttempts((await bookmarkedRes.json()).attempts);
        if (incorrectRes.ok) setIncorrectAttempts((await incorrectRes.json()).attempts);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const currentRows = (() => {
    switch (activeTab) {
      case 'all':
        return allAttempts;
      case 'bookmarked':
        return bookmarkedAttempts;
      case 'incorrect':
        return incorrectAttempts;
    }
  })();

  return (
    <div>
      {/* Chrome-style trapezoid tab bar */}
      <div className="flex w-full" style={{ paddingBottom: 0 }}>
        {TABS.map((tab, i) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 pt-3 pb-4 text-lg font-extrabold text-[var(--color-yellow)] transition-all duration-150 ${
                isActive
                  ? 'bg-[var(--color-cream)] z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.15)]'
                  : 'bg-[var(--color-space-blue)] hover:bg-[var(--color-space-blue)]/80 z-10'
              }`}
              style={{
                clipPath: 'polygon(7% 0%, 93% 0%, 100% 100%, 0% 100%)',
                marginLeft: i === 0 ? 0 : '-3%',
                position: 'relative',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Table content */}
      <div className="relative z-10 rounded-b-xl rounded-tr-xl bg-[var(--color-cream)] overflow-hidden -mt-1 shadow-[0_6px_16px_rgba(0,0,0,0.15)]">
        {isLoading ? (
          <p className="p-6 text-[var(--color-navy)]/70">Loading...</p>
        ) : (
          <table className="w-full">
            <thead className="bg-[var(--color-space-blue)]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Question</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Your Answer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">Result</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">When</th>
              </tr>
            </thead>
            {currentRows.length > 0 ? (
            <tbody className="divide-y-2 divide-black">
              {currentRows.map((row) => (
                <tr key={row.id} className="hover:bg-[var(--color-electric-blue)]/10">
                  <td className="px-6 py-3 text-sm font-semibold">
                    <Link
                      href={`/training/${row.questionId}`}
                      className="text-[var(--color-electric-blue)] underline hover:text-[var(--color-purple)] transition-colors"
                    >
                      {row.questionId}
                    </Link>
                  </td>
                  <td className="px-6 py-3 text-sm font-semibold text-[var(--color-navy)]">
                    {row.submittedAnswer ?? '—'}
                  </td>
                  <td className="px-6 py-3">
                    {row.isCorrect === null ? (
                      <span className="inline-block px-3 py-1 rounded font-semibold text-sm bg-gray-200 text-gray-700">
                        Not attempted
                      </span>
                    ) : (
                      <span
                        className={`inline-block px-3 py-1 rounded font-semibold text-sm ${
                          row.isCorrect
                            ? 'bg-green-200 text-green-800'
                            : 'bg-red-200 text-red-800'
                        }`}
                      >
                        {row.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-sm text-[var(--color-navy)]">
                    {new Date(row.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-[var(--color-navy)]/70">
                    {activeTab === 'bookmarked' && 'No bookmarked questions yet.'}
                    {activeTab === 'incorrect' && 'No incorrect attempts yet.'}
                    {activeTab === 'all' && 'No attempts yet. Start training to see your progress!'}
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        )}
      </div>
    </div>
  );
}
