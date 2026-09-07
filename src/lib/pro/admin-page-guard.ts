// Server-side gate for the admin pages.
//
// Authorisation happens here, on the server, before a page renders. A
// non-admin gets the ordinary 404 rather than "403 Forbidden", so the
// existence of the admin area is not confirmed to a curious visitor, and a
// hidden URL is never the thing protecting it.

import { notFound } from "next/navigation";
import { requireAdminUser } from "./auth-guard";

export async function requireAdminPage(): Promise<{ id: string; email: string | null }> {
  const auth = await requireAdminUser();
  if (!auth.ok) notFound();
  return auth.user;
}
