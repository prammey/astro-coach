import Link from "next/link";

// The links a visitor might want from any page.
const SITE_LINKS = [
  { href: "/olympiads", label: "Olympiad guide" },
  { href: "/training", label: "Question bank" },
  { href: "/training/frq", label: "Free-response practice" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

// Policy links live in the footer so they are reachable from every page,
// which is what Google checks when publishing an OAuth app.
const POLICY_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

// Bottom footer shown on every page. Includes the independence disclaimer
// required by the source policy.
export default function Footer() {
  return (
    <footer className="starfield-dark mt-auto border-t-[3px] border-ink bg-space text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand and disclaimer */}
          <div>
            <p className="text-xl font-extrabold text-yellow">Astro Coach</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              An independent educational project. Not affiliated with USAAAO,
              IAAC, IOAA, IAO, Science Olympiad, or any official organization.
            </p>
          </div>

          <FooterColumn title="Explore" links={SITE_LINKS} />
          <FooterColumn title="Policies" links={POLICY_LINKS} />
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © 2026 Astro Coach. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// One column of footer links with a small heading.
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-bold text-white">{title}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-block py-0.5 text-sm text-white/70 transition-colors duration-200 hover:text-yellow"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
