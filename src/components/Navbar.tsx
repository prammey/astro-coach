'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function Navbar() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const links = [
    { href: "/", label: "Home" },
    { href: "/olympiads", label: "Olympiads" },
    { href: "/training", label: "Training" },
    { href: "/about", label: "About" },
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
          {!loading && user ? (
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
                <button
                  onClick={handleLogout}
                  className="rounded border-2 border-white px-3 py-1 text-white transition hover:bg-white hover:text-[var(--color-navy)]"
                >
                  Log Out
                </button>
              </li>
            </>
          ) : !loading ? (
            <li>
              <Link
                href="/login"
                className="rounded border-2 border-[var(--color-yellow)] px-3 py-1 text-[var(--color-yellow)] transition hover:bg-[var(--color-yellow)] hover:text-[var(--color-navy)]"
              >
                Login
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}
