'use client';

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/lib/auth-context";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const { user } = useAuth();

  // Dashboard sits at the end of the nav for logged-in users; Home and the
  // logo always go to the marketing homepage.
  const links = [
    { href: "/", label: "Home" },
    { href: "/olympiads", label: "Olympiads" },
    { href: "/training", label: "Training" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    ...(user ? [{ href: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <header className="border-b-4 border-black bg-[var(--color-navy)]">
      <nav className="flex items-center justify-between px-10 py-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-[var(--color-yellow)]"
        >
          <Image
            src="/star-icon.png"
            alt="Astro Coach"
            width={100}
            height={100}
            className="h-9 w-9"
          />
          Astro Coach
        </Link>
        <ul className="flex items-center gap-4 text-base font-bold sm:gap-6 sm:text-lg">
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
            <li>
              <ProfileDropdown />
            </li>
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
