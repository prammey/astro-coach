// Cancels a student's Pro at the end of the month they paid for, or undoes
// that cancellation before it takes effect.
//
// We only ask Stripe to change the subscription. Stripe stays the source of
// truth: its answer is mirrored into our table straight away (so the plan
// card updates at once), and the webhook writes the same thing again a
// moment later. When the paid period ends, Stripe ends the subscription and
// the existing `customer.subscription.deleted` webhook drops them to Free.
//
// SERVER-ONLY.

if (typeof window !== "undefined") {
  throw new Error("src/lib/stripe/cancel.ts must not be imported in the browser");
}

import type Stripe from "stripe";
import type { PrismaClient } from "@/generated/prisma/client";
import { getPrisma } from "@/lib/prisma";
import { getStripe } from "./client";
import { mapSubscription, upsertSubscription } from "./sync";

/// The one Stripe call this module makes. Spelled out so tests can fake it.
export type StripeSubscriptionsLike = {
  subscriptions: {
    update(id: string, params: { cancel_at_period_end: boolean }): Promise<Stripe.Subscription>;
  };
};

export type CancelDeps = {
  prisma: PrismaClient;
  stripe: StripeSubscriptionsLike;
};

export type CancelResult =
  | { ok: true; cancelAtPeriodEnd: boolean; currentPeriodEnd: Date | null }
  | { ok: false; status: number; error: string };

/// Turns "cancel at the end of this period" on (`cancel = true`) or off.
export async function setCancelAtPeriodEnd(
  userId: string,
  cancel: boolean,
  deps: CancelDeps = { prisma: getPrisma(), stripe: getStripe() },
): Promise<CancelResult> {
  const row = await deps.prisma.subscription.findUnique({ where: { userId } });

  // Only a current Pro subscription can be cancelled or resumed.
  if (!row?.stripeSubscriptionId || row.plan !== "PRO") {
    return { ok: false, status: 404, error: "You don't have an active Pro subscription." };
  }

  const updated = await deps.stripe.subscriptions.update(row.stripeSubscriptionId, {
    cancel_at_period_end: cancel,
  });

  // Mirror Stripe's own answer, exactly as the webhook would.
  const fields = mapSubscription(updated, process.env.STRIPE_FOUNDING_PRICE_ID);
  await upsertSubscription(userId, fields, deps.prisma);

  return {
    ok: true,
    cancelAtPeriodEnd: fields.cancelAtPeriodEnd,
    currentPeriodEnd: fields.currentPeriodEnd,
  };
}
