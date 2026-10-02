'use client';

// The plan comparison, shown on /pricing.
//
// Layout: a small grey Guest card and a blue Free card stacked on the left,
// with the large purple Pro card taking two columns on the right. Sized so
// the whole comparison fits on one laptop screen.
//
// Plan state comes from the server (/api/pro/entitlements), so what a
// signed-in person sees here matches what they can actually do. There is no
// client-side isPro flag deciding anything.

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

// What someone gets without an account at all.
const GUEST_FEATURES = ['Practice every multiple-choice question', 'Olympiad guide'];

// What a free account adds.
const FREE_FEATURES = [
  'Progress saved across devices',
  'Dashboard, badges and bookmarks',
  'Review the questions you missed',
  `Try free response: ${PUBLIC_PRO_CONFIG.freeLifetimeGrades} AI grades`,
];

// The Pro card lists its features in two columns: what carries over from
// Free, and what is new in Pro.
const PRO_INCLUDED_FEATURES = [
  'Everything in Free',
  'The full multiple-choice bank',
  'Progress, badges and bookmarks',
];

const PRO_PREMIUM_FEATURES = [
  'The full free-response bank',
  `${PUBLIC_PRO_CONFIG.proPeriodGrades} AI grades every month`,
  'Upload photos of your written work',
  'Streaks, activity calendar and topic strengths',
];

