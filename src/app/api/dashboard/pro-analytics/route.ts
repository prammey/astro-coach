// The Pro dashboard's analytics.
//
// For a Free account this returns a lock, not data. That is deliberate:
// the Free dashboard shows a locked preview of these panels, and the way to
// build a locked preview honestly is to have nothing to reveal — no real
// figures sent and blurred, and no invented ones either.

import { NextResponse } from "next/server";
import { requireUser } from "@/lib/pro/auth-guard";
import { getUserEntitlements } from "@/lib/pro/entitlements";
import { buildProAnalytics } from "@/lib/pro/analytics";

export async function GET(request: Request) {
  const auth = await requireUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const entitlements = await getUserEntitlements(auth.user.id);

    if (!entitlements.isPro) {
      return NextResponse.json({ locked: true, plan: entitlements.plan }, { status: 200 });
    }

    return NextResponse.json({
      locked: false,
      analytics: await buildProAnalytics(auth.user.id),
    });
  } catch (error) {
    console.error("Failed to build Pro analytics:", error);
    return NextResponse.json({ error: "Could not load your analytics." }, { status: 500 });
  }
}
