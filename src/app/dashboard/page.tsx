'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';

interface UserAttempt {
  id: string;
  questionId: string;
  submittedAnswer: string;
  isCorrect: boolean;
  createdAt: string;
}

interface ProgressStats {
  totalAttempted: number;
  uniqueCorrect: number;
  accuracy: number;
  recentAttempts: UserAttempt[];
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();
  const [stats, setStats] = useState<ProgressStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [error, setError] = useState('');

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Fetch user stats
  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return;

      try {
        // Get the session to extract the access token
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          setError('Session expired. Please log in again.');
          return;
        }

        // Call API with Authorization header
        const response = await fetch('/api/dashboard/stats', {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch stats: ${response.status}`);
        }

        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading stats');
      } finally {
        setStatsLoading(false);
      }
    };

    if (user) {
      fetchStats();
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[var(--color-navy)] flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-navy)] text-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-extrabold">
            <span className="text-[var(--color-yellow)]">Dashboard</span>
          </h1>
          <button
            onClick={handleLogout}
            className="rounded-lg border-2 border-[var(--color-yellow)] px-4 py-2 font-semibold text-[var(--color-yellow)] transition hover:bg-[var(--color-yellow)] hover:text-[var(--color-navy)]"
          >
            Log Out
          </button>
        </div>

        <p className="text-white/70 mb-8">Welcome, {user.email}</p>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border-2 border-red-500 rounded text-red-700">
            {error}
          </div>
        )}

        {statsLoading ? (
          <div className="flex items-center justify-center py-20">
            <p>Loading your stats...</p>
          </div>
        ) : stats ? (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border-4 border-black bg-[var(--color-cream)] p-6 shadow-[6px_6px_0_0_#000]">
                <p className="text-sm text-[var(--color-navy)]">Questions Attempted</p>
                <p className="mt-2 text-4xl font-extrabold text-[var(--color-electric-blue)]">
                  {stats.totalAttempted}
                </p>
              </div>

              <div className="rounded-xl border-4 border-black bg-[var(--color-cream)] p-6 shadow-[6px_6px_0_0_#000]">
                <p className="text-sm text-[var(--color-navy)]">Unique Correct</p>
                <p className="mt-2 text-4xl font-extrabold text-[var(--color-yellow)]">
                  {stats.uniqueCorrect}
                </p>
              </div>

              <div className="rounded-xl border-4 border-black bg-[var(--color-cream)] p-6 shadow-[6px_6px_0_0_#000]">
                <p className="text-sm text-[var(--color-navy)]">Accuracy</p>
                <p className="mt-2 text-4xl font-extrabold text-[var(--color-purple)]">
                  {stats.accuracy}%
                </p>
              </div>
            </div>

            {/* Recent Attempts */}
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Recent Attempts</h2>
              {stats.recentAttempts.length > 0 ? (
                <div className="rounded-xl border-4 border-black bg-[var(--color-cream)] overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-[var(--color-space-blue)]">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">Question</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">Answer</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">Result</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">When</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-black">
                      {stats.recentAttempts.map((attempt) => (
                        <tr key={attempt.id} className="hover:bg-[var(--color-electric-blue)]/10">
                          <td className="px-6 py-3 text-sm font-semibold text-[var(--color-navy)]">
                            {attempt.questionId.slice(0, 8)}...
                          </td>
                          <td className="px-6 py-3 text-sm text-[var(--color-navy)]">
                            {attempt.submittedAnswer.slice(0, 20)}...
                          </td>
                          <td className="px-6 py-3">
                            <span
                              className={`inline-block px-3 py-1 rounded font-semibold text-sm ${
                                attempt.isCorrect
                                  ? 'bg-green-200 text-green-800'
                                  : 'bg-red-200 text-red-800'
                              }`}
                            >
                              {attempt.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-sm text-[var(--color-navy)]">
                            {new Date(attempt.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-white/70">No attempts yet. Start training to see your progress!</p>
              )}
            </div>

            {/* CTA */}
            <div>
              <a
                href="/training"
                className="inline-block rounded-lg border-4 border-black bg-[var(--color-electric-blue)] px-6 py-3 font-bold text-white shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Continue Training
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
