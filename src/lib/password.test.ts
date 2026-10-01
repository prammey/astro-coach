import { describe, expect, it } from 'vitest';
import { MIN_PASSWORD_LENGTH, validateNewPassword } from './password';

describe('validateNewPassword', () => {
  it('accepts a long enough password that matches its confirmation', () => {
    expect(validateNewPassword('telescope', 'telescope')).toBeNull();
  });

  it('accepts a password of exactly the minimum length', () => {
    const password = 'a'.repeat(MIN_PASSWORD_LENGTH);
    expect(validateNewPassword(password, password)).toBeNull();
  });

  it('rejects a password that is too short', () => {
    expect(validateNewPassword('abc', 'abc')).toBe('Password must be at least 6 characters');
  });

  it('reports a mismatch before the length', () => {
    expect(validateNewPassword('abc', 'abd')).toBe('Passwords do not match');
  });
});
