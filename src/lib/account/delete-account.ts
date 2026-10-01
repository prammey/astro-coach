// Removes everything Astro Coach holds about one user, before their login
// itself is deleted by the "Deactivate Account" route.
//
// Order matters, and every step is safe to repeat:
//
//   1. Stop billing (delete the Stripe customer). If this fails we stop
//      here, so we never erase the record of a subscription that is still
//      charging someone.
//   2. Delete their files (uploaded work and profile pictures).
//   3. Delete their rows, and blank their name from the rows we keep
//      (the AI cost log and question error reports).
//
// If any step throws, the route reports an error and the user can simply
// try again — the steps already done will just find nothing left to do.
//
// SERVER-ONLY: this uses the Stripe secret key and the service-role key.

if (typeof window !== "undefined") {
  throw new Error("src/lib/account/delete-account.ts must not be imported in the browser");
}

import type { PrismaClient } from "@/generated/prisma/client";
import { STUDENT_WORK_BUCKET } from "@/lib/pro/config";
import { getPrisma } from "@/lib/prisma";
import { getStripe, isStripeConfigured } from "@/lib/stripe/client";
import { createAdminClient } from "@/lib/supabase/admin";

/// The public bucket and folder that profile pictures are uploaded to by
/// the Profile Settings page. Each file is named `<userId>-<time>.<ext>`.
const PROFILE_BUCKET = "profiles";
const PROFILE_PICTURE_FOLDER = "profile-pictures";

/// How many entries to ask Supabase Storage for at a time. Its default is
/// 100, so a big folder has to be read in pages.
const LIST_PAGE_SIZE = 1000;

/// The small part of Supabase Storage this module uses. Spelled out so the
/// tests can hand in a fake instead of a real bucket.
export type StorageLike = {
  from(bucket: string): {
    list(
      folder: string,
      options: { limit: number; offset: number; search?: string },
    ): Promise<{ data: Array<{ id: string | null; name: string }> | null; error: unknown }>;
    remove(paths: string[]): Promise<{ error: unknown }>;
  };
};

/// The one Stripe call this module makes, for the same reason.
export type StripeLike = {
  customers: { del(customerId: string): Promise<unknown> };
};

export type DeleteAccountDeps = {
  prisma: PrismaClient;
  /// null when Stripe is not configured (local dev without keys).
  stripe: StripeLike | null;
  storage: StorageLike;
};

/// Builds the real connections. Kept separate so tests never touch them.
function realDeps(): DeleteAccountDeps {
  return {
    prisma: getPrisma(),
    stripe: isStripeConfigured() ? getStripe() : null,
    storage: createAdminClient().storage as unknown as StorageLike,
  };
}

/// Deletes all of one user's data. Throws if anything goes wrong.
export async function deleteAllUserData(
  userId: string,
  deps: DeleteAccountDeps = realDeps(),
): Promise<void> {
  await stopBilling(userId, deps);
  await deleteUserFiles(userId, deps.storage);
  await deleteUserRows(userId, deps.prisma);
}

// ─── Step 1: billing ────────────────────────────────────────────────────

/// Deletes the user's Stripe customer, if they have one.
///
/// Deleting a customer makes Stripe cancel all of their subscriptions
/// immediately, with no refund for the unused part of the month, and
/// removes their saved cards. That is exactly the agreed behaviour.
async function stopBilling(userId: string, deps: DeleteAccountDeps): Promise<void> {
  const subscription = await deps.prisma.subscription.findUnique({ where: { userId } });
  const customerId = subscription?.stripeCustomerId;

  // Never paid and never started a checkout: nothing to cancel.
  if (!customerId) return;

  if (!deps.stripe) {
    throw new Error(
      "This user has a Stripe customer but Stripe is not configured, so their " +
        "billing cannot be stopped. Refusing to delete their data.",
    );
  }

  try {
    await deps.stripe.customers.del(customerId);
  } catch (error) {
    // Already deleted on an earlier attempt: the job is done.
    if (isStripeResourceMissing(error)) return;
    throw error;
  }
}

/// True for Stripe's "no such customer" error.
function isStripeResourceMissing(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: unknown }).code === "resource_missing"
  );
}

