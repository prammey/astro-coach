-- CreateTable UserAttempt
CREATE TABLE "UserAttempt" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "submittedAnswer" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserAttempt_userId_idx" ON "UserAttempt"("userId");

-- CreateIndex
CREATE INDEX "UserAttempt_questionId_idx" ON "UserAttempt"("questionId");

-- CreateTable UserQuestionProgress
CREATE TABLE "UserQuestionProgress" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "firstCorrectAt" TIMESTAMP(3),
    "lastAttemptAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attemptCount" INTEGER NOT NULL DEFAULT 0,
    "correctAttemptCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserQuestionProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserQuestionProgress_userId_questionId_key" ON "UserQuestionProgress"("userId", "questionId");

-- CreateIndex
CREATE INDEX "UserQuestionProgress_userId_idx" ON "UserQuestionProgress"("userId");
