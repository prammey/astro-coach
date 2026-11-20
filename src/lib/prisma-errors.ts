// Small helpers for recognising specific database errors.
//
// Kept in its own file (not src/lib/prisma.ts) so tests that mock the
// Prisma client module still get the real helper.

/// Whether an error is Prisma's "unique constraint failed" error (code
/// P2002) — the one that means "a row with this key already exists".
///
/// Checked by its code rather than with `instanceof`, so it works the same
/// for the real client and for test doubles. Anything else (a lost
/// connection, a timeout) is NOT a duplicate and must not be treated as one.
export function isUniqueConstraintError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code: unknown }).code === "P2002"
  );
}
