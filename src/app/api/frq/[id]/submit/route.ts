// Submits one attempt for AI grading.
//
// This is the only route in the app that can spend a grading credit, and it
// spends one only after every check has passed and the model has returned a
// real grade. The student's attempt number, credit balance and plan are all
// re-derived here — whatever the browser believes about them is ignored.

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/pro/auth-guard";
import { submitGradedAttempt } from "@/lib/pro/frq-service";
import { MAX_UPLOAD_PAGES_PER_SUBMISSION } from "@/lib/pro/config";

const requestSchema = z.object({
  typedResponse: z.string().max(50_000).nullish(),
  uploadPaths: z.array(z.string().min(1).max(500)).max(MAX_UPLOAD_PAGES_PER_SUBMISSION).default([]),
  /// The browser must send this, so a stray click or a replayed request
  /// cannot start a grade the student did not confirm.
  confirmed: z.literal(true),
});

// Which refusals are the caller's fault (400), which are permission
// problems (403), and which are ours (503).
const STATUS_BY_CODE: Record<string, number> = {
  QUESTION_NOT_FOUND: 404,
  QUESTION_LOCKED: 403,
  NO_CREDITS: 403,
  ATTEMPTS_EXHAUSTED: 403,
  SOLUTION_ALREADY_UNLOCKED: 409,
  DUPLICATE_SUBMISSION: 409,
  GRADING_UNAVAILABLE: 503,
  UNREADABLE_WORK: 422,
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
    return NextResponse.json(
      { error: "Please confirm your submission before grading." },
      { status: 400 },
    );
  }

  const { id } = await params;

  try {
    const result = await submitGradedAttempt(auth.user.id, id, {
      typedResponse: parsed.data.typedResponse?.trim() || null,
      uploadPaths: parsed.data.uploadPaths,
    });

    if (!result.ok) {
      return NextResponse.json(
        {
          error: result.message,
          code: result.code,
          unclearPages: result.unclearPages,
          // Stated explicitly so the UI can reassure the student, and so
          // nobody has to wonder whether they were charged.
          creditCharged: false,
        },
        { status: STATUS_BY_CODE[result.code] ?? 400 },
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("FRQ grading failed:", error);
    return NextResponse.json(
      { error: "Grading failed. You have not been charged a credit.", creditCharged: false },
      { status: 500 },
    );
  }
}
