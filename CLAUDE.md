# CLAUDE.md — Astro Coach

Loaded in addition to `~/.claude/CLAUDE.md` (global rules). This file adds project-specific rules on top of the global ones — it does not replace them.

---

## About This Project

- **Name**: astro-coach
- **Type**: Web App
- **Primary Tech**: Next.js (App Router) + Supabase (Postgres) + Prisma
- **Key Purpose**: An astronomy olympiad training platform — landing page, olympiad guide, searchable question bank with source attribution, MCQ/FRQ practice, and (later) gamified progress tracking.

Read **`PRD.md`** before starting any new feature — it has the full spec, page-by-page requirements, data model, and phase plan.

---

## Tech Stack

- Next.js App Router, React, TypeScript (strict mode)
- Tailwind CSS, shadcn/ui (when useful)
- PostgreSQL via Supabase, Prisma ORM
- Zod for validation
- Supabase Auth, Supabase Storage (private buckets for student work and source PDFs)
- Stripe (Checkout + Billing Portal) for subscriptions — TEST MODE only so far
- Gemini via REST, behind a provider abstraction, for AI grading and FRQ import
- Vitest for business-logic tests; Playwright (later), Vercel (later)
- No Docker, Kubernetes, Redis, GraphQL, microservices, or separate Express backend in v1

---

## Code Style — Beginner-Friendly Rule

The user is a beginner (incoming CS freshman). All code must be simple and human-readable:

- Comment what each block/function does, not just non-obvious why — this overrides the global "WHY-only comments" default for this project
- Extract repeated logic into named functions instead of duplicating it
- Keep files neatly organized and consistently spaced so structure is intuitive at a glance
- PascalCase components, camelCase functions/variables, UPPER_SNAKE_CASE constants
- Explain things in beginner-friendly language when asked

---

## Build in Small Phases

Follow the phase order in `PRD.md` (Section 12). Build one phase at a time and keep the app working between phases. Do not jump ahead — common mistakes to avoid:

- Adding Supabase/Prisma before the UI works with placeholder data
- Adding login before the basic question bank works
- Adding real olympiad questions before the source metadata system is ready
- Polishing design before the core flow works

**Astro Coach Pro is now built** (branch `feature/pro-v1`): subscriptions,
the free-response question bank, AI grading, and Pro analytics. AI grading
is no longer out of scope. What remains deliberately unbuilt, and should
not be added without a decision:

- Open-ended "Ask AI" follow-up chat after a grade
- Buying extra grading credits
- Annual, family or school billing
- Automatic figure cropping out of source PDFs

---

## Design Direction

Neo-brutalist astronomy style: deep navy, space blue, purple, electric blue, yellow, cream/white, black borders, bold typography, strong cards, playful layout, clear hierarchy, simple navigation. Fun and bold, not childish or messy. Responsive on mobile and desktop.

---

## Pro Rules — Non-Negotiable

These guard money, quotas and third-party copyright. Break one and the
product either loses money or misleads a student.

- **Entitlements are server-side.** Never introduce a client-side `isPro`,
  credit count or attempt number. Everything goes through
  `src/lib/pro/entitlements.ts`; the browser's copy is for display only.
- **Gating is absence, not CSS.** A locked question's text and figures must
  not be sent and then blurred. If the server decides someone may not read
  it, it sends nothing to read.
- **Official solutions are server-only** until an `FrqSolutionUnlock` row
  exists for that user and question.
- **A credit is spent in exactly one place**, after a real grade comes back
  — `submitGradedAttempt` in `src/lib/pro/frq-service.ts`. Opening a
  question, uploading, failing validation, an unreadable photo and a
  provider outage all cost nothing.
- **Stripe webhooks are the source of truth** for who is Pro. Landing on a
  success URL grants nothing.
- **Limits live in `src/lib/pro/config.ts`.** Never hardcode 3, 50, 8 or a
  per-token price anywhere else.
- **Nothing publishes automatically.** An imported FRQ is DRAFT or
  NEEDS_REVIEW until a human approves it, and cannot be published with
  unresolved warnings, a missing point value, parts that do not add up, no
  official solution, or unreviewed rights.
- **The importer never invents.** A point value that is not printed is
  flagged missing, not estimated.
- **Never normalise scores to /10.** A 3-point question is scored out of 3.

## Source & Copyright Rules

- Never copy private or login-only material
- Never add a real question without source metadata (competition, year, round, source URL, PDF URL if available, page number, attribution text, permission status)
- Never assume a public PDF is free to rehost
- Use **original placeholder questions only** until the source metadata system and usage policy are ready
- Make clear the platform is independent and not officially affiliated with any competition organization

---

## Safety Rules

- Never delete files or folders without explicit confirmation
- Never hardcode secrets or API keys — use `.env.local`, never commit it
- Never expose Supabase service-role keys to the browser
- Never add real (non-placeholder) olympiad questions without source metadata
- Ask before modifying: Prisma schema, `.github/workflows/`, build config, `package.json`, question bank data/seed files

---

## Quality Checklist (per change)

- [ ] Code is simple, commented, and beginner-readable
- [ ] No secrets committed
- [ ] No real questions added without source metadata
- [ ] App still runs (`npm run dev`) and builds (`npm run build`)
- [ ] Lint/type-check pass
- [ ] Change matches the current phase in `PRD.md` — no scope creep into future phases
