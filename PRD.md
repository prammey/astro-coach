# Astro Coach PRD — Project Requirements Document

**Project Name:** Astro Coach
**Status:** Live at [astrocoach.vercel.app](https://astrocoach.vercel.app) — v1 feature set complete
**Maintained By:** Prameet Guha
**Last Updated:** 2026-09-05

> **How to read this document.** Sections 1–11 are the original product
> spec and still describe the intent. Section 12 records which phases are
> actually done, and **Section 18 lists where the build deliberately
> diverged from this spec** — read that before trusting an older section.

---

## 1. Project Overview

Astro Coach is a full-stack astronomy olympiad training platform for students preparing for competitions such as IAAC, Science Olympiad Astronomy, USAAAO, IOAA, IAO, and similar astronomy/astrophysics contests.

The platform will start as a clean educational website with a homepage, an olympiad guide, and a training question bank. Over time, it will become a gamified practice platform where users can answer MCQ and FRQ questions, save questions, track progress, build streaks, and improve by topic.

The goal is to create a serious portfolio project that is useful, technically strong, and beginner-friendly to maintain.

---

## 2. Problem Statement

Astronomy olympiad preparation is scattered across many PDFs, old exams, forum posts, competition websites, and unofficial resources. Students often struggle to know:

* Which competitions exist
* Which competitions are beginner-friendly
* What order to prepare in
* Where to find practice questions
* How to filter questions by topic/difficulty
* How to track progress over time

Astro Coach solves this by creating a structured training platform with searchable, attributed, metadata-rich astronomy questions and a clear learning path.

---

## 3. Target Users

### Primary User

High school or early college students preparing for astronomy competitions.

They need:

* A clear guide to astronomy olympiads
* Organized practice questions
* Filters by topic, difficulty, year, round, and competition
* MCQ answer checking
* FRQ solution/rubric reveal
* Progress tracking later

### Secondary User

Students who enjoy astronomy and want structured practice even if they are not currently competing.

### Future User

Teachers, club leaders, or coaches who want to recommend structured astronomy practice material.

---

## 4. Core Pages

### 4.1 Homepage `/`

Purpose: Introduce Astro Coach and guide users to the main areas.

Must include:

* Hero section
* Short explanation of the platform
* Call-to-action buttons for Training and Olympiad Guide
* Feature cards:

  * Question Bank
  * Olympiad Guide
  * Progress Tracking Coming Soon
  * Gamification Coming Soon
* Fun astronomy-themed design

---

### 4.2 Olympiad Guide `/olympiads`

Purpose: Explain astronomy competitions in order from beginner-friendly to advanced.

Must include cards for:

1. IAAC
2. Science Olympiad Astronomy
3. USAAAO First Round
4. USAAAO NAC
5. IOAA
6. IAO

Each card should include:

* Name
* Beginner friendliness
* Difficulty level
* Format
* Who should try it
* Topics covered
* Preparation advice
* Source link placeholder
* Button/link to relevant practice questions later

The page should include a visual ladder:

Beginner → Intermediate → Advanced → International

---

### 4.3 Training Page `/training`

Purpose: Main question bank and practice entry point.

Must include:

* Search bar
* Filters:

  * Competition
  * Year
  * Round
  * Topic
  * Difficulty
  * Question type
* Question cards
* Clear links to individual question pages

Question cards should show:

* Competition
* Year
* Round
* Question number
* Topic
* Difficulty
* Type: MCQ or FRQ
* Short preview
* Open question button

---

### 4.4 Question Detail Page `/training/[id]`

Purpose: Let the user practice one question.

Must include:

* Competition
* Year
* Round
* Question number
* Topic
* Difficulty
* Type
* Question text
* Source metadata
* Back button

For MCQ:

* Show choices
* Let user select an answer
* Check answer button
* Show correct/incorrect result
* Reveal explanation after checking

For FRQ:

* Show text area
* Let user type an answer
* Reveal solution/rubric button
* Do not auto-grade FRQs in v1

---

### 4.5 About / Source Policy Page `/about`

Purpose: Explain the project and clarify source/copyright behavior.

Must include:

* What Astro Coach is
* Who it is for
* Statement that Astro Coach is not affiliated with USAAAO, IAAC, IOAA, IAO, Science Olympiad, or other official organizations
* Source policy
* Takedown/contact policy placeholder
* Explanation that real questions require source metadata

---

### 4.6 Dashboard `/dashboard` — BUILT

> Built, minus the gamification rows (XP, streak, badges). Adds All /
> Bookmarked / Incorrect tabs.

Purpose: Show user progress after authentication and attempt history exist.

Future content:

* Questions attempted
* MCQ accuracy
* Recent attempts
* Saved questions count
* Topic breakdown
* XP
* Streak
* Badges

---

## 5. Core Features

### Feature 1: Static Marketing Site

The first version should have a homepage, olympiad guide, training placeholder, and about page.

Success criteria:

* User can navigate between pages
* Design direction is visible
* Site is responsive
* No database required yet

---

### Feature 2: Original Placeholder Question Bank

Before using real data, the app should use original sample questions in TypeScript.

Success criteria:

* At least 12 original placeholder questions
* MCQ and FRQ examples
* Each question has metadata
* No copied real olympiad questions

---

### Feature 3: Training UI

Users should browse and filter questions.

Success criteria:

* Search works
* Filters work
* Question cards are readable
* Individual question pages work

---

### Feature 4: MCQ and FRQ Practice

Users should answer MCQ questions and reveal FRQ solutions.

Success criteria:

* MCQ selection works
* Check answer works
* Explanation appears
* FRQ text area works
* Solution/rubric reveal works

---

### Feature 5: Database-Backed Question Bank — NOT BUILT (deliberate)

> Questions stayed in TypeScript. See Section 18.

After the UI works with placeholder data, questions should move to a Supabase Postgres database using Prisma.

Success criteria:

* Prisma schema exists
* Database tables match product needs
* Seed data works
* Training UI loads from database
* Source metadata is preserved

---

### Feature 6: Admin Question Creation — NOT BUILT

> Not needed while questions live in TypeScript. See Section 18.

A simple admin form should allow manual question entry.

Success criteria:

* Admin can add question
* Source metadata is required
* Zod validates form inputs
* MCQ choices can be added
* FRQ rubric/sample answer can be added

---

### Feature 7: Authentication and Progress Tracking

Users should be able to create accounts and track attempts.

Success criteria:

* Users can sign up, log in, and log out
* Browsing does not require login
* Saving progress requires login
* Attempts are stored
* Bookmarks are stored

---

### Feature 8: Basic Gamification — NOT BUILT

> The largest remaining item. See Section 19.

Users should receive simple motivation features.

Success criteria:

* XP points
* Daily streak
* Basic badges
* Topic mastery percentage
* Dashboard displays progress clearly

---

## 6. Out of Scope for v1

Do not build these early:

* AI grading
* Leaderboards
* Payments/subscriptions
* Team/classroom accounts
* Mobile app
* Discussion forum
* Complex analytics
* Microservices
* Vector database
* RAG chatbot
* Real scraping pipeline
* Automated copyright handling
* Social features
* Public user profiles

These can be considered after the core training platform works.

---

## 7. Tech Stack

### Frontend

* Next.js App Router
* React
* TypeScript
* Tailwind CSS
* shadcn/ui later for polished components

### Backend

* Next.js Server Components
* Next.js Route Handlers or Server Actions where appropriate
* No separate Express backend in v1

### Database

* Supabase Postgres
* Prisma ORM

### Authentication

* Supabase Auth, added after the question bank works

### Validation

* Zod

### Testing

* Vitest for unit tests later
* Playwright for end-to-end tests later

### Deployment

* Vercel for the Next.js app
* Supabase for database/auth/storage

### Package Manager

* npm unless there is a strong reason to switch

---

## 8. Design Requirements

Astro Coach should have a neo-brutalist astronomy style.

Visual direction:

* Deep navy
* Space blue
* Purple
* Electric blue
* Yellow
* Cream/white
* Black borders
* Bold typography
* Strong cards
* Playful layout
* Clear hierarchy
* Simple navigation

Design principles:

* Fun, not childish
* Bold, not messy
* Colorful, not unreadable
* Beginner-friendly, not overwhelming
* Responsive on mobile and desktop

---

## 9. Data Model Requirements

> **Outdated.** The Competition / Exam / Question / AnswerChoice tables below
> were never built — questions live in TypeScript. The tables that do exist
> are `UserAttempt`, `UserQuestionProgress`, `Bookmark` and `QuestionReport`.
> See Section 18 and `prisma/schema.prisma`.

### Competition

Represents a competition organization or contest.

Fields:

* id
* name
* slug
* description
* officialUrl
* createdAt
* updatedAt

Examples:

* IAAC
* Science Olympiad Astronomy
* USAAAO
* IOAA
* IAO

---

### Exam

Represents a specific exam or round from a competition.

Fields:

* id
* competitionId
* year
* round
* title
* sourceUrl
* pdfUrl
* createdAt
* updatedAt

Examples:

* USAAAO 2024 First Round
* IOAA 2022 Theory
* IAAC Qualification Round

---

### Question

Represents one practice question.

Fields:

* id
* examId
* questionNumber
* type
* topic
* subtopic
* difficulty
* questionText
* correctAnswer
* sampleAnswer
* rubric
* explanation
* sourceUrl
* pdfUrl
* pageNumber
* attributionText
* permissionStatus
* createdAt
* updatedAt

Question types:

* MCQ
* FRQ
* DATA_ANALYSIS
* OBSERVATION
* MIXED

Difficulties:

* BEGINNER
* INTERMEDIATE
* ADVANCED

Permission statuses:

* ORIGINAL_PLACEHOLDER
* OFFICIAL_PUBLIC_LINK_ONLY
* PERMISSION_GRANTED
* NEEDS_REVIEW
* REMOVED

---

### AnswerChoice

Represents one MCQ answer option.

Fields:

* id
* questionId
* label
* text
* isCorrect
* createdAt
* updatedAt

---

### UserAttempt

Represents a user trying a question.

Fields:

* id
* userId
* questionId
* submittedAnswer
* isCorrect
* revealedSolution
* createdAt

---

### Bookmark

Represents a saved question.

Fields:

* id
* userId
* questionId
* createdAt

---

## 10. Source and Copyright Policy

Astro Coach must be careful with real questions.

Rules:

* Do not copy private or login-only material.
* Do not add real questions without source metadata.
* Do not assume public PDFs are automatically free to rehost.
* Prefer official public sources.
* Keep source URL and PDF URL visible when available.
* Keep attribution text for every real question.
* Include permission/copyright status.
* Add a takedown/contact policy before public launch.
* Make it clear the platform is independent and not officially affiliated with competitions.

During development, use original placeholder questions only.

---

## 11. Security Requirements

Use Next.js/Supabase-appropriate security practices.

Rules:

* Never commit `.env.local`
* Never commit secrets
* Never hardcode API keys
* Validate user input with Zod
* Use Prisma instead of raw SQL for normal database access
* Verify user ownership for bookmarks and attempts
* Protect admin routes
* Keep Supabase service-role keys server-only if ever used
* Never expose service-role keys to the browser
* Do not log sensitive user information
* Keep admin access simple at first, but do not leave it unsecured before public launch

---

## 12. Development Phases

**Status of each phase below:**

| Phase | | Notes |
| --- | --- | --- |
| 1. Static website shell | ✅ done | |
| 2. Placeholder question data | ✅ superseded | Replaced by 736 real, source-attributed questions |
| 3. Training question bank UI | ✅ done | Search, filters, question cards |
| 4. Individual question pages | ✅ done | MCQ only; no FRQs in the bank yet |
| 5. Improve olympiad guide | ✅ done | |
| 6. Prisma schema | ✅ done | User data only — see Section 18 |
| 7. Seed data | ⬜ not needed | Questions live in TypeScript, not the database |
| 8. Supabase setup | ✅ done | Auth, Postgres, Storage |
| 9. Database integration | ✅ done | Attempts, progress, bookmarks, reports |
| 10. Admin question creation | ✅ done | The FRQ PDF importer and review queue — Section 20 |
| 11. Auth | ✅ done | Email/password; Google built but switched off |
| 12. Bookmarks and attempts | ✅ done | Plus dashboard tabs |
| 13. Gamification | ⬜ **not built** | XP, streaks, badges, topic mastery |
| 14. Design polish | 🟡 partial | Ongoing |
| 15. Deployment prep | ✅ done | Live on Vercel |
| 16. Final review | 🟡 ongoing | |

**Built beyond the original plan:** question and solution figures,
multi-part questions, problem reporting with an admin review page and
email notifications, account deletion, privacy/terms/pricing pages, and
audit scripts for the question bank. See Section 18.

**Astro Coach Pro** — subscriptions, the free-response question bank, AI
grading and Pro analytics — is built on the `feature/pro-v1` branch. It
was not part of the original 16-phase plan. See Section 20.

---

### Phase 1: Static Website Shell

Build:

* `/`
* `/olympiads`
* `/training`
* `/about`
* Navbar
* Footer
* Responsive design

No database.

---

### Phase 2: Placeholder Question Data

Build:

* `sampleQuestions.ts`
* 12 original questions
* TypeScript types

No real questions.

---

### Phase 3: Training Question Bank UI

Build:

* Search
* Filters
* Question cards

Still using placeholder data.

---

### Phase 4: Individual Question Pages

Build:

* `/training/[id]`
* MCQ checking
* FRQ solution reveal

Still using placeholder data.

---

### Phase 5: Improve Olympiad Guide

Build:

* Beginner-to-advanced guide
* Competition cards
* Visual difficulty ladder

---

### Phase 6: Prisma Schema

Build:

* Prisma setup
* Database models
* Enums
* Relationships

---

### Phase 7: Seed Data

Build:

* Seed script
* Placeholder competitions
* Placeholder exams
* Placeholder questions

---

### Phase 8: Supabase Setup

Build:

* `.env.example`
* README instructions
* Supabase database setup docs

---

### Phase 9: Database Integration

Build:

* Training page loads from database
* Question pages load from database

---

### Phase 10: Admin Question Creation

Build:

* Admin form
* Zod validation
* Source metadata requirements

---

### Phase 11: Auth

Build:

* Signup
* Login
* Logout
* Account/session handling

---

### Phase 12: Bookmarks and Attempts

Build:

* Save questions
* Attempt history
* Simple dashboard

---

### Phase 13: Gamification

Build:

* XP
* Streak
* Badges
* Topic mastery

---

### Phase 14: Design Polish

Build:

* Consistent design system
* Responsive improvements
* Better cards/forms/buttons

---

### Phase 15: Deployment Prep

Build:

* Vercel instructions
* Production environment checklist
* README polish

---

### Phase 16: Final Review

Do:

* Cleanup
* Bug fixes
* Naming review
* Security review
* Beginner-friendly architecture summary

---

## 13. Success Metrics

The project is successful when:

* [x] The app runs locally with `npm run dev`
* [x] Homepage, olympiad guide, training, and about pages exist
* [x] Training page supports search and filters
* [x] Individual question pages work
* [x] MCQ answer checking works
* [ ] FRQ solution reveal works — *no FRQs in the bank yet; the bank is MCQ only*
* [x] Question data has metadata
* [x] Source policy is visible
* [x] Prisma schema exists
* [x] Supabase setup is documented
* [ ] Seed data works — *not needed; questions live in TypeScript*
* [ ] Database-backed question loading — *deliberately not done, see Section 18*
* [x] Auth works
* [x] Bookmarks and attempts work
* [x] Dashboard works
* [ ] Gamification works — *not built*
* [x] README is beginner-friendly
* [x] No secrets are committed
* [x] App builds successfully
* [x] Code is understandable to a beginner

---

## 14. Common Gotchas

### Non-empty project folder

If the project folder already contains `README.md`, `PRD.md`, or `CLAUDE.md`, the app scaffold command may need care. Claude should preserve these files and avoid overwriting them without confirmation.

### Database too early

Do not add Supabase/Prisma before the UI works with placeholder data.

### Auth too early

Do not add login before the basic question bank works.

### Real questions too early

Do not add real olympiad questions until the source metadata system is ready.

### Design too early

Do not spend days polishing design before the core flow works.

### AI features too early

Do not add AI grading or a chatbot in v1.

---

## 15. Done When for Early MVP

**Early MVP is complete.** The project is past this bar and live.

* [x] `/` exists
* [x] `/olympiads` exists
* [x] `/training` exists
* [x] `/training/[id]` exists
* [x] `/about` exists
* [x] Questions exist — 736 real ones, not the 12 placeholders planned
* [x] MCQ practice works
* [ ] FRQ solution reveal — *no FRQs in the bank yet*
* [x] Filters work
* [x] Site has a recognizable neo-brutalist astronomy style
* [x] Source policy is visible
* [x] App runs locally
* [x] README explains setup

---

## 16. Future Roadmap

Possible future features:

* ~~Real sourced question import~~ — **done**, 736 questions with full
  source metadata
* ~~Admin review queue~~ — **done** for reported problems
  (`/admin/reports`); not for question submissions
* PDF upload/storage through Supabase Storage
* Better topic taxonomy
* Difficulty calibration
* AI-assisted hints
* AI-assisted FRQ feedback
* Timed practice sets
* Daily challenge
* Leaderboards
* Club/classroom mode
* Public topic mastery maps
* Spaced repetition
* Mobile-first practice mode

For the concrete near-term list, see Section 19.

---

## 17. Backlog — Specced, Not Yet Built

These are agreed features with enough detail to build later. Not in scope
for the current phase.

### 17.1 Report a problem with a question — BUILT

Shipped, including the email notifications. Live on every question.

Decisions taken at build time, against the open items listed below:

* **Email provider:** Resend, called over its REST API so no SDK was added.
  Optional — without `RESEND_API_KEY` reports are still saved.
* **Logged-out users may report.** The product lets guests practise, so
  guests are exactly who hits a broken question. They see a nudge to sign
  in "so we can follow up", but are never blocked.
* **Reports are stored**, not only emailed — in `QuestionReport`, with an
  `open`/`resolved` status, reviewed at `/admin/reports`.
* **Abuse protection:** 10 open reports per question, 60 an hour
  site-wide, and only the first open report of a given question and reason
  sends an email. None of these store an IP address, so the privacy policy
  stays accurate.

The original spec follows, for reference.

---

A report button next to each question so learners can flag issues in the
question bank, and the maintainer hears about it by email.

**UI**

* Report button on the question page, next to the question (near the
  bookmark control).
* Opens a small form with preset reasons:
  * This requires an image
  * Wrong answer
  * Wrong explanation
  * Typo
  * Other
* A free-text box for additional detail, available with any reason
  (required when "Other" is selected).
* Confirmation state after submitting, so the learner knows it was sent.

**Email notification**

* An email goes to the maintainer for every report, containing:
  * Which question (ID, competition, year, question number, and a direct
    link to the question page)
  * The selected reason and any typed detail
  * Who sent it — the reporting user's ID and email address
  * When it was submitted
* Purpose is to see the report and fix the underlying question data.

**Open items to decide at build time**

* Email delivery: Supabase, Resend, or another provider. Needs an API key
  in server-only env vars.
* Whether logged-out users may report (if yes, there is no email to
  attribute the report to).
* Store reports in a table as well as emailing, so they can be tracked and
  marked resolved rather than living only in an inbox.
* Basic abuse protection: rate limit per user per question.

### 17.2 Continue with Google — BUILT (needs Supabase configuration)

The app side is implemented. It stays inert until Google is enabled in the
Supabase dashboard; see "Enable Google sign-in" in `README.md`.

Google sign-in on both the login and signup pages, alongside
email/password.

* "Continue with Google" button on `/login` and `/signup`.
* On first sign-in, populate the user's profile from the Google account:
  * First name and last name from the Google profile
  * Email from the Google account
  * Username still defaults to the first name, matching the existing
    email/password signup behaviour
* Profile settings then shows those values already filled in, and they stay
  editable.

**Open items to decide at build time**

* Requires a Google Cloud OAuth client ID and secret configured in Supabase
  — see the "Enable Google sign-in" step in `README.md`, which already
  documents the setup.
* Decide what happens when a Google account uses an email that already has
  an email/password account (link the identities, or show an error).

---

## 18. Where the Build Diverged from This Spec

Decisions taken during the build that contradict earlier sections. These
are deliberate; the earlier text is left in place for context.

### Questions live in TypeScript, not the database

Section 5 (Feature 5) and Section 9 describe `Competition`, `Exam`,
`Question` and `AnswerChoice` tables. **Those tables were never built.**

Questions live in `src/data/mcq/*.ts` and are loaded server-side. The
database holds only user-specific data: `UserAttempt`,
`UserQuestionProgress`, `Bookmark` and `QuestionReport`.

Why: the question bank is read-only, versioned in git, reviewable in a pull
request, and needs no query layer. Moving it into Postgres would add a
migration and an admin UI for no benefit at this size. Revisit if
non-technical editors ever need to add questions.

Consequence: Phase 7 (seed data) and Phase 10 (admin question creation) are
not needed in their original form.

### The bank is MCQ only

Several sections describe FRQ answer boxes and rubric reveal. The data
model supports FRQ, but **no FRQs have been added**, so that path is
untested and effectively unbuilt.

### Real questions, not placeholders

Section 12 Phase 2 called for 12 original placeholder questions. The bank
instead holds **736 real questions** from USAAAO, IAAC and BAAO, each with
full source metadata, plus 99 figures. The source policy in Section 10
governs them and still applies.

### Multi-part questions

Not in the original spec. Six questions build directly on the one before
them, and are joined into a single item that is answered and scored as a
unit — every part must be correct. This is why the app reports **730
practice items** from 736 questions.

### Account deletion

Not in the original spec. "Deactivate Account" permanently deletes the
account and all of that user's data. Requires `SUPABASE_SERVICE_ROLE_KEY`,
which Section 11 and earlier README text said the project would not use.
That guidance is superseded: the key is used, server-side only, in
`src/lib/supabase/admin.ts`.

### Pages added beyond Section 4

`/pricing`, `/privacy`, `/terms`, `/admin/reports`, and `/training/mode`
(a training run). Privacy and terms exist partly because Google requires
both before an OAuth app can be published.

### Google sign-in is built but switched off

Fully implemented and disabled behind one flag, because Google's brand
verification cannot pass on a `*.vercel.app` URL — the registrable domain
belongs to Vercel. A custom domain unblocks it.

---

## 19. What to Build Next

In rough order of value:

1. **A custom domain.** Unblocks Google sign-in and Google's brand
   verification, and looks far better than `*.vercel.app`.
2. **Gamification** (Phase 13) — XP, streaks, badges, topic mastery. The
   largest remaining item from the original plan.
3. **Automated tests.** There are none. The highest-value first file would
   cover the catalog: ID generation, multi-part grouping, and that answers
   and explanations are stripped from what reaches the browser.
4. **Admin question management** (Phase 10) — only worth it if questions
   ever move out of TypeScript, or a non-technical editor needs to add them.
5. **FRQ support** — the data model allows it; no questions use it yet.
6. **Design polish and responsive passes** (Phase 14).


---

## 20. Astro Coach Pro

Built on the branch `feature/pro-v1`. Not merged, not deployed.

This turns Astro Coach from an MCQ bank into a training platform: students
write full solutions to real olympiad free-response questions, submit typed
or handwritten work, and get rubric-based AI grading against the original
marking scheme.

### 20.1 Plans

There are exactly two.

**Free — $0.** Everything that already existed (the 726 MCQs, search,
filters, bookmarks, explanations, progress tracking), plus **3 lifetime AI
free-response grades**. They never reset. Once they are spent, free-response
questions the student has not already worked on become Pro-only — but
everything they have already attempted, every piece of feedback, and every
solution they already unlocked stays theirs.

**Pro — $5.99/month founding price.** The founding price is available to new
subscribers until 31 December 2026 (`2027-01-01T06:00:00Z`), after which new
subscribers pay $7.99/month. An existing founding subscriber is never
migrated; if they cancel and resubscribe after the cutoff they pay the
regular price. No annual, family or school plan.

Pro includes the full free-response bank, 50 AI grades per Stripe billing
period, typed/handwritten/PDF submissions, rubric-based part-by-part
grading on the competition's own point values, up to 3 graded attempts per
question, saved history, official solution unlocking, and detailed topic
analytics.

### 20.2 The rules that guard money

| Rule | Where it lives |
| --- | --- |
| Entitlements are derived server-side, never from the browser | `src/lib/pro/rules.ts`, `entitlements.ts` |
| Credits: 3 lifetime free, 50 per Stripe billing period on Pro | `src/lib/pro/config.ts` |
| A credit is spent only after a real grade comes back | `submitGradedAttempt` |
| Max 3 graded attempts per user per question, never resetting | `decideGradeAttempt` |
| Full marks on any attempt unlocks the solution immediately | `unlockReasonAfterGrade` |
| Attempt 3 unlocks the solution afterwards | `unlockReasonAfterGrade` |
| Give Up unlocks the solution, blocks further grading, costs nothing | `giveUpAndUnlock` |
| Locked questions are absent from the response, not blurred | `getFrqForStudent` |
| Solutions require an `FrqSolutionUnlock` row | `canViewOfficialSolution` |
| Stripe webhooks are the only thing that grants Pro | `/api/stripe/webhook` |

Nothing costs a credit except a confirmed submission that passed every
check and came back graded. Opening a question, uploading a file, an
invalid file, a rejected page count, an unreadable photo, a provider
outage and a double-click all cost zero.

### 20.3 Scoring

The competition's own point values are preserved. A 3-point question is
scored out of 3; a 20-point question out of 20. Nothing is normalised to
/10. A multi-part question is scored part by part and the parts must sum to
the stated total.

### 20.4 Uploads

Up to **8 total pages** of work per submission, mixing formats freely — a
4-page PDF plus 4 photos is 8 pages. Each image counts as one page; a PDF's
real page count is read from the file server-side. Typed text counts as
nothing. JPG, PNG, WebP and PDF, 10 MB per file and 40 MB per submission.

Files go straight from the browser to a private Supabase Storage bucket via
signed upload URLs, under `<userId>/<questionId>/`. Student work is never
public and never in `/public`.

### 20.5 AI grading

Provider-agnostic. Business logic speaks only to the `GradingProvider`
contract in `src/lib/ai/types.ts`; every Gemini-specific detail is confined
to `src/lib/ai/providers/gemini.ts`, called over REST. A deterministic mock
grader lets the whole flow run with no API key; production refuses to fall
back to it.

Model output is untrusted: scores are clamped to the real point values, the
stored total is recomputed from the clamped parts, an omitted part scores
zero, an invented part is discarded, and unknown mistake tags are dropped.

Before the solution is unlocked, the grader is instructed to coach rather
than answer — no final numerical answer, no complete derivation, no
paraphrase of the official solution. Unreadable handwriting returns an
"unreadable" verdict that costs nothing, rather than an invented grade.

### 20.6 Admin FRQ importer

An admin uploads a question paper and its official solutions; the extractor
writes DRAFT questions with warnings. Nothing publishes automatically. A
draft cannot be published while it carries unresolved warnings, has no
point value, has parts that do not add up, has no official solution, or has
rights nobody has reviewed. The importer never invents a point value, a
solution or a figure.

### 20.7 Deliberately not built

Open-ended "Ask AI" follow-up chat; buying extra grading credits; annual,
family or school billing; automatic figure cropping from source PDFs.
