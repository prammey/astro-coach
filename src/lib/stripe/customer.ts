// Finds or creates the Stripe customer for a Supabase user, so every
// checkout (subscription or extra credits) shares one billing history.
//
// SERVER-ONLY.

if (typeof window !== "undefined") {
  throw new Error("src/lib/stripe/customer.ts must not be imported in the browser");
}

import type { PrismaClient } from "@/generated/prisma/client";
import { getStripe } from "./client";

export async function ensureStripeCustomer(
  prisma: PrismaClient,
  user: { id: string; email: string | null },
): Promise<string> {
  const existing = await prisma.subscription.findUnique({ where: { userId: user.id } });
  if (existing?.stripeCustomerId) return existing.stripeCustomerId;

  const customer = await getStripe().customers.create({
    email: user.email ?? undefined,
    metadata: { supabaseUserId: user.id },
  });

  // The Subscription row doubles as the user's billing record; a Free user
  // gets one here with just their customer ID.
  await prisma.subscription.upsert({
    where: { userId: user.id },
    create: { userId: user.id, stripeCustomerId: customer.id },
    update: { stripeCustomerId: customer.id },
  });
  return customer.id;
}
