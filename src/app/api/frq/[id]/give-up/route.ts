// Reveals the official solution, ending the remaining graded attempts.
//
// Costs zero grading credits. Every attempt and piece of feedback the
// student already earned is kept.

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/pro/auth-guard";
import { giveUpAndUnlock } from "@/lib/pro/frq-service";

// Requiring an explicit confirmation means this can never be triggered by
// a stray click or a replayed request.
const requestSchema = z.object({ confirmed: z.literal(true) });

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const auth = await requireUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Please confirm first." }, { status: 400 });
  }

  const { id } = await params;

  try {
    const result = await giveUpAndUnlock(auth.user.id, id);
    if (!result.ok) {
      const status = result.code === "QUESTION_NOT_FOUND" ? 404 : 403;
      return NextResponse.json({ error: result.message, code: result.code }, { status });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Give up failed:", error);
    return NextResponse.json({ error: "Could not unlock the solution." }, { status: 500 });
  }
}
