"use client";

// The account's plan, and the one button that manages it.
//
// The plan shown here is whatever the server says it is. There is no
// client-side `isPro` flag anywhere in Astro Coach — this component asks
// /api/pro/entitlements and renders the answer.
//
// Cancelling, changing a card and viewing invoices all happen in the Stripe
// Billing Portal; Astro Coach deliberately builds none of that itself.

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  fetchEntitlements,
  openBillingPortal,
  startProCheckout,
  type EntitlementsResponse,
} from "@/lib/pro/client";
import { PUBLIC_PRO_CONFIG } from "@/lib/pro/public-config";

export default function SubscriptionCard() {
  const [entitlements, setEntitlements] = useState<EntitlementsResponse | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    fetchEntitlements()
      .then((response) => active && setEntitlements(response))
      .catch(() => active && setError("Could not load your plan."));

    return () => {
      active = false;
    };
  }, []);

  async function run(action: () => Promise<void>) {
    setBusy(true);
    setError(null);
    try {
      await action();
    } catch {
      setError("Could not open Stripe. Please try again.");
      setBusy(false);
    }
  }

  if (error && !entitlements) return null;
  if (!entitlements) return null;

  const { isPro, status, credits, currentPeriodEnd, isFoundingPrice } = entitlements;

  return (
    <div className="rounded-xl border-4 border-black bg-[var(--color-cream)] p-6 shadow-[6px_6px_0_0_#000]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-[var(--color-navy)]">Your plan</p>
          <p className="text-2xl font-extrabold text-[var(--color-navy)]">
            {isPro ? "Astro Coach Pro" : "Free"}
            {isPro && isFoundingPrice && (
              <span className="ml-2 rounded border-2 border-black bg-[var(--color-yellow)] px-2 py-0.5 align-middle text-xs font-extrabold">
                FOUNDING PRICE
              </span>
            )}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-[var(--color-navy)]">AI grades left</p>
          <p className="text-2xl font-extrabold text-[var(--color-purple)]">
            {credits.remaining} / {credits.total}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-[var(--color-navy)]/80">
        {statusLine(status, credits.resetsAt, currentPeriodEnd)}
      </p>

      {error && (
        <p role="alert" className="mt-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        {isPro ? (
          <button
            type="button"
            onClick={() => run(openBillingPortal)}
            disabled={busy}
            className="rounded-lg border-4 border-black bg-white px-5 py-2 font-bold text-[var(--color-navy)] transition hover:bg-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)] disabled:opacity-60"
          >
            {busy ? "Opening…" : "Manage subscription"}
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={() => run(startProCheckout)}
              disabled={busy}
              className="rounded-lg border-4 border-black bg-[var(--color-yellow)] px-5 py-2 font-extrabold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)] disabled:opacity-60"
            >
              {busy ? "Opening…" : `Unlock Pro — $${PUBLIC_PRO_CONFIG.foundingPriceUsd}/mo`}
            </button>
            <Link
              href="/pricing"
              className="rounded-lg border-4 border-black bg-white px-5 py-2 font-bold text-[var(--color-navy)] transition hover:bg-gray-100"
            >
              See what Pro includes
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

function statusLine(
  status: EntitlementsResponse["status"],
  resetsAt: string | null,
  periodEnd: string | null,
): string {
  const resetDate = resetsAt ? new Date(resetsAt).toLocaleDateString() : null;
  const endDate = periodEnd ? new Date(periodEnd).toLocaleDateString() : null;

  switch (status) {
    case "active":
      return resetDate
        ? `Your ${PUBLIC_PRO_CONFIG.proPeriodGrades} AI grades reset on ${resetDate}.`
        : "Your subscription is active.";
    case "canceling":
      return endDate
        ? `Cancelled — your Pro access continues until ${endDate}.`
        : "Cancelled — your Pro access continues until the end of the billing period.";
    case "past_due":
      return "We could not take your last payment. Update your card in the billing portal to keep Pro.";
    case "expired":
      return "Your Pro subscription has ended.";
    default:
      return `Free accounts include ${PUBLIC_PRO_CONFIG.freeLifetimeGrades} lifetime AI grades.`;
  }
}
