// Tests for deleting everything about a user.
//
// Stripe, Supabase Storage and the database are all fakes that record what
// was asked of them, so these check the order of the steps and exactly
// which files and rows are touched — without any network.

import { describe, expect, it, vi } from "vitest";
import {
  deleteAllUserData,
  type DeleteAccountDeps,
  type StorageLike,
  type StripeLike,
} from "./delete-account";

const USER_ID = "user-1";

/// A pretend bucket layout: bucket -> folder -> entries in that folder.
/// An entry with `id: null` is a subfolder, as Supabase reports them.
type FakeBuckets = Record<string, Record<string, Array<{ id: string | null; name: string }>>>;

/// A Storage stand-in that serves the layout above and records removals.
function fakeStorage(buckets: FakeBuckets, events: string[]) {
  const removed: Record<string, string[]> = {};

  const storage: StorageLike = {
    from: (bucket) => ({
      // Looser than Supabase's `search` on purpose, so the exact-prefix
      // check in the real code is what gets tested.
      list: async (folder, { limit, offset, search }) => {
        const entries = (buckets[bucket]?.[folder] ?? []).filter(
          (entry) => !search || entry.name.includes(search),
        );
        return { data: entries.slice(offset, offset + limit), error: null };
      },
      remove: async (paths) => {
        events.push(`remove:${bucket}`);
        removed[bucket] = [...(removed[bucket] ?? []), ...paths];
        return { error: null };
      },
    }),
  };

  return { storage, removed };
}

/// A database stand-in. Every table method records its call.
function fakePrisma(stripeCustomerId: string | null, events: string[]) {
  const calls: Record<string, unknown[]> = {};

  // Builds a recording function for e.g. "frqSubmission.deleteMany".
  const record = (name: string) =>
    vi.fn((args: unknown) => {
      calls[name] = [...(calls[name] ?? []), args];
      return name;
    });

  const prisma = {
    subscription: {
      findUnique: vi.fn(async () => (stripeCustomerId ? { stripeCustomerId } : null)),
      deleteMany: record("subscription.deleteMany"),
    },
    userAttempt: { deleteMany: record("userAttempt.deleteMany") },
    userQuestionProgress: { deleteMany: record("userQuestionProgress.deleteMany") },
    bookmark: { deleteMany: record("bookmark.deleteMany") },
    frqSubmission: { deleteMany: record("frqSubmission.deleteMany") },
    frqSolutionUnlock: { deleteMany: record("frqSolutionUnlock.deleteMany") },
    creditGrant: { deleteMany: record("creditGrant.deleteMany") },
    aiUsageEvent: { updateMany: record("aiUsageEvent.updateMany") },
    questionReport: { updateMany: record("questionReport.updateMany") },
    $transaction: vi.fn(async (operations: unknown[]) => {
      events.push("transaction");
      return operations;
    }),
  };

  return { prisma: prisma as unknown as DeleteAccountDeps["prisma"], calls, raw: prisma };
}

/// A Stripe stand-in whose customer deletion can be made to fail.
function fakeStripe(events: string[], failWith?: unknown) {
  const del = vi.fn(async (customerId: string) => {
    events.push(`stripe:${customerId}`);
    if (failWith) throw failWith;
    return { deleted: true };
  });
  const stripe: StripeLike = { customers: { del } };
  return { stripe, del };
}

/// The storage layout used by most tests: two question folders of work,
/// and profile pictures from this user and someone else.
function sampleBuckets(): FakeBuckets {
  return {
    "frq-student-work": {
      [USER_ID]: [
        { id: null, name: "question-a" },
        { id: null, name: "question-b" },
      ],
      [`${USER_ID}/question-a`]: [{ id: "f1", name: "1-page.jpg" }],
      [`${USER_ID}/question-b`]: [
        { id: "f2", name: "2-page.png" },
        { id: "f3", name: "3-work.pdf" },
      ],
    },
    profiles: {
      "profile-pictures": [
        { id: "p1", name: `${USER_ID}-111.png` },
        { id: "p2", name: "user-10-222.png" },
        { id: "p3", name: "someone-else-333.jpg" },
        { id: "p4", name: `other-${USER_ID}-444.png` },
      ],
    },
  };
}

