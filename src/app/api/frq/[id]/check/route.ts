// Checks a short-answer FRQ (fill-in, matching, naming) exactly, for free.
//
// No AI is involved, so this never spends a grading credit or uses one of
// the three graded attempts. It reports which blanks are right or wrong —
// never the right answers — until every blank is right.

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/pro/auth-guard";
import { checkShortAnswers } from "@/lib/pro/frq-service";

// { [partId]: { [blankLabel]: answer } }, with generous but finite limits.
const requestSchema = z.object({
  answers: z.record(z.string().max(100), z.record(z.string().max(50), z.string().max(300))),
});

const STATUS_BY_CODE: Record<string, number> = {
  QUESTION_NOT_FOUND: 404,
  QUESTION_LOCKED: 403,
  NOT_QUICK_CHECK: 400,
  DUPLICATE_SUBMISSION: 409,
};

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
    return NextResponse.json({ error: "Those answers could not be read." }, { status: 400 });
  }

  const { id } = await params;
  try {
    const result = await checkShortAnswers(auth.user.id, id, parsed.data.answers);
    if (!result.ok) {
      return NextResponse.json(
        { error: result.message, code: result.code },
        { status: STATUS_BY_CODE[result.code] ?? 400 },
      );
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error("FRQ quick check failed:", error);
    return NextResponse.json({ error: "Could not check your answers. Please try again." }, { status: 500 });
  }
}
