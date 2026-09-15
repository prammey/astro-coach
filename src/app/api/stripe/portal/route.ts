// Opens the Stripe Billing Portal so a subscriber can update their card,
// see invoices, or cancel.
//
// Astro Coach deliberately builds no payment-method or cancellation UI of
// its own — Stripe hosts all of it.

import { NextResponse } from "next/server";
import { requireUser } from "@/lib/pro/auth-guard";
import { getPrisma } from "@/lib/prisma";
import { getStripe, isStripeConfigured } from "@/lib/stripe/client";
import { siteUrl } from "@/lib/pro/config";

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

  try {
    const prisma = getPrisma();
    const subscription = await prisma.subscription.findUnique({
      where: { userId: auth.user.id },
    });

    // The customer ID comes from our own record for the signed-in user, so
    // one user can never open another user's billing portal.
    if (!subscription?.stripeCustomerId) {
      return NextResponse.json(
        { error: "No subscription found for this account." },
        { status: 404 },
      );
    }

    const session = await getStripe().billingPortal.sessions.create({
      customer: subscription.stripeCustomerId,
      return_url: `${siteUrl()}/dashboard`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe billing portal failed:", error);
    return NextResponse.json(
      { error: "Could not open the billing portal. Please try again." },
      { status: 500 },
    );
  }
}
