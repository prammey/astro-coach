// Everything the student-facing FRQ flow does on the server: listing
// questions, shaping the gated payload for one question, running a graded
// submission, and giving up to see the solution.
//
// Two rules shape this whole file:
//
//   1. Gating is a server decision, never a CSS one. A locked question's
//      text and figures are simply absent from the response — there is
//      nothing on the page to un-blur.
//   2. A credit is spent at exactly one moment: after every check has
//      passed AND the model has returned a real grade. Opening, uploading,
//      failing validation, an unreadable photo and a provider outage all
//      cost nothing.
//
// SERVER-ONLY.

// SERVER-ONLY. This check turns an accidental client import into an
// immediate, obvious error rather than a secret quietly shipped to a
// browser bundle.
if (typeof window !== "undefined") {
  throw new Error("src/lib/pro/frq-service.ts must not be imported in the browser");
}

import type { PrismaClient } from "@/generated/prisma/client";
import { getPrisma } from "@/lib/prisma";
import {
  estimateAiCostUsd as estimateAiCostUsdRef,
  MAX_GRADED_ATTEMPTS_PER_FRQ,
  QUESTION_MEDIA_BUCKET,
  STUDENT_WORK_BUCKET,
} from "./config";
import {
  canViewFrqContent,
  canViewOfficialSolution,
  decideGradeAttempt,
  unlockReasonAfterGrade,
  type Entitlements,
  type QuestionHistorySnapshot,
} from "./rules";
import { getQuestionHistory, getUserEntitlements } from "./entitlements";
import {
  countPdfPages,
  checkSubmission,
  pageCountForFile,
  type CountedUpload,
  type ValidationError,
} from "./uploads";
import {
  createSignedReadUrl,
  downloadFile,
  ownsStudentWorkPath,
  statFile,
} from "./storage";
import { gradeFrqSubmission } from "@/lib/ai/grader";
import type { GradingAttachment, GradingPart } from "@/lib/ai/types";

// --- Browsing --------------------------------------------------------------

/// What an FRQ card shows. Deliberately metadata only: a card never carries
/// question text, so the browse page is safe to render for anyone.
export type FrqCard = {
  id: string;
  slug: string;
  competition: string;
  year: number;
  examName: string;
  questionNumber: string;
  title: string | null;
  primaryCurriculumTopic: string;
  curriculumTopics: string[];
  difficulty: string | null;
  totalPoints: number;
  partCount: number;
  /// Per-user state, all derived server-side. Null for signed-out visitors.
  attemptsUsed: number;
  maxAttempts: number;
  bestScore: number | null;
  solutionUnlocked: boolean;
  /// False when this user would hit the Pro wall on opening it.
  accessible: boolean;
};

/// Lists published FRQs with this user's state folded in.
export async function listFrqCards(
  userId: string | null,
  prisma: PrismaClient = getPrisma(),
): Promise<{ cards: FrqCard[]; entitlements: Entitlements | null }> {
  const questions = await prisma.frqQuestion.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ competition: "asc" }, { year: "desc" }, { questionNumber: "asc" }],
    select: {
      id: true,
      slug: true,
      competition: true,
      year: true,
      examName: true,
      questionNumber: true,
      title: true,
      primaryCurriculumTopic: true,
      curriculumTopics: true,
      difficulty: true,
      totalPoints: true,
      _count: { select: { parts: true } },
    },
  });

  if (!userId) {
    return {
      entitlements: null,
      cards: questions.map((question) => ({
        ...toCardBase(question),
        attemptsUsed: 0,
        maxAttempts: MAX_GRADED_ATTEMPTS_PER_FRQ,
        bestScore: null,
        solutionUnlocked: false,
        // A signed-out visitor can see that FRQs exist and must sign in.
        accessible: false,
      })),
    };
  }

  const [entitlements, submissions, unlocks] = await Promise.all([
    getUserEntitlements(userId, prisma),
    prisma.frqSubmission.findMany({
      where: { userId, creditConsumed: true },
      select: { frqQuestionId: true, awardedPoints: true },
    }),
    prisma.frqSolutionUnlock.findMany({
      where: { userId },
      select: { frqQuestionId: true },
    }),
  ]);

  const attemptsByQuestion = new Map<string, { count: number; best: number | null }>();
  for (const submission of submissions) {
    const current = attemptsByQuestion.get(submission.frqQuestionId) ?? {
      count: 0,
      best: null,
    };
    attemptsByQuestion.set(submission.frqQuestionId, {
      count: current.count + 1,
      best:
        submission.awardedPoints == null
          ? current.best
          : Math.max(current.best ?? 0, submission.awardedPoints),
    });
  }

  const unlockedIds = new Set(unlocks.map((unlock) => unlock.frqQuestionId));

  return {
    entitlements,
    cards: questions.map((question) => {
      const attempts = attemptsByQuestion.get(question.id);
      const history: QuestionHistorySnapshot = {
        gradedAttempts: attempts?.count ?? 0,
        hasSubmitted: (attempts?.count ?? 0) > 0,
        unlockReason: unlockedIds.has(question.id) ? "GIVE_UP" : null,
      };

      return {
        ...toCardBase(question),
        attemptsUsed: attempts?.count ?? 0,
        maxAttempts: MAX_GRADED_ATTEMPTS_PER_FRQ,
        bestScore: attempts?.best ?? null,
        solutionUnlocked: unlockedIds.has(question.id),
        accessible: canViewFrqContent(entitlements, history),
      };
    }),
  };
}

