import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/lib/actions/auth";

// This is an async Server Component (no "use client") so it can check
// who is logged in directly from the request cookies before rendering.
export default async function Navbar() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;

  const links = [
    { href: "/", label: "Home" },
    { href: "/olympiads", label: "Olympiads" },
    { href: "/training", label: "Training" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="border-b-4 border-black bg-[var(--color-navy)]">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-[var(--color-yellow)]"
        >
          Astro Coach
        </Link>
        <ul className="flex items-center gap-4 text-sm font-bold sm:gap-6 sm:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white transition hover:text-[var(--color-yellow)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {user ? (
            <>
              <li>
                <Link
                  href="/dashboard"
                  className="text-white transition hover:text-[var(--color-yellow)]"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <form action={signOut}>
                  <button
                    type="submit"
                    className="rounded border-2 border-white px-3 py-1 text-white transition hover:bg-white hover:text-[var(--color-navy)]"
                  >
                    Log Out
                  </button>
                </form>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/login"
                className="rounded border-2 border-[var(--color-yellow)] px-3 py-1 text-[var(--color-yellow)] transition hover:bg-[var(--color-yellow)] hover:text-[var(--color-navy)]"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
