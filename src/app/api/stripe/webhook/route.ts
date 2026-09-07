// The only thing in Astro Coach that can grant or revoke Pro access.
//
// Three properties matter here and each is enforced below:
//
//   1. Authenticity — the raw body is verified against Stripe's signature.
//      An unsigned or mis-signed request is rejected before it is parsed.
//   2. Idempotency  — Stripe retries deliveries. Each event ID is inserted
//      into StripeWebhookEvent first; a duplicate hits the primary key and
//      is acknowledged without being processed twice.
//   3. Attribution  — the Supabase user comes from subscription metadata we
//      set ourselves at checkout, never from the request body's say-so.

import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getPrisma } from "@/lib/prisma";
import { getStripe, isStripeConfigured } from "@/lib/stripe/client";
import {
  claimWebhookEvent,
  mapSubscription,
  markSubscriptionEnded,
  readSupabaseUserId,
  releaseWebhookEvent,
  upsertSubscription,
} from "@/lib/stripe/sync";

// The events we act on. Anything else is acknowledged and ignored, so
// enabling extra events in the Stripe dashboard cannot break this route.
const HANDLED_EVENTS = new Set([
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
  "invoice.payment_succeeded",
  "invoice.payment_failed",
]);

/// Fetches the subscription fresh from Stripe and mirrors it into our
/// database. Always re-reading from Stripe means we store the real current
/// state rather than whatever a possibly out-of-order webhook carried.
async function syncSubscriptionById(subscriptionId: string): Promise<void> {
  const stripe = getStripe();
  const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ["customer"],
  });

  const userId = readSupabaseUserId(subscription);
  if (!userId) {
    console.error(
      `Stripe subscription ${subscriptionId} has no supabaseUserId metadata; ` +
        "cannot attribute it to an account.",
    );
    return;
  }

  const fields = mapSubscription(subscription, process.env.STRIPE_FOUNDING_PRICE_ID);
  await upsertSubscription(userId, fields);
}

export async function POST(request: Request) {
  if (!isStripeConfigured()) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set; refusing to trust webhooks.");
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  // Signature verification needs the exact bytes Stripe signed, so the body
  // is read as text and never re-serialised.
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Idempotency gate. Claiming the event before doing the work means a
  // retried delivery is a no-op rather than a second state change.
  const claimed = await claimWebhookEvent(event.id, event.type, getPrisma());
  if (!claimed) {
    return NextResponse.json({ received: true, duplicate: true });
  }

  if (!HANDLED_EVENTS.has(event.type)) {
    return NextResponse.json({ received: true, ignored: true });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode === "subscription" && session.subscription) {
          const id =
            typeof session.subscription === "string"
              ? session.subscription
              : session.subscription.id;
          await syncSubscriptionById(id);
        }
        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        await syncSubscriptionById(subscription.id);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await markSubscriptionEnded(subscription.id, subscription.status);
        break;
      }

      // A renewal moves the billing period forward, which is also what
      // resets the 50 grading credits — so we resync rather than ignore it.
      case "invoice.payment_succeeded":
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice & {
          subscription?: string | Stripe.Subscription | null;
        };
        const subscription = invoice.subscription;
        if (subscription) {
          await syncSubscriptionById(
            typeof subscription === "string" ? subscription : subscription.id,
          );
        }
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error(`Stripe webhook ${event.type} (${event.id}) failed:`, error);

    // Let Stripe retry: release the claim so the retry is not mistaken for
    // a duplicate of work that never actually completed.
    await releaseWebhookEvent(event.id, getPrisma());

    return NextResponse.json({ error: "Webhook handling failed" }, { status: 500 });
  }
}
