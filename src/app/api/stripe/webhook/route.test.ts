// Tests the webhook route end to end, short of the network.
//
// These drive the real POST handler with real Stripe signatures, and the
// real extraction path inside src/lib/stripe/sync.ts. Only two things are
// stubbed: the database, and the outbound call to Stripe's API. So a
// renewal event travels the same road here as in production — signature
// check, idempotency claim, field extraction, resync — and the assertion
// is that the right subscription came out the other end.
//
// This is the coverage gap that let the invoice.subscription bug through:
// the pure functions were tested, the route wiring was not.

import { beforeEach, describe, expect, it, vi } from "vitest";
import Stripe from "stripe";

const WEBHOOK_SECRET = "whsec_test_secret";

// A real Stripe instance, used only for its HMAC helpers. It never talks to
// the network — the route's API calls go to the stub below.
const stripe = new Stripe("sk_test_offline_key_for_unit_tests");

const retrieveSubscription = vi.fn();
const upsertSubscription = vi.fn();
const claimWebhookEvent = vi.fn(async () => true);
const releaseWebhookEvent = vi.fn(async () => {});

vi.mock("@/lib/prisma", () => ({
  getPrisma: () => ({}),
}));

vi.mock("@/lib/stripe/client", () => ({
  isStripeConfigured: () => true,
  getStripe: () => ({
    webhooks: stripe.webhooks,
    subscriptions: { retrieve: retrieveSubscription },
  }),
}));

// Everything that reads or shapes the event stays real. Only the two
// functions that would touch the database are replaced.
vi.mock("@/lib/stripe/sync", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/stripe/sync")>();
  return {
    ...actual,
    claimWebhookEvent: (...args: unknown[]) => claimWebhookEvent(...(args as [])),
    releaseWebhookEvent: (...args: unknown[]) => releaseWebhookEvent(...(args as [])),
    upsertSubscription: (...args: unknown[]) => upsertSubscription(...(args as [])),
  };
});

// Credit purchases are checked on their own in src/lib/stripe/credits.test.ts;
// here we only confirm the route hands a paid checkout to them.
const grantPurchasedCredits = vi.fn(async () => ({ granted: true }));
vi.mock("@/lib/stripe/credits", () => ({
  grantPurchasedCredits: (...args: unknown[]) => grantPurchasedCredits(...(args as [])),
}));

const { POST } = await import("./route");

/// The subscription Stripe would hand back when the route refetches it.
/// Shaped the way recent API versions send it, with the billing period on
/// the item rather than the top level.
function subscriptionFromStripe(id = "sub_123") {
  return {
    id,
    object: "subscription",
    status: "active",
    customer: "cus_123",
    cancel_at_period_end: false,
    metadata: { supabaseUserId: "user-abc" },
    items: {
      data: [
        {
          id: "si_123",
          price: { id: "price_founding_599" },
          current_period_start: 1_760_000_000,
          current_period_end: 1_762_592_000,
        },
      ],
    },
  };
}

/// Builds a signed request exactly as Stripe would send it.
function signedRequest(event: Record<string, unknown>): Request {
  const payload = JSON.stringify(event);
  const signature = stripe.webhooks.generateTestHeaderString({
    payload,
    secret: WEBHOOK_SECRET,
  });

  return new Request("https://astro-coach.test/api/stripe/webhook", {
    method: "POST",
    headers: { "stripe-signature": signature, "content-type": "application/json" },
    body: payload,
  });
}

function invoiceEvent(invoice: Record<string, unknown>, id = "evt_invoice_1") {
  return {
    id,
    object: "event",
    type: "invoice.payment_succeeded",
    data: { object: { id: "in_123", object: "invoice", ...invoice } },
  };
}

beforeEach(() => {
  vi.clearAllMocks();
  process.env.STRIPE_WEBHOOK_SECRET = WEBHOOK_SECRET;
  claimWebhookEvent.mockResolvedValue(true);
  retrieveSubscription.mockResolvedValue(subscriptionFromStripe());
});

