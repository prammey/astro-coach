// Server-only Stripe client.
//
// STRIPE_SECRET_KEY must never be prefixed NEXT_PUBLIC_ and this module
// must never be imported from a Client Component. All checkout, portal and
// webhook work happens on the server; the browser only ever receives a
// redirect URL that Stripe itself issued.
//
// Astro Coach uses Stripe Checkout and the Stripe Billing Portal, so there
// is no card form in this codebase and no card data ever reaches our servers.

// SERVER-ONLY. This check turns an accidental client import into an
// immediate, obvious error rather than a secret quietly shipped to a
// browser bundle.
if (typeof window !== "undefined") {
  throw new Error("src/lib/stripe/client.ts must not be imported in the browser");
}

import Stripe from "stripe";

let cached: Stripe | null = null;

/// True when Stripe is configured. Lets pages and routes degrade politely
/// instead of crashing the build when keys are absent (local dev, CI).
export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function getStripe(): Stripe {
  if (cached) return cached;

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add your Stripe TEST mode secret key " +
        "to .env.local — see README for setup.",
    );
  }

  cached = new Stripe(secretKey);
  return cached;
}

/// Guards against pointing at live Stripe by accident while the product is
/// still in test-mode development. A live key starts with `sk_live_`.
export function isLiveStripeKey(): boolean {
  return (process.env.STRIPE_SECRET_KEY ?? "").startsWith("sk_live_");
}
