-- Turns on Row Level Security for every Astro Coach table.
--
-- Why: Supabase exposes the `public` schema through its Data API, using the
-- anon key that ships to every browser. Table privileges are what block
-- that today; RLS is a second lock, so a future GRANT (or a new table that
-- picks up Supabase's default privileges) can never expose subscriptions,
-- credits, answer keys or reports.
--
-- No policies are added, which means "nobody through the Data API". The app
-- itself is unaffected: Prisma connects as the role that owns these tables,
-- and table owners are not subject to RLS (FORCE is deliberately not used).
-- The Supabase service-role key also bypasses RLS.

ALTER TABLE "UserAttempt" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "UserQuestionProgress" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "QuestionReport" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Bookmark" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "FrqQuestion" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "FrqPart" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "FrqMedia" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "FrqSubmission" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "FrqSubmissionUpload" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "FrqSolutionUnlock" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Subscription" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "StripeWebhookEvent" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "CreditGrant" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "FrqImportBatch" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "AiUsageEvent" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "McqQuestion" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "McqExplanation" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "_prisma_migrations" ENABLE ROW LEVEL SECURITY;
