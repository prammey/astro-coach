import { describe, expect, it, vi } from "vitest";
import type Stripe from "stripe";
import { CREDIT_PURCHASE_KIND, creditGrantReason, grantPurchasedCredits } from "./credits";

/// A completed credit checkout, as Stripe would send it.
function session(overrides: Partial<Stripe.Checkout.Session> = {}): Stripe.Checkout.Session {
  return {
    id: "cs_test_1",
    mode: "payment",
    payment_status: "paid",
    amount_total: 300,
    metadata: { kind: CREDIT_PURCHASE_KIND, supabaseUserId: "user-1", credits: "20" },
    ...overrides,
  } as Stripe.Checkout.Session;
}

/// A tiny stand-in for the CreditGrant table.
function fakePrisma(existing: string[] = []) {
  const create = vi.fn(async () => ({}));
  const prisma = {
    creditGrant: {
      findFirst: vi.fn(async ({ where }: { where: { reason: string } }) =>
        existing.includes(where.reason) ? { id: "grant" } : null,
      ),
      create,
    },
  };
  return { prisma: prisma as never, create };
}

describe("granting bought credits", () => {
  it("adds the credits a paid checkout bought", async () => {
    const { prisma, create } = fakePrisma();
    const outcome = await grantPurchasedCredits(session(), prisma);
    expect(outcome).toEqual({ granted: true, userId: "user-1", credits: 20 });
    expect(create).toHaveBeenCalledWith({
      data: { userId: "user-1", amount: 20, source: "PURCHASED", reason: creditGrantReason("cs_test_1") },
    });
  });

  it("never grants the same checkout twice", async () => {
    const { prisma, create } = fakePrisma([creditGrantReason("cs_test_1")]);
    expect(await grantPurchasedCredits(session(), prisma)).toEqual({ granted: false, reason: "ALREADY_GRANTED" });
    expect(create).not.toHaveBeenCalled();
  });

  it("ignores unpaid checkouts, subscriptions and bad metadata", async () => {
    const { prisma, create } = fakePrisma();
    expect((await grantPurchasedCredits(session({ payment_status: "unpaid" }), prisma)).granted).toBe(false);
    expect((await grantPurchasedCredits(session({ mode: "subscription" }), prisma)).granted).toBe(false);
    expect(
      (await grantPurchasedCredits(session({ metadata: { kind: CREDIT_PURCHASE_KIND, supabaseUserId: "user-1", credits: "500" } }), prisma)).granted,
    ).toBe(false);
    expect(create).not.toHaveBeenCalled();
  });
});
