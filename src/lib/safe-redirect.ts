// Decides where to send someone after they log in.
//
// Links like /login?next=/pricing bring a student back to where they were.
// The `next` value comes from the URL, so anyone could craft a link with
// next=https://evil.example — this only ever allows a path on our own site.

/// Where to go when `next` is missing or not allowed.
export const DEFAULT_AFTER_LOGIN = "/dashboard";

/// Returns `next` if it is a same-site path, otherwise the dashboard.
export function safeNextPath(next: string | null | undefined): string {
  if (!next) return DEFAULT_AFTER_LOGIN;

  // Must be a path on this site: starts with one "/", not "//" (which
  // browsers treat as another website) and not "/\" (same trick).
  if (!next.startsWith("/") || next.startsWith("//") || next.startsWith("/\\")) {
    return DEFAULT_AFTER_LOGIN;
  }

  // Never loop back to the login or signup pages themselves.
  if (next.startsWith("/login") || next.startsWith("/signup")) return DEFAULT_AFTER_LOGIN;

  return next;
}
