// Server-side configuration for everything Astro Coach Pro charges for or
// limits: plan prices, grading credits, attempt limits, upload limits and
// AI cost assumptions.
//
// This is the ONE place these numbers live. Nothing else in the codebase
// should hardcode "3", "50", "8" or a per-token price — import from here
// so a change is a one-line edit rather than a search-and-replace.
//
// SERVER-ONLY. Nothing here is prefixed NEXT_PUBLIC_, so this module must
// never be imported from a Client Component. Values the browser is
// allowed to know are re-exported from ./public-config.ts instead.

import { PUBLIC_PRO_CONFIG } from "./public-config";

// --- Grading credits -------------------------------------------------------

/// A brand-new free account gets exactly this many AI grades, ever. They
/// do not reset — not monthly, not yearly.
export const FREE_LIFETIME_GRADE_CREDITS = 3;

/// A Pro subscriber gets this many AI grades per Stripe billing period.
/// The window is the subscription's own period, not a calendar month.
export const PRO_PERIOD_GRADE_CREDITS = 50;

// --- Attempts --------------------------------------------------------------

/// How many AI-graded attempts a student gets at any single FRQ. This is
/// per user + question and never resets.
export const MAX_GRADED_ATTEMPTS_PER_FRQ = 3;

// --- Uploads ---------------------------------------------------------------

/// Total pages of handwritten/PDF work allowed in one grading submission.
/// A standalone image counts as one page; a PDF counts its real pages.
/// Typed text does not count toward this at all.
export const MAX_UPLOAD_PAGES_PER_SUBMISSION = 8;

/// Per-file and whole-submission size ceilings, in bytes.
export const MAX_UPLOAD_FILE_BYTES = 10 * 1024 * 1024; // 10 MB per file
export const MAX_UPLOAD_TOTAL_BYTES = 40 * 1024 * 1024; // 40 MB per submission

/// The file types a student may upload as solution work.
export const ALLOWED_UPLOAD_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
] as const;

export type AllowedUploadMimeType = (typeof ALLOWED_UPLOAD_MIME_TYPES)[number];

// --- Storage buckets -------------------------------------------------------

/// Private bucket holding student solution uploads. Every object is
/// stored under `<userId>/...` so ownership is checkable from the path.
export const STUDENT_WORK_BUCKET = "frq-student-work";

/// Private, admin-only bucket for imported source PDFs (question papers
/// and official solutions). Never readable by students.
export const ADMIN_SOURCE_BUCKET = "frq-source-pdfs";

/// Bucket for published question figures. Served through the server after
/// a gating check, never linked to directly from a locked question.
export const QUESTION_MEDIA_BUCKET = "frq-question-media";

// --- Pricing ---------------------------------------------------------------

/// After this instant, new checkouts use the regular price rather than the
/// founding price. Existing founding subscribers are never migrated.
/// Overridable via PRO_FOUNDING_CUTOFF for testing.
export function foundingCutoff(): Date {
  const raw = process.env.PRO_FOUNDING_CUTOFF;
  const parsed = raw ? new Date(raw) : new Date(PUBLIC_PRO_CONFIG.foundingCutoffIso);
  return Number.isNaN(parsed.getTime())
    ? new Date(PUBLIC_PRO_CONFIG.foundingCutoffIso)
    : parsed;
}

/// True while the founding price is still being offered to new subscribers.
export function isFoundingPeriodOpen(now: Date = new Date()): boolean {
  return now.getTime() < foundingCutoff().getTime();
}

/// Which Stripe Price ID a new checkout should use. Founding subscribers
/// who are already active keep their price regardless of what this says.
export function stripePriceIdForNewCheckout(now: Date = new Date()): {
  priceId: string | undefined;
  isFounding: boolean;
} {
  const founding = isFoundingPeriodOpen(now);
  return {
    priceId: founding
      ? process.env.STRIPE_FOUNDING_PRICE_ID
      : process.env.STRIPE_REGULAR_PRICE_ID,
    isFounding: founding,
  };
}

// --- AI provider -----------------------------------------------------------

/// Which grading provider to use. "mock" is a deterministic local grader
/// that costs nothing; "gemini" is the real multimodal provider.
///
/// Defaults to mock when no API key is configured, so a developer can run
/// and build the project without spending AI money by accident. Production
/// refuses to fall back silently — see src/lib/ai/grader.ts.
export function configuredAiProvider(): "mock" | "gemini" {
  const explicit = process.env.AI_GRADING_PROVIDER?.trim().toLowerCase();
  if (explicit === "mock" || explicit === "gemini") return explicit;
  return process.env.GEMINI_API_KEY ? "gemini" : "mock";
}

export function configuredAiModel(): string {
  return process.env.AI_GRADING_MODEL?.trim() || "gemini-2.5-flash";
}

/// USD per million tokens, by model. Used only to estimate spend for the
/// admin usage view — it is an approximation, not a bill.
///
/// Update these when provider pricing changes. Keeping them in one map is
/// why no cost arithmetic appears anywhere else in the codebase.
const MODEL_RATES_USD_PER_MILLION_TOKENS: Record<
  string,
  { input: number; output: number }
> = {
  "gemini-2.5-flash": { input: 0.3, output: 2.5 },
  "gemini-2.5-pro": { input: 1.25, output: 10 },
  "gemini-2.0-flash": { input: 0.1, output: 0.4 },
  mock: { input: 0, output: 0 },
};

/// Estimated USD cost of one AI call. Returns null when the model's rates
/// are unknown, so an unrecognised model shows as "unknown" in analytics
/// rather than as a confidently wrong $0.00.
export function estimateAiCostUsd(
  model: string,
  inputTokens: number | null | undefined,
  outputTokens: number | null | undefined,
): number | null {
  const rates = MODEL_RATES_USD_PER_MILLION_TOKENS[model];
  if (!rates) return null;
  if (inputTokens == null && outputTokens == null) return null;

  const input = ((inputTokens ?? 0) / 1_000_000) * rates.input;
  const output = ((outputTokens ?? 0) / 1_000_000) * rates.output;
  return Number((input + output).toFixed(6));
}

// --- Admins ----------------------------------------------------------------

/// Supabase user UUIDs allowed into /admin, from a server-only env var.
/// Unset means nobody is an admin, so a missing config locks the admin
/// area rather than opening it.
export function adminUserIds(): string[] {
  return (process.env.ADMIN_USER_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
}

// --- Site ------------------------------------------------------------------

/// Absolute base URL, needed to build Stripe return URLs.
export function siteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"
  );
}
