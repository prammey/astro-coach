-- CreateTable
CREATE TABLE "McqQuestion" (
    "id" TEXT NOT NULL,
    "competition" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "examName" TEXT NOT NULL,
    "questionNumber" INTEGER NOT NULL,
    "difficulty" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "subtopic" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "primaryCurriculumTopic" TEXT NOT NULL,
    "curriculumTopics" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "questionText" TEXT NOT NULL,
    "choices" JSONB NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "questionMedia" JSONB,
    "solutionMedia" JSONB,
    "continuesFrom" INTEGER,
    "sourceUrl" TEXT NOT NULL,
    "pdfUrl" TEXT NOT NULL,
    "pageNumber" INTEGER NOT NULL,
    "answerKeyUrl" TEXT NOT NULL,
    "answerKeyPageNumber" INTEGER NOT NULL,
    "attributionText" TEXT NOT NULL,
    "permissionStatus" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "McqQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "McqExplanation" (
    "questionId" TEXT NOT NULL,
    "solution" TEXT[],
    "wrongChoices" JSONB NOT NULL,
    "takeaway" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "McqExplanation_pkey" PRIMARY KEY ("questionId")
);

-- CreateIndex
CREATE INDEX "McqQuestion_competition_year_idx" ON "McqQuestion"("competition", "year");

-- CreateIndex
CREATE INDEX "McqQuestion_primaryCurriculumTopic_idx" ON "McqQuestion"("primaryCurriculumTopic");

-- CreateIndex
CREATE INDEX "McqQuestion_orderIndex_idx" ON "McqQuestion"("orderIndex");

-- CreateIndex
CREATE UNIQUE INDEX "McqQuestion_competition_year_examName_questionNumber_key" ON "McqQuestion"("competition", "year", "examName", "questionNumber");

-- AddForeignKey
ALTER TABLE "McqExplanation" ADD CONSTRAINT "McqExplanation_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "McqQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
