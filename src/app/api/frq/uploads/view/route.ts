// Issues a short-lived signed URL for one of the student's own uploaded
// pages, so they can look back at the work they submitted.
//
// The path is checked against the signed-in user before anything is signed,
// so asking for someone else's file returns 403 rather than a URL.

import { NextResponse } from "next/server";
import { requireUser } from "@/lib/pro/auth-guard";
import { signOwnUploadUrl } from "@/lib/pro/frq-service";

export async function GET(request: Request) {
  const auth = await requireUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const path = new URL(request.url).searchParams.get("path");
  if (!path) {
    return NextResponse.json({ error: "Missing file." }, { status: 400 });
  }

  const url = await signOwnUploadUrl(auth.user.id, path);
  if (!url) {
    return NextResponse.json({ error: "File not found." }, { status: 403 });
  }

  return NextResponse.json({ url });
}
