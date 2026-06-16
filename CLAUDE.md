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
- Supabase Auth (later), Vitest (later), Playwright (later), Vercel (later)
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
- Adding AI grading or a chatbot in v1

---

## Design Direction

Neo-brutalist astronomy style: deep navy, space blue, purple, electric blue, yellow, cream/white, black borders, bold typography, strong cards, playful layout, clear hierarchy, simple navigation. Fun and bold, not childish or messy. Responsive on mobile and desktop.

---

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
