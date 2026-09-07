'use client';

// The plan comparison, shown on the homepage and on /pricing.
//
// Plan state comes from the server (/api/pro/entitlements), so what a
// signed-in person sees here matches what they can actually do. There is no
// client-side isPro flag deciding anything.
//
// Every feature listed is one that exists. Vague claims like "Advanced FRQ"
// have been replaced with what the product actually does.

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import {
  fetchEntitlements,
  openBillingPortal,
  startProCheckout,
  type EntitlementsResponse,
} from '@/lib/pro/client';
import { PUBLIC_PRO_CONFIG } from '@/lib/pro/public-config';
import FoundingPriceBadge from './pro/FoundingPriceBadge';

const FREE_FEATURES = [
  'All 726 multiple-choice questions',
  'Search, filters and bookmarks',
  'Explanations and progress tracking',
  `${PUBLIC_PRO_CONFIG.freeLifetimeGrades} lifetime AI free-response grades`,
];

const PRO_FEATURES = [
  'The full free-response question bank',
  `${PUBLIC_PRO_CONFIG.proPeriodGrades} AI grades every month`,
  'Rubric-based grading against the original marking scheme',
  'Part-by-part scores on the competition’s own point values',
  'Typed, handwritten and PDF submissions',
  `Up to ${PUBLIC_PRO_CONFIG.maxAttemptsPerFrq} graded attempts per question`,
  'Official solutions unlocked as you work through a problem',
  'Detailed topic analytics and progress trends',
  'Your strongest topics and common mistakes',
  'Every attempt, upload and piece of feedback saved',
];

export default function PricingSection() {
  const { user } = useAuth();
  const [entitlements, setEntitlements] = useState<EntitlementsResponse | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;

    let active = true;
    fetchEntitlements()
      .then((response) => active && setEntitlements(response))
      .catch(() => {
        /* Plan badges are cosmetic here; a failure just leaves them off. */
      });

    return () => {
      active = false;
    };
  }, [user]);

  // Guarded by `user` as well as the fetched state, so a signed-out visitor
  // never sees Pro copy from a stale response left over after signing out.
  const isPro = Boolean(user) && (entitlements?.isPro ?? false);

  async function goPro() {
    setBusy(true);
    setError(null);
    try {
      await startProCheckout();
    } catch {
      setError('Could not open checkout. Please try again.');
      setBusy(false);
    }
  }

  async function manage() {
    setBusy(true);
    setError(null);
    try {
      await openBillingPortal();
    } catch {
      setError('Could not open the billing portal. Please try again.');
      setBusy(false);
    }
  }

  return (
    <section className="border-t-4 border-b-4 border-black bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-[var(--color-navy)]">
          Pricing Plans
        </h2>
        <p className="mt-2 text-center text-sm text-[var(--color-navy)]">
          Choose your learning path
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Free */}
          <div className="rounded-lg border-4 border-black bg-[var(--color-electric-blue)] p-6">
            <h3 className="text-2xl font-extrabold text-white">Free</h3>
            <p className="mt-1 text-3xl font-extrabold text-white">$0</p>
            <p className="mt-2 text-sm text-white/80">
              Everything you need to start training.
            </p>

            <ul className="mt-5 space-y-2">
              {FREE_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span aria-hidden className="text-sm text-white">✓</span>
                  <span className="text-sm font-semibold text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              {!user ? (
                <Link
                  href="/signup"
                  className="block w-full rounded-lg border-4 border-black bg-[var(--color-yellow)] px-4 py-3 text-center font-bold text-[var(--color-navy)] transition hover:bg-[var(--color-yellow)]/90"
                >
                  Sign up free
                </Link>
              ) : isPro ? (
                // A Pro subscriber must not be shown a misleading "Sign up".
                <p className="rounded-lg border-4 border-black bg-white/20 px-4 py-3 text-center text-sm font-bold text-white">
                  Included in your Pro plan
                </p>
              ) : (
                <p className="rounded-lg border-4 border-black bg-white/20 px-4 py-3 text-center font-bold text-white">
                  Current plan
                </p>
              )}
            </div>
          </div>

          {/* Pro */}
          <div className="lg:col-span-2">
            <div className="relative h-full rounded-lg border-4 border-black bg-[var(--color-purple)] p-8 pr-8 shadow-[8px_8px_0_0_#000] sm:pr-32">
              <FoundingPriceBadge />

              <h3 className="mt-2 max-w-md text-4xl font-extrabold text-white">
                Astro Coach Pro
              </h3>

              <div className="mt-4 flex flex-wrap items-baseline gap-2">
                <span className="text-5xl font-extrabold text-[var(--color-yellow)]">
                  ${PUBLIC_PRO_CONFIG.foundingPriceUsd}
                </span>
                <span className="text-xl font-bold text-white">/month</span>
              </div>

              <p className="mt-2 max-w-md text-sm font-bold text-white">
                Founding price — lock it in before{' '}
                {PUBLIC_PRO_CONFIG.foundingDeadlineLabel}.
              </p>
              <p className="mt-1 max-w-md text-sm text-white/80">
                Price increases to ${PUBLIC_PRO_CONFIG.regularPriceUsd}/month for new
                subscribers after {PUBLIC_PRO_CONFIG.foundingDeadlineLabel}. Subscribe
                before then and you keep ${PUBLIC_PRO_CONFIG.foundingPriceUsd}/month for
                as long as your subscription stays active.
              </p>

              <p className="mt-6 font-bold text-[var(--color-yellow)]">
                Everything in Free, plus:
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {PRO_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span aria-hidden className="text-[var(--color-yellow)]">★</span>
                    <span className="text-sm font-semibold text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              {error && (
                <p role="alert" className="mt-4 font-semibold text-[var(--color-yellow)]">
                  {error}
                </p>
              )}

              <div className="mt-8">
                {!user ? (
                  // Signed out: authenticate first, then come back to subscribe.
                  <Link
                    href="/login?next=/pricing"
                    className="block w-full rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-4 text-center text-lg font-extrabold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                  >
                    Sign in to unlock Pro
                  </Link>
                ) : isPro ? (
                  <div className="flex flex-wrap items-center gap-4">
                    <p className="rounded-lg border-4 border-black bg-white/20 px-5 py-3 font-extrabold text-white">
                      Current plan
                      {entitlements?.isFoundingPrice && ' · founding price'}
                    </p>
                    <button
                      type="button"
                      onClick={manage}
                      disabled={busy}
                      className="rounded-lg border-4 border-black bg-white px-5 py-3 font-bold text-[var(--color-navy)] transition hover:bg-gray-100 disabled:opacity-60"
                    >
                      {busy ? 'Opening…' : 'Manage subscription'}
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={goPro}
                    disabled={busy}
                    className="w-full rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-4 text-lg font-extrabold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white disabled:opacity-60"
                  >
                    {busy ? 'Opening checkout…' : 'Unlock Astro Coach Pro'}
                  </button>
                )}
              </div>

              <p className="mt-4 text-xs text-white/70">
                Cancel any time from the billing portal. Astro Coach is an
                independent training platform and is not affiliated with any
                competition organisation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