type QuestionRow = {
  id: string;
  slug: string;
  competition: string;
  year: number;
  examName: string;
  questionNumber: string;
  title: string | null;
  primaryCurriculumTopic: string;
  curriculumTopics: string[];
  difficulty: string | null;
  totalPoints: number;
  _count: { parts: number };
};

function toCardBase(question: QuestionRow) {
  return {
    id: question.id,
    slug: question.slug,
    competition: question.competition,
    year: question.year,
    examName: question.examName,
    questionNumber: question.questionNumber,
    title: question.title,
    primaryCurriculumTopic: question.primaryCurriculumTopic,
    curriculumTopics: question.curriculumTopics,
    difficulty: question.difficulty,
    totalPoints: question.totalPoints,
    partCount: question._count.parts,
  };
}

// --- One question ----------------------------------------------------------

export type FrqDetail = {
  meta: Omit<FrqCard, "accessible">;
  /// Present only when this user is allowed to read the question.
  content: {
    questionText: string;
    parts: Array<{ id: string; label: string; prompt: string; maxPoints: number }>;
    figures: Array<{ id: string; url: string; caption: string | null }>;
  } | null;
  /// Present only once the solution is genuinely unlocked.
  solution: {
    reason: "FULL_CREDIT" | "ATTEMPTS_EXHAUSTED" | "GIVE_UP";
    questionSolution: string | null;
    parts: Array<{ label: string; officialSolution: string | null }>;
    figures: Array<{ id: string; url: string; caption: string | null }>;
  } | null;
  attempts: AttemptSummary[];
  state: {
    attemptsUsed: number;
    maxAttempts: number;
    canSubmit: boolean;
    blockedReason: string | null;
    canGiveUp: boolean;
    creditsRemaining: number;
    nextAttemptNumber: number;
  };
};

export type AttemptSummary = {
  id: string;
  attemptNumber: number | null;
  status: string;
  awardedPoints: number | null;
  maximumPoints: number;
  partScores: unknown;
  feedback: unknown;
  mistakeTags: string[];
  uploadedPageCount: number;
  typedResponse: string | null;
  createdAt: Date;
  uploads: Array<{ id: string; storagePath: string; mimeType: string; pageCount: number }>;
};

