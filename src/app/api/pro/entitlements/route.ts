// What the signed-in user's plan, credits and subscription state are.
//
// The browser uses this to render plan badges, credit counters and locked
// states — but never to make an access decision. Every gate is re-checked
// on the server when the action is actually attempted.

import { NextResponse } from "next/server";
import { requireUser } from "@/lib/pro/auth-guard";
import { getUserEntitlements } from "@/lib/pro/entitlements";

export async function GET(request: Request) {
  const auth = await requireUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const entitlements = await getUserEntitlements(auth.user.id);

    return NextResponse.json({
      plan: entitlements.plan,
      isPro: entitlements.isPro,
      status: entitlements.status,
      cancelAtPeriodEnd: entitlements.cancelAtPeriodEnd,
      currentPeriodEnd: entitlements.currentPeriodEnd,
      isFoundingPrice: entitlements.isFoundingPrice,
      canOpenNewFrq: entitlements.canOpenNewFrq,
      credits: {
        remaining: entitlements.credits.remaining,
        total: entitlements.credits.total,
        used: entitlements.credits.used,
        resetsAt: entitlements.credits.resetsAt,
        hitPeriodCap: entitlements.credits.hitPeriodCap,
      },
    });
  } catch (error) {
    console.error("Failed to load entitlements:", error);
    return NextResponse.json(
      { error: "Could not load your plan details." },
      { status: 500 },
    );
  }
}
