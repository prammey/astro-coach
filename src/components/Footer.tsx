// Bottom footer shown on every page. Includes the independence disclaimer required by the source policy.
export default function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-black bg-[var(--color-space-blue)] py-6 text-center text-sm text-white">
      <p className="font-semibold">Astro Coach</p>
      <p className="mt-1 text-white/70">
        An independent educational project. Not affiliated with USAAAO,
        IAAC, IOAA, IAO, Science Olympiad, or any official organization.
      </p>
      <p className="mt-4 text-xs text-white/60">© 2026 Astro Coach. All rights reserved.</p>
    </footer>
  );
}
