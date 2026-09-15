// Answers one question for the admin pages: is the caller an admin?
//
// The admin pages are Client Components, because Astro Coach keeps its
// Supabase session in localStorage and sends it as a Bearer token — a
// Server Component has no way to see it. So the pages ask here, and this
// route does the real authorization with the same guard every other admin
// endpoint uses.
//
// This returns no data of any kind, only yes or no, so a curious visitor
// learns nothing from it that they could not learn by being told 404.

import { NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/pro/auth-guard";

export async function GET(request: Request) {
  const auth = await requireAdminUser(request);
  if (!auth.ok) {
    return NextResponse.json({ admin: false }, { status: auth.status });
  }
  return NextResponse.json({ admin: true });
}
