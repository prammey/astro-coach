import Link from "next/link";

// Top navigation bar shown on every page. Lets the user jump between the main sections.
export default function Navbar() {
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
        <ul className="flex gap-4 text-sm font-bold sm:gap-6 sm:text-base">
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
        </ul>
      </nav>
    </header>
  );
}
