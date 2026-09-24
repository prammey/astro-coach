// The activity calendar and streaks (Pro only).
//
// For a Free account this returns a lock and no data at all. The Free
// dashboard shows a blurred picture of made-up example data instead, so
// nothing real is ever sent and hidden.
//
// GET /api/dashboard/activity?tz=America/New_York

import { NextResponse } from "next/server";
import { requireUser } from "@/lib/pro/auth-guard";
import { getUserEntitlements } from "@/lib/pro/entitlements";
import { safeTimeZone } from "@/lib/progress/activity";
import { buildActivityReport, loadPracticeHistory } from "@/lib/progress/facts.server";

export async function GET(request: Request) {
  const auth = await requireUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const entitlements = await getUserEntitlements(auth.user.id);
    if (!entitlements.isPro) {
      return NextResponse.json({ locked: true });
    }

    // Days are counted in the student's own time zone.
    const timeZone = safeTimeZone(new URL(request.url).searchParams.get("tz"));
    const history = await loadPracticeHistory(auth.user.id);
    return NextResponse.json({ locked: false, activity: buildActivityReport(history, timeZone) });
  } catch (error) {
    console.error("Failed to build activity:", error);
    return NextResponse.json({ error: "Could not load your activity." }, { status: 500 });
  }
}