describe("renewal invoices", () => {
  it("resyncs the subscription named under parent", async () => {
    const response = await POST(
      signedRequest(
        invoiceEvent({
          parent: {
            type: "subscription_details",
            quote_details: null,
            subscription_details: { subscription: "sub_123", metadata: null },
          },
        }),
      ),
    );

    expect(response.status).toBe(200);
    // The whole point: the route found the subscription and refetched it.
    expect(retrieveSubscription).toHaveBeenCalledWith("sub_123", {
      expand: ["customer"],
    });

    // And mirrored it against the user from the subscription's own metadata.
    expect(upsertSubscription).toHaveBeenCalledTimes(1);
    const [userId, fields] = upsertSubscription.mock.calls[0];
    expect(userId).toBe("user-abc");
    expect(fields).toMatchObject({ plan: "PRO", stripeSubscriptionId: "sub_123" });
  });

  it("carries the renewed billing period through to the stored row", async () => {
    // This is what resets a Pro subscriber's grading credits, so it is the
    // field whose loss the original bug would have caused.
    await POST(
      signedRequest(
        invoiceEvent({
          parent: {
            type: "subscription_details",
            quote_details: null,
            subscription_details: { subscription: "sub_123", metadata: null },
          },
        }),
      ),
    );

    const [, fields] = upsertSubscription.mock.calls[0];
    expect(fields.currentPeriodStart).toEqual(new Date(1_760_000_000 * 1000));
    expect(fields.currentPeriodEnd).toEqual(new Date(1_762_592_000 * 1000));
  });

  it("still resyncs an invoice in the legacy top-level shape", async () => {
    await POST(signedRequest(invoiceEvent({ subscription: "sub_legacy" })));

    expect(retrieveSubscription).toHaveBeenCalledWith("sub_legacy", {
      expand: ["customer"],
    });
  });

  it("ignores an invoice with no subscription rather than failing", async () => {
    const response = await POST(
      signedRequest(
        invoiceEvent({
          parent: { type: "quote_details", quote_details: null, subscription_details: null },
        }),
      ),
    );

    expect(response.status).toBe(200);
    expect(retrieveSubscription).not.toHaveBeenCalled();
  });
});

describe("the webhook's trust boundary", () => {
  it("rejects a payload signed with the wrong secret", async () => {
    const payload = JSON.stringify(
      invoiceEvent({ subscription: "sub_123" }, "evt_forged"),
    );
    const request = new Request("https://astro-coach.test/api/stripe/webhook", {
      method: "POST",
      headers: {
        "stripe-signature": stripe.webhooks.generateTestHeaderString({
          payload,
          secret: "whsec_someone_elses_secret",
        }),
      },
      body: payload,
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(retrieveSubscription).not.toHaveBeenCalled();
    // Rejected before the event was even claimed.
    expect(claimWebhookEvent).not.toHaveBeenCalled();
  });

  it("rejects a request carrying no signature at all", async () => {
    const response = await POST(
      new Request("https://astro-coach.test/api/stripe/webhook", {
        method: "POST",
        body: JSON.stringify(invoiceEvent({ subscription: "sub_123" })),
      }),
    );

    expect(response.status).toBe(400);
    expect(retrieveSubscription).not.toHaveBeenCalled();
  });

  it("does not process an event it has already seen", async () => {
    claimWebhookEvent.mockResolvedValue(false);

    const response = await POST(
      signedRequest(invoiceEvent({ subscription: "sub_123" }, "evt_repeat")),
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ duplicate: true });
    expect(retrieveSubscription).not.toHaveBeenCalled();
  });

  it("releases the claim when handling fails, so Stripe's retry is not lost", async () => {
    retrieveSubscription.mockRejectedValue(new Error("Stripe is down"));

    const response = await POST(
      signedRequest(invoiceEvent({ subscription: "sub_123" }, "evt_fails")),
    );

    expect(response.status).toBe(500);
    expect(releaseWebhookEvent).toHaveBeenCalled();
  });
});

describe("credit purchases", () => {
  it("hands a completed one-time checkout to the credit granter", async () => {
    const response = await POST(
      signedRequest({
        id: "evt_credits_1",
        object: "event",
        type: "checkout.session.completed",
        data: {
          object: {
            id: "cs_test_credits",
            object: "checkout.session",
            mode: "payment",
            payment_status: "paid",
            metadata: { kind: "grading_credits", supabaseUserId: "user-1", credits: "10" },
          },
        },
      }),
    );
    expect(response.status).toBe(200);
    expect(grantPurchasedCredits).toHaveBeenCalledTimes(1);
    expect(retrieveSubscription).not.toHaveBeenCalled();
  });
});
