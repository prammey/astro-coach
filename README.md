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
* Zod for validation
* Vercel for hosting

**Planned for future:**

* shadcn/ui
* Vitest for unit tests
* Playwright for end-to-end tests
* Google OAuth sign-in

This project intentionally avoids unnecessary complexity. No Docker, Kubernetes, Redis, GraphQL, microservices, or separate Express backend.

---

## Current Status

**Status: Phase 5 — Authentication & User Profiles (Live)**

Completed phases:

1. ✅ Static website shell (homepage, navbar, footer)
2. ✅ Original placeholder question data
3. ✅ Training/question-bank UI (search, filters)
4. ✅ Individual question pages (MCQ, FRQ support)
5. ✅ Improved olympiad guide
6. ✅ Prisma database schema
7. ✅ Seed data
8. ✅ Supabase setup (Auth + Postgres + Storage)
9. ✅ Database integration (Prisma client, migrations)
10. ✅ Supabase Auth (email/password signup & login)
11. ✅ User profiles (first name, last name, username, profile pictures)
12. ✅ Dashboard with progress tracking (attempts, accuracy stats)
13. ✅ Profile dropdown in navbar with settings
14. ✅ Deployed to Vercel (https://astrocoach.vercel.app)

Currently in progress:

15. Gamification (XP, streaks, badges)
16. Admin question management interface
17. Bookmarks and favorites
18. Design polish & responsive improvements

Future phases:

19. Google OAuth sign-in
20. Email notifications
21. Leaderboards
22. Advanced search (by competition, year, round)
23. Question explanations & discussion

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

## Planned Pages

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

### `/training/[id]`

Individual question practice page.

Includes:

* Question text
* Metadata
* MCQ answer checking
* FRQ answer box and solution reveal
* Source information

### `/dashboard`

User progress dashboard (requires authentication).

Includes:

* User greeting with first name
* Progress stats (questions attempted, accuracy, unique correct)
* Recent attempt history
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

## Expected Project Structure

The exact structure may evolve, but the project should roughly look like this:

```txt
astro-coach/
├── CLAUDE.md
├── PRD.md
├── README.md
├── .env.example
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── olympiads/
│   │   │   └── page.tsx
│   │   ├── training/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   └── admin/
│   │       └── questions/
│   │           └── new/
│   │               └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── QuestionCard.tsx
│   │   ├── FilterBar.tsx
│   │   └── OlympiadCard.tsx
│   ├── data/
│   │   └── sampleQuestions.ts
│   ├── lib/
│   │   ├── prisma.ts
│   │   └── validators.ts
│   └── types/
│       └── question.ts
└── public/
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

Variables currently in use (see `.env.example`):

```bash
NEXT_PUBLIC_SUPABASE_URL=""
NEXT_PUBLIC_SUPABASE_ANON_KEY=""
DATABASE_URL=""
```

Planned for later phases:

```bash
ADMIN_EMAILS=""
ADMIN_SECRET=""
```

Notes:

* `DATABASE_URL` connects Prisma to Supabase Postgres — use the direct (Session) connection string, not the pooled one.
* `NEXT_PUBLIC_SUPABASE_URL` is safe to expose to the browser.
* `NEXT_PUBLIC_SUPABASE_ANON_KEY` is safe to expose when Supabase security rules are configured correctly.
* Service-role keys should never be exposed to the browser, and Astro Coach does not use one.
* `.env.local` must stay out of git.

---

## Database Plan

The app will eventually use Supabase Postgres with Prisma.

Main tables:

* Competition
* Exam
* Question
* AnswerChoice
* UserAttempt
* Bookmark

Basic relationship:

```txt
Competition
  → Exam
    → Question
      → AnswerChoice

User
  → UserAttempt
  → Bookmark
```

Each question must have source metadata.

---

## Placeholder Data Rule

Before the database is added, the app should use original placeholder questions in:

```txt
src/data/sampleQuestions.ts
```

These questions should be written only for development and should not be copied from real exams.

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

### 2. Get your Supabase URL and anon key

1. In your Supabase project, go to **Project Settings → API**.
2. Copy the **Project URL** — this is `NEXT_PUBLIC_SUPABASE_URL`.
3. Copy the **anon public** key — this is `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

These two values are safe to expose in the browser (that's why they're
prefixed `NEXT_PUBLIC_`). Never copy the **service_role** key into this
project — that one must stay private and server-only, and Astro Coach
doesn't need it.

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
- Session-based authentication via secure cookies
- Password validation (min 6 characters)

**User Profiles:**
- First name and last name stored in Supabase user metadata
- Custom username (up to 25 characters)
- Profile picture upload to Supabase Storage (up to 5 MB)
- Profile settings page at `/profile/settings`
- Profile dropdown in navbar with sign-out option

**Dashboard:**
- Personalized greeting with user's first name or username
- Progress stats (attempts, accuracy, unique correct)
- Attempt history with timestamps
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
* ✅ All database migrations applied
* ✅ Supabase Storage bucket created (if adding profile features)
* ✅ Environment variables set in Vercel

### Auto-Deploy

The app auto-deploys to Vercel when you push to `main` branch on GitHub. You can also manually deploy with:

```bash
vercel --prod
```

---

## Testing Plan

Early phases:

* Manual browser testing
* Linting
* Type-checking

Later phases:

* Vitest for unit tests
* Playwright for end-to-end tests

Important flows to test:

* Navigation
* Training filters
* Question pages
* MCQ answer checking
* FRQ solution reveal
* Login/logout
* Bookmarking
* Attempt history
* Dashboard stats

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
* Prisma migration has been run

### Create-next-app complains about a non-empty folder

The folder already has documentation files. Tell Claude Code to preserve `CLAUDE.md`, `PRD.md`, and `README.md`, then scaffold the Next.js app carefully in the current folder without overwriting project docs.

---

## License

For now: private / educational project.

Choose a license later before making the repository public.

---

## Future Resume Bullet

Built Astro Coach, a full-stack astronomy olympiad training platform using Next.js, TypeScript, Tailwind CSS, Prisma, and Supabase. Designed a metadata-rich question bank with MCQ/FRQ practice, source attribution, searchable filters, user progress tracking, and gamified learning features.
