"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import ProfileDropdown from "./ProfileDropdown";
import BrutalButton from "./ui/BrutalButton";

// How far down the page you must be before the bar switches to its
// translucent, blurred look.
const BLUR_AFTER_PX = 40;

// How far you must scroll in one direction before the bar reacts. Stops it
// flickering on tiny scroll wobbles.
const SCROLL_TOLERANCE_PX = 8;

// The site header.
//
// Behaviour on scroll:
//   - scroll down past the top: the bar slides up out of the way
//   - scroll up at any point: it slides back in
//   - once past BLUR_AFTER_PX: solid navy becomes translucent navy with a blur
//
// On phones the links collapse into a menu button; picking a link closes it.
export default function Navbar() {
  const { user } = useAuth();
  const pathname = usePathname();

  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Watch the scroll position and decide whether the bar shows or hides.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;

      // requestAnimationFrame keeps this to one check per frame.
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const movedDown = currentY > lastY + SCROLL_TOLERANCE_PX;
        const movedUp = currentY < lastY - SCROLL_TOLERANCE_PX;

        if (movedDown && currentY > 80) setIsHidden(true);
        if (movedUp) setIsHidden(false);
        if (movedDown || movedUp) lastY = currentY;

        setIsScrolled(currentY > BLUR_AFTER_PX);
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // For a logged-in user the logo is a shortcut back to their dashboard,
  // except when they are already on it, then it goes to the landing page,
  // so the logo is never a link to the page you are already looking at.
  const onDashboard = pathname?.startsWith("/dashboard") ?? false;
  const logoHref = user && !onDashboard ? "/dashboard" : "/";

  // Dashboard leads the nav for logged-in users; the Home link always goes
  // to the marketing homepage.
  const links = [
    ...(user ? [{ href: "/dashboard", label: "Dashboard" }] : []),
    { href: "/", label: "Home" },
    { href: "/olympiads", label: "Olympiads" },
    { href: "/training", label: "Training" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ];

  // Home is only "active" on the exact homepage; every other link is active
  // for its whole section (e.g. Training is active on /training/abc too).
  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href) ?? false;
  }

  // The bar is always shown while the phone menu is open, so the menu never
  // detaches from it.
  const hideBar = isHidden && !isMenuOpen;

  return (
    <header
      className={`sticky top-0 z-50 transition-[translate,background-color,border-color] duration-300 ease-snappy ${
        hideBar ? "-translate-y-full" : "translate-y-0"
      } ${
        isScrolled && !isMenuOpen
          ? "border-b-2 border-yellow bg-navy/85 backdrop-blur-md"
          : "border-b-[3px] border-ink bg-navy"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link
          href={logoHref}
          className="flex shrink-0 items-center gap-2 whitespace-nowrap text-2xl font-extrabold tracking-tight text-yellow transition-opacity hover:opacity-80"
        >
          <Image
            src="/star-icon.png"
            alt=""
            width={100}
            height={100}
            className="h-9 w-9"
            priority
          />
          Astro Coach
        </Link>

        {/* Desktop links */}
        <ul className="ml-6 hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} active={isActive(link.href)}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>{user ? <ProfileDropdown /> : <LoginButton />}</li>
        </ul>

        {/* Phone: menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-yellow text-yellow transition-colors hover:bg-yellow hover:text-navy lg:hidden"
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </nav>

      {/* Phone menu panel */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="animate-rise-in border-t-2 border-yellow/40 bg-navy px-5 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block border-b border-white/10 py-3 text-lg font-bold transition-colors ${
                    isActive(link.href) ? "text-yellow" : "text-white hover:text-yellow"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5">{user ? <ProfileDropdown /> : <LoginButton fullWidth />}</div>
        </div>
      )}
    </header>
  );
}

// One desktop link. The yellow underline grows in from the left on hover
// and stays for the page you are on.
function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative py-1 text-base font-bold transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:origin-left after:rounded-full after:bg-yellow after:transition-transform after:duration-200 after:ease-snappy hover:text-yellow ${
        active ? "text-yellow after:scale-x-100" : "text-white after:scale-x-0 hover:after:scale-x-100"
      }`}
    >
      {children}
    </Link>
  );
}

function LoginButton({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <BrutalButton href="/login" variant="accent" size="sm" className={fullWidth ? "w-full" : ""}>
      Log in
    </BrutalButton>
  );
}

// Three bars that turn into an X when the menu is open.
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}
