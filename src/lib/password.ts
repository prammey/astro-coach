// Rules for choosing a password, shared by the signup page and the
// reset-password page so the two can never drift apart.

/// The shortest password Astro Coach accepts. Matches Supabase Auth's
/// project minimum, so the server never rejects what this check allowed.
export const MIN_PASSWORD_LENGTH = 6;

/// Checks a new password and its confirmation box.
/// Returns a message to show the student, or null when it is fine.
export function validateNewPassword(password: string, confirmPassword: string): string | null {
  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
  }

  return null;
}
