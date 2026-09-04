import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";

export const metadata = {
  title: "Privacy Policy — Astro Coach",
  description: "What Astro Coach stores about you, why, and how to delete it.",
};

// Public privacy policy. Google requires a reachable one before an OAuth
// app can be published, and it describes what the app genuinely stores.
export default function PrivacyPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)] sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-[var(--color-navy)]/60">Last updated: 4 September 2026</p>

      <div className="mt-8 space-y-6">
        <BrutalCard className="bg-[var(--color-cream)]">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">The short version</h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Astro Coach is a free, independent study tool for astronomy olympiad
            students. It stores the minimum needed to keep you signed in and show
            your progress. It does not sell your data, does not show ads, and does
            not run third-party analytics or tracking.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">What is collected</h2>

          <h3 className="mt-4 font-bold text-[var(--color-navy)]">Account information</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-[var(--color-navy)]">
            <li>Email address</li>
            <li>First name, last name, and a display username</li>
            <li>A profile picture, only if you upload one</li>
            <li>
              A password, if you sign up with email. It is hashed by our
              authentication provider and is never visible to us.
            </li>
          </ul>

          <h3 className="mt-4 font-bold text-[var(--color-navy)]">If you use Google sign-in</h3>
          <p className="mt-2 text-[var(--color-navy)]">
            Google shares your name, email address, and profile picture. That is
            all that is requested, and it is used only to create your profile.
            Astro Coach cannot read your Gmail, Drive, contacts, or any other
            Google data.
          </p>

          <h3 className="mt-4 font-bold text-[var(--color-navy)]">Practice activity</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-[var(--color-navy)]">
            <li>Which questions you attempt and the answers you submit</li>
            <li>Whether each attempt was correct, and when you made it</li>
            <li>Questions you bookmark</li>
          </ul>
          <p className="mt-2 text-[var(--color-navy)]">
            This is what produces your dashboard: accuracy, attempt history, and
            your saved and missed questions.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            What is not collected
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-[var(--color-navy)]">
            <li>No advertising or marketing trackers</li>
            <li>No third-party analytics</li>
            <li>No payment details — Astro Coach is free and takes no payments</li>
            <li>No location data, and nothing from your device beyond your session</li>
          </ul>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            Who your data is shared with
          </h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Your data is never sold or shared for advertising. It is handled by
            three service providers, purely so the app can run:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-[var(--color-navy)]">
            <li>
              <strong>Supabase</strong> — accounts, sign-in, the database of your
              progress, and profile picture storage
            </li>
            <li>
              <strong>Vercel</strong> — hosting and serving the website
            </li>
            <li>
              <strong>Google</strong> — only if you choose to sign in with Google
            </li>
          </ul>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            Your control over your data
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-[var(--color-navy)]">
            <li>
              View and edit your name, username, and profile picture at any time in
              Profile Settings.
            </li>
            <li>
              Delete your account permanently using{" "}
              <strong>Deactivate Account</strong> in Profile Settings. This removes
              your account and your saved progress. It cannot be undone.
            </li>
            <li>
              Ask a question about your data, or request its removal, by emailing
              the address below.
            </li>
          </ul>
          <p className="mt-3 text-[var(--color-navy)]">
            Data is kept for as long as your account exists. Deleting your account
            removes it.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">
            Students and younger users
          </h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Astro Coach is built for high school and early university students. It
            is not directed at children under 13, and accounts should not be created
            for them. If you believe a younger child has created an account, email
            the address below and it will be deleted.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-[var(--color-cream)]">
          <h2 className="text-xl font-bold text-[var(--color-purple)]">Contact</h2>
          <p className="mt-2 text-[var(--color-navy)]">
            Questions about this policy, or requests about your data:{" "}
            <a
              href="mailto:prameet.guha@gmail.com"
              className="font-bold text-[var(--color-electric-blue)] underline"
            >
              prameet.guha@gmail.com
            </a>
          </p>
          <p className="mt-3 text-sm text-[var(--color-navy)]/70">
            This policy may change as the project develops. The date at the top of
            the page shows when it was last revised.
          </p>
        </BrutalCard>
      </div>
    </PageContainer>
  );
}
