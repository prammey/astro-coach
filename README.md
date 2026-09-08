# Astro Coach

Astro Coach is a full-stack astronomy olympiad training platform for students preparing for IAAC, Science Olympiad Astronomy, USAAAO, IOAA, IAO, and similar astronomy/astrophysics competitions.

The project will start as a clean educational website with a homepage, olympiad guide, and question training page. Over time, it will become a searchable, source-attributed, gamified practice platform with MCQ/FRQ questions, saved progress, XP, streaks, badges, and topic mastery.

---

## Project Goals

Astro Coach is designed to help students:

* Discover astronomy olympiads from beginner-friendly to advanced
* Practice astronomy questions by topic, difficulty, year, round, and competition
* Answer MCQ questions and check correctness
* Write FRQ answers and reveal solutions/rubrics
* Track progress over time
* Stay motivated through gamification later

---

## Tech Stack

**Currently in use:**

* Next.js App Router (16.2.9)
* React 19
* TypeScript (strict mode)
* Tailwind CSS
* Supabase Auth (email/password)
* Supabase Postgres with Prisma ORM
* Supabase Storage (for profile pictures)
* Resend for report notification emails (optional)
* Zod for validation
* Vercel for hosting

**Built but switched off:**

* Google OAuth sign-in — fully implemented; the button shows
  "Google coming soon!" until the project has its own domain. See
  "Google sign-in" below.

**Planned for future:**

* shadcn/ui
* Vitest for unit tests
* Playwright for end-to-end tests

This project intentionally avoids unnecessary complexity. No Docker, Kubernetes, Redis, GraphQL, microservices, or separate Express backend.

---

## Current Status

