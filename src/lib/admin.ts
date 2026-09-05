import { supabase } from '@/lib/auth';

// Who counts as an admin, from a server-only env var — a comma-separated
// list of email addresses. Deliberately not NEXT_PUBLIC_, so the list is
// never shipped to the browser.
//
// With ADMIN_EMAILS unset nobody is an admin, so a missing config locks
// the admin pages rather than opening them.
function adminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export type AdminCheck =
  | { ok: true; email: string }
  | { ok: false; status: 401 | 403; error: string };

// Verifies the bearer token and that the signed-in user is an admin.
// Authorization happens here on the server; the admin page's own check is
// only there to avoid showing a useless screen.
export async function requireAdmin(request: Request): Promise<AdminCheck> {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return { ok: false, status: 401, error: 'Not signed in' };
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(authHeader.slice(7));

  if (error || !user?.email) {
    return { ok: false, status: 401, error: 'Not signed in' };
  }

  if (!adminEmails().includes(user.email.toLowerCase())) {
    return { ok: false, status: 403, error: 'You do not have access to this page' };
  }

  return { ok: true, email: user.email };
}
