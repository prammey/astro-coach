// Lists published free-response questions.
//
// Cards carry metadata only — competition, year, topic, point value and
// this user's own progress. Question text is never part of a card, so the
// browse page is safe to render whatever the visitor's plan is.

import { NextResponse } from "next/server";
import { requireUser } from "@/lib/pro/auth-guard";
import { listFrqCards } from "@/lib/pro/frq-service";

export async function GET(request: Request) {
  // Signed-out visitors still see that FRQs exist; they just cannot open one.
  const auth = await requireUser(request);
  const userId = auth.ok ? auth.user.id : null;

  try {
    const { cards, entitlements } = await listFrqCards(userId);

    return NextResponse.json({
      questions: cards,
      signedIn: userId !== null,
      plan: entitlements?.plan ?? null,
      creditsRemaining: entitlements?.credits.remaining ?? null,
    });
  } catch (error) {
    console.error("Failed to list FRQs:", error);
    return NextResponse.json({ error: "Could not load questions." }, { status: 500 });
  }
}