**Live at [astrocoach.vercel.app](https://astrocoach.vercel.app)**

**730 practice items** drawn from 736 real competition questions (USAAAO,
IAAC, BAAO), with 99 figures. Six pairs of questions are joined into
multi-part items, which is why the item count is lower than the question
count — see "Multi-part questions" below.

Done:

1. ✅ Static website shell (homepage, navbar, footer)
2. ✅ Training question bank with search and filters
3. ✅ Individual question pages with MCQ checking and explanations
4. ✅ Olympiad guide
5. ✅ Prisma schema, Supabase Postgres, migrations
6. ✅ Supabase Auth (email/password signup & login)
7. ✅ User profiles (names, username, profile pictures via Supabase Storage)
8. ✅ Dashboard with progress tracking and attempt history
9. ✅ Account deletion ("Deactivate Account") that really deletes
10. ✅ Bookmarks, with All / Bookmarked / Incorrect tabs on the dashboard
11. ✅ Question figures rendering, for both questions and solutions
12. ✅ Multi-part questions, for questions that build on a previous one
13. ✅ Report a problem, with an admin review page and email notifications
14. ✅ Pricing, Privacy Policy and Terms of Service pages
15. ✅ Google sign-in built (switched off pending a custom domain)
16. ✅ Deployed to Vercel

Next up:

17. A custom domain, which unblocks Google sign-in
18. Gamification (XP, streaks, badges)
19. Admin question management interface
20. Design polish & responsive improvements
21. Leaderboards, advanced search, discussion

---

## Design Direction

Astro Coach should have a fun, intuitive neo-brutalist astronomy design.

Visual style:

* Deep navy
* Space blue
* Purple
* Electric blue
* Yellow
* Cream/white
* Thick black borders
* Big bold headings
* Playful cards
* Clear navigation
* High contrast
* Mobile-friendly layout

The design should feel fun and energetic, but still clean and easy to use.

---

## Pages

### `/`

Homepage / landing page.

Includes:

* Hero section
* Platform intro
* Buttons to Training and Olympiad Guide
* Feature cards

### `/olympiads`

Guide to astronomy competitions from beginner-friendly to advanced.

Includes:

* IAAC
* Science Olympiad Astronomy
* USAAAO First Round
* USAAAO NAC
* IOAA
* IAO

### `/training`

Main question bank.

Includes:

* Search
* Filters
* Question cards

### `/training/[id]` and `/training/mode`

The two ways into a question: opening one directly, or working through a
training run started with "Start Training".

Both render the same `QuestionView` component, so they always look and
behave identically. They previously had separate copies of this markup and
drifted apart, which is worth remembering before adding anything here.

Includes:

* Question text, figure, and metadata
* MCQ answer checking with explanation and solution figure
* Bookmark toggle and "Report a problem"
* Previous / Skip / Next
* Source metadata

The only difference between the two is what "next" means: the run's queue
inside training, or the next question in catalog order when opened
directly.

### `/dashboard`

User progress dashboard (requires authentication).

Includes:

* User greeting
* Progress stats (questions attempted, unique correct, accuracy)
* Three tabs — All Questions, Bookmarked, Incorrect
* Link to continue training

### `/profile/settings`

User profile settings page (requires authentication).

Includes:

* Profile picture upload (to Supabase Storage)
* Username editor (25 character limit)
* First name and last name editors
* Read-only email display
* Save changes button

### `/about`

About and source policy page.

Includes:

* Project explanation
* Independence/non-affiliation notice
* Source/copyright policy
* Takedown/contact policy placeholder

### `/pricing`

Plan comparison: Free ($0) and Astro Coach Pro ($5.99/month founding
price). Uses the same `PricingSection` component as the homepage, and reads
the signed-in user's real plan from `/api/pro/entitlements` — so a
subscriber sees "Current plan" and a Manage Subscription button rather than
an upgrade prompt. See "Astro Coach Pro" below.

### `/privacy` and `/terms`

Privacy Policy and Terms of Service, linked from the footer on every page.

These exist partly because Google requires both to be reachable before an
OAuth app can be published. They describe what the app actually stores —
no analytics, no trackers, no ads — so keep them truthful if you change
what is collected.

### `/admin/reports`

Admin-only review page for problems learners reported on questions.

Includes:

* Open / Resolved / All filters with counts
* Reason, question link, reporter email, and the reported detail
* Mark resolved / Reopen

Access is controlled by `ADMIN_EMAILS`. See "Reporting problems" below.

---

## Source Policy

Astro Coach is an independent educational project.

It is not officially affiliated with USAAAO, IAAC, IOAA, IAO, Science Olympiad, or any other competition organization.

Every real question must include:

* Competition name
* Exam year
* Round
* Question number
* Source URL
* Original PDF URL if available
* Page number if available
* Attribution text
* Permission/copyright status

During development, use original placeholder questions only. Do not copy real olympiad questions until the source metadata system is ready and the usage policy is reviewed.

---

## Beginner Setup

### Prerequisites

Install these before starting:

* Node.js 18 or newer
* npm
* Git
* VS Code
* Claude Code

Later you will also need:

* Supabase account
* Vercel account

---

## Starting the Project with Claude Code

Create a folder:

```bash
mkdir astro-coach
cd astro-coach
```

Add these files first:

```bash
CLAUDE.md
PRD.md
README.md
```

Then open Claude Code:

```bash
claude
```

Start by asking Claude Code to inspect the folder and follow `CLAUDE.md` and `PRD.md`.

Important: tell Claude to preserve these documentation files and not overwrite them without asking.

---

## Expected Local Development Commands

These commands will become available after the Next.js app is scaffolded.

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open the app:

```bash
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

Run type-check, once the script exists:

```bash
npm run type-check
```

Run tests, once tests exist:

```bash
npm test
```

---

## Project Structure

```txt
astro-coach/
├── CLAUDE.md, PRD.md, README.md
├── .env.example                  committed; empty placeholders only
├── prisma/
│   ├── schema.prisma
│   └── migrations/               applied by running their SQL directly
├── scripts/                      audit scripts, see "Audit scripts"
├── public/
│   └── mcq-images/               99 question and solution figures
└── src/
    ├── app/
    │   ├── page.tsx, layout.tsx
    │   ├── olympiads/, about/, pricing/, privacy/, terms/
    │   ├── login/, signup/, auth/callback/
    │   ├── training/
    │   │   ├── page.tsx          browse and filter
    │   │   ├── [id]/page.tsx     one question, opened directly
    │   │   └── mode/page.tsx     a training run
    │   ├── dashboard/, profile/settings/
    │   ├── admin/reports/        admin-only report review
    │   └── api/
    │       ├── attempts/         checks answers, saves progress
    │       ├── bookmarks/, reports/
    │       ├── questions/, user/, dashboard/
    │       ├── admin/reports/
    │       └── auth/deactivate/
    ├── components/
    │   ├── QuestionView.tsx      shared by both question routes
    │   ├── QuestionNavigation.tsx, QuestionFigure.tsx
    │   ├── McqPractice.tsx       answering, incl. multi-part
    │   ├── ReportProblemButton.tsx, BookmarkButton.tsx
    │   ├── DashboardTabs.tsx, TrainingBrowser.tsx
    │   └── Navbar.tsx, Footer.tsx, ...
    ├── data/mcq/                 the question bank, server-only
    └── lib/
        ├── auth.ts               browser Supabase client
        ├── auth-context.tsx      session state
        ├── supabase/server.ts    cookie-based server client
        ├── supabase/admin.ts     service-role client, route handlers only
        ├── admin.ts              admin authorization
        ├── email.ts              Resend notifications
        └── prisma.ts
```

---

## Environment Variables

Never commit real secrets.

Local secrets should go in:

```bash
.env.local
```

Example file should be:

```bash
.env.example
```

Copy `.env.example` to `.env.local` and fill it in. Every variable is
documented there too.

**Required — the app will not run without these:**

```bash
NEXT_PUBLIC_SUPABASE_URL=""       # Supabase → Settings → API
NEXT_PUBLIC_SUPABASE_ANON_KEY=""  # Supabase → Settings → API
DATABASE_URL=""                   # pooled "Transaction" string, used at runtime
DIRECT_URL=""                     # direct string, used by Prisma migrations
```

**Required for account deletion:**

```bash
SUPABASE_SERVICE_ROLE_KEY=""      # Supabase → Settings → API → service_role
```

**Required for the admin page:**

```bash
ADMIN_EMAILS=""                   # comma-separated emails allowed at /admin/reports
```

**Optional — report notification emails:**

```bash
RESEND_API_KEY=""                 # from resend.com
REPORT_EMAIL_TO=""                # where notifications are sent
REPORT_EMAIL_FROM=""              # leave blank to use Resend's shared sender
```

Notes:

* Only the two `NEXT_PUBLIC_` values are safe to expose to the browser.
  Everything else is server-only and must never gain that prefix.
* `SUPABASE_SERVICE_ROLE_KEY` bypasses Row Level Security and can
  administer accounts. It is read only in `src/lib/supabase/admin.ts`,
  which is imported only from route handlers. Without it, "Deactivate
  Account" fails with a clear configuration error.
* With `ADMIN_EMAILS` unset, **nobody** is an admin — a missing value locks
  `/admin/reports` rather than opening it.
* Without `RESEND_API_KEY`, reports are still saved and readable at
  `/admin/reports`; you simply are not emailed.
* **Set these in Vercel too** (Project → Settings → Environment Variables),
  or the features work locally and fail in production. Environment
  variables are applied at build time, so redeploy after changing one.
* `.env.local` must stay out of git. `.env.example` is committed on
  purpose and contains only empty placeholders.

---

## Database

Supabase Postgres via Prisma. Questions themselves are **not** in the
database — they live in TypeScript files under `src/data/mcq/` and are
loaded server-side. The database only holds what is specific to a user.

Current tables (`prisma/schema.prisma`):

| Table | What it holds |
| --- | --- |
| `UserAttempt` | One row per answer checked: question, answer, correct, when |
| `UserQuestionProgress` | One row per user+question: whether they have ever got it right |
| `Bookmark` | One row per user+question they saved |
| `QuestionReport` | Problems reported on a question, with an `open`/`resolved` status |

`userId` is the Supabase Auth user's UUID. There is no local `User` table,
because Supabase Auth already manages accounts.

### A caution about migrations

This project does **not** have a working `_prisma_migrations` history, so
`prisma migrate dev` will not behave as you expect. Migrations under
`prisma/migrations/` were applied by running their SQL directly.

If you add a model, remember that `npx prisma generate` only updates the
**TypeScript types**. It does not touch the database. That means
`tsc`, `npm run lint` and `npm run build` can all pass while the table does
not exist — which is exactly how the `Bookmark` table went missing and
bookmarking silently failed in production for a while.

**Always confirm a new table actually exists** before believing a feature
works, for example by writing one row through the app and reading it back.

---

## Placeholder Data Rule

**No longer applies.** The placeholder question set has been replaced by
real, source-attributed questions from USAAAO, IAAC and BAAO. Every
question carries its competition, year, round, question number, source URL
and attribution, shown on the question page.

The source policy above still governs what may be added.

---

## Planned Question Metadata

Each question should eventually include:

```txt
id
competition
year
round
questionNumber
type
topic
subtopic
difficulty
questionText
choices
correctAnswer
sampleAnswer
rubric
explanation
sourceUrl
pdfUrl
pageNumber
attributionText
permissionStatus
```

---

## Supabase Setup (Auth + Progress Tracking)

Astro Coach uses Supabase for user accounts (Auth) and a Postgres database
(via Prisma) for tracking attempt history and progress. Follow these steps
once to set up your own Supabase project for local development.

### 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign in.
2. Click "New Project" and choose a name, password, and region.
3. Wait for the project to finish provisioning (a couple of minutes).

### 2. Get your Supabase keys

1. In your Supabase project, go to **Project Settings → API**.
2. Copy the **Project URL** — this is `NEXT_PUBLIC_SUPABASE_URL`.
3. Copy the **anon public** key — this is `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Copy the **service_role** key — this is `SUPABASE_SERVICE_ROLE_KEY`.

The first two are safe to expose in the browser (that's why they're
prefixed `NEXT_PUBLIC_`).

The **service_role** key is different: it bypasses Row Level Security and
can administer accounts, so it must stay server-only. It is deliberately
**not** prefixed with `NEXT_PUBLIC_`, and it is only ever read inside route
handlers (`src/lib/supabase/admin.ts`). Never reference it from a Client
Component, and never commit it. It is required for permanently deleting an
account via "Deactivate Account" — without it that button fails.

When deploying, add it in **Vercel → Project → Settings → Environment
Variables** as well, or account deletion will fail in production only.

### 3. Get your database connection string

1. Go to **Project Settings → Database**.
2. Under "Connection string", copy the **Session** (direct) connection
   string — not the pooled "Transaction" one. Prisma migrations need a
   direct connection.
3. This is your `DATABASE_URL`.

### 4. Fill in your local environment file

```bash
cp .env.example .env.local
```

Then open `.env.local` and fill in the three values above:

```bash
NEXT_PUBLIC_SUPABASE_URL=""
NEXT_PUBLIC_SUPABASE_ANON_KEY=""
DATABASE_URL=""
```

`.env.local` is already in `.gitignore` — never commit it.

### 5. Configure Supabase Auth

1. In Supabase, go to **Authentication → Sign In / Providers**.
2. Make sure **Email** is enabled (it usually is by default) so
   email/password signup and login work.
3. Go to **Authentication → URL Configuration** and add this redirect URL
   for local development:
   ```
   http://localhost:3000/auth/callback
   ```
   Add your production URL here too once the app is deployed.

### 6. (Optional) Enable Google sign-in

Google sign-in needs a Google Cloud OAuth Client ID and Secret — Astro
Coach cannot generate these for you, and the app will not fake or invent
credentials. To set it up:

1. In [Google Cloud Console](https://console.cloud.google.com/), create
   an OAuth 2.0 Client ID (Application type: Web application).
2. Add this Authorized redirect URI (replace with your actual Supabase
   project ref):
   ```
   https://<your-project-ref>.supabase.co/auth/v1/callback
   ```
3. Copy the generated **Client ID** and **Client Secret**.
4. In Supabase, go to **Authentication → Sign In / Providers → Google**,
   enable it, and paste in the Client ID and Client Secret.
5. The "Continue with Google" button on `/login` and `/signup` will then
   work automatically — no code changes needed.

If you skip this step, email/password login still works fully; the
Google button will just show a Supabase error until configured.

### 7. Set up Supabase Storage for profile pictures

Profile pictures are stored in Supabase Storage (not in the database).

1. In Supabase Console, go to **Storage**.
2. Click **Create a new bucket**.
3. Name it `profiles`.
4. Check ✅ **"Public bucket"** (so profile picture URLs are publicly accessible).
5. Click **Create**.

You only need to do this once per Supabase project. The app will automatically create the `profile-pictures/` folder when users upload.

When creating the bucket, optionally set:
- **Restrict file size** to 5 MB
- **Restrict MIME types** to `image/jpeg`, `image/png`, `image/gif`, `image/webp`, `image/avif`

### 8. Run the database migration

Once `.env.local` has a real `DATABASE_URL`, create the database tables:

```bash
npx prisma migrate dev
```

This creates the `UserAttempt` and `UserQuestionProgress` tables in your
Supabase Postgres database. You only need to run this once (and again
any time `prisma/schema.prisma` changes).

### 9. Run the app locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Try signing up with email/password, creating a profile, and uploading a picture!

---

## Authentication & User Profiles

Astro Coach uses Supabase Auth for user accounts and Supabase Storage for profile pictures.

### Features

**Signup & Login:**
- Email/password signup and login
- Email confirmation required (users verify via link)
- Password validation (min 6 characters)
- "Continue with Google" is built but switched off — see below

**A gotcha worth knowing:** the browser client stores the session in
**localStorage, not cookies**. API routes therefore authenticate from an
`Authorization: Bearer <token>` header, not from cookies. A route that
reads the session server-side from cookies will see nobody and return 401.
Every route here follows the Bearer pattern; match it when adding one.

**Account deletion:** "Deactivate Account" in profile settings really
deletes — the Supabase Auth account plus that user's attempts, progress
and bookmarks. It needs `SUPABASE_SERVICE_ROLE_KEY`, because Supabase
rejects admin calls made with the anon key.

**User Profiles:**
- First name and last name stored in Supabase user metadata
- Custom username (up to 25 characters)
- Profile picture upload to Supabase Storage (up to 5 MB)
- Profile settings page at `/profile/settings`
- Profile dropdown in navbar with sign-out option

**Dashboard:**
- Personalized greeting with user's first name or username
- Progress stats (attempts, accuracy, unique correct)
- All Questions / Bookmarked / Incorrect tabs
- Link to continue training

### User Metadata Schema

User metadata stored in Supabase `auth.users.user_metadata`:

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "full_name": "John Doe",
  "username": "johndoe",
  "profile_image_url": "https://..."
}
```

Google sign-in returns different keys (`given_name`, `family_name`,
`picture`), so `/auth/callback` translates them into the fields above on
first sign-in. Username starts as the first name, matching email signup.
It never overwrites values the user has already edited.

### Google sign-in (built, switched off)

Everything works: the button, the OAuth handoff, the callback, and the
profile translation. It is disabled behind a single flag because Google's
brand verification **cannot pass on a `*.vercel.app` URL** — the
registrable domain belongs to Vercel, not us.

To turn it on once the project has its own domain:

1. Verify the domain in Google Search Console and set it as the app's home
   page in the Google Auth Platform console.
2. Enable Google in Supabase → Authentication → Sign In / Providers, with a
   Google Cloud OAuth client ID and secret (see step 6 below).
3. Flip `GOOGLE_SIGN_IN_ENABLED` to `true` in
   `src/components/GoogleSignInButton.tsx`.

Until then the button renders disabled and reads "Google coming soon!",
rather than sending people into an unverified-app warning.

---

## The Question Bank

Questions live in TypeScript, not the database:

```txt
src/data/mcq/
├── usaaao_mcqs.ts      394 questions
├── iaac_mcqs.ts        252 questions
├── baao_mcqs.ts         90 questions
├── catalog.server.ts   combines them, generates IDs, builds multi-part items
├── types.ts
└── topicTaxonomy.ts
```

`catalog.server.ts` is **server-only**. It holds correct answers and
explanations, and throws if imported in the browser. Client components get
`PublicQuestion`, which has those fields stripped.

IDs are generated at load time from competition, year, exam and question
number — for example `usaaao-2026-first-round-q13`. They are never stored
in the data files.

### Figures

Images live in `public/mcq-images/` and are referenced from a question's
`questionMedia` or `solutionMedia`. Question figures render with the
prompt; **solution figures are only sent after an answer is checked**, via
`/api/attempts`, so they cannot be read ahead of time.

Naming convention, which the audit scripts rely on:

```txt
<competition>-<year>-<exam>-q<N>.png            question figure
<competition>-<year>-<exam>-q<N>--solution.png  solution figure
```

### Multi-part questions

Six questions build directly on the one before them ("the comet from the
previous question"). Each declares `continuesFrom: <question number>`, and
the catalog joins it to that question into a single item with an ID like
`usaaao-2019-first-round-q3-q4`.

A multi-part item is answered and scored as one unit: **every part must be
correct**, or the whole item counts as wrong. It is stored as a single
attempt, which is why the item count (730) is lower than the question
count (736).

### Audit scripts

Run these after adding questions or images. They are regression guards for
problems that have actually happened here:

```bash
node scripts/audit-questions.mjs     # media links, answer keys, source metadata
node scripts/audit-image-files.mjs   # the image files themselves
node scripts/audit-text-quality.mjs  # transcription defects in question text
```

`audit-questions.mjs` catches broken paths, figures linked to the wrong
exam, orphan images, missing figures, and stale "see the official PDF"
notes on questions whose figure now renders.

`audit-image-files.mjs` checks case-sensitive paths — a wrong-case path
works on macOS and 404s on Vercel's Linux — plus empty or corrupt files
and duplicate content.

Every problem counter currently reads zero. A few lines are non-zero by
design and are **not** faults:

* *Figure language but no question media (6)* — false positives:
  conceptual H-R diagram questions, and self-contained problems that
  happen to say "in the image".
* *Extension does not match actual format (5)* — five IAAC files are named
  `.png` but hold JPEG data. Browsers sniff the content and render them
  fine.
* *Dimensions too small (1)* — `usaaao-2015-first-round-q12.png` is small
  but legible.
* *Duplicate content (2)* and *Images shared by more than one question (2)*
  — deliberate. Some source exams print one figure for several questions,
  e.g. 2023 Q30 shares Q29's map.

If a **new** name appears in any of these, investigate it.

---

## Reporting problems

Every question has a "Report a problem" button with five preset reasons and
a free-text box. It works **signed out** — a guest who hits a broken
question is exactly who you want to hear from — with a gentle nudge to sign
in so you can follow up.

Reports go to the `QuestionReport` table and are reviewed at
`/admin/reports`.

Because the endpoint is open, three caps stop it being used to flood the
table or your inbox. None of them stores an IP address or anything
identifying, which keeps the privacy policy accurate:

* at most 10 open reports per question
* at most 60 reports an hour site-wide
* **one email per problem** — only the first open report of a given
  question and reason notifies you, so ten people hitting the same missing
  figure is one email

### Email notifications

Optional. Set `RESEND_API_KEY` and `REPORT_EMAIL_TO` and you are emailed
when a new problem is reported, with a link to the question and a reply-to
pointing at the reporter when they were signed in.

Resend's shared sender (`onboarding@resend.dev`) works without verifying a
domain, but **only delivers to the email that owns the Resend account**.
That is fine while notifications go to you. To send elsewhere, verify a
domain and set `REPORT_EMAIL_FROM`.

---

## Deployment

**Currently deployed to:**

- **Production:** https://astrocoach.vercel.app
- **Hosting:** Vercel
- **Database:** Supabase Postgres
- **Storage:** Supabase Storage (profile pictures)
- **Auth:** Supabase Auth

### Pre-Deployment Checklist

Before deploying a new change:

* ✅ `npm run lint` passes (0 errors)
* ✅ `npx tsc --noEmit` passes (type-check)
* ✅ `npm run build` succeeds
* ✅ No `.env.local` or secrets in git
* ✅ Audit scripts still read zero, if questions or images changed
* ✅ Environment variables set **in Vercel**, not just `.env.local`
* ✅ Supabase Storage bucket created (if adding profile features)

**A green build is not proof a feature works.** Lint, type-check and build
never touch the database, the network, or a real session. Anything that
writes a row, sends an email, or depends on an environment variable has to
be exercised for real — every bug that reached production in this project
so far passed all three checks first.

### Auto-Deploy

The app auto-deploys to Vercel when you push to `main` branch on GitHub. You can also manually deploy with:

```bash
vercel --prod
```

---

## Testing

There is no automated test suite yet (Vitest and Playwright are still
planned). Testing today means linting, type-checking, the audit scripts,
and exercising flows by hand.

**What "tested" has to mean here.** Lint, type-check and build never touch
the database, the network, or a real session — so passing them says nothing
about whether a feature works. Every production bug in this project so far
passed all three. For anything that writes a row, sends an email, or reads
an environment variable, verify the effect:

* wrote a row? read it back out of Postgres
* sent an email? confirm it arrived
* needs an env var? confirm it is set **in Vercel**, not just locally
* auth-gated? try it as a signed-out user, a normal user, and an admin

Use a throwaway account for anything destructive. Never test account
deletion on your own account.

Flows worth checking after a change:

* Navigation, training filters and search
* Answering a question, including a multi-part one
* Question and solution figures rendering
* Bookmarking, and the dashboard tabs
* Login, logout, profile editing
* Reporting a problem, signed in and signed out
* `/admin/reports` as an admin and as a non-admin

---

## Development Rules

When using Claude Code:

* Build one phase at a time
* Keep the app working
* Do not add future features early
* Ask for explanations in beginner-friendly language
* Run lint/type-check after changes
* Avoid unnecessary packages
* Do not change the tech stack without a reason
* Do not add real questions until source metadata is ready

---

## Troubleshooting

### The site does not start

Try:

```bash
npm install
npm run dev
```

Make sure you are in the project folder.

### Port 3000 is already in use

Use another port:

```bash
npm run dev -- -p 3001
```

### TypeScript errors

Ask Claude Code to run the type-check and explain the error in beginner-friendly language.

### Database connection failed

Check:

* `.env.local` exists
* `DATABASE_URL` is correct
* Supabase project is active
* The table you are querying actually exists (see "A caution about
  migrations")

### A feature works locally but fails on the live site

Almost always a missing environment variable in Vercel. Compare:

```bash
vercel env ls          # what production has
```

against `.env.local`. Add anything missing under Project → Settings →
Environment Variables, then **redeploy** — variables are applied at build
time, so an existing deployment will not pick them up.

### "Account deletion is not configured on the server"

`SUPABASE_SERVICE_ROLE_KEY` is missing wherever you are running.

### `/admin/reports` says you do not have access

`ADMIN_EMAILS` does not contain the email you are signed in with. It must
match exactly, and must be set in Vercel for the live site.

### Create-next-app complains about a non-empty folder

The folder already has documentation files. Tell Claude Code to preserve `CLAUDE.md`, `PRD.md`, and `README.md`, then scaffold the Next.js app carefully in the current folder without overwriting project docs.

---

## License

For now: private / educational project.

Choose a license later before making the repository public.

---

## Future Resume Bullet

Built Astro Coach, a full-stack astronomy olympiad training platform using Next.js, TypeScript, Tailwind CSS, Prisma, and Supabase. Designed a metadata-rich question bank with MCQ/FRQ practice, source attribution, searchable filters, user progress tracking, and gamified learning features.

---

# Astro Coach Pro

Built on the branch `feature/pro-v1`. **Not merged to `main`, not deployed,
and the database migration has not been applied.** Everything below is the
setup needed to run it.

Stripe is configured for **test mode only**. No real card is ever charged.

## What Pro adds

Students write full solutions to real olympiad free-response questions,
submit typed and/or handwritten work, and get rubric-based AI grading
against the original marking scheme, with part-by-part scores on the
competition's own point values.

**Free** keeps everything it had, plus **3 lifetime AI grades**. Once spent,
free-response questions the student has not already worked on become
Pro-only — but everything they already attempted, all their feedback, and
any solution they already unlocked stays theirs forever.

**Pro** is **$5.99/month** as a founding price until 31 December 2026,
then $7.99/month for new subscribers. Founding subscribers keep $5.99 for
as long as their subscription stays active. Pro includes the full
free-response bank, 50 AI grades per billing period, handwritten and PDF
submissions, up to 3 graded attempts per question, solution unlocking, and
detailed topic analytics.

## The rules that guard money

A grading credit is spent in exactly one place: after a confirmed
submission has passed every check *and* the model has returned a real
grade. All of these cost **zero**:

- opening a question
- uploading a file
- an invalid file, or one over the page limit
- an unreadable photo (the grader says so instead of inventing a grade)
- a provider outage or timeout
- double-clicking Submit
- viewing any past attempt or feedback
- Give Up & View Solution

Attempt limits, credit balances, plan state and solution unlocking are all
derived server-side. There is no client-side `isPro` anywhere in the
codebase, and a locked question's text is never sent to the browser and
then hidden with CSS — it simply is not sent.

## Setup

Five things need configuring. The app runs without any of them, with
subscriptions unavailable and a mock grader in place of real AI.

### 1. Database migration — APPLIED

Already done. Recorded in `_prisma_migrations` as:

```
00000000000000_baseline   steps executed = 0   (recorded, never run)
20260907000000_pro_v1     steps executed = 1   (applied)
```

`npx prisma migrate status` reports **"Database schema is up to date!"**,
and a live-database diff comes back empty.

Two things worth knowing about how that history was set up, because they
are unusual:

**The baseline was never executed.** This project's original tables were
created by hand, so Prisma had no migration history at all —
`_prisma_migrations` did not exist. The three legacy migrations (`init`,
`add_question_report`, `add_bookmark`) described a schema that was never
true: TEXT primary keys, where the live columns are PostgreSQL `uuid` with
a `gen_random_uuid()` default. They are archived in
`prisma/legacy-migrations/` and replaced by `00000000000000_baseline`,
generated by introspecting the real database. On this database it is
recorded as applied without running; on a fresh database it would run and
recreate the pre-Pro schema exactly.

**The Prisma CLI uses `DIRECT_URL`, not `DATABASE_URL`.** Migrations need
advisory locks and session state that pgBouncer's transaction pooling
(port 6543) cannot provide. Pointed at the pooler, `migrate status` and
`migrate deploy` hang forever and print nothing at all — no error, no
timeout. `prisma.config.ts` handles this; the running app still uses the
pooled `DATABASE_URL`, which is correct for serverless traffic.

**Never run `prisma migrate reset`** — it drops the database. If `migrate
dev` ever warns about drift, stop and read the output rather than
accepting the suggested fix.

### 2. Supabase Storage — three private buckets

In Supabase Dashboard → **Storage** → **New bucket**, create these three.
**Leave "Public bucket" switched OFF for all three.** Then expand
**Additional configuration** on each and set the size and type limits.

| Bucket | Public | Size limit | Allowed MIME types | Holds |
| --- | --- | --- | --- | --- |
| `frq-student-work` | **OFF** | 10 MB | `image/jpeg`, `image/png`, `image/webp`, `application/pdf` | Students' uploaded solution pages |
| `frq-source-pdfs` | **OFF** | 50 MB | `application/pdf` | Admin-imported question and solution papers |
| `frq-question-media` | **OFF** | 10 MB | `image/jpeg`, `image/png`, `image/webp` | Figures belonging to published questions |

`frq-question-media` is not written to yet — nothing in the importer
attaches figures, so it stays empty until that is built. Create it anyway
so the code has somewhere to read from.

**Do not create any Storage policies.** That is deliberate, and it is the
safe configuration rather than a shortcut.

No browser in Astro Coach ever talks to Storage as a signed-in user. Every
upload and every read goes through a short-lived signed URL that the server
mints with the service-role key, and the browser then does a plain
`fetch(signedUrl)` with no Supabase client and no session attached. So
`auth.uid()` is never in scope for these buckets, and a policy written
against it would never be consulted.

With RLS on and no policies, `storage.objects` denies the `anon` and
`authenticated` roles outright, while the service role bypasses RLS. That
is exactly what we want: the server can reach every file, and nothing else
can reach any of them.

Adding a permissive "students may read their own folder" policy would make
things **worse**, not better. It would hand any signed-in user direct
read and write access to their own folder using the public anon key,
letting them write files straight into storage and skip the checks that
`/api/frq/uploads/sign` performs — that the question is published, that
their plan allows opening it, and that the file is an allowed type and
size.

To confirm your buckets are set up correctly, open **SQL Editor** and run
this read-only query:

```sql
select id, public, file_size_limit, allowed_mime_types
  from storage.buckets
 where id like 'frq-%';
```

Expect `public = false` for all three, and the size limits above in bytes
(10 MB = 10485760, 50 MB = 52428800).

Then check Storage → **Policies** and confirm the three `frq-*` buckets
list **no policies at all**.

#### Where files are stored

Student uploads use this path, built server-side from the authenticated
user's ID so the browser cannot choose where a file lands:

```
<userId>/<frqQuestionId>/<epochMillis>-<sanitisedFilename>
```

The user ID as the first segment is what makes ownership checkable from
the path alone. `/api/frq/uploads/view` refuses any path that does not
start with the requesting user's own ID, which is what stops one student
reading another's work.

Admin source PDFs use `<importBatchId>/questions.pdf` and
`<importBatchId>/solutions.pdf`. Only the server ever reads them.

#### How the size limits are enforced

The 10 MB per-file limit is checked twice, and the second check is the one
that counts:

1. Before upload, against the size the browser *claims*. This catches
   honest mistakes early and avoids a pointless upload.
2. After upload, against the size Supabase *actually recorded*, in
   `verifyUploads`. A client that claims 1 MB and then uploads 500 MB is
   rejected here, before the file is downloaded for grading and before any
   credit is spent.

The bucket's own size limit is a third layer, stopping the oversized
upload at the door.

The 40 MB whole-submission cap and the 8-page rule are both enforced on
real stored data too. Supabase cannot cap total bytes per submission, so
that limit lives only in the application.

You already have `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` for account
deletion; Pro uses the same one, and needs nothing else for Storage. It
must stay server-only — no `NEXT_PUBLIC_` prefix, and never imported from
a Client Component.

### 3. Stripe — TEST MODE

Turn on the **Test mode** toggle (top right of the Stripe dashboard) and
keep it on throughout.

1. **Create the product.** Product catalogue → **Add product**.
   Name it `Astro Coach Pro`.

2. **Add the founding price.** In that product, add a price:
   `$5.99`, **Recurring**, **Monthly**. Save it, then copy its ID — it
   starts with `price_`. This is `STRIPE_FOUNDING_PRICE_ID`.

3. **Add the regular price.** Add a *second* price to the same product:
   `$7.99`, **Recurring**, **Monthly**. Copy its ID. This is
   `STRIPE_REGULAR_PRICE_ID`.

   The server picks between the two from the clock. Before 31 December
   2026 new checkouts get $5.99; after, they get $7.99. Nobody is ever
   migrated between them.

4. **Get your secret key.** Developers → API keys → reveal the **secret
   key**. It starts with `sk_test_`. This is `STRIPE_SECRET_KEY`.
   If it starts with `sk_live_` you are not in test mode — stop and switch.

5. **Set up the webhook.** Developers → Webhooks → **Add endpoint**.
   Endpoint URL: `https://your-site.com/api/stripe/webhook`.
   Select these events:

   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`

   Save, then copy the **Signing secret** (starts with `whsec_`). This is
   `STRIPE_WEBHOOK_SECRET`. Without it the webhook route rejects
   everything, so nobody can become Pro.

   For local testing, use the Stripe CLI instead:

   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```

   It prints its own `whsec_` — use that one locally.

6. **Turn on the Billing Portal.** Settings → Billing → Customer portal →
   activate it, and allow customers to cancel subscriptions and update
   payment methods. "Manage subscription" opens this.

7. **Test card:** `4242 4242 4242 4242`, any future expiry, any CVC, any
   postcode.

**Do not enable live mode.** Switching later means replacing the four
Stripe values with their live equivalents *after* an end-to-end test.

### 4. AI grading

1. Get a key from <https://aistudio.google.com/apikey>.
2. Put it in `.env.local` as `GEMINI_API_KEY`.
3. Leave `AI_GRADING_MODEL` unset to use `gemini-3.5-flash-lite`, or set
   another model. This one variable controls **both** grading and the FRQ
   importer. If you set a model that is not in the rates table in
   `src/lib/pro/config.ts`, cost estimates show as unknown rather than as a
   wrong number.

   Do not use the `gemini-2.5-*` models: Google retired them for API keys
   issued after mid-2026, and they return "no longer available to new
   users" even though `ListModels` still advertises them.

   Measured on a typical grading call (text only, September 2026):

   | Model | Speed | Input / output per 1M tokens |
   | --- | --- | --- |
   | `gemini-3.5-flash-lite` | ~1.3s | $0.30 / $2.50 |
   | `gemini-3.1-flash-lite` | ~1.7s | $0.25 / $1.50 |
   | `gemini-3.8-flash` | ~3.2s | $0.75 / $3.75 (doubles 1 Jan 2027) |
   | `gemini-3.5-flash` | ~5.8s | $1.50 / $9.00 |

   Uploaded photos and PDFs add to both. The importer sends whole PDFs, so
   it is much slower than a grade — but it runs once per exam, where
   grading runs on every submission.

**Without a key**, grading uses a deterministic mock grader — you can build
the whole flow locally without spending anything, and `/admin/usage` says
loudly that mock grading is active. In production the app refuses to fall
back to the mock grader rather than hand a student invented marks.

Two strings force the awkward paths when testing with the mock grader:
type `[mock:full]` to get full marks (tests early solution unlock), or
`[mock:unreadable]` to get an unreadable verdict (tests that it costs
nothing).

The key is never exposed: `GEMINI_API_KEY` has no `NEXT_PUBLIC_` prefix,
the Gemini code is server-only with a runtime guard against client imports,
and a clean production build contains no reference to it.

### 5. Admin access

1. Supabase Dashboard → **Authentication** → **Users**.
2. Click your own user.
3. Copy the **User UID** (a UUID like `a1b2c3d4-...`).
4. Add it to `.env.local`:

   ```
   ADMIN_USER_IDS="a1b2c3d4-...."
   ```

   Several admins go in comma-separated. With this unset **nobody** is an
   admin, so a missing value locks the admin area rather than opening it.
   Non-admins get a 404 from `/admin`, not a 403 — the area's existence is
   not confirmed to a stranger.

   This is separate from the older `ADMIN_EMAILS`, which still controls
   `/admin/reports`.

Then add every new variable to the Vercel project as well, before deploying.

## Importing free-response questions

1. Download the competition's **question PDF** and its **official solutions
   PDF**.
2. Open `/admin/frq-import`.
3. Fill in competition, year, exam name and the source URL.
4. Set the **rights/permission status** honestly. Leave it as "Not reviewed
   yet" if you have not checked — a question cannot be published while it
   is unreviewed or denied. A public PDF is not automatically reusable.
5. Attach both PDFs and click **Analyze PDFs**. A long paper can take a
   couple of minutes.
6. Everything found is saved as a **draft**. Nothing is published.
7. Go to `/admin/frq-review`, open a question, and check it against the
   source — the screen shows the source page numbers it came from and the
   extraction confidence.
8. Fix anything wrong, then mark each warning **Resolved** once you have
   actually resolved it.
9. Click **Approve & publish**. If it refuses, it lists exactly why:
   unresolved warnings, no point value, parts that do not add up, no
   official solution, or unreviewed rights.

The extractor never invents. A point value not printed in the paper comes
back missing, not estimated. A solution it cannot find is null. It cannot
crop figures, so a question that depends on a diagram is flagged for you to
attach one.

## Testing the student flow

With a Free account:

1. Open `/training/frq` and pick a question.
2. Type a solution, or upload photos, or both. Submit — the confirmation
   says "Attempt 1 of 3", that it costs 1 credit, and how many you have.
3. Confirm. Check the dashboard: credits should drop 3 → 2.
4. Use the other two grades. After the third, new free-response questions
   lock, and `/training/frq` shows the upgrade prompt. Everything you
   already worked on stays open.
5. Try uploading 9 pages — it should refuse before charging anything.

Then subscribe with the test card `4242 4242 4242 4242`:

6. Confirm the dashboard shows Astro Coach Pro, the founding-price badge,
   and 50 credits with a reset date matching your Stripe billing period.
7. Upload a mix — a 4-page PDF plus 4 photos should be accepted as 8 pages;
   adding one more should be refused.
8. Work through attempts 1, 2 and 3 on a question. The solution stays
   locked after 1 and 2 and unlocks after 3.
9. On a fresh question, use `[mock:full]` (or genuinely earn full marks) —
   the solution should unlock immediately.
10. On another, use **Give up & view solution**. It should warn you, unlock
    the solution, block further grading, and cost no credits.
11. Reload. Every attempt and all its feedback should still be there,
    without any AI call.
12. Check the dashboard analytics, then open **Manage subscription** and
    cancel. Pro access should continue to the end of the paid period, and
    the card should say so.

## Where to see what it costs

`/admin/usage`, over a rolling 30 days: grades run, students grading,
average grades per student, how many hit the 50-credit cap, average pages
per grade, average latency, estimated total spend and estimated cost per
grade, and the provider error rate.

Cost estimates come from the rates table in `src/lib/pro/config.ts` — the
one place any AI pricing lives. They are estimates, not a provider bill.
Raw per-call data is in the `AiUsageEvent` table.

## Deliberately not built

Open-ended "Ask AI" follow-up chat after a grade; buying extra grading
credits; annual, family or school billing; automatic figure cropping from
source PDFs. The data model leaves room for purchased credits
(`CreditGrant`, `CreditSource.PURCHASED`) but nothing creates them.