describe("deleting a user's data", () => {
  it("cancels billing before touching any file or row", async () => {
    const events: string[] = [];
    const { stripe } = fakeStripe(events);
    const { storage } = fakeStorage(sampleBuckets(), events);
    const { prisma } = fakePrisma("cus_123", events);

    await deleteAllUserData(USER_ID, { prisma, stripe, storage });

    expect(events).toEqual([
      "stripe:cus_123",
      "remove:frq-student-work",
      "remove:profiles",
      "transaction",
    ]);
  });

  it("deletes nothing when Stripe fails", async () => {
    const events: string[] = [];
    const { stripe } = fakeStripe(events, new Error("Stripe is down"));
    const { storage, removed } = fakeStorage(sampleBuckets(), events);
    const { prisma, raw } = fakePrisma("cus_123", events);

    await expect(deleteAllUserData(USER_ID, { prisma, stripe, storage })).rejects.toThrow(
      "Stripe is down",
    );
    expect(removed).toEqual({});
    expect(raw.$transaction).not.toHaveBeenCalled();
  });

  it("refuses to continue if a paying user exists but Stripe is not set up", async () => {
    const events: string[] = [];
    const { storage, removed } = fakeStorage(sampleBuckets(), events);
    const { prisma, raw } = fakePrisma("cus_123", events);

    await expect(
      deleteAllUserData(USER_ID, { prisma, stripe: null, storage }),
    ).rejects.toThrow("Stripe is not configured");
    expect(removed).toEqual({});
    expect(raw.$transaction).not.toHaveBeenCalled();
  });

  it("carries on when the Stripe customer was already deleted", async () => {
    const events: string[] = [];
    const { stripe } = fakeStripe(events, { code: "resource_missing" });
    const { storage } = fakeStorage(sampleBuckets(), events);
    const { prisma, raw } = fakePrisma("cus_123", events);

    await deleteAllUserData(USER_ID, { prisma, stripe, storage });
    expect(raw.$transaction).toHaveBeenCalledOnce();
  });

  it("never calls Stripe for a user who never paid", async () => {
    const events: string[] = [];
    const { stripe, del } = fakeStripe(events);
    const { storage } = fakeStorage(sampleBuckets(), events);
    const { prisma } = fakePrisma(null, events);

    await deleteAllUserData(USER_ID, { prisma, stripe, storage });
    expect(del).not.toHaveBeenCalled();
  });

  it("removes all uploaded work and only this user's profile pictures", async () => {
    const events: string[] = [];
    const { stripe } = fakeStripe(events);
    const { storage, removed } = fakeStorage(sampleBuckets(), events);
    const { prisma } = fakePrisma(null, events);

    await deleteAllUserData(USER_ID, { prisma, stripe, storage });

    expect(removed["frq-student-work"]).toEqual([
      `${USER_ID}/question-a/1-page.jpg`,
      `${USER_ID}/question-b/2-page.png`,
      `${USER_ID}/question-b/3-work.pdf`,
    ]);
    // "user-10-…" is not this user, and "other-user-1-…" only contains the
    // ID, so both stay.
    expect(removed.profiles).toEqual([`profile-pictures/${USER_ID}-111.png`]);
  });

  it("reads folders bigger than one page", async () => {
    const events: string[] = [];
    const manyFiles = Array.from({ length: 1500 }, (_, index) => ({
      id: `f${index}`,
      name: `${index}.jpg`,
    }));
    const { storage, removed } = fakeStorage(
      { "frq-student-work": { [USER_ID]: [{ id: null, name: "q" }], [`${USER_ID}/q`]: manyFiles } },
      events,
    );
    const { prisma } = fakePrisma(null, events);

    await deleteAllUserData(USER_ID, { prisma, stripe: null, storage });
    expect(removed["frq-student-work"]).toHaveLength(1500);
  });

  it("deletes the user's rows and blanks them from the cost log and reports", async () => {
    const events: string[] = [];
    const { storage } = fakeStorage({}, events);
    const { prisma, calls } = fakePrisma(null, events);

    await deleteAllUserData(USER_ID, { prisma, stripe: null, storage });

    const byUser = { where: { userId: USER_ID } };
    for (const table of [
      "userAttempt",
      "userQuestionProgress",
      "bookmark",
      "frqSubmission",
      "frqSolutionUnlock",
      "creditGrant",
      "subscription",
    ]) {
      expect(calls[`${table}.deleteMany`]).toEqual([byUser]);
    }

    expect(calls["aiUsageEvent.updateMany"]).toEqual([{ ...byUser, data: { userId: null } }]);
    expect(calls["questionReport.updateMany"]).toEqual([
      { ...byUser, data: { userId: null, userEmail: null } },
    ]);
  });
});
