-- CreateTable QuestionReport
CREATE TABLE "QuestionReport" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "questionId" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "details" TEXT,
    "userId" TEXT,
    "userEmail" TEXT,
    "status" TEXT NOT NULL DEFAULT 'open',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuestionReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "QuestionReport_status_idx" ON "QuestionReport"("status");

-- CreateIndex
CREATE INDEX "QuestionReport_questionId_idx" ON "QuestionReport"("questionId");
