// Starts a Stripe Checkout Session so a signed-in user can subscribe to Pro.
//
// The browser never picks the price or the plan. This route decides which
// Stripe Price applies (founding vs regular) from the server clock, and the
// user only ever receives a redirect URL that Stripe issued.
//
// Landing on the success URL does NOT make anyone Pro — only the webhook
// does. The success URL just sends the student back to their dashboard.

import { NextResponse } from "next/server";
import { requireUser } from "@/lib/pro/auth-guard";
import { getPrisma } from "@/lib/prisma";
import { getStripe, isStripeConfigured } from "@/lib/stripe/client";
import { siteUrl, stripePriceIdForNewCheckout } from "@/lib/pro/config";

export async function POST(request: Request) {
  if (!isStripeConfigured()) {
    return NextResponse.json(
      { error: "Subscriptions are not available yet." },
      { status: 503 },
    );
  }

  const auth = await requireUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { priceId, isFounding } = stripePriceIdForNewCheckout();
  if (!priceId) {
    console.error(
      "Stripe checkout attempted with no price configured. Set " +
        "STRIPE_FOUNDING_PRICE_ID and STRIPE_REGULAR_PRICE_ID.",
    );
    return NextResponse.json(
      { error: "Subscriptions are not available yet." },
      { status: 503 },
    );
  }

  try {
    const prisma = getPrisma();
    const stripe = getStripe();
    const userId = auth.user.id;

    const existing = await prisma.subscription.findUnique({ where: { userId } });

    // Someone who is already subscribed should be sent to the Billing
    // Portal, not sold a second subscription.
    if (existing?.plan === "PRO" && existing.stripeSubscriptionId) {
      return NextResponse.json(
        { error: "You already have an active subscription." },
        { status: 409 },
      );
    }

    // Reuse the Stripe customer if we have one, so a resubscribing user
    // keeps a single billing history.
    let customerId = existing?.stripeCustomerId ?? null;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: auth.user.email ?? undefined,
        metadata: { supabaseUserId: userId },
      });
      customerId = customer.id;

      await prisma.subscription.upsert({
        where: { userId },
        create: { userId, stripeCustomerId: customerId },
        update: { stripeCustomerId: customerId },
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      // Carried onto the subscription so the webhook can attribute it to a
      // Supabase user without trusting anything the browser sends.
      metadata: { supabaseUserId: userId },
      subscription_data: {
        metadata: { supabaseUserId: userId, foundingPrice: String(isFounding) },
      },
      success_url: `${siteUrl()}/dashboard?checkout=success`,
      cancel_url: `${siteUrl()}/pricing?checkout=cancelled`,
      allow_promotion_codes: true,
    });

    if (!session.url) {
      throw new Error("Stripe returned a session with no URL");
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    // Details stay in the server log; the student sees something generic.
    console.error("Stripe checkout failed:", error);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 },
    );
  }
}
