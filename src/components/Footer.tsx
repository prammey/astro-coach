import Link from "next/link";

// Bottom footer shown on every page. Includes the independence disclaimer required by the source policy.
export default function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-black bg-[var(--color-space-blue)] py-6 text-center text-sm text-white">
      <p className="font-semibold">Astro Coach</p>
      <p className="mt-1 text-white/70">
        An independent educational project. Not affiliated with USAAAO,
        IAAC, IOAA, IAO, Science Olympiad, or any official organization.
      </p>

      {/* Policy links live in the footer so they are reachable from every
          page, which is what Google checks when publishing an OAuth app. */}
      <p className="mt-4 flex items-center justify-center gap-3 text-xs text-white/70">
        <Link href="/privacy" className="hover:text-[var(--color-yellow)] hover:underline">
          Privacy Policy
        </Link>
        <span className="text-white/30">•</span>
        <Link href="/terms" className="hover:text-[var(--color-yellow)] hover:underline">
          Terms of Service
        </Link>
      </p>

      <p className="mt-3 text-xs text-white/60">© 2026 Astro Coach. All rights reserved.</p>
    </footer>
  );
}
