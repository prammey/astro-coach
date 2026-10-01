// Cancels Pro at the end of the paid month, or resumes it before then.
//
// POST { action: "cancel" | "resume" }
//
// The account itself is untouched either way — progress, answers and any
// bought credits all stay. (Deleting the account is a separate route.)

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/pro/auth-guard";
import { isStripeConfigured } from "@/lib/stripe/client";
import { setCancelAtPeriodEnd } from "@/lib/stripe/cancel";

const requestSchema = z.object({
  action: z.enum(["cancel", "resume"]),
});

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

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  try {
    const result = await setCancelAtPeriodEnd(auth.user.id, parsed.data.action === "cancel");

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }

    return NextResponse.json({
      cancelAtPeriodEnd: result.cancelAtPeriodEnd,
      currentPeriodEnd: result.currentPeriodEnd?.toISOString() ?? null,
    });
  } catch (error) {
    console.error("Stripe cancel/resume failed:", error);
    return NextResponse.json(
      { error: "Could not update your subscription. Please try again." },
      { status: 500 },
    );
  }
}
