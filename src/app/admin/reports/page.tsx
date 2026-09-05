'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import PageContainer from '@/components/PageContainer';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';

type Report = {
  id: string;
  questionId: string;
  questionLabel: string | null;
  reason: string;
  details: string | null;
  userEmail: string | null;
  status: string;
  createdAt: string;
};

const REASON_LABELS: Record<string, string> = {
  needs_image: 'Needs an image',
  wrong_answer: 'Wrong answer',
  wrong_explanation: 'Wrong explanation',
  typo: 'Typo or formatting',
  other: 'Something else',
};

// Reports that need an image or have a wrong answer are the ones that make
// a question unusable, so they are worth spotting at a glance.
const REASON_TONE: Record<string, string> = {
  needs_image: 'bg-[var(--color-yellow)] text-[var(--color-navy)]',
  wrong_answer: 'bg-red-200 text-red-900',
  wrong_explanation: 'bg-orange-200 text-orange-900',
  typo: 'bg-[var(--color-electric-blue)] text-white',
  other: 'bg-[var(--color-purple)] text-white',
};

// Admin-only list of problems learners reported. The API does the real
// authorization; this page only decides what to show.
export default function AdminReportsPage() {
  const { user, loading: authLoading } = useAuth();
  const [reports, setReports] = useState<Report[]>([]);
  const [counts, setCounts] = useState({ open: 0, resolved: 0 });
  const [filter, setFilter] = useState<'open' | 'resolved' | 'all'>('open');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Nothing sets state before the first await, so calling this from an
  // effect does not trigger a cascading render.
  const load = useCallback(async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setError('Please log in to view this page.');
        return;
      }

      const response = await fetch(`/api/admin/reports?status=${filter}`, {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setError(data?.error || 'Could not load reports');
        return;
      }

      const data = await response.json();
      setReports(data.reports);
      setCounts(data.counts);
      setError('');
    } catch {
      setError('Could not load reports');
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    if (authLoading || !user) return;
    const run = async () => {
      await load();
    };
    run();
  }, [authLoading, user, load]);

  // Derived rather than stored, so signing out does not need an effect to
  // write state (which would cause a cascading render).
  const signedOut = !authLoading && !user;

  async function setStatus(id: string, status: 'open' | 'resolved') {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return;

    // Update locally first so the list feels immediate, then reload for
    // accurate counts.
    setReports((current) => current.filter((report) => report.id !== id));

    await fetch('/api/admin/reports', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({ id, status }),
    });

    load();
  }

  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)] sm:text-4xl">
        Reported problems
      </h1>
      <p className="mt-2 text-[var(--color-navy)]/70">
        Problems learners flagged on questions. {counts.open} open, {counts.resolved} resolved.
      </p>

      <div className="mt-6 flex gap-2">
        {(['open', 'resolved', 'all'] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
              setLoading(true);
              setFilter(option);
            }}
            className={`rounded-lg border-2 border-black px-4 py-2 text-sm font-bold capitalize transition ${
              filter === option
                ? 'bg-[var(--color-navy)] text-white'
                : 'bg-white text-[var(--color-navy)] hover:bg-[var(--color-cream)]'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {signedOut ? (
        <div className="mt-8 rounded-lg border-4 border-black bg-red-100 p-4 font-bold text-red-800">
          Please log in to view this page.
        </div>
      ) : authLoading || loading ? (
        <p className="mt-8 text-[var(--color-navy)]/60">Loading...</p>
      ) : error ? (
        <div className="mt-8 rounded-lg border-4 border-black bg-red-100 p-4 font-bold text-red-800">
          {error}
        </div>
      ) : reports.length === 0 ? (
        <div className="mt-8 rounded-lg border-4 border-black bg-[var(--color-cream)] p-8 text-center">
          <p className="font-bold text-[var(--color-navy)]">Nothing here</p>
          <p className="mt-1 text-sm text-[var(--color-navy)]/60">
            No {filter === 'all' ? '' : filter} reports.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="rounded-lg border-4 border-black bg-white p-4 shadow-[4px_4px_0_0_#000]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded px-2 py-1 text-xs font-bold ${
                    REASON_TONE[report.reason] ?? 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {REASON_LABELS[report.reason] ?? report.reason}
                </span>
                {report.status === 'resolved' && (
                  <span className="rounded bg-green-200 px-2 py-1 text-xs font-bold text-green-900">
                    Resolved
                  </span>
                )}
                <span className="ml-auto text-xs text-[var(--color-navy)]/50">
                  {new Date(report.createdAt).toLocaleString()}
                </span>
              </div>

              <Link
                href={`/training/${report.questionId}`}
                className="mt-2 block font-bold text-[var(--color-electric-blue)] hover:underline"
              >
                {report.questionLabel ?? report.questionId}
              </Link>
              <p className="text-xs text-[var(--color-navy)]/50">{report.questionId}</p>

              {report.details && (
                <p className="mt-3 whitespace-pre-wrap rounded border-2 border-black/10 bg-[var(--color-cream)] p-3 text-sm text-[var(--color-navy)]">
                  {report.details}
                </p>
              )}

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-xs text-[var(--color-navy)]/60">
                  {report.userEmail ? (
                    <>
                      From{' '}
                      <a
                        href={`mailto:${report.userEmail}`}
                        className="font-bold text-[var(--color-electric-blue)] hover:underline"
                      >
                        {report.userEmail}
                      </a>
                    </>
                  ) : (
                    'Anonymous'
                  )}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setStatus(report.id, report.status === 'open' ? 'resolved' : 'open')
                  }
                  className="ml-auto rounded-lg border-2 border-black bg-[var(--color-electric-blue)] px-3 py-1.5 text-sm font-bold text-white transition hover:bg-[var(--color-electric-blue)]/90"
                >
                  {report.status === 'open' ? 'Mark resolved' : 'Reopen'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageContainer>
  );
}