/// Builds the payload for one question, containing only what this user is
/// allowed to have.
///
/// When the question is locked, `content` is null — the text and figures are
/// never sent and then hidden, they are never sent. The same is true of the
/// official solution until an unlock record exists.
export async function getFrqForStudent(
  userId: string,
  questionId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<FrqDetail | null> {
  const question = await prisma.frqQuestion.findFirst({
    where: { id: questionId, status: "PUBLISHED" },
    include: {
      parts: { orderBy: { orderIndex: "asc" } },
      media: { orderBy: { orderIndex: "asc" } },
      _count: { select: { parts: true } },
    },
  });
  if (!question) return null;

  const [entitlements, history, submissions] = await Promise.all([
    getUserEntitlements(userId, prisma),
    getQuestionHistory(userId, questionId, prisma),
    prisma.frqSubmission.findMany({
      where: { userId, frqQuestionId: questionId },
      orderBy: { sequenceNumber: "asc" },
      include: { uploads: { orderBy: { orderIndex: "asc" } } },
    }),
  ]);

  const mayRead = canViewFrqContent(entitlements, history);
  const mayReadSolution = canViewOfficialSolution(history);
  const decision = decideGradeAttempt(entitlements, history);

  const questionFigures = question.media.filter((item) => item.kind === "QUESTION");
  const solutionFigures = question.media.filter((item) => item.kind === "SOLUTION");

  return {
    meta: {
      ...toCardBase(question),
      attemptsUsed: history.gradedAttempts,
      maxAttempts: MAX_GRADED_ATTEMPTS_PER_FRQ,
      bestScore: bestScoreOf(submissions),
      solutionUnlocked: mayReadSolution,
    },

    content: mayRead
      ? {
          questionText: question.questionText,
          parts: question.parts.map((part) => ({
            id: part.id,
            label: part.label,
            prompt: part.prompt,
            maxPoints: part.maxPoints,
          })),
          figures: await signFigures(questionFigures),
        }
      : null,

    // Solution media is signed only here, behind the unlock check, so a
    // locked student never receives a URL to it.
    solution:
      mayReadSolution && history.unlockReason
        ? {
            reason: history.unlockReason,
            questionSolution: question.officialSolution,
            parts: question.parts.map((part) => ({
              label: part.label,
              officialSolution: part.officialSolution,
            })),
            figures: await signFigures(solutionFigures),
          }
        : null,

    attempts: submissions
      // Rows that were never charged are internal bookkeeping, not history.
      .filter((submission) => submission.creditConsumed)
      .map((submission) => ({
        id: submission.id,
        attemptNumber: submission.attemptNumber,
        status: submission.status,
        awardedPoints: submission.awardedPoints,
        maximumPoints: submission.maximumPoints,
        partScores: submission.partScores,
        feedback: submission.feedback,
        mistakeTags: submission.mistakeTags,
        uploadedPageCount: submission.uploadedPageCount,
        typedResponse: submission.typedResponse,
        createdAt: submission.createdAt,
        uploads: submission.uploads.map((upload) => ({
          id: upload.id,
          storagePath: upload.storagePath,
          mimeType: upload.mimeType,
          pageCount: upload.pageCount,
        })),
      })),

    state: {
      attemptsUsed: history.gradedAttempts,
      maxAttempts: MAX_GRADED_ATTEMPTS_PER_FRQ,
      canSubmit: decision.allowed,
      blockedReason: decision.allowed ? null : decision.reason,
      canGiveUp: mayRead && history.unlockReason === null,
      creditsRemaining: entitlements.credits.remaining,
      nextAttemptNumber: history.gradedAttempts + 1,
    },
  };
}

function bestScoreOf(
  submissions: Array<{ awardedPoints: number | null; creditConsumed: boolean }>,
): number | null {
  const scores = submissions
    .filter((submission) => submission.creditConsumed && submission.awardedPoints != null)
    .map((submission) => submission.awardedPoints as number);
  return scores.length > 0 ? Math.max(...scores) : null;
}

async function signFigures(
  media: Array<{ id: string; storagePath: string; caption: string | null }>,
): Promise<Array<{ id: string; url: string; caption: string | null }>> {
  const signed = await Promise.all(
    media.map(async (item) => ({
      id: item.id,
      caption: item.caption,
      url: await createSignedReadUrl(QUESTION_MEDIA_BUCKET, item.storagePath),
    })),
  );

  return signed
    .filter((item): item is { id: string; caption: string | null; url: string } =>
      Boolean(item.url),
    )
    .map((item) => ({ id: item.id, url: item.url, caption: item.caption }));
}

/// Signs a URL for one of the student's own uploaded pages, after checking
/// the path really belongs to them.
export async function signOwnUploadUrl(
  userId: string,
  storagePath: string,
): Promise<string | null> {
  if (!ownsStudentWorkPath(userId, storagePath)) return null;
  return createSignedReadUrl(STUDENT_WORK_BUCKET, storagePath);
}

// --- Submitting for grading ------------------------------------------------

export type SubmitResult =
  | {
      ok: true;
      submissionId: string;
      attemptNumber: number;
      awardedPoints: number;
      maximumPoints: number;
      partScores: unknown;
      feedback: unknown;
      mistakeTags: string[];
      creditsRemaining: number;
      solutionUnlocked: boolean;
      unlockReason: "FULL_CREDIT" | "ATTEMPTS_EXHAUSTED" | null;
    }
  | {
      ok: false;
      /// UNREADABLE_WORK and provider failures are deliberately in the same
      /// shape as a validation error: from the student's point of view all
      /// three mean "nothing was charged, here is what to do".
      code:
        | ValidationError["code"]
        | "QUESTION_NOT_FOUND"
        | "QUESTION_LOCKED"
        | "NO_CREDITS"
        | "ATTEMPTS_EXHAUSTED"
        | "SOLUTION_ALREADY_UNLOCKED"
        | "DUPLICATE_SUBMISSION"
        | "UNREADABLE_WORK"
        | "GRADING_UNAVAILABLE";
      message: string;
      unclearPages?: number[];
    };

/// Runs one graded attempt.
///
/// The order of operations is the whole point. Nothing is charged until
/// step 6, and every earlier step can bail out for free:
///
///   1. Is the question real and published?
///   2. Is this user allowed another graded attempt at it?
///   3. Do the uploaded files exist, and do they belong to this user?
///   4. Do they fit the page limit, and is there any work at all?
///   5. Reserve a submission row — the unique constraint rejects a
///      double-click here rather than after paying for it twice.
///   6. Grade. Only a real grade sets creditConsumed.
export async function submitGradedAttempt(
  userId: string,
  questionId: string,
  input: { typedResponse: string | null; uploadPaths: string[] },
  prisma: PrismaClient = getPrisma(),
): Promise<SubmitResult> {
  // 1. The question.
  const question = await prisma.frqQuestion.findFirst({
    where: { id: questionId, status: "PUBLISHED" },
    include: { parts: { orderBy: { orderIndex: "asc" } } },
  });
  if (!question) {
    return { ok: false, code: "QUESTION_NOT_FOUND", message: "Question not found." };
  }

  // 2. Permission. Re-derived here even though the browser already knows
  // the answer, because the browser's copy is not evidence.
  const [entitlements, history] = await Promise.all([
    getUserEntitlements(userId, prisma),
    getQuestionHistory(userId, questionId, prisma),
  ]);

  const decision = decideGradeAttempt(entitlements, history);
  if (!decision.allowed) {
    return { ok: false, code: decision.reason, message: blockedMessage(decision.reason) };
  }

  // 3 & 4. The uploaded work.
  const counted = await verifyUploads(userId, input.uploadPaths);
  if (!counted.ok) return { ok: false, code: counted.error.code, message: counted.error.message };

  const submissionCheck = checkSubmission(input.typedResponse, counted.value);
  if (!submissionCheck.ok) {
    return {
      ok: false,
      code: submissionCheck.error.code,
      message: submissionCheck.error.message,
    };
  }

  // 5. Reserve the slot. Two concurrent submissions both compute the same
  // sequence number; the unique constraint lets exactly one through.
  const previous = await prisma.frqSubmission.aggregate({
    where: { userId, frqQuestionId: questionId },
    _max: { sequenceNumber: true },
  });
  const sequenceNumber = (previous._max.sequenceNumber ?? 0) + 1;

  let submissionId: string;
  try {
    const created = await prisma.frqSubmission.create({
      data: {
        userId,
        frqQuestionId: questionId,
        sequenceNumber,
        attemptNumber: null,
        typedResponse: input.typedResponse,
        status: "GRADING",
        maximumPoints: question.totalPoints,
        uploadedPageCount: submissionCheck.value.totalPages,
        uploads: {
          create: counted.value.map((upload, index) => ({
            storagePath: upload.storagePath,
            mimeType: upload.mimeType,
            byteSize: upload.byteSize,
            pageCount: upload.pageCount,
            orderIndex: index,
          })),
        },
      },
      select: { id: true },
    });
    submissionId = created.id;
  } catch {
    // Unique violation on (userId, questionId, sequenceNumber).
    return {
      ok: false,
      code: "DUPLICATE_SUBMISSION",
      message: "That submission is already being graded.",
    };
  }

  // 6. Grade.
  const attachments = await loadAttachments(counted.value);
  const gradingParts: GradingPart[] = question.parts.map((part) => ({
    id: part.id,
    label: part.label,
    prompt: part.prompt,
    maxPoints: part.maxPoints,
    officialSolution: part.officialSolution,
    gradingRubric: part.gradingRubric,
  }));

  const result = await gradeFrqSubmission(
    {
      question: {
        competition: question.competition,
        year: question.year,
        questionNumber: question.questionNumber,
        questionText: question.questionText,
        totalPoints: question.totalPoints,
        officialSolution: question.officialSolution,
        gradingRubric: question.gradingRubric,
      },
      parts: gradingParts,
      student: { typedResponse: input.typedResponse, attachments },
      attemptNumber: decision.attemptNumber,
      maxAttempts: MAX_GRADED_ATTEMPTS_PER_FRQ,
      previousFeedback: await previousFeedbackFor(userId, questionId, prisma),
      solutionAlreadyVisible: history.unlockReason !== null,
    },
    { userId, prisma },
  );

  const { outcome, usage } = result;

  // An unreadable upload or a provider failure keeps the row for the audit
  // trail but leaves attemptNumber and creditConsumed alone — so it costs
  // neither a credit nor one of the three attempts.
  if (outcome.outcome !== "graded") {
    await prisma.frqSubmission.update({
      where: { id: submissionId },
      data: {
        status: outcome.outcome === "unreadable" ? "UNREADABLE" : "FAILED",
        provider: usage.provider,
        model: usage.model,
        latencyMs: usage.latencyMs,
        errorCode: outcome.outcome === "failed" ? outcome.errorCode : "UNREADABLE_WORK",
      },
    });

    return outcome.outcome === "unreadable"
      ? {
          ok: false,
          code: "UNREADABLE_WORK",
          message: outcome.message,
          unclearPages: outcome.unclearPages,
        }
      : { ok: false, code: "GRADING_UNAVAILABLE", message: outcome.message };
  }

  // A real grade. This is the only place creditConsumed becomes true.
  const unlockReason = unlockReasonAfterGrade(
    decision.attemptNumber,
    outcome.awardedPoints,
    outcome.maximumPoints,
  );

  await prisma.$transaction(async (tx) => {
    await tx.frqSubmission.update({
      where: { id: submissionId },
      data: {
        status: "GRADED",
        attemptNumber: decision.attemptNumber,
        creditConsumed: true,
        creditSource: decision.creditSource,
        awardedPoints: outcome.awardedPoints,
        maximumPoints: outcome.maximumPoints,
        partScores: outcome.partScores,
        feedback: outcome.feedback,
        mistakeTags: outcome.mistakeTags,
        provider: usage.provider,
        model: usage.model,
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        latencyMs: usage.latencyMs,
        estimatedCostUsd: estimateCost(usage),
        gradedAt: new Date(),
      },
    });

    if (unlockReason) {
      // Upsert rather than create: an unlock may already exist if two
      // paths raced, and unlocking twice is not an error.
      await tx.frqSolutionUnlock.upsert({
        where: { userId_frqQuestionId: { userId, frqQuestionId: questionId } },
        create: { userId, frqQuestionId: questionId, reason: unlockReason },
        update: {},
      });
    }
  });

  const after = await getUserEntitlements(userId, prisma);

  return {
    ok: true,
    submissionId,
    attemptNumber: decision.attemptNumber,
    awardedPoints: outcome.awardedPoints,
    maximumPoints: outcome.maximumPoints,
    partScores: outcome.partScores,
    feedback: outcome.feedback,
    mistakeTags: outcome.mistakeTags,
    creditsRemaining: after.credits.remaining,
    solutionUnlocked: unlockReason !== null,
    unlockReason,
  };
}

function estimateCost(usage: { model: string; inputTokens: number | null; outputTokens: number | null }) {
  // Imported lazily from config so all pricing stays in one table.
  return estimateAiCostUsdRef(usage.model, usage.inputTokens, usage.outputTokens);
}

function blockedMessage(reason: string): string {
  switch (reason) {
    case "NO_CREDITS":
      return "You have no AI grading credits left.";
    case "ATTEMPTS_EXHAUSTED":
      return `You have used all ${MAX_GRADED_ATTEMPTS_PER_FRQ} graded attempts at this question.`;
    case "SOLUTION_ALREADY_UNLOCKED":
      return "The official solution is already unlocked for this question.";
    default:
      return "This question is part of Astro Coach Pro.";
  }
}

/// Checks that every claimed upload exists, belongs to this user, and works
/// out its real page count. A path the student made up, or someone else's
/// file, is rejected before anything is charged.
async function verifyUploads(
  userId: string,
  storagePaths: string[],
): Promise<{ ok: true; value: CountedUpload[] } | { ok: false; error: ValidationError }> {
  const counted: CountedUpload[] = [];

  for (const storagePath of storagePaths) {
    if (!ownsStudentWorkPath(userId, storagePath)) {
      return {
        ok: false,
        error: { code: "UNSUPPORTED_FILE_TYPE", message: "One of your files could not be found." },
      };
    }

    const stat = await statFile(STUDENT_WORK_BUCKET, storagePath);
    if (!stat) {
      return {
        ok: false,
        error: { code: "UNSUPPORTED_FILE_TYPE", message: "One of your files did not finish uploading. Try again." },
      };
    }

    if (stat.mimeType === "application/pdf") {
      const bytes = await downloadFile(STUDENT_WORK_BUCKET, storagePath);
      const pageCount = bytes ? await countPdfPages(bytes) : null;
      counted.push({
        storagePath,
        mimeType: "application/pdf",
        byteSize: stat.byteSize,
        pageCount: pageCount ?? 0,
      });
      continue;
    }

    if (
      stat.mimeType !== "image/jpeg" &&
      stat.mimeType !== "image/png" &&
      stat.mimeType !== "image/webp"
    ) {
      return {
        ok: false,
        error: {
          code: "UNSUPPORTED_FILE_TYPE",
          message: "One of your files is not a supported type. Upload JPG, PNG, WebP or PDF.",
        },
      };
    }

    counted.push({
      storagePath,
      mimeType: stat.mimeType,
      byteSize: stat.byteSize,
      pageCount: pageCountForFile(stat.mimeType, null),
    });
  }

  return { ok: true, value: counted };
}

/// Fetches the student's pages server-side to hand to the model. The
/// browser is never asked to re-upload them for grading.
async function loadAttachments(uploads: CountedUpload[]): Promise<GradingAttachment[]> {
  const attachments: GradingAttachment[] = [];

  for (const upload of uploads) {
    const bytes = await downloadFile(STUDENT_WORK_BUCKET, upload.storagePath);
    if (!bytes) continue;
    attachments.push({
      mimeType: upload.mimeType,
      bytes,
      fileName: upload.storagePath.split("/").pop() ?? "page",
    });
  }

  return attachments;
}

/// The overall comments from earlier attempts, so a retry can build on them.
async function previousFeedbackFor(
  userId: string,
  questionId: string,
  prisma: PrismaClient,
): Promise<string[]> {
  const previous = await prisma.frqSubmission.findMany({
    where: { userId, frqQuestionId: questionId, creditConsumed: true },
    orderBy: { attemptNumber: "asc" },
    select: { feedback: true },
  });

  return previous
    .map((submission) => {
      const feedback = submission.feedback as { overall?: string } | null;
      return feedback?.overall ?? "";
    })
    .filter(Boolean);
}

// --- Giving up -------------------------------------------------------------

export type GiveUpResult =
  | { ok: true }
  | { ok: false; code: "QUESTION_NOT_FOUND" | "QUESTION_LOCKED" | "ALREADY_UNLOCKED"; message: string };

/// Reveals the official solution at the cost of the remaining attempts.
///
/// Costs zero grading credits. Once this is done the question accepts no
/// further graded attempts, but every attempt and piece of feedback the
/// student already earned is kept.
export async function giveUpAndUnlock(
  userId: string,
  questionId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<GiveUpResult> {
  const question = await prisma.frqQuestion.findFirst({
    where: { id: questionId, status: "PUBLISHED" },
    select: { id: true },
  });
  if (!question) {
    return { ok: false, code: "QUESTION_NOT_FOUND", message: "Question not found." };
  }

  const [entitlements, history] = await Promise.all([
    getUserEntitlements(userId, prisma),
    getQuestionHistory(userId, questionId, prisma),
  ]);

  // Someone who cannot open the question cannot use it to read a solution.
  if (!canViewFrqContent(entitlements, history)) {
    return {
      ok: false,
      code: "QUESTION_LOCKED",
      message: "This question is part of Astro Coach Pro.",
    };
  }

  if (history.unlockReason !== null) {
    return {
      ok: false,
      code: "ALREADY_UNLOCKED",
      message: "The official solution is already unlocked.",
    };
  }

  await prisma.frqSolutionUnlock.upsert({
    where: { userId_frqQuestionId: { userId, frqQuestionId: questionId } },
    create: { userId, frqQuestionId: questionId, reason: "GIVE_UP" },
    update: {},
  });

  return { ok: true };
}
