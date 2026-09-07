// One free-response question, shaped for exactly this student.
//
// The gate is real, not cosmetic: when the user may not read the question,
// `content` comes back null and the text and figures are simply not in the
// response. The same is true of the official solution until an unlock
// record exists. There is nothing on the page to un-blur.

import { NextResponse } from "next/server";
import { requireUser } from "@/lib/pro/auth-guard";
import { getFrqForStudent } from "@/lib/pro/frq-service";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const auth = await requireUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { id } = await params;

  try {
    const detail = await getFrqForStudent(auth.user.id, id);
    if (!detail) {
      return NextResponse.json({ error: "Question not found." }, { status: 404 });
    }
    return NextResponse.json(detail);
  } catch (error) {
    console.error("Failed to load FRQ:", error);
    return NextResponse.json({ error: "Could not load this question." }, { status: 500 });
  }
}
