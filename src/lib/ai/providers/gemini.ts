// The Gemini grading provider.
//
// Every Gemini-specific detail lives in this file: the endpoint, the request
// envelope, how files are attached, how usage is reported. Nothing outside
// src/lib/ai/providers/ imports it. Swapping providers, or moving to the
// official SDK later, means writing another file like this one and changing
// a single line in ../grader.ts.
//
// SERVER-ONLY. GEMINI_API_KEY is never prefixed NEXT_PUBLIC_ and the model
// is never called from the browser.

import { buildSystemPrompt, buildUserPrompt } from "../prompt";
import { extractJson, normaliseGrade } from "../schema";
import type { GradingInput, GradingProvider, GradingResult } from "../types";

const API_BASE = "https://generativelanguage.googleapis.com/v1beta/models";

/// Grading a page of handwriting takes a while; a minute is generous but
/// still bounded, so a hung provider cannot hold a request open forever.
const REQUEST_TIMEOUT_MS = 60_000;

/// Gemini's inline attachments are base64. Chunked to avoid blowing the
/// call stack on a multi-megabyte scan.
function toBase64(bytes: Uint8Array): string {
  const chunkSize = 0x8000;
  let binary = "";
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return Buffer.from(binary, "binary").toString("base64");
}

type GeminiResponse = {
  candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  usageMetadata?: { promptTokenCount?: number; candidatesTokenCount?: number };
  error?: { message?: string };
};

export class GeminiGradingProvider implements GradingProvider {
  readonly name = "gemini";

  constructor(
    readonly model: string,
    private readonly apiKey: string,
  ) {}

  async grade(input: GradingInput): Promise<GradingResult> {
    const startedAt = Date.now();

    // Uploaded pages are attached inline after the text, in the order the
    // student arranged them.
    const parts: Array<Record<string, unknown>> = [{ text: buildUserPrompt(input) }];
    for (const attachment of input.student.attachments) {
      parts.push({
        inline_data: {
          mime_type: attachment.mimeType,
          data: toBase64(attachment.bytes),
        },
      });
    }

    const body = {
      system_instruction: { parts: [{ text: buildSystemPrompt(input) }] },
      contents: [{ role: "user", parts }],
      generationConfig: {
        // Grading should be as reproducible as the model allows.
        temperature: 0.2,
        responseMimeType: "application/json",
      },
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(
        `${API_BASE}/${encodeURIComponent(this.model)}:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": this.apiKey,
          },
          body: JSON.stringify(body),
          signal: controller.signal,
        },
      );

      const payload = (await response.json().catch(() => null)) as GeminiResponse | null;

      if (!response.ok || !payload || payload.error) {
        // The provider's own message goes to the server log only.
        console.error(
          `Gemini grading failed (${response.status}):`,
          payload?.error?.message ?? "no message",
        );
        return {
          outcome: {
            outcome: "failed",
            errorCode: "PROVIDER_ERROR",
            message: "The grading service is unavailable right now.",
          },
          usage: this.usage(startedAt, payload),
        };
      }

      const text = payload.candidates?.[0]?.content?.parts
        ?.map((part) => part.text ?? "")
        .join("")
        .trim();

      if (!text) {
        return {
          outcome: {
            outcome: "failed",
            errorCode: "INVALID_RESPONSE",
            message: "The grading service returned an empty response.",
          },
          usage: this.usage(startedAt, payload),
        };
      }

      // Validation and score clamping happen in ../schema.ts, so this
      // provider never decides what a valid grade looks like.
      const json = extractJson(text);
      const outcome =
        json === null
          ? ({
              outcome: "failed",
              errorCode: "INVALID_RESPONSE",
              message: "The grading service returned a response we could not read.",
            } as const)
          : normaliseGrade(json, input.parts, input.question.totalPoints);

      return { outcome, usage: this.usage(startedAt, payload) };
    } catch (error) {
      const aborted = error instanceof Error && error.name === "AbortError";
      console.error("Gemini grading error:", error);

      return {
        outcome: {
          outcome: "failed",
          errorCode: aborted ? "TIMEOUT" : "PROVIDER_ERROR",
          message: aborted
            ? "Grading took too long. Please try again."
            : "The grading service is unavailable right now.",
        },
        usage: this.usage(startedAt, null),
      };
    } finally {
      clearTimeout(timeout);
    }
  }

  private usage(startedAt: number, payload: GeminiResponse | null) {
    return {
      provider: this.name,
      model: this.model,
      inputTokens: payload?.usageMetadata?.promptTokenCount ?? null,
      outputTokens: payload?.usageMetadata?.candidatesTokenCount ?? null,
      latencyMs: Date.now() - startedAt,
    };
  }
}
