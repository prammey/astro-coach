import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";

export const metadata = {
  title: "Privacy Policy",
  description: "What Astro Coach stores about you, why, and how to delete it.",
};

// Public privacy policy. Google requires a reachable one before an OAuth
// app can be published, and it describes what the app genuinely stores.
export default function PrivacyPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-navy/60">Last updated: 1 October 2026</p>

      <div className="mt-8 space-y-6">
        <BrutalCard tone="cream">
          <h2 className="text-xl font-bold text-purple">The short version</h2>
          <p className="mt-2 text-navy">
            Astro Coach is an independent study tool for astronomy olympiad
            students, free to use with an optional paid Pro plan. It stores the
            minimum needed to keep you signed in and show your progress. It does not sell your data and does not show ads. It
            uses Google Analytics to understand how the site is used.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-purple">What is collected</h2>

          <h3 className="mt-4 font-bold text-navy">Account information</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-navy">
            <li>Email address</li>
            <li>First name, last name, and a display username</li>
            <li>A profile picture, only if you upload one</li>
            <li>
              A password, if you sign up with email. It is hashed by our
              authentication provider and is never visible to us.
            </li>
          </ul>

          <h3 className="mt-4 font-bold text-navy">If you use Google sign-in</h3>
          <p className="mt-2 text-navy">
            Google shares your name, email address, and profile picture. That is
            all that is requested, and it is used only to create your profile.
            Astro Coach cannot read your Gmail, Drive, contacts, or any other
            Google data.
          </p>

          <h3 className="mt-4 font-bold text-navy">Practice activity</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-navy">
            <li>Which questions you attempt and the answers you submit</li>
            <li>Whether each attempt was correct, and when you made it</li>
            <li>Questions you bookmark</li>
          </ul>
          <p className="mt-2 text-navy">
            This is what produces your dashboard: accuracy, attempt history, and
            your saved and missed questions.
          </p>

          <h3 className="mt-4 font-bold text-navy">
            Free-response answers and AI grading
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-navy">
            <li>The answers you type for free-response questions</li>
            <li>
              Photos or PDFs of your written work, if you upload them. These are
              kept in private storage, and the app shows them only to you.
            </li>
            <li>The score and feedback each graded attempt receives</li>
          </ul>
          <p className="mt-2 text-navy">
            When you submit an answer for AI grading, your answer and any pages
            you uploaded are sent to Google&apos;s Gemini AI service, together
            with the question and its marking scheme, so it can be graded. Your
            name and email address are not sent. Short-answer questions are
            checked by Astro Coach itself and are never sent to an AI service.
          </p>

          <h3 className="mt-4 font-bold text-navy">Site usage (Google Analytics)</h3>
          <p className="mt-2 text-navy">
            Google Analytics records which pages are visited, roughly where
            visitors are (country or city level), the type of device and
            browser, and how people arrive at the site. It uses cookies to tell
            repeat visits apart. This is only used to see which parts of Astro
            Coach are useful. It is not linked to your account, and it is not
            used for advertising. You can block it with a browser extension or
            Google&apos;s{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="font-bold text-electric underline"
            >
              opt-out add-on
            </a>
            .
          </p>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-purple">
            What is not collected
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-navy">
            <li>No advertising or marketing trackers</li>
            <li>
              No card details — payments are handled by Stripe, and Astro Coach
              never sees your card number
            </li>
            <li>No precise location data</li>
          </ul>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-purple">
            Who your data is shared with
          </h2>
          <p className="mt-2 text-navy">
            Your data is never sold or shared for advertising. It is handled by
            these service providers, to run and improve the app:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-navy">
            <li>
              <strong>Supabase</strong> — accounts, sign-in, the database of your
              progress, and storage for profile pictures and uploaded work
            </li>
            <li>
              <strong>Vercel</strong> — hosting and serving the website
            </li>
            <li>
              <strong>Google</strong> — sign-in, only if you choose to sign in
              with Google
            </li>
            <li>
              <strong>Gmail</strong> — sends account emails, such as password
              reset links
            </li>
            <li>
              <strong>Google Gemini</strong> — grading free-response answers,
              only when you submit one for AI grading
            </li>
            <li>
              <strong>Stripe</strong> — payments for Pro and extra grading
              credits, only if you buy them. Astro Coach keeps just your plan
              status and a Stripe customer reference.
            </li>
            <li>
              <strong>Google Analytics</strong> — site usage statistics, not
              linked to your account, as described above
            </li>
          </ul>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-purple">
            Your control over your data
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-navy">
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
          <p className="mt-3 text-navy">
            Data is kept for as long as your account exists. Deleting your account
            removes it.
          </p>
        </BrutalCard>

        <BrutalCard className="bg-white">
          <h2 className="text-xl font-bold text-purple">
            Students and younger users
          </h2>
          <p className="mt-2 text-navy">
            Astro Coach is built for high school and early university students. It
            is not directed at children under 13, and accounts should not be created
            for them. If you believe a younger child has created an account, email
            the address below and it will be deleted.
          </p>
        </BrutalCard>

        <BrutalCard tone="cream">
          <h2 className="text-xl font-bold text-purple">Contact</h2>
          <p className="mt-2 text-navy">
            Questions about this policy, or requests about your data:{" "}
            <a
              href="mailto:prameet.guha@gmail.com"
              className="font-bold text-electric underline"
            >
              prameet.guha@gmail.com
            </a>
          </p>
          <p className="mt-3 text-sm text-navy/70">
            This policy may change as the project develops. The date at the top of
            the page shows when it was last revised.
          </p>
        </BrutalCard>
      </div>
    </PageContainer>
  );
}
