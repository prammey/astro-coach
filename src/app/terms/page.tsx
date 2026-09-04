import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Astro Coach",
  description: "The terms for using Astro Coach, and its source and attribution policy.",
};

// Public terms of service. Google requires a reachable one before an OAuth
// app can be published.
export default function TermsPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)] sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-[var(--color-navy)]/60">Last updated: 4 September 2026</p>

      <div className="mt-8 space-y-6">
        <BrutalCard className="bg-[var(--color-cream)]">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">What this is</h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Astro Coach is a free, independent educational project that helps
            students prepare for astronomy olympiads. By creating an account or
            using the site, you agree to these terms.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            Not affiliated with any competition
          </h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Astro Coach is not affiliated with, endorsed by, or connected to USAAAO,
            IAAC, IOAA, IAO, Science Olympiad, BAAO, or any other competition
            organization. Competition names are used only to describe where a
            question came from.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            Questions, sources, and attribution
          </h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Practice questions are transcribed from publicly available competition
            papers and solutions. Every question records its competition, year,
            round, question number, and a link to the original source, shown on the
            question page.
          </p>
          <p className="mt-3 text-[var(--color-navy)]">
            Rights in the original material remain with whoever holds them. If you
            own material used here and want it changed or removed, email the address
            below and it will be taken down promptly. See the{" "}
            <Link href="/about" className="font-bold text-[var(--color-electric-blue)] underline">
              About page
            </Link>{" "}
            for the full source policy.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            Accuracy is not guaranteed
          </h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Questions, answers, explanations, and figures are transcribed and may
            contain mistakes. Astro Coach is a study aid, not an authoritative
            source. Always check the original competition paper before relying on
            anything here, and never treat a result on this site as an official one.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">Your account</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-[var(--color-navy)]">
            <li>Give accurate information when you sign up, and keep your login secure.</li>
            <li>One account per person. Do not share an account.</li>
            <li>
              Do not attempt to break, overload, scrape, or gain unauthorized access
              to the site or other users&apos; data.
            </li>
            <li>Do not use the content to build a competing commercial product.</li>
            <li>
              You can delete your account at any time from Profile Settings. Accounts
              that break these terms may be removed.
            </li>
          </ul>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            Availability and changes
          </h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Astro Coach is offered free and as-is, with no guarantee of uptime,
            and it is under active development. Features, questions, and these terms
            may change, and the site may be unavailable at times. To the extent the
            law allows, the project and its maintainer are not liable for any loss
            arising from use of the site, including lost progress or competition
            outcomes.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-[var(--color-cream)]">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">Contact</h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Questions, corrections, or takedown requests:{" "}
            <a
              href="mailto:prameet.guha@gmail.com"
              className="font-bold text-[var(--color-electric-blue)] underline"
            >
              prameet.guha@gmail.com
            </a>
          </p>
          <p className="mt-3 text-sm text-[var(--color-navy)]/70">
            See also the{" "}
            <Link href="/privacy" className="font-bold text-[var(--color-electric-blue)] underline">
              Privacy Policy
            </Link>
            .
          </p>
        </BrutalCard>
      </div>
    </PageContainer>
  );
}
