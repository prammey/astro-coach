import Image from "next/image";
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
  { href: "mailto:prameet.guha@gmail.com", label: "Contact us" },
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
            {/* The same logo and tagline as the navbar. */}
            <p className="flex items-center gap-2">
              <Image src="/star-icon.png" alt="" width={100} height={100} className="h-8 w-8" />
              <span className="flex flex-col">
                <span className="text-xl font-extrabold leading-none text-yellow">Astro Coach</span>
                <span className="mt-1 text-xs font-bold leading-none tracking-wide text-white/85">
                  for Olympiads
                </span>
              </span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              An independent educational project. Not affiliated with USAAAO,
              IAAC, BAAO, IOAA, IAO, Science Olympiad, or any official organization.
            </p>
          </div>

          <FooterColumn title="Explore" links={SITE_LINKS} />
          <FooterColumn title="Policies" links={POLICY_LINKS} />
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Astro Coach. All rights reserved.
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
