"use client";

// Browser-side helpers for talking to the Pro API routes.
//
// Everything here is convenience only. Nothing in this file decides what a
// user may do — it just asks the server and renders the answer. Every gate
// is enforced again server-side when the action is actually attempted.

import { supabase } from "@/lib/auth";

/// Attaches the Supabase access token, matching how the rest of Astro
/// Coach's client-side fetches authenticate.
async function authHeaders(): Promise<Record<string, string>> {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session ? { Authorization: `Bearer ${session.access_token}` } : {};
}

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(path, { headers: await authHeaders() });
  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new ApiError(body?.error ?? "Something went wrong.", response.status, body?.code, body);
  }
  return body as T;
}

export async function apiPost<T>(path: string, payload: unknown): Promise<T> {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(await authHeaders()) },
    body: JSON.stringify(payload),
  });
  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new ApiError(body?.error ?? "Something went wrong.", response.status, body?.code, body);
  }
  return body as T;
}

/// Carries the server's own message and code so the UI can say something
/// specific — "that PDF is 9 pages" rather than "an error occurred".
export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code?: string,
    readonly body?: Record<string, unknown>,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/// The plan and credit state the browser renders badges and counters from.
export type EntitlementsResponse = {
  plan: "FREE" | "PRO";
  isPro: boolean;
  status: "none" | "active" | "canceling" | "past_due" | "expired";
  cancelAtPeriodEnd: boolean;
  currentPeriodEnd: string | null;
  isFoundingPrice: boolean;
  canOpenNewFrq: boolean;
  credits: {
    remaining: number;
    total: number;
    used: number;
    resetsAt: string | null;
    hitPeriodCap: boolean;
  };
};

export function fetchEntitlements(): Promise<EntitlementsResponse> {
  return apiGet<EntitlementsResponse>("/api/pro/entitlements");
}

/// Sends the user to Stripe Checkout. The price is chosen server-side.
export async function startProCheckout(): Promise<void> {
  const { url } = await apiPost<{ url: string }>("/api/stripe/checkout", {});
  window.location.href = url;
}

/// Sends the user to the Stripe Billing Portal to manage or cancel.
export async function openBillingPortal(): Promise<void> {
  const { url } = await apiPost<{ url: string }>("/api/stripe/portal", {});
  window.location.href = url;
}

/// Uploads solution files straight to private storage, then returns the
/// paths to attach to a submission.
///
/// The server issues one signed URL per file and builds every path from the
/// authenticated user's ID, so the browser cannot choose where a file lands.
export async function uploadSolutionFiles(
  frqQuestionId: string,
  files: File[],
): Promise<string[]> {
  const { uploads } = await apiPost<{
    uploads: Array<{ fileName: string; storagePath: string; signedUrl: string; token: string }>;
  }>("/api/frq/uploads/sign", {
    frqQuestionId,
    files: files.map((file) => ({
      fileName: file.name,
      mimeType: file.type,
      byteSize: file.size,
    })),
  });

  const paths: string[] = [];

  for (let index = 0; index < files.length; index += 1) {
    const target = uploads[index];
    const response = await fetch(target.signedUrl, {
      method: "PUT",
      headers: { "Content-Type": files[index].type },
      body: files[index],
    });

    if (!response.ok) {
      throw new ApiError(`"${files[index].name}" failed to upload. Please try again.`, 500);
    }
    paths.push(target.storagePath);
  }

  return paths;
}
