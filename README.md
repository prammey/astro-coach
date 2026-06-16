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

Planned stack:

* Next.js App Router
* React
* TypeScript
* Tailwind CSS
* shadcn/ui later
* PostgreSQL through Supabase
* Prisma ORM
* Zod
* Supabase Auth later
* Vitest later
* Playwright later
* Vercel later

This project intentionally avoids unnecessary complexity in v1. No Docker, Kubernetes, Redis, GraphQL, microservices, or separate Express backend are planned for the first version.

---

## Current Status

Status: Planning / early build.

The project should be built in phases:

1. Static website shell
2. Original placeholder question data
3. Training/question-bank UI
4. Individual question pages
5. Improved olympiad guide
6. Prisma database schema
7. Seed data
8. Supabase setup
9. Database integration
10. Admin question creation
11. Authentication
12. Bookmarks and attempt history
13. Gamification
14. Design polish
15. Deployment prep
16. Final review

Do not build all phases at once.

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

Planned variables:

```bash
DATABASE_URL=""
DIRECT_URL=""
NEXT_PUBLIC_SUPABASE_URL=""
NEXT_PUBLIC_SUPABASE_ANON_KEY=""
ADMIN_EMAILS=""
ADMIN_SECRET=""
```

Notes:

* `DATABASE_URL` connects Prisma to Supabase Postgres.
* `DIRECT_URL` may be needed by Prisma for migrations.
* `NEXT_PUBLIC_SUPABASE_URL` is safe to expose to the browser.
* `NEXT_PUBLIC_SUPABASE_ANON_KEY` is safe to expose when Supabase security rules are configured correctly.
* Service-role keys should never be exposed to the browser.
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

## Future Supabase Setup

Later, create a Supabase project and copy the database connection string into `.env.local`.

Expected flow:

```bash
cp .env.example .env.local
```

Then fill in:

```bash
DATABASE_URL=""
DIRECT_URL=""
NEXT_PUBLIC_SUPABASE_URL=""
NEXT_PUBLIC_SUPABASE_ANON_KEY=""
```

Then run migrations:

```bash
npx prisma migrate dev
```

Then seed the database:

```bash
npx prisma db seed
```

---

## Future Deployment

The app will eventually deploy to Vercel.

Before deployment:

* Confirm `npm run build` works
* Confirm environment variables are set in Vercel
* Confirm Supabase database works
* Confirm no `.env.local` or secrets are committed
* Confirm source policy is visible
* Confirm app is not using copyrighted material without review

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
