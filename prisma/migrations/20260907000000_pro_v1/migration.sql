-- Astro Coach Pro v1 — additive migration.
-- Adds subscriptions, the FRQ bank, AI-graded submissions, uploads,
-- solution unlocks, the admin import batches, and AI usage tracking.
-- No existing table or column is dropped or altered destructively:
-- the MCQ attempt, progress, bookmark and report data is untouched.

◇ injected env (9) from .env.local // tip: ◈ secrets for agents [www.dotenvx.com]
-- CreateEnum
CREATE TYPE "FrqStatus" AS ENUM ('DRAFT', 'NEEDS_REVIEW', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "RightsStatus" AS ENUM ('UNREVIEWED', 'PENDING_PERMISSION', 'PERMISSION_GRANTED', 'PUBLIC_DOMAIN', 'FAIR_USE_CLAIMED', 'DENIED');

-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('PENDING', 'GRADING', 'GRADED', 'UNREADABLE', 'FAILED');

-- CreateEnum
CREATE TYPE "UnlockReason" AS ENUM ('FULL_CREDIT', 'ATTEMPTS_EXHAUSTED', 'GIVE_UP');

-- CreateEnum
CREATE TYPE "CreditSource" AS ENUM ('FREE_LIFETIME', 'PRO_PERIOD', 'PURCHASED');

-- CreateEnum
CREATE TYPE "PlanTier" AS ENUM ('FREE', 'PRO');

-- CreateEnum
CREATE TYPE "FrqMediaKind" AS ENUM ('QUESTION', 'SOLUTION');

-- CreateEnum
CREATE TYPE "AiUsageKind" AS ENUM ('GRADING', 'IMPORT_EXTRACTION');

-- CreateTable
CREATE TABLE "FrqQuestion" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "competition" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "examName" TEXT NOT NULL,
    "questionNumber" TEXT NOT NULL,
    "title" TEXT,
    "primaryCurriculumTopic" TEXT NOT NULL,
    "curriculumTopics" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "rawTopic" TEXT,
    "difficulty" TEXT,
    "questionText" TEXT NOT NULL,
    "totalPoints" INTEGER NOT NULL,
    "officialSolution" TEXT,
    "gradingRubric" TEXT,
    "sourceUrl" TEXT,
    "questionPdfUrl" TEXT,
    "questionPdfPages" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "solutionPdfUrl" TEXT,
    "solutionPdfPages" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "attributionText" TEXT,
    "rightsStatus" "RightsStatus" NOT NULL DEFAULT 'UNREVIEWED',
    "rightsNotes" TEXT,
    "status" "FrqStatus" NOT NULL DEFAULT 'DRAFT',
    "extractionFlags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "extractionConfidence" DOUBLE PRECISION,
    "reviewNotes" TEXT,
    "importBatchId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publishedAt" TIMESTAMP(3),

    CONSTRAINT "FrqQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrqPart" (
    "id" TEXT NOT NULL,
    "frqQuestionId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,
    "prompt" TEXT NOT NULL,
    "maxPoints" INTEGER NOT NULL,
    "officialSolution" TEXT,
    "gradingRubric" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FrqPart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrqMedia" (
    "id" TEXT NOT NULL,
    "frqQuestionId" TEXT NOT NULL,
    "frqPartId" TEXT,
    "kind" "FrqMediaKind" NOT NULL DEFAULT 'QUESTION',
    "storagePath" TEXT NOT NULL,
    "caption" TEXT,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "sourcePage" INTEGER,
    "needsReview" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FrqMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrqSubmission" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "frqQuestionId" TEXT NOT NULL,
    "sequenceNumber" INTEGER NOT NULL,
    "attemptNumber" INTEGER,
    "typedResponse" TEXT,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'PENDING',
    "creditSource" "CreditSource",
    "creditConsumed" BOOLEAN NOT NULL DEFAULT false,
    "awardedPoints" DOUBLE PRECISION,
    "maximumPoints" INTEGER NOT NULL,
    "partScores" JSONB,
    "feedback" JSONB,
    "mistakeTags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "provider" TEXT,
    "model" TEXT,
    "inputTokens" INTEGER,
    "outputTokens" INTEGER,
    "uploadedPageCount" INTEGER NOT NULL DEFAULT 0,
    "latencyMs" INTEGER,
    "estimatedCostUsd" DOUBLE PRECISION,
    "errorCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gradedAt" TIMESTAMP(3),

    CONSTRAINT "FrqSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrqSubmissionUpload" (
    "id" TEXT NOT NULL,
    "submissionId" TEXT NOT NULL,
    "storagePath" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "byteSize" INTEGER NOT NULL,
    "pageCount" INTEGER NOT NULL DEFAULT 1,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FrqSubmissionUpload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrqSolutionUnlock" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "frqQuestionId" TEXT NOT NULL,
    "reason" "UnlockReason" NOT NULL,
    "unlockedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FrqSolutionUnlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "plan" "PlanTier" NOT NULL DEFAULT 'FREE',
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "stripePriceId" TEXT,
    "stripeStatus" TEXT,
    "currentPeriodStart" TIMESTAMP(3),
    "currentPeriodEnd" TIMESTAMP(3),
    "cancelAtPeriodEnd" BOOLEAN NOT NULL DEFAULT false,
    "isFoundingPrice" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StripeWebhookEvent" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "processedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StripeWebhookEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditGrant" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "source" "CreditSource" NOT NULL DEFAULT 'PURCHASED',
    "amount" INTEGER NOT NULL,
    "reason" TEXT,
    "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "CreditGrant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrqImportBatch" (
    "id" TEXT NOT NULL,
    "adminUserId" TEXT NOT NULL,
    "competition" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "examName" TEXT NOT NULL,
    "sourceUrl" TEXT,
    "questionPdfPath" TEXT,
    "solutionPdfPath" TEXT,
    "rightsStatus" "RightsStatus" NOT NULL DEFAULT 'UNREVIEWED',
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "analyzedAt" TIMESTAMP(3),

    CONSTRAINT "FrqImportBatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiUsageEvent" (
    "id" TEXT NOT NULL,
    "kind" "AiUsageKind" NOT NULL,
    "userId" TEXT,
    "provider" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "inputTokens" INTEGER,
    "outputTokens" INTEGER,
    "pageCount" INTEGER NOT NULL DEFAULT 0,
    "latencyMs" INTEGER,
    "estimatedCostUsd" DOUBLE PRECISION,
    "success" BOOLEAN NOT NULL,
    "errorCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AiUsageEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FrqQuestion_slug_key" ON "FrqQuestion"("slug");

-- CreateIndex
CREATE INDEX "FrqQuestion_status_idx" ON "FrqQuestion"("status");

-- CreateIndex
CREATE INDEX "FrqQuestion_competition_year_idx" ON "FrqQuestion"("competition", "year");

-- CreateIndex
CREATE INDEX "FrqQuestion_primaryCurriculumTopic_idx" ON "FrqQuestion"("primaryCurriculumTopic");

-- CreateIndex
CREATE INDEX "FrqQuestion_importBatchId_idx" ON "FrqQuestion"("importBatchId");

-- CreateIndex
CREATE INDEX "FrqPart_frqQuestionId_idx" ON "FrqPart"("frqQuestionId");

-- CreateIndex
CREATE UNIQUE INDEX "FrqPart_frqQuestionId_label_key" ON "FrqPart"("frqQuestionId", "label");

-- CreateIndex
CREATE INDEX "FrqMedia_frqQuestionId_idx" ON "FrqMedia"("frqQuestionId");

-- CreateIndex
CREATE INDEX "FrqMedia_frqPartId_idx" ON "FrqMedia"("frqPartId");

-- CreateIndex
CREATE INDEX "FrqSubmission_userId_idx" ON "FrqSubmission"("userId");

-- CreateIndex
CREATE INDEX "FrqSubmission_userId_createdAt_idx" ON "FrqSubmission"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "FrqSubmission_frqQuestionId_idx" ON "FrqSubmission"("frqQuestionId");

-- CreateIndex
CREATE INDEX "FrqSubmission_status_idx" ON "FrqSubmission"("status");

-- CreateIndex
CREATE UNIQUE INDEX "FrqSubmission_userId_frqQuestionId_sequenceNumber_key" ON "FrqSubmission"("userId", "frqQuestionId", "sequenceNumber");

-- CreateIndex
CREATE INDEX "FrqSubmissionUpload_submissionId_idx" ON "FrqSubmissionUpload"("submissionId");

-- CreateIndex
CREATE INDEX "FrqSolutionUnlock_userId_idx" ON "FrqSolutionUnlock"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FrqSolutionUnlock_userId_frqQuestionId_key" ON "FrqSolutionUnlock"("userId", "frqQuestionId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_userId_key" ON "Subscription"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripeSubscriptionId_key" ON "Subscription"("stripeSubscriptionId");

-- CreateIndex
CREATE INDEX "Subscription_stripeCustomerId_idx" ON "Subscription"("stripeCustomerId");

-- CreateIndex
CREATE INDEX "Subscription_stripeStatus_idx" ON "Subscription"("stripeStatus");

-- CreateIndex
CREATE INDEX "StripeWebhookEvent_type_idx" ON "StripeWebhookEvent"("type");

-- CreateIndex
CREATE INDEX "CreditGrant_userId_idx" ON "CreditGrant"("userId");

-- CreateIndex
CREATE INDEX "FrqImportBatch_adminUserId_idx" ON "FrqImportBatch"("adminUserId");

-- CreateIndex
CREATE INDEX "FrqImportBatch_status_idx" ON "FrqImportBatch"("status");

-- CreateIndex
CREATE INDEX "AiUsageEvent_kind_createdAt_idx" ON "AiUsageEvent"("kind", "createdAt");

-- CreateIndex
CREATE INDEX "AiUsageEvent_userId_idx" ON "AiUsageEvent"("userId");

-- CreateIndex
CREATE INDEX "AiUsageEvent_createdAt_idx" ON "AiUsageEvent"("createdAt");

-- AddForeignKey
ALTER TABLE "FrqQuestion" ADD CONSTRAINT "FrqQuestion_importBatchId_fkey" FOREIGN KEY ("importBatchId") REFERENCES "FrqImportBatch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrqPart" ADD CONSTRAINT "FrqPart_frqQuestionId_fkey" FOREIGN KEY ("frqQuestionId") REFERENCES "FrqQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrqMedia" ADD CONSTRAINT "FrqMedia_frqQuestionId_fkey" FOREIGN KEY ("frqQuestionId") REFERENCES "FrqQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrqMedia" ADD CONSTRAINT "FrqMedia_frqPartId_fkey" FOREIGN KEY ("frqPartId") REFERENCES "FrqPart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrqSubmission" ADD CONSTRAINT "FrqSubmission_frqQuestionId_fkey" FOREIGN KEY ("frqQuestionId") REFERENCES "FrqQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrqSubmissionUpload" ADD CONSTRAINT "FrqSubmissionUpload_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "FrqSubmission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrqSolutionUnlock" ADD CONSTRAINT "FrqSolutionUnlock_frqQuestionId_fkey" FOREIGN KEY ("frqQuestionId") REFERENCES "FrqQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

