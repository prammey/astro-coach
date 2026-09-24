-- CreateEnum
CREATE TYPE "FrqAnswerFormat" AS ENUM ('WORKED', 'SHORT_ANSWER', 'DRAWING');

-- CreateEnum
CREATE TYPE "FrqSolutionSource" AS ENUM ('OFFICIAL', 'ADAPTED', 'ASTRO_COACH');

-- AlterEnum
ALTER TYPE "FrqMediaKind" ADD VALUE 'ANSWER_SHEET';

-- AlterTable
ALTER TABLE "FrqMedia" ADD COLUMN     "key" TEXT;

-- AlterTable
ALTER TABLE "FrqPart" ADD COLUMN     "acceptedAnswers" JSONB,
ADD COLUMN     "answerFormat" "FrqAnswerFormat" NOT NULL DEFAULT 'WORKED',
ADD COLUMN     "leadIn" TEXT,
ALTER COLUMN "maxPoints" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "FrqQuestion" ADD COLUMN     "orderIndex" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "pointStep" DOUBLE PRECISION NOT NULL DEFAULT 1,
ADD COLUMN     "section" TEXT,
ADD COLUMN     "solutionSource" "FrqSolutionSource" NOT NULL DEFAULT 'OFFICIAL',
ALTER COLUMN "totalPoints" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "FrqSubmission" ADD COLUMN     "gradingMethod" TEXT NOT NULL DEFAULT 'AI',
ALTER COLUMN "maximumPoints" SET DATA TYPE DOUBLE PRECISION;
