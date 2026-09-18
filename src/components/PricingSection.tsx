'use client';

// The plan comparison, shown on /pricing.
//
// Layout, colors and feature bullets are the original three-card design:
// a small grey Guest card and a blue Free card stacked on the left, with
// the large purple Pro card taking two columns on the right.
//
// What is NOT original: the Pro card's button. In the first version Pro did
// not exist yet, so that button was a disabled "Coming Soon". Pro is real
// now, so the button runs the actual Stripe checkout and the card shows the
// real founding price.
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

// What someone gets without an account at all.
const GUEST_FEATURES = ['Execute questions'];

// What a free account adds.
const FREE_FEATURES = [
  'Multiple choice',
  'Dashboard',
  'Progress tracking',
  'Review missed',
];

// The Pro card lists its features in two columns: what carries over from
// Free, and what is new in Pro.
const PRO_INCLUDED_FEATURES = [
  'All Free features',
  'Multiple choice',
  'Dashboard',
  'Progress tracking',
];

const PRO_PREMIUM_FEATURES = ['FRQ questions', 'Advanced FRQ', 'AI support'];

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
    <section className="border-t-[3px] border-b-[3px] border-ink bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-navy">Pricing Plans</h2>
        <p className="mt-2 text-center text-sm text-navy">Choose your learning path</p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left column: Guest + Free (smaller). The column fills the row,
              and both cards grow, so this column ends level with Pro. */}
          <div className="flex h-full flex-col gap-6">
            {/* Guest — what you get with no account at all. */}
            <div className="flex flex-auto flex-col rounded-lg border-[3px] border-ink bg-gray-100 p-5">
              <h4 className="text-lg font-extrabold text-gray-700">Guest</h4>
              <p className="mt-2 text-xs text-gray-600">No account</p>

              <div className="mt-3 flex-1 space-y-2">
                {GUEST_FEATURES.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <span aria-hidden className="text-sm">
                      ✓
                    </span>
                    <span className="text-xs font-semibold text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {!user ? (
                <Link
                  href="/training"
                  className="mt-4 block w-full rounded-lg border-[3px] border-ink bg-cream px-3 py-2 text-center text-xs font-bold text-navy transition-colors duration-200 hover:bg-cream/80"
                >
                  Continue as Guest
                </Link>
              ) : (
                <p className="mt-4 w-full rounded-lg border-[3px] border-ink bg-gray-400 px-3 py-2 text-center text-xs font-bold text-white opacity-60">
                  Already Using
                </p>
              )}
            </div>

            {/* Free — the account tier. */}
            <div className="flex flex-auto flex-col rounded-lg border-[3px] border-ink bg-electric p-5">
              <h4 className="text-lg font-extrabold text-white">Free</h4>
              <p className="mt-2 text-xs text-white/80">All basics included</p>

              <div className="mt-3 flex-1 space-y-2">
                {FREE_FEATURES.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <span aria-hidden className="text-sm">
                      ✓
                    </span>
                    <span className="text-xs font-semibold text-white">{feature}</span>
                  </div>
                ))}
              </div>

              {!user ? (
                <Link
                  href="/signup"
                  className="mt-4 block w-full rounded-lg border-[3px] border-ink bg-yellow px-3 py-2 text-center text-xs font-bold text-navy transition-colors duration-200 hover:bg-yellow/90"
                >
                  Sign Up Free
                </Link>
              ) : isPro ? (
                // A Pro subscriber must not be told Free is their plan.
                <p className="mt-4 w-full rounded-lg border-[3px] border-ink bg-white/20 px-3 py-2 text-center text-xs font-bold text-white">
                  Included in your Pro plan
                </p>
              ) : (
                <p className="mt-4 w-full rounded-lg border-[3px] border-ink bg-gray-400 px-3 py-2 text-center text-xs font-bold text-white opacity-60">
                  Current Plan
                </p>
              )}
            </div>
          </div>

          {/* Right column: Pro (larger, premium) */}
          <div className="lg:col-span-2">
            <div className="relative h-full rounded-lg border-[3px] border-ink bg-purple p-8 shadow-brutal-lg">
              {/* Where the "COMING SOON" tag used to sit. Pro has shipped, so
                  this now carries the real founding price instead. */}
              <div className="absolute -top-4 left-8 rounded border-[3px] border-ink bg-yellow px-4 py-1 text-sm font-extrabold text-navy">
                FOUNDING PRICE
              </div>

              <h3 className="mt-2 text-4xl font-extrabold text-white">Go Pro</h3>
              <p className="mt-3 text-lg text-white/90">
                Everything in Free, plus premium features
              </p>

              <div className="mt-4 flex flex-wrap items-baseline gap-2">
                <span className="text-5xl font-extrabold text-yellow">
                  ${PUBLIC_PRO_CONFIG.foundingPriceUsd}
                </span>
                <span className="text-xl font-bold text-white">/month</span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold uppercase text-yellow">Included</h4>
                  <div className="mt-3 space-y-2">
                    {PRO_INCLUDED_FEATURES.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <span aria-hidden className="text-xl text-yellow">
                          ✓
                        </span>
                        <span className="text-sm font-semibold text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase text-yellow">Premium</h4>
                  <div className="mt-3 space-y-2">
                    {PRO_PREMIUM_FEATURES.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <span aria-hidden className="text-xl text-yellow">
                          ★
                        </span>
                        <span className="text-sm font-semibold text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {error && (
                <p role="alert" className="mt-4 font-semibold text-yellow">
                  {error}
                </p>
              )}

              {/* The one part that is not the original design: a real button
                  in place of the old disabled "Coming Soon". */}
              <div className="mt-8">
                {!user ? (
                  // Signed out: authenticate first, then come back to subscribe.
                  <Link
                    href="/login?next=/pricing"
                    className="block w-full rounded-lg border-[3px] border-ink bg-yellow px-6 py-3 text-center text-lg font-extrabold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                  >
                    Sign in to unlock Pro
                  </Link>
                ) : isPro ? (
                  <div className="flex flex-wrap items-center gap-4">
                    <p className="rounded-lg border-[3px] border-ink bg-white/20 px-5 py-3 font-extrabold text-white">
                      Current plan
                      {entitlements?.isFoundingPrice && ' · founding price'}
                    </p>
                    <button
                      type="button"
                      onClick={manage}
                      disabled={busy}
                      className="rounded-lg border-[3px] border-ink bg-white px-5 py-3 font-bold text-navy transition-colors duration-200 hover:bg-cream disabled:opacity-60"
                    >
                      {busy ? 'Opening…' : 'Manage subscription'}
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={goPro}
                    disabled={busy}
                    className="w-full rounded-lg border-[3px] border-ink bg-yellow px-6 py-3 text-lg font-extrabold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white disabled:opacity-60"
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