// ─── Step 2: files ──────────────────────────────────────────────────────

/// Removes the user's uploaded work and profile pictures.
async function deleteUserFiles(userId: string, storage: StorageLike): Promise<void> {
  // Uploaded work lives at <userId>/<questionId>/<file>. Listing the folder
  // (rather than reading upload rows) also catches files that were
  // uploaded but never submitted.
  const workFiles = await listFilesRecursively(storage, STUDENT_WORK_BUCKET, userId);
  await removeAll(storage, STUDENT_WORK_BUCKET, workFiles);

  // Profile pictures share one folder. Ask Storage to narrow the list to
  // this user's ID, then keep only exact `<userId>-` prefixes to be safe.
  const pictures = await listEntries(
    storage,
    PROFILE_BUCKET,
    PROFILE_PICTURE_FOLDER,
    `${userId}-`,
  );
  const ownPictures = pictures
    .filter((entry) => entry.id !== null && entry.name.startsWith(`${userId}-`))
    .map((entry) => `${PROFILE_PICTURE_FOLDER}/${entry.name}`);
  await removeAll(storage, PROFILE_BUCKET, ownPictures);
}

/// Lists every entry in one folder, reading page by page. `search`
/// optionally narrows it to names matching that text.
async function listEntries(
  storage: StorageLike,
  bucket: string,
  folder: string,
  search?: string,
): Promise<Array<{ id: string | null; name: string }>> {
  const entries: Array<{ id: string | null; name: string }> = [];

  for (let offset = 0; ; offset += LIST_PAGE_SIZE) {
    const { data, error } = await storage
      .from(bucket)
      .list(folder, { limit: LIST_PAGE_SIZE, offset, search });

    if (error) throw new Error(`Could not list ${bucket}/${folder}: ${String(error)}`);

    const page = data ?? [];
    entries.push(...page);
    if (page.length < LIST_PAGE_SIZE) return entries;
  }
}

/// Lists the full path of every file under a folder, including subfolders.
/// Supabase marks a subfolder with `id: null`.
async function listFilesRecursively(
  storage: StorageLike,
  bucket: string,
  folder: string,
): Promise<string[]> {
  const paths: string[] = [];

  for (const entry of await listEntries(storage, bucket, folder)) {
    const path = `${folder}/${entry.name}`;
    if (entry.id === null) {
      paths.push(...(await listFilesRecursively(storage, bucket, path)));
    } else {
      paths.push(path);
    }
  }

  return paths;
}

/// Removes a list of files, in batches the Storage API accepts.
async function removeAll(storage: StorageLike, bucket: string, paths: string[]): Promise<void> {
  for (let start = 0; start < paths.length; start += LIST_PAGE_SIZE) {
    const batch = paths.slice(start, start + LIST_PAGE_SIZE);
    const { error } = await storage.from(bucket).remove(batch);
    if (error) throw new Error(`Could not remove files from ${bucket}: ${String(error)}`);
  }
}

// ─── Step 3: database rows ──────────────────────────────────────────────

/// Deletes the user's own rows and blanks their identity from shared ones,
/// all in one transaction so it either fully happens or not at all.
async function deleteUserRows(userId: string, prisma: PrismaClient): Promise<void> {
  await prisma.$transaction([
    // Multiple-choice practice.
    prisma.userAttempt.deleteMany({ where: { userId } }),
    prisma.userQuestionProgress.deleteMany({ where: { userId } }),
    prisma.bookmark.deleteMany({ where: { userId } }),

    // Free-response work. Deleting a submission also deletes its upload
    // rows (onDelete: Cascade in the schema).
    prisma.frqSubmission.deleteMany({ where: { userId } }),
    prisma.frqSolutionUnlock.deleteMany({ where: { userId } }),

    // Billing records.
    prisma.creditGrant.deleteMany({ where: { userId } }),
    prisma.subscription.deleteMany({ where: { userId } }),

    // Kept, but no longer tied to the person: AI costs stay correct and
    // reported question errors can still be fixed.
    prisma.aiUsageEvent.updateMany({ where: { userId }, data: { userId: null } }),
    prisma.questionReport.updateMany({
      where: { userId },
      data: { userId: null, userEmail: null },
    }),
  ]);
}
