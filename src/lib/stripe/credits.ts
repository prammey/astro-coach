// Turning a paid Stripe checkout into extra AI grading credits.
//
// Called only from the verified Stripe webhook. Safe to call twice for the
// same checkout: each purchase is recorded with its checkout session ID,
// and a session that already has credits is skipped.
//
// SERVER-ONLY.

if (typeof window !== "undefined") {
  throw new Error("src/lib/stripe/credits.ts must not be imported in the browser");
}

import type Stripe from "stripe";
import type { PrismaClient } from "@/generated/prisma/client";
import { CREDIT_PRICE_CENTS, MAX_CREDIT_PURCHASE, MIN_CREDIT_PURCHASE } from "@/lib/pro/config";

/// Marks a checkout as a credit purchase (set in its metadata when the
/// checkout is created), so the webhook can tell it apart from a
/// subscription.
export const CREDIT_PURCHASE_KIND = "grading_credits";

/// How a purchase is recorded on its CreditGrant row.
export function creditGrantReason(sessionId: string): string {
  return `stripe-checkout:${sessionId}`;
}

export type CreditGrantOutcome =
  | { granted: true; userId: string; credits: number }
  | { granted: false; reason: "NOT_A_CREDIT_PURCHASE" | "NOT_PAID" | "BAD_METADATA" | "ALREADY_GRANTED" };

/// Adds the credits a completed checkout paid for.
export async function grantPurchasedCredits(
  session: Stripe.Checkout.Session,
  prisma: PrismaClient,
): Promise<CreditGrantOutcome> {
  if (session.mode !== "payment" || session.metadata?.kind !== CREDIT_PURCHASE_KIND) {
    return { granted: false, reason: "NOT_A_CREDIT_PURCHASE" };
  }
  if (session.payment_status !== "paid") {
    return { granted: false, reason: "NOT_PAID" };
  }

  // Both values were written by our own server when the checkout was made.
  const userId = session.metadata.supabaseUserId;
  const credits = Number(session.metadata.credits);
  if (!userId || !Number.isInteger(credits) || credits < MIN_CREDIT_PURCHASE || credits > MAX_CREDIT_PURCHASE) {
    console.error(`Credit checkout ${session.id} has unusable metadata`, session.metadata);
    return { granted: false, reason: "BAD_METADATA" };
  }

  // The amount charged should always match; if it ever does not, the
  // student still gets what they chose, and the mismatch is logged.
  if (session.amount_total !== null && session.amount_total !== credits * CREDIT_PRICE_CENTS) {
    console.error(
      `Credit checkout ${session.id}: charged ${session.amount_total} cents for ${credits} credits`,
    );
  }

  const reason = creditGrantReason(session.id);
  const already = await prisma.creditGrant.findFirst({ where: { reason }, select: { id: true } });
  if (already) return { granted: false, reason: "ALREADY_GRANTED" };

  await prisma.creditGrant.create({
    data: { userId, amount: credits, source: "PURCHASED", reason },
  });
  return { granted: true, userId, credits };
}
