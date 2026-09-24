// The server half of "view as" (see src/lib/view-as.ts).
//
// The chosen view lives in a cookie, but a cookie is just something the
// browser sends, so it is never trusted on its own: a view only takes
// effect after the server has confirmed, from Supabase itself, that the
// signed-in account is one allowed to switch views. Anyone else's cookie
// is simply ignored.
//
// SERVER-ONLY.

if (typeof window !== "undefined") {
  throw new Error("src/lib/pro/view-as.server.ts must not be imported in the browser");
}

import { createAdminClient } from "@/lib/supabase/admin";
import { canSwitchViews, parseViewAs, VIEW_AS_COOKIE, viewAsFromCookieHeader, type ViewAs } from "@/lib/view-as";
import type { SubscriptionSnapshot } from "./rules";

/// The view cookie of the current request, if any. Reads the request's own
/// Cookie header when given one, otherwise Next.js's request cookies.
/// Outside a request (scripts, tests) there is no cookie, so no view.
export async function requestedView(request?: Request): Promise<ViewAs | null> {
  if (request) return viewAsFromCookieHeader(request.headers.get("cookie"));
  try {
    const { cookies } = await import("next/headers");
    return parseViewAs((await cookies()).get(VIEW_AS_COOKIE)?.value);
  } catch {
    return null;
  }
}

/// Remembers, per user id, whether that account may switch views, so the
/// Supabase lookup happens once per server instance rather than per call.
const switcherByUserId = new Map<string, boolean>();

/// Whether this user id belongs to an account allowed to switch views,
/// checked against the email Supabase holds for it.
async function userCanSwitchViews(userId: string): Promise<boolean> {
  const known = switcherByUserId.get(userId);
  if (known !== undefined) return known;
  try {
    const { data } = await createAdminClient().auth.admin.getUserById(userId);
    const allowed = canSwitchViews(data.user?.email);
    switcherByUserId.set(userId, allowed);
    return allowed;
  } catch {
    return false; // if we cannot check, the view is not applied
  }
}

/// The view to simulate for this user on this request: only for the
/// owner's account, and only when they have picked one.
export async function viewOverrideFor(userId: string): Promise<ViewAs | null> {
  const view = await requestedView();
  if (!view) return null;
  return (await userCanSwitchViews(userId)) ? view : null;
}

/// A made-up active Pro subscription for the "Pro" view: this calendar
/// month is the billing period. It exists only in memory; nothing is
/// written to the database or Stripe.
export function simulatedProSubscription(now: Date): SubscriptionSnapshot {
  return {
    plan: "PRO",
    stripeStatus: "active",
    currentPeriodStart: new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)),
    currentPeriodEnd: new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1)),
    cancelAtPeriodEnd: false,
    isFoundingPrice: true,
  };
}
