"use client";

// The account's plan, and the buttons that manage it.
//
// The plan shown here is whatever the server says it is. There is no
// client-side `isPro` flag anywhere in Astro Coach — this component asks
// /api/pro/entitlements and renders the answer.
//
// Cancel Pro / Resume Pro are handled here (the account always stays).
// Changing a card and viewing invoices happen in the Stripe Billing Portal.

import { useEffect, useState } from "react";
import Link from "next/link";
import ConfirmDialog from "@/components/pro/ConfirmDialog";
import {
  ApiError,
  cancelPro,
  fetchEntitlements,
  openBillingPortal,
  resumePro,
  startProCheckout,
  type EntitlementsResponse,
} from "@/lib/pro/client";
import { PUBLIC_PRO_CONFIG } from "@/lib/pro/public-config";

export default function SubscriptionCard({ className = "" }: { className?: string }) {
  const [entitlements, setEntitlements] = useState<EntitlementsResponse | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmCancelOpen, setConfirmCancelOpen] = useState(false);
  // Separate from `busy` (which means "opening Stripe") so each button
  // shows the right label while the other one is working.
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    let active = true;

    fetchEntitlements()
      .then((response) => active && setEntitlements(response))
      .catch(() => active && setError("Could not load your plan."));

    return () => {
      active = false;
    };
  }, []);

  // Cancels or resumes Pro, then reloads the plan so the card shows the
  // new state (e.g. "Cancelled — your Pro access continues until …").
  async function changeSubscription(action: () => Promise<void>) {
    setChanging(true);
    setError(null);
    try {
      await action();
      setEntitlements(await fetchEntitlements());
      setConfirmCancelOpen(false);
    } catch (changeError) {
      setError(
        changeError instanceof ApiError
          ? changeError.message
          : "Could not update your subscription. Please try again.",
      );
    } finally {
      setChanging(false);
    }
  }

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
  const periodEndDate = currentPeriodEnd
    ? new Date(currentPeriodEnd).toLocaleDateString()
    : "the end of your billing period";

  return (
    <div className={`rounded-xl border-[3px] border-ink bg-cream p-6 shadow-brutal ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-navy">Your plan</p>
          <p className="text-2xl font-extrabold text-navy">
            {isPro ? "Astro Coach Pro" : "Free"}
            {isPro && isFoundingPrice && (
              <span className="ml-2 rounded border-2 border-ink bg-yellow px-2 py-0.5 align-middle text-xs font-extrabold">
                FOUNDING PRICE
              </span>
            )}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-navy">AI grades left</p>
          <p className="text-2xl font-extrabold text-purple">
            {credits.remaining} / {credits.total}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-navy/80">
        {statusLine(status, credits.resetsAt, currentPeriodEnd)}
      </p>

      {error && (
        <p role="alert" className="mt-3 text-sm font-semibold text-danger">
          {error}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        {isPro ? (
          <>
            {/* While a cancellation is pending, offer to undo it. */}
            {status === "canceling" && (
              <button
                type="button"
                onClick={() => changeSubscription(resumePro)}
                disabled={busy || changing}
                className="rounded-lg border-[3px] border-ink bg-yellow px-5 py-2 font-extrabold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 disabled:opacity-60"
              >
                {changing ? "Working…" : "Resume Pro"}
              </button>
            )}

            <button
              type="button"
              onClick={() => run(openBillingPortal)}
              disabled={busy || changing}
              className="rounded-lg border-[3px] border-ink bg-white px-5 py-2 font-bold text-navy transition hover:bg-cream focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 disabled:opacity-60"
            >
              {busy ? "Opening…" : "Manage subscription"}
            </button>

            {/* Cancel keeps the account; it only stops the next charge. */}
            {status !== "canceling" && (
              <button
                type="button"
                onClick={() => setConfirmCancelOpen(true)}
                disabled={busy || changing}
                className="rounded-lg px-3 py-2 text-sm font-bold text-navy/70 underline-offset-2 hover:text-danger hover:underline focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 disabled:opacity-60"
              >
                Cancel Pro
              </button>
            )}
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => run(startProCheckout)}
              disabled={busy}
              className="rounded-lg border-[3px] border-ink bg-yellow px-5 py-2 font-extrabold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 disabled:opacity-60"
            >
              {busy ? "Opening…" : `Unlock Pro — $${PUBLIC_PRO_CONFIG.foundingPriceUsd}/mo`}
            </button>
            <Link
              href="/pricing"
              className="rounded-lg border-[3px] border-ink bg-white px-5 py-2 font-bold text-navy transition hover:bg-cream"
            >
              See what Pro includes
            </Link>
          </>
        )}
      </div>

      <ConfirmDialog
        open={confirmCancelOpen}
        title="Cancel Astro Coach Pro?"
        confirmLabel="Cancel Pro"
        cancelLabel="Keep Pro"
        confirmTone="danger"
        busy={changing}
        onConfirm={() => changeSubscription(cancelPro)}
        onCancel={() => setConfirmCancelOpen(false)}
      >
        <p>
          You&apos;ll keep Pro until <strong>{periodEndDate}</strong>, then move to the Free
          plan. You won&apos;t be charged again.
        </p>
        <p>
          Your account, progress and any grading credits you bought all stay. You can resume
          Pro any time before then.
        </p>
      </ConfirmDialog>
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
