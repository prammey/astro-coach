// Supabase Storage access for FRQ files.
//
// Three buckets, all private:
//
//   frq-student-work   — a student's uploaded solution pages
//   frq-source-pdfs    — admin-only imported question and solution papers
//   frq-question-media — figures belonging to published questions
//
// Nothing here is public and nothing is served from /public. Student work
// is private to its owner, and the only way anyone sees a file is a
// short-lived signed URL issued by the server after an access check.
//
// SERVER-ONLY: this module uses the service-role key.

import { createAdminClient } from "@/lib/supabase/admin";
import { STUDENT_WORK_BUCKET } from "./config";

/// How long a signed URL stays valid. Short, because these links bypass
/// every other check for as long as they live.
const SIGNED_URL_TTL_SECONDS = 60 * 10; // 10 minutes
const SIGNED_UPLOAD_TTL_SECONDS = 60 * 10;

/// Builds the storage path for one of a student's uploads.
///
/// The owning user ID is the first path segment. That is what makes
/// ownership checkable from the path alone, and it is what the Storage
/// policy in the README keys off.
export function studentWorkPath(
  userId: string,
  frqQuestionId: string,
  fileName: string,
): string {
  return `${userId}/${frqQuestionId}/${Date.now()}-${sanitiseFileName(fileName)}`;
}

/// Strips anything that could escape the intended folder or confuse the
/// storage API. Never trust a filename from a browser.
export function sanitiseFileName(fileName: string): string {
  const base = fileName.split(/[\\/]/).pop() ?? "upload";
  return base.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120) || "upload";
}

/// True when this storage path belongs to this user.
///
/// Checked on every read and before every submission is recorded, so a
/// student cannot attach someone else's file to their own submission by
/// sending a path they guessed.
export function ownsStudentWorkPath(userId: string, storagePath: string): boolean {
  if (storagePath.includes("..")) return false;
  return storagePath.startsWith(`${userId}/`);
}

/// Issues a URL the browser can upload directly to.
///
/// Uploads go straight from the student's device to Supabase Storage
/// rather than through a Vercel function, so a 40 MB submission never
/// occupies our server.
export async function createSignedUploadUrl(
  bucket: string,
  storagePath: string,
): Promise<{ signedUrl: string; token: string; path: string }> {
  const supabase = createAdminClient();
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUploadUrl(storagePath, { upsert: false });

  if (error || !data) {
    throw new Error(`Could not create an upload URL: ${error?.message ?? "unknown error"}`);
  }

  return { signedUrl: data.signedUrl, token: data.token, path: data.path };
}

/// A short-lived URL for reading a private file. Callers must have already
/// checked that this user is allowed to see it.
export async function createSignedReadUrl(
  bucket: string,
  storagePath: string,
  expiresInSeconds: number = SIGNED_URL_TTL_SECONDS,
): Promise<string | null> {
  const supabase = createAdminClient();
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(storagePath, expiresInSeconds);

  if (error || !data) return null;
  return data.signedUrl;
}

/// Downloads a private file's bytes on the server. Used to count PDF pages
/// and to hand a student's work to the grading model — the browser is never
/// asked to do either.
export async function downloadFile(
  bucket: string,
  storagePath: string,
): Promise<Uint8Array | null> {
  const supabase = createAdminClient();
  const { data, error } = await supabase.storage.from(bucket).download(storagePath);
  if (error || !data) return null;

  const buffer = await data.arrayBuffer();
  return new Uint8Array(buffer);
}

/// Confirms a file really exists at this path and reports its size and
/// type. A student's claim about what they uploaded is checked against
/// this, never accepted on its own.
export async function statFile(
  bucket: string,
  storagePath: string,
): Promise<{ byteSize: number; mimeType: string } | null> {
  const supabase = createAdminClient();

  const lastSlash = storagePath.lastIndexOf("/");
  const folder = lastSlash === -1 ? "" : storagePath.slice(0, lastSlash);
  const name = storagePath.slice(lastSlash + 1);

  const { data, error } = await supabase.storage
    .from(bucket)
    .list(folder, { search: name, limit: 100 });

  if (error || !data) return null;

  const match = data.find((entry) => entry.name === name);
  if (!match) return null;

  return {
    byteSize: Number(match.metadata?.size ?? 0),
    mimeType: String(match.metadata?.mimetype ?? "application/octet-stream"),
  };
}

/// Removes files, used to tidy up after a submission that was rejected.
export async function removeFiles(bucket: string, storagePaths: string[]): Promise<void> {
  if (storagePaths.length === 0) return;
  const supabase = createAdminClient();
  await supabase.storage.from(bucket).remove(storagePaths);
}

export { STUDENT_WORK_BUCKET, SIGNED_UPLOAD_TTL_SECONDS };
