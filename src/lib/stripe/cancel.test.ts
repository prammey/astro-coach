// Tests for cancelling and resuming Pro. Stripe and the database are fakes
// that record what they were asked to do.

import { describe, expect, it, vi } from "vitest";
import type Stripe from "stripe";
import { setCancelAtPeriodEnd, type CancelDeps } from "./cancel";

const USER_ID = "user-1";
const PERIOD_END = 1_762_592_000;

/// What Stripe hands back after an update.
function stripeSubscription(cancelAtPeriodEnd: boolean): Stripe.Subscription {
  return {
    id: "sub_123",
    object: "subscription",
    status: "active",
    customer: "cus_123",
    cancel_at_period_end: cancelAtPeriodEnd,
    metadata: { supabaseUserId: USER_ID },
    items: {
      data: [
        {
          id: "si_123",
          price: { id: "price_regular" },
          current_period_start: 1_760_000_000,
          current_period_end: PERIOD_END,
        },
      ],
    },
  } as unknown as Stripe.Subscription;
}

/// A database with (or without) a stored subscription row.
function fakePrisma(row: { plan: string; stripeSubscriptionId: string | null } | null) {
  const upsert = vi.fn(async () => ({}));
  const prisma = {
    subscription: {
      findUnique: vi.fn(async () => row),
      upsert,
    },
  };
  return { prisma: prisma as unknown as CancelDeps["prisma"], upsert };
}

/// A Stripe stand-in that echoes the requested flag back, or fails.
function fakeStripe(failWith?: Error) {
  const update = vi.fn(async (_id: string, params: { cancel_at_period_end: boolean }) => {
    if (failWith) throw failWith;
    return stripeSubscription(params.cancel_at_period_end);
  });
  return { stripe: { subscriptions: { update } }, update };
}

const PRO_ROW = { plan: "PRO", stripeSubscriptionId: "sub_123" };

describe("cancelling and resuming Pro", () => {
  it("asks Stripe to cancel at the end of the period and mirrors the answer", async () => {
    const { prisma, upsert } = fakePrisma(PRO_ROW);
    const { stripe, update } = fakeStripe();

    const result = await setCancelAtPeriodEnd(USER_ID, true, { prisma, stripe });

    expect(update).toHaveBeenCalledWith("sub_123", { cancel_at_period_end: true });
    expect(result).toEqual({
      ok: true,
      cancelAtPeriodEnd: true,
      currentPeriodEnd: new Date(PERIOD_END * 1000),
    });
    // Still Pro until the period ends — only the flag changed.
    expect(upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { userId: USER_ID },
        update: expect.objectContaining({ plan: "PRO", cancelAtPeriodEnd: true }),
      }),
    );
  });

  it("resumes by turning the flag back off", async () => {
    const { prisma } = fakePrisma(PRO_ROW);
    const { stripe, update } = fakeStripe();

    const result = await setCancelAtPeriodEnd(USER_ID, false, { prisma, stripe });

    expect(update).toHaveBeenCalledWith("sub_123", { cancel_at_period_end: false });
    expect(result).toMatchObject({ ok: true, cancelAtPeriodEnd: false });
  });

  it("refuses without calling Stripe when there is no Pro subscription", async () => {
    for (const row of [null, { plan: "FREE", stripeSubscriptionId: "sub_old" }, { plan: "PRO", stripeSubscriptionId: null }]) {
      const { prisma, upsert } = fakePrisma(row);
      const { stripe, update } = fakeStripe();

      const result = await setCancelAtPeriodEnd(USER_ID, true, { prisma, stripe });

      expect(result).toEqual({ ok: false, status: 404, error: "You don't have an active Pro subscription." });
      expect(update).not.toHaveBeenCalled();
      expect(upsert).not.toHaveBeenCalled();
    }
  });

  it("writes nothing when Stripe fails", async () => {
    const { prisma, upsert } = fakePrisma(PRO_ROW);
    const { stripe } = fakeStripe(new Error("Stripe is down"));

    await expect(setCancelAtPeriodEnd(USER_ID, true, { prisma, stripe })).rejects.toThrow("Stripe is down");
    expect(upsert).not.toHaveBeenCalled();
  });
});