/// One tick-marked feature line. `tone` picks the colours for the card.
function FeatureLine({
  feature,
  mark = '✓',
  tone,
}: {
  feature: string;
  mark?: string;
  tone: 'grey' | 'blue' | 'purple';
}) {
  const markClass =
    tone === 'purple' ? 'text-yellow' : tone === 'blue' ? 'text-yellow' : 'text-gray-500';
  const textClass = tone === 'grey' ? 'text-gray-700' : 'text-white';

  return (
    <li className="flex items-start gap-2">
      <span aria-hidden className={`mt-px text-sm leading-5 ${markClass}`}>
        {mark}
      </span>
      <span className={`text-sm font-semibold leading-5 ${textClass}`}>{feature}</span>
    </li>
  );
}

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

  // Sends the student to Stripe Checkout.
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

  // Opens the Stripe Billing Portal (card, invoices).
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
    <section className="mx-auto max-w-5xl px-4 sm:px-6">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Left column: Guest + Free (smaller). Both cards grow so this
            column ends level with Pro. */}
        <div className="flex h-full flex-col gap-5">
          {/* Guest — what you get with no account at all. */}
          <div className="flex flex-auto flex-col rounded-lg border-[3px] border-ink bg-gray-100 p-4 shadow-brutal-sm">
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-extrabold text-gray-800">Guest</h2>
              <span className="text-sm font-bold text-gray-600">Free · no account</span>
            </div>

            <ul className="mt-3 flex-1 space-y-1.5">
              {GUEST_FEATURES.map((feature) => (
                <FeatureLine key={feature} feature={feature} tone="grey" />
              ))}
            </ul>

            {!user ? (
              <Link
                href="/training"
                className="mt-4 block w-full rounded-lg border-[3px] border-ink bg-cream px-3 py-2 text-center text-sm font-bold text-navy transition-colors duration-200 hover:bg-white"
              >
                Start practicing
              </Link>
            ) : (
              <p className="mt-4 w-full rounded-lg border-[3px] border-ink bg-gray-300 px-3 py-2 text-center text-sm font-bold text-gray-700">
                You&apos;re signed in
              </p>
            )}
          </div>

          {/* Free — the account tier. */}
          <div className="flex flex-auto flex-col rounded-lg border-[3px] border-ink bg-electric p-4 shadow-brutal-sm">
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-extrabold text-white">Free</h2>
              <span className="text-sm font-bold text-white/85">$0 · with an account</span>
            </div>

            <ul className="mt-3 flex-1 space-y-1.5">
              {FREE_FEATURES.map((feature) => (
                <FeatureLine key={feature} feature={feature} tone="blue" />
              ))}
            </ul>

            {!user ? (
              <Link
                href="/signup"
                className="mt-4 block w-full rounded-lg border-[3px] border-ink bg-yellow px-3 py-2 text-center text-sm font-bold text-navy transition-colors duration-200 hover:bg-yellow/90"
              >
                Sign up free
              </Link>
            ) : isPro ? (
              // A Pro subscriber must not be told Free is their plan.
              <p className="mt-4 w-full rounded-lg border-[3px] border-ink bg-white/20 px-3 py-2 text-center text-sm font-bold text-white">
                Included in your Pro plan
              </p>
            ) : (
              <p className="mt-4 w-full rounded-lg border-[3px] border-ink bg-white/20 px-3 py-2 text-center text-sm font-bold text-white">
                Your current plan
              </p>
            )}
          </div>
        </div>

        {/* Right column: Pro (larger, premium) */}
        <div className="lg:col-span-2">
          <div className="relative flex h-full flex-col rounded-lg border-[3px] border-ink bg-purple p-6 shadow-brutal-lg">
            <FoundingPriceBadge />

            <div className="absolute -top-4 left-6 rounded border-[3px] border-ink bg-yellow px-3 py-0.5 text-xs font-extrabold text-navy">
              FOUNDING PRICE
            </div>

            <h2 className="mt-1 text-3xl font-extrabold text-white">Go Pro</h2>
            <p className="mt-1 max-w-md text-white/90">
              Everything in Free, plus free-response practice with AI grading.
            </p>

            <p className="sr-only">
              Price goes up after {PUBLIC_PRO_CONFIG.foundingDeadlineShort}.
            </p>

            <div className="mt-3 flex flex-wrap items-baseline gap-2">
              <span className="text-4xl font-extrabold text-yellow">
                ${PUBLIC_PRO_CONFIG.foundingPriceUsd}
              </span>
              <span className="text-lg font-bold text-white">/month</span>
              <span className="text-sm text-white/60 line-through">
                ${PUBLIC_PRO_CONFIG.regularPriceUsd}
              </span>
            </div>

            <div className="mt-5 grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wide text-yellow">Included</h3>
                <ul className="mt-2 space-y-1.5">
                  {PRO_INCLUDED_FEATURES.map((feature) => (
                    <FeatureLine key={feature} feature={feature} tone="purple" />
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wide text-yellow">Premium</h3>
                <ul className="mt-2 space-y-1.5">
                  {PRO_PREMIUM_FEATURES.map((feature) => (
                    <FeatureLine key={feature} feature={feature} mark="★" tone="purple" />
                  ))}
                </ul>
              </div>
            </div>

            {error && (
              <p role="alert" className="mt-4 font-semibold text-yellow">
                {error}
              </p>
            )}

            <div className="mt-5">
              {!user ? (
                // Signed out: authenticate first, then come back to subscribe.
                <Link
                  href="/login?next=/pricing"
                  className="block w-full rounded-lg border-[3px] border-ink bg-yellow px-5 py-2.5 text-center font-extrabold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Sign in to unlock Pro
                </Link>
              ) : isPro ? (
                <div className="flex flex-wrap items-center gap-3">
                  <p className="rounded-lg border-[3px] border-ink bg-white/20 px-4 py-2 font-extrabold text-white">
                    Current plan
                    {entitlements?.isFoundingPrice && ' · founding price'}
                  </p>
                  <button
                    type="button"
                    onClick={manage}
                    disabled={busy}
                    className="rounded-lg border-[3px] border-ink bg-white px-4 py-2 font-bold text-navy transition-colors duration-200 hover:bg-cream disabled:opacity-60"
                  >
                    {busy ? 'Opening…' : 'Manage subscription'}
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={goPro}
                  disabled={busy}
                  className="w-full rounded-lg border-[3px] border-ink bg-yellow px-5 py-2.5 font-extrabold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white disabled:opacity-60"
                >
                  {busy ? 'Opening checkout…' : 'Unlock Astro Coach Pro'}
                </button>
              )}
            </div>

            <p className="mt-3 text-xs text-white/70">
              Cancel any time from your dashboard — you keep Pro until the end of the month
              you paid for. Founding price for anyone who joins by{' '}
              {PUBLIC_PRO_CONFIG.foundingDeadlineLabel}.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-white/60">
        Astro Coach is an independent training platform and is not affiliated with any
        competition organization.
      </p>
    </section>
  );
}
