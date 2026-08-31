import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";

// Explains what Astro Coach is and its source/copyright policy.
export default function AboutPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)] sm:text-4xl">
        About Astro Coach
      </h1>

      <div className="mt-8 space-y-6">
        <BrutalCard className="bg-[var(--color-cream)]">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            What Astro Coach Is
          </h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Astro Coach is an independent educational project that helps
            students prepare for astronomy olympiads by organizing
            competition guides and practice questions in one place.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-[var(--color-cream)]">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            Independence Notice
          </h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Astro Coach is not affiliated with USAAAO, IAAC, IOAA, IAO,
            Science Olympiad, or any other official competition
            organization.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-[var(--color-cream)]">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            Source Policy
          </h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Real competition questions will only be added once each question
            has full source metadata, including the competition name, year,
            round, source URL, and permission status. Only official or
            public sources will be used, and a public PDF being available
            online does not mean it is automatically free to rehost. Until
            this system is ready, Astro Coach uses only original placeholder
            questions written for practice purposes.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-[var(--color-cream)]">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            Takedown and Contact Policy
          </h2>
          <p className="mt-2 text-[var(--color-navy)]">
            If you believe any content on Astro Coach should be removed or
            corrected, a contact and takedown process will be added here
            before public launch.
          </p>
        </BrutalCard>
      </div>
    </PageContainer>
  );
}
