# Astro Coach PRD — Project Requirements Document

**Project Name:** Astro Coach
**Status:** Planning / Early Build
**Maintained By:** Prameet Guha
**Last Updated:** 2026-06-16

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

### 4.6 Future Dashboard `/dashboard`

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

### Feature 5: Database-Backed Question Bank

After the UI works with placeholder data, questions should move to a Supabase Postgres database using Prisma.

Success criteria:

* Prisma schema exists
* Database tables match product needs
* Seed data works
* Training UI loads from database
* Source metadata is preserved

---

### Feature 6: Admin Question Creation

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

### Feature 8: Basic Gamification

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

* [ ] The app runs locally with `npm run dev`
* [ ] Homepage, olympiad guide, training, and about pages exist
* [ ] Training page supports search and filters
* [ ] Individual question pages work
* [ ] MCQ answer checking works
* [ ] FRQ solution reveal works
* [ ] Question data has metadata
* [ ] Source policy is visible
* [ ] Prisma schema exists
* [ ] Supabase setup is documented
* [ ] Seed data works
* [ ] Database-backed question loading works
* [ ] Auth works later
* [ ] Bookmarks and attempts work later
* [ ] Dashboard/gamification works later
* [ ] README is beginner-friendly
* [ ] No secrets are committed
* [ ] App builds successfully
* [ ] Code is understandable to a beginner

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

Early MVP is complete when:

* [ ] `/` exists
* [ ] `/olympiads` exists
* [ ] `/training` exists
* [ ] `/training/[id]` exists
* [ ] `/about` exists
* [ ] There are at least 12 original placeholder questions
* [ ] MCQ practice works
* [ ] FRQ solution reveal works
* [ ] Filters work
* [ ] Site has a recognizable neo-brutalist astronomy style
* [ ] Source policy is visible
* [ ] App runs locally
* [ ] README explains setup

---

## 16. Future Roadmap

Possible future features:

* Real sourced question import
* PDF upload/storage through Supabase Storage
* Admin review queue
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
