// The one entry point business logic uses to grade a submission.
//
// It picks a provider, runs the grade, and records what the call cost. No
// route, service or component below this line knows or cares which model
// answered.

// SERVER-ONLY. This check turns an accidental client import into an
// immediate, obvious error rather than a secret quietly shipped to a
// browser bundle.
if (typeof window !== "undefined") {
  throw new Error("src/lib/ai/grader.ts must not be imported in the browser");
}

import type { PrismaClient } from "@/generated/prisma/client";
import { getPrisma } from "@/lib/prisma";
import {
  configuredAiModel,
  configuredAiProvider,
  estimateAiCostUsd,
} from "@/lib/pro/config";
import { MockGradingProvider } from "./providers/mock";
import { GeminiGradingProvider } from "./providers/gemini";
import type { GradingInput, GradingProvider, GradingResult } from "./types";

/// True when grading would be simulated rather than real. Surfaced in the
/// admin usage view so mock output is never mistaken for a real grade.
export function isMockGrading(): boolean {
  return resolveProvider() instanceof MockGradingProvider;
}

function resolveProvider(): GradingProvider {
  const configured = configuredAiProvider();
  const model = configuredAiModel();
  const apiKey = process.env.GEMINI_API_KEY;

  if (configured === "gemini" && apiKey) {
    return new GeminiGradingProvider(model, apiKey);
  }

  // Falling back to the mock grader is fine locally and in tests, but in
  // production it would mean handing students invented marks. Refuse.
  if (process.env.NODE_ENV === "production" && configured !== "mock") {
    throw new Error(
      "AI grading is not configured: GEMINI_API_KEY is missing. Refusing to " +
        "fall back to the mock grader in production.",
    );
  }

  return new MockGradingProvider();
}

/// Grades one submission and records the call for cost analytics.
///
/// Never throws for a provider problem — a failure comes back as a
/// "failed" outcome so the caller can leave the student's credit unspent.
export async function gradeFrqSubmission(
  input: GradingInput,
  options: { userId?: string; prisma?: PrismaClient } = {},
): Promise<GradingResult> {
  const prisma = options.prisma ?? getPrisma();

  let provider: GradingProvider;
  try {
    provider = resolveProvider();
  } catch (error) {
    console.error("Grading provider unavailable:", error);
    return {
      outcome: {
        outcome: "failed",
        errorCode: "NOT_CONFIGURED",
        message: "AI grading is not available right now.",
      },
      usage: {
        provider: "none",
        model: "none",
        inputTokens: null,
        outputTokens: null,
        latencyMs: 0,
      },
    };
  }

  const result = await provider.grade(input);

  await recordUsage(prisma, {
    kind: "GRADING",
    userId: options.userId ?? null,
    result,
    pageCount: input.student.attachments.length,
  });

  return result;
}

/// Writes one AiUsageEvent row. Cost analytics must never be the reason a
/// student's grade fails, so a logging error is swallowed after being
/// reported to the server log.
export async function recordUsage(
  prisma: PrismaClient,
  entry: {
    kind: "GRADING" | "IMPORT_EXTRACTION";
    userId: string | null;
    result: GradingResult;
    pageCount: number;
  },
): Promise<void> {
  const { usage, outcome } = entry.result;

  try {
    await prisma.aiUsageEvent.create({
      data: {
        kind: entry.kind,
        userId: entry.userId,
        provider: usage.provider,
        model: usage.model,
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        pageCount: entry.pageCount,
        latencyMs: usage.latencyMs,
        // All cost arithmetic lives in the pricing table in pro/config.ts.
        estimatedCostUsd: estimateAiCostUsd(
          usage.model,
          usage.inputTokens,
          usage.outputTokens,
        ),
        success: outcome.outcome !== "failed",
        errorCode: outcome.outcome === "failed" ? outcome.errorCode : null,
      },
    });
  } catch (error) {
    console.error("Failed to record AI usage:", error);
  }
}
