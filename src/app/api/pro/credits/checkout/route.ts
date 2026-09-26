// Starts a one-time Stripe Checkout for extra AI grading credits.
//
// Only a Pro student who has used every credit may buy more, and only
// between MIN_CREDIT_PURCHASE and MAX_CREDIT_PURCHASE at a time — both are
// re-checked here, whatever the browser showed. The price is built from
// CREDIT_PRICE_CENTS on the server; the browser only sends a quantity.
//
// Paying does not add credits here. Credits are granted only when Stripe's
// webhook confirms the payment (src/app/api/stripe/webhook/route.ts).
//
// POST /api/pro/credits/checkout   { quantity: number }

import { NextResponse } from "next/server";
import { requireUser } from "@/lib/pro/auth-guard";
import { getPrisma } from "@/lib/prisma";
import { getUserEntitlements } from "@/lib/pro/entitlements";
import { canBuyCredits, checkCreditPurchase } from "@/lib/pro/rules";
import { CREDIT_PRICE_CENTS, siteUrl } from "@/lib/pro/config";
import { getStripe, isStripeConfigured } from "@/lib/stripe/client";
import { ensureStripeCustomer } from "@/lib/stripe/customer";
import { CREDIT_PURCHASE_KIND } from "@/lib/stripe/credits";

export async function POST(request: Request) {
  if (!isStripeConfigured()) {
    return NextResponse.json({ error: "Buying credits is not available yet." }, { status: 503 });
  }

  const auth = await requireUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const body = (await request.json().catch(() => ({}))) as { quantity?: unknown };
  const purchase = checkCreditPurchase(body.quantity);
  if (!purchase.ok) {
    return NextResponse.json({ error: purchase.message }, { status: 400 });
  }

  try {
    const prisma = getPrisma();
    const entitlements = await getUserEntitlements(auth.user.id, prisma);
    if (!canBuyCredits(entitlements)) {
      return NextResponse.json(
        {
          error: entitlements.isPro
            ? "You can buy extra credits once your monthly ones run out."
            : "Extra credits are part of Astro Coach Pro.",
        },
        { status: 403 },
      );
    }

    const customerId = await ensureStripeCustomer(prisma, auth.user);
    const metadata = {
      supabaseUserId: auth.user.id,
      kind: CREDIT_PURCHASE_KIND,
      credits: String(purchase.quantity),
    };

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      customer: customerId,
      line_items: [
        {
          quantity: purchase.quantity,
          price_data: {
            currency: "usd",
            unit_amount: CREDIT_PRICE_CENTS,
            product_data: {
              name: "Astro Coach AI grading credit",
              description: "One credit = one AI-graded free-response attempt. Credits never expire.",
            },
          },
        },
      ],
      // Carried on both the session and the payment so the webhook can
      // attribute the credits without trusting anything the browser sends.
      metadata,
      payment_intent_data: { metadata },
      success_url: `${siteUrl()}/dashboard?credits=success`,
      cancel_url: `${siteUrl()}/dashboard?credits=cancelled`,
    });

    if (!session.url) throw new Error("Stripe returned a session with no URL");
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Credit checkout failed:", error);
    return NextResponse.json({ error: "Could not start checkout. Please try again." }, { status: 500 });
  }
}
