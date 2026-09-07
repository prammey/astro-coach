// Turns a Stripe subscription into the row we store, and writes it.
//
// Stripe is the source of truth for who is Pro. Nothing in this file is
// ever called because a browser said a payment succeeded — only from a
// signature-verified webhook, or from an explicit server-side refetch.

import type Stripe from "stripe";
import type { PrismaClient } from "@/generated/prisma/client";
import { getPrisma } from "@/lib/prisma";

/// The flat shape we mirror into the Subscription table.
export type SubscriptionFields = {
  plan: "FREE" | "PRO";
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  stripePriceId: string | null;
  stripeStatus: string;
  currentPeriodStart: Date | null;
  currentPeriodEnd: Date | null;
  cancelAtPeriodEnd: boolean;
  isFoundingPrice: boolean;
};

/// Stripe statuses that mean the subscription is worth Pro access. Anything
/// else (canceled, unpaid, incomplete, incomplete_expired, paused) drops
/// the stored plan back to FREE.
const PRO_STATUSES = new Set(["active", "trialing", "past_due"]);

function toDate(seconds: number | null | undefined): Date | null {
  return typeof seconds === "number" ? new Date(seconds * 1000) : null;
}

/// Reads the billing period off a Stripe subscription.
///
/// Recent Stripe API versions moved `current_period_start/end` from the
/// subscription onto its items, so we read the item first and fall back to
/// the legacy top-level fields. Handling both means the app keeps working
/// across an API version bump instead of silently losing reset dates.
function readBillingPeriod(subscription: Stripe.Subscription): {
  start: Date | null;
  end: Date | null;
} {
  const item = subscription.items?.data?.[0] as
    | (Stripe.SubscriptionItem & {
        current_period_start?: number;
        current_period_end?: number;
      })
    | undefined;

  const legacy = subscription as Stripe.Subscription & {
    current_period_start?: number;
    current_period_end?: number;
  };

  return {
    start: toDate(item?.current_period_start ?? legacy.current_period_start),
    end: toDate(item?.current_period_end ?? legacy.current_period_end),
  };
}

/// Maps a Stripe subscription onto our fields. Pure, so it is unit-tested
/// directly against realistic Stripe payloads.
export function mapSubscription(
  subscription: Stripe.Subscription,
  foundingPriceId: string | undefined,
): SubscriptionFields {
  const priceId = subscription.items?.data?.[0]?.price?.id ?? null;
  const period = readBillingPeriod(subscription);

  return {
    plan: PRO_STATUSES.has(subscription.status) ? "PRO" : "FREE",
    stripeCustomerId:
      typeof subscription.customer === "string"
        ? subscription.customer
        : subscription.customer.id,
    stripeSubscriptionId: subscription.id,
    stripePriceId: priceId,
    stripeStatus: subscription.status,
    currentPeriodStart: period.start,
    currentPeriodEnd: period.end,
    cancelAtPeriodEnd: subscription.cancel_at_period_end ?? false,
    // A subscription bought at the founding price keeps it for as long as it
    // stays active. We never migrate it to the regular price.
    isFoundingPrice: Boolean(foundingPriceId) && priceId === foundingPriceId,
  };
}

/// The Supabase user this subscription belongs to.
///
/// We set `metadata.supabaseUserId` when creating the Checkout Session, and
/// Stripe copies subscription metadata through, so this is reliable. The
/// customer's metadata is the fallback for subscriptions created elsewhere
/// (for example in the Stripe dashboard during testing).
export function readSupabaseUserId(
  subscription: Stripe.Subscription,
): string | null {
  const fromSubscription = subscription.metadata?.supabaseUserId;
  if (fromSubscription) return fromSubscription;

  const customer = subscription.customer;
  if (typeof customer !== "string" && !("deleted" in customer && customer.deleted)) {
    const metadata = (customer as Stripe.Customer).metadata;
    if (metadata?.supabaseUserId) return metadata.supabaseUserId;
  }

  return null;
}

/// Writes the mirrored subscription for a user. One row per user, so a
/// resubscription updates in place rather than leaving a stale record.
export async function upsertSubscription(
  userId: string,
  fields: SubscriptionFields,
  prisma: PrismaClient = getPrisma(),
): Promise<void> {
  await prisma.subscription.upsert({
    where: { userId },
    create: { userId, ...fields },
    update: fields,
  });
}

/// Drops a user back to Free, keeping the Stripe IDs so the Billing Portal
/// still works and their history stays attributable.
export async function markSubscriptionEnded(
  stripeSubscriptionId: string,
  stripeStatus: string,
  prisma: PrismaClient = getPrisma(),
): Promise<void> {
  await prisma.subscription.updateMany({
    where: { stripeSubscriptionId },
    data: { plan: "FREE", stripeStatus, cancelAtPeriodEnd: false },
  });
}

/// Records that a Stripe event has been handled, and reports whether this
/// call is the one that claimed it.
///
/// This is the idempotency gate for the webhook. Stripe retries deliveries,
/// and a retry must not apply the same state change twice. Inserting the
/// event ID first means the second delivery loses the race against the
/// primary key and returns false.
export async function claimWebhookEvent(
  eventId: string,
  eventType: string,
  prisma: PrismaClient = getPrisma(),
): Promise<boolean> {
  try {
    await prisma.stripeWebhookEvent.create({
      data: { id: eventId, type: eventType },
    });
    return true;
  } catch {
    // Unique violation on the primary key: already handled.
    return false;
  }
}

/// Releases a claim so Stripe's retry is treated as fresh work. Called only
/// when handling failed part-way, so a failed event is not remembered as
/// successfully processed.
export async function releaseWebhookEvent(
  eventId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<void> {
  await prisma.stripeWebhookEvent.delete({ where: { id: eventId } }).catch(() => {});
}
