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

  // Must start with "/". Backslashes and invisible control characters
  // (tabs, newlines) are refused outright: browsers silently drop or
  // rewrite them, which turns "/<tab>/evil.example" into "//evil.example".
  if (!next.startsWith("/") || /[\u0000-\u001f\u007f\\]/.test(next)) {
    return DEFAULT_AFTER_LOGIN;
  }

  // Let the URL parser decide, the same way the browser will: resolved
  // against a placeholder origin, a real same-site path stays on it, and
  // anything that escapes ("//evil.example") lands somewhere else.
  const placeholderOrigin = "http://same-site.invalid";
  let resolved: URL;
  try {
    resolved = new URL(next, placeholderOrigin);
  } catch {
    return DEFAULT_AFTER_LOGIN;
  }
  if (resolved.origin !== placeholderOrigin) return DEFAULT_AFTER_LOGIN;

  const path = `${resolved.pathname}${resolved.search}${resolved.hash}`;

  // Never loop back to the login or signup pages themselves.
  if (path.startsWith("/login") || path.startsWith("/signup")) return DEFAULT_AFTER_LOGIN;

  return path;
}
