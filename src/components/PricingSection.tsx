'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';

export default function PricingSection() {
  const { user } = useAuth();

  return (
    <section className="border-t-4 border-b-4 border-black bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[var(--color-navy)] text-center">
          Pricing Plans
        </h2>
        <p className="mt-2 text-center text-sm text-[var(--color-navy)]">Choose your learning path</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Guest + Free (smaller) */}
          <div className="space-y-6">
            {/* Guest */}
            <div className="rounded-lg border-4 border-black bg-gray-100 p-5">
              <h4 className="text-lg font-extrabold text-gray-700">Guest</h4>
              <p className="mt-2 text-xs text-gray-600">No account</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-sm">✓</span>
                  <span className="text-xs font-semibold text-gray-700">Execute questions</span>
                </div>
              </div>
              {!user ? (
                <Link
                  href="/training"
                  className="mt-4 w-full block rounded-lg border-4 border-black bg-[var(--color-cream)] px-3 py-2 font-bold text-xs text-[var(--color-navy)] text-center hover:bg-[var(--color-cream)]/80 transition"
                >
                  Continue as Guest
                </Link>
              ) : (
                <button className="mt-4 w-full rounded-lg border-4 border-black bg-gray-400 px-3 py-2 font-bold text-xs text-white cursor-not-allowed opacity-60">
                  Already Using
                </button>
              )}
            </div>

            {/* Free */}
            <div className="rounded-lg border-4 border-black bg-[var(--color-electric-blue)] p-5">
              <h4 className="text-lg font-extrabold text-white">Free</h4>
              <p className="mt-2 text-xs text-white/80">All basics included</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-sm">✓</span>
                  <span className="text-xs font-semibold text-white">Multiple choice</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm">✓</span>
                  <span className="text-xs font-semibold text-white">Dashboard</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm">✓</span>
                  <span className="text-xs font-semibold text-white">Progress tracking</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm">✓</span>
                  <span className="text-xs font-semibold text-white">Review missed</span>
                </div>
              </div>
              {user ? (
                <button className="mt-4 w-full rounded-lg border-4 border-black bg-gray-400 px-3 py-2 font-bold text-xs text-white cursor-not-allowed opacity-60">
                  Current Plan
                </button>
              ) : (
                <Link
                  href="/signup"
                  className="mt-4 w-full block rounded-lg border-4 border-black bg-[var(--color-yellow)] px-3 py-2 font-bold text-xs text-[var(--color-navy)] text-center hover:bg-[var(--color-yellow)]/90 transition"
                >
                  Sign Up Free
                </Link>
              )}
            </div>
          </div>

          {/* Right column: Pro (larger, premium) */}
          <div className="lg:col-span-2">
            <div className="relative h-full rounded-lg border-4 border-black bg-[var(--color-purple)] p-8 shadow-[8px_8px_0_0_#000]">
              <div className="absolute -top-4 left-8 bg-[var(--color-yellow)] border-4 border-black px-4 py-1 rounded font-extrabold text-sm text-[var(--color-navy)]">
                COMING SOON
              </div>

              <h3 className="text-4xl font-extrabold text-white mt-2">Go Pro</h3>
              <p className="mt-3 text-lg text-white/90">Everything in Free, plus premium features</p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[var(--color-yellow)] text-sm uppercase">Included</h4>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-xl text-[var(--color-yellow)]">✓</span>
                      <span className="text-sm font-semibold text-white">All Free features</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl text-[var(--color-yellow)]">✓</span>
                      <span className="text-sm font-semibold text-white">Multiple choice</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl text-[var(--color-yellow)]">✓</span>
                      <span className="text-sm font-semibold text-white">Dashboard</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl text-[var(--color-yellow)]">✓</span>
                      <span className="text-sm font-semibold text-white">Progress tracking</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[var(--color-yellow)] text-sm uppercase">Premium</h4>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-xl text-[var(--color-yellow)]">★</span>
                      <span className="text-sm font-semibold text-white">FRQ questions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl text-[var(--color-yellow)]">★</span>
                      <span className="text-sm font-semibold text-white">Advanced FRQ</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl text-[var(--color-yellow)]">★</span>
                      <span className="text-sm font-semibold text-white">AI support</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                disabled
                className="mt-8 w-full rounded-lg border-4 border-black bg-gray-400 px-6 py-3 font-extrabold text-white text-lg cursor-not-allowed opacity-60"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
