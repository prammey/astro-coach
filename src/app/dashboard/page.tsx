'use client';

// The student dashboard, laid out top to bottom in the order people look
// for things:
//
//   1. Header, with a shortcut back to training.
//   2. Overview: multiple-choice and free-response numbers in one card.
//   3. Activity calendar and streaks (Pro).
//   4. Strengths by topic (Pro) beside Badges. A Free account sees its
//      plan card beside Badges instead.
//   5. My Questions: the scrollable table of past answers.
//   6. Free-response insights (Pro), or the locked Pro preview (Free).
//   7. Plan and subscription management (Pro).
//
// Which account is Pro only chooses the layout here. The server decides
// what each section may receive, and sends a Free account no Pro figures.

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';
import { apiGet, fetchEntitlements } from '@/lib/pro/client';
import type { ProAnalytics } from '@/lib/pro/analytics';
import DashboardTabs from '@/components/DashboardTabs';
import SubscriptionCard from '@/components/pro/SubscriptionCard';
import ActivitySection from '@/components/progress/ActivitySection';
import BadgesBox from '@/components/progress/BadgesBox';
import ProLockedPreview from '@/components/progress/ProLockedPreview';
import OverviewStats, { type Credits, type McqStats } from '@/components/dashboard/OverviewStats';
import StrengthsPanel from '@/components/dashboard/StrengthsPanel';
import FrqInsights from '@/components/dashboard/FrqInsights';
import BrutalButton from '@/components/ui/BrutalButton';
import LoadingStar from '@/components/ui/LoadingStar';

type ProAnalyticsResponse = { locked: true } | { locked: false; analytics: ProAnalytics };

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();
  const [stats, setStats] = useState<McqStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [error, setError] = useState('');
  // Whether this account is Pro (layout only) and its AI grade credits.
  const [isPro, setIsPro] = useState<boolean | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null);
  // Pro analytics (strengths, free-response insights), loaded once.
  const [analytics, setAnalytics] = useState<ProAnalytics | null>(null);

  // Send signed-out visitors to the login page.
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Multiple-choice stats.
  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return;

      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          setError('Session expired. Please log in again.');
          return;
        }

        const response = await fetch('/api/dashboard/stats', {
          headers: { Authorization: `Bearer ${session.access_token}` },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch stats: ${response.status}`);
        }

        setStats(await response.json());
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

  // The plan and credits, then (for Pro) the analytics.
  useEffect(() => {
    if (!user) return;
    let active = true;

    fetchEntitlements()
      .then(async (entitlements) => {
        if (!active) return;
        setIsPro(entitlements.isPro);
        setCredits(entitlements.credits);
        if (!entitlements.isPro) return;

        const response = await apiGet<ProAnalyticsResponse>('/api/dashboard/pro-analytics');
        if (active && !response.locked) setAnalytics(response.analytics);
      })
      .catch(() => active && setIsPro(false));

    return () => {
      active = false;
    };
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

  // Greeting from the username, then the first name, else a plain welcome.
  const username = user.user_metadata?.username || user.user_metadata?.first_name;
  const greeting = username ? `Welcome back, ${username}!` : 'Welcome back!';

  return (
    <div className="starfield-dark min-h-screen bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* 1. Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-yellow">Dashboard</h1>
            <p className="mt-1 text-white/70">{greeting}</p>
          </div>
          <div className="flex items-center gap-3">
            <BrutalButton href="/training" variant="primary" size="sm">
              Continue training
            </BrutalButton>
            <BrutalButton variant="ghost" size="sm" onClick={handleLogout}>
              Log out
            </BrutalButton>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border-[3px] border-danger bg-white p-4 font-semibold text-danger">
            {error}
          </div>
        )}

        {statsLoading ? (
          <div className="flex justify-center py-12">
            <LoadingStar tone="light" label="Loading your stats…" />
          </div>
        ) : stats ? (
          <div className="space-y-8">
            {/* 2. Overview */}
            <OverviewStats mcq={stats} frq={analytics?.frqOverview ?? null} credits={credits} />

            {/* 3. Activity (Pro) */}
            {isPro && <ActivitySection />}

            {/* 4. Strengths (Pro) or plan (Free), beside Badges */}
            <div className={`grid gap-6 lg:grid-cols-2 ${isPro ? "items-stretch" : "items-start"}`}>
              {isPro &&
                (analytics ? (
                  <StrengthsPanel
                    topics={analytics.topics}
                    strongestTopic={analytics.strongestTopic}
                    topicToPractiseNext={analytics.topicToPractiseNext}
                  />
                ) : (
                  <LoadingStar tone="light" label="Loading your strengths…" />
                ))}
              {isPro === false && <SubscriptionCard />}
              <BadgesBox matchHeight={Boolean(isPro && analytics)} />
            </div>

            {/* 5. My Questions */}
            <div>
              <h2 className="mb-4 text-2xl font-extrabold text-white">My Questions</h2>
              <DashboardTabs />
            </div>

            {/* 6. Free-response insights (Pro), or the locked preview (Free).
                The preview is made-up example data behind a blur — the
                server sends a Free account none of the real figures. */}
            {isPro && analytics && <FrqInsights analytics={analytics} />}
            {isPro === false && <ProLockedPreview />}

            {/* 7. Plan and subscription (Pro) */}
            {isPro && <SubscriptionCard />}
          </div>
        ) : null}
      </div>
    </div>
  );
}
