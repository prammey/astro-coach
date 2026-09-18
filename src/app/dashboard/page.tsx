'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';
import DashboardTabs from '@/components/DashboardTabs';
import SubscriptionCard from '@/components/pro/SubscriptionCard';
import ProAnalyticsPanel from '@/components/pro/ProAnalyticsPanel';
import BrutalCard from '@/components/BrutalCard';
import BrutalButton from '@/components/ui/BrutalButton';
import LoadingStar from '@/components/ui/LoadingStar';
import Reveal from '@/components/ui/Reveal';

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
  totalQuestions: number;
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
      <div className="starfield-dark flex min-h-screen items-center justify-center bg-navy">
        <LoadingStar tone="light" />
      </div>
    );
  }

  // Get greeting name from username, then first_name, with fallback to "Welcome!"
  const username = user.user_metadata?.username || user.user_metadata?.first_name;
  const greeting = username ? `Welcome, ${username}!` : 'Welcome!';

  return (
    <div className="starfield-dark min-h-screen bg-navy text-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-extrabold">
            <span className="text-yellow">Dashboard</span>
          </h1>
          <BrutalButton variant="ghost" size="sm" onClick={handleLogout}>
            Log out
          </BrutalButton>
        </div>

        <p className="text-white/70 mb-8">{greeting}</p>

        {error && (
          <div className="mb-6 p-4 rounded-lg border-[3px] border-danger bg-white font-semibold text-danger">
            {error}
          </div>
        )}

        {statsLoading ? (
          <div className="flex justify-center py-12">
            <LoadingStar tone="light" label="Loading your stats…" />
          </div>
        ) : stats ? (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid gap-6 sm:grid-cols-3">
              <Reveal>
                <BrutalCard tone="cream" hover>
                  <p className="text-sm font-semibold text-navy/80">Questions attempted</p>
                  <p className="mt-2 text-4xl font-extrabold text-electric">
                    {stats.totalAttempted}
                  </p>
                </BrutalCard>
              </Reveal>

              <Reveal delay={80}>
                <BrutalCard tone="cream" hover>
                  <p className="text-sm font-semibold text-navy/80">Unique correct</p>
                  <p className="mt-2 text-4xl font-extrabold text-navy">
                    {stats.uniqueCorrect}{' '}
                    <span className="text-2xl text-navy/50">/ {stats.totalQuestions}</span>
                  </p>
                </BrutalCard>
              </Reveal>

              <Reveal delay={160}>
                <BrutalCard tone="cream" hover>
                  <p className="text-sm font-semibold text-navy/80">Accuracy</p>
                  <p className="mt-2 text-4xl font-extrabold text-purple">{stats.accuracy}%</p>
                </BrutalCard>
              </Reveal>
            </div>

            {/* Plan, credits and subscription management. */}
            <SubscriptionCard />

            {/* Pro analytics — or, for a Free account, a locked preview of
                them. The server sends no figures at all to a Free account,
                so the lock is real rather than a blur over real data. */}
            <ProAnalyticsPanel />

            {/* Questions Tabs */}
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">My Questions</h2>
              <DashboardTabs />
            </div>

            {/* CTA */}
            <div>
              <BrutalButton href="/training" variant="primary" size="lg">
                Continue training
              </BrutalButton>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
