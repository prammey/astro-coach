// Server-side identity and admin checks for the Pro API routes.
//
// The rule these enforce: the browser never says who it is. A request is
// identified by a Supabase session — either a Bearer access token or the
// session cookie — and everything downstream uses the userId that comes
// back from Supabase, never one taken from a request body.

import { createClient as createServerSupabase } from "@/lib/supabase/server";
import { supabase as anonSupabase } from "@/lib/auth";
import { adminUserIds } from "./config";

export type AuthedUser = { id: string; email: string | null };

export type AuthResult =
  | { ok: true; user: AuthedUser }
  | { ok: false; status: 401 | 403; error: string };

/// Resolves the signed-in user for an API route.
///
/// Tries the Authorization header first (what the existing client-side
/// fetches send), then falls back to the session cookie (what Server
/// Components and form posts have).
export async function requireUser(request?: Request): Promise<AuthResult> {
  const authHeader = request?.headers.get("Authorization");

  if (authHeader?.startsWith("Bearer ")) {
    const { data, error } = await anonSupabase.auth.getUser(authHeader.slice(7));
    if (!error && data.user) {
      return { ok: true, user: { id: data.user.id, email: data.user.email ?? null } };
    }
    return { ok: false, status: 401, error: "Not signed in" };
  }

  const supabase = await createServerSupabase();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    return { ok: false, status: 401, error: "Not signed in" };
  }

  return { ok: true, user: { id: data.user.id, email: data.user.email ?? null } };
}

/// True when this Supabase user UUID is listed in ADMIN_USER_IDS.
///
/// With the variable unset nobody is an admin, so a missing config locks
/// the admin area rather than opening it.
export function isAdminUserId(userId: string): boolean {
  const ids = adminUserIds();
  return ids.length > 0 && ids.includes(userId);
}

/// Resolves the signed-in user and requires that they be an admin.
///
/// Non-admins get 403 from the API and a 404 from admin pages, so the
/// existence of the admin area is not confirmed to a curious visitor.
export async function requireAdminUser(request?: Request): Promise<AuthResult> {
  const auth = await requireUser(request);
  if (!auth.ok) return auth;

  if (!isAdminUserId(auth.user.id)) {
    return { ok: false, status: 403, error: "Not found" };
  }

  return auth;
}
