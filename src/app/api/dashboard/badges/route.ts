// Every badge, earned or not, with progress (any signed-in account).
//
// GET /api/dashboard/badges?tz=America/New_York

import { NextResponse } from "next/server";
import { requireUser } from "@/lib/pro/auth-guard";
import { safeTimeZone } from "@/lib/progress/activity";
import { getBadgesForUser } from "@/lib/progress/facts.server";

export async function GET(request: Request) {
  const auth = await requireUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    // Streak and time-of-day badges use the student's own time zone.
    const timeZone = safeTimeZone(new URL(request.url).searchParams.get("tz"));
    return NextResponse.json({ badges: await getBadgesForUser(auth.user.id, timeZone) });
  } catch (error) {
    console.error("Failed to build badges:", error);
    return NextResponse.json({ error: "Could not load your badges." }, { status: 500 });
  }
}
