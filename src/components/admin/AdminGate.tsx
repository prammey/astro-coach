"use client";

// Decides whether to render an admin page, and shows the ordinary 404 to
// everyone else.
//
// Why this is a Client Component rather than a server-side check: Astro
// Coach signs users in with the Supabase JS client, which keeps the
// session in localStorage and sends it to the API as a Bearer token. There
// is no auth cookie, so a Server Component cannot see who is signed in —
// it would 404 for everybody, admins included.
//
// This is the same shape the existing /admin/reports page uses: the API
// does the real authorization, and the page only decides what to show.
// Nothing here is trusted. Every admin route re-checks ADMIN_USER_IDS
// server-side on every request, so a visitor who bypassed this component
// would reach screens that return 403 to them and no data.

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/auth";

type Check = "pending" | "admin" | "denied";

export default function AdminGate({ children }: { children: React.ReactNode }) {
  const { loading } = useAuth();
  const [check, setCheck] = useState<Check>("pending");

  useEffect(() => {
    if (loading) return;

    let active = true;

    // The server is always asked, even with no session — a missing token
    // simply comes back 401. Asking unconditionally keeps one code path and
    // means the answer always comes from the server, never from what the
    // browser believes about itself.
    supabase.auth
      .getSession()
      .then(({ data: { session } }) =>
        fetch("/api/admin/session", {
          headers: session ? { Authorization: `Bearer ${session.access_token}` } : {},
        }),
      )
      .then((response) => {
        if (active) setCheck(response.ok ? "admin" : "denied");
      })
      .catch(() => {
        if (active) setCheck("denied");
      });

    return () => {
      active = false;
    };
  }, [loading]);

  // A non-admin gets the site's ordinary 404 page.
  //
  // Note this happens in the browser, not on the server: the check cannot
  // run until the session is readable, which is only true client-side. The
  // document itself therefore returns HTTP 200 with an empty body, and the
  // 404 is rendered a moment later. No admin data is ever in that document
  // — every admin API re-checks ADMIN_USER_IDS server-side and returns 403
  // to anyone else.
  if (check === "denied") notFound();

  // Render nothing while deciding, rather than a message that would tell a
  // stranger a page exists here at all.
  if (check !== "admin") return null;

  return <>{children}</>;
}
