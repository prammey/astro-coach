// The handful of Pro values the browser is genuinely allowed to know:
// advertised prices and the founding-price deadline. These appear in
// marketing copy, so they are not secrets.
//
// Anything that decides what a user may actually DO — credits, attempt
// limits, entitlements — is derived on the server and must not be read
// from here by a Client Component to make an access decision.

export const PUBLIC_PRO_CONFIG = {
  foundingPriceUsd: 5.99,
  regularPriceUsd: 7.99,
  /// The real deadline shown in pricing copy: December 31, 2026.
  foundingCutoffIso: "2027-01-01T06:00:00Z",
  foundingDeadlineLabel: "December 31, 2026",
  /// Advertised allowances, for pricing copy only.
  freeLifetimeGrades: 3,
  proPeriodGrades: 50,
  maxAttemptsPerFrq: 3,
  maxUploadPages: 8,
} as const;
