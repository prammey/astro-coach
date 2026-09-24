// "View as": lets the site owner see the site the way a guest, a Free
// account or a Pro subscriber sees it, without logging out.
//
// This file is shared by the browser and the server and holds no secrets:
// just the view names, the cookie that stores the choice, and which account
// may use it. The browser only uses it to draw the toggle. The server is
// what makes a view real (see src/lib/pro/view-as.server.ts), and it only
// honours the cookie after checking the signed-in account's email itself —
// a cookie set by anyone else is ignored.

/// The views the owner can switch to. Absent = their real account.
export type ViewAs = "guest" | "free" | "pro";

export const VIEW_AS_OPTIONS: Array<{ value: ViewAs | null; label: string; description: string }> = [
  { value: null, label: "My real account", description: "No simulation" },
  { value: "guest", label: "Guest", description: "Signed out" },
  { value: "free", label: "Free account", description: "Signed in, no Pro" },
  { value: "pro", label: "Pro", description: "Signed in with Pro" },
];

/// The cookie holding the chosen view.
export const VIEW_AS_COOKIE = "astro_view_as";

/// The only account allowed to switch views.
export const VIEW_SWITCH_EMAILS = ["prameet.guha@gmail.com"];

/// Whether this email belongs to an account allowed to switch views.
export function canSwitchViews(email: string | null | undefined): boolean {
  return Boolean(email) && VIEW_SWITCH_EMAILS.includes(email!.trim().toLowerCase());
}

/// Reads a cookie value as a view, ignoring anything unexpected.
export function parseViewAs(value: string | null | undefined): ViewAs | null {
  return value === "guest" || value === "free" || value === "pro" ? value : null;
}

/// Finds the view in a raw Cookie header ("a=1; astro_view_as=pro").
export function viewAsFromCookieHeader(header: string | null | undefined): ViewAs | null {
  if (!header) return null;
  for (const part of header.split(";")) {
    const [name, ...rest] = part.trim().split("=");
    if (name === VIEW_AS_COOKIE) return parseViewAs(decodeURIComponent(rest.join("=")));
  }
  return null;
}
