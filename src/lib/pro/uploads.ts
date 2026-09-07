// Validation for student solution uploads.
//
// The rule the whole file exists to enforce: a grading credit is spent only
// after the uploaded work has been proven acceptable. Every check here runs
// server-side, before anything is charged.
//
// Page counting is the subtle part. A student may mix formats freely — a
// 3-page PDF, two photos and a 2-page PDF is seven pages — so the limit is
// on total pages, not on the number of files. Each image counts as one
// page; a PDF counts its real pages, read from the file itself rather than
// taken on trust from the browser. Typed text counts as nothing.

import { PDFDocument } from "pdf-lib";
import {
  ALLOWED_UPLOAD_MIME_TYPES,
  MAX_UPLOAD_FILE_BYTES,
  MAX_UPLOAD_PAGES_PER_SUBMISSION,
  MAX_UPLOAD_TOTAL_BYTES,
  type AllowedUploadMimeType,
} from "./config";

/// What the browser tells us about a file it wants to upload. Every field
/// is treated as a claim to be checked, not a fact.
export type UploadClaim = {
  fileName: string;
  mimeType: string;
  byteSize: number;
};

/// A file that has been uploaded and had its real page count established.
export type CountedUpload = {
  storagePath: string;
  mimeType: AllowedUploadMimeType;
  byteSize: number;
  pageCount: number;
};

export type ValidationError = {
  code:
    | "NO_WORK_SUBMITTED"
    | "UNSUPPORTED_FILE_TYPE"
    | "FILE_TOO_LARGE"
    | "SUBMISSION_TOO_LARGE"
    | "TOO_MANY_PAGES"
    | "TOO_MANY_FILES"
    | "UNREADABLE_PDF";
  /// Written for the student, not for a log. Says what to change.
  message: string;
};

export type ValidationResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: ValidationError };

function isAllowedMimeType(mimeType: string): mimeType is AllowedUploadMimeType {
  return (ALLOWED_UPLOAD_MIME_TYPES as readonly string[]).includes(mimeType);
}

function formatMegabytes(bytes: number): string {
  return `${Math.round(bytes / (1024 * 1024))} MB`;
}

/// A PDF could in principle hold every allowed page on its own, so no
/// student ever needs more files than the page limit.
const MAX_FILES_PER_SUBMISSION = MAX_UPLOAD_PAGES_PER_SUBMISSION;

/// Checks what the browser says it is about to upload, before any signed
/// upload URL is issued. Cheap checks first, so obvious mistakes are caught
/// without touching storage.
///
/// This cannot yet know a PDF's real page count — that needs the file — so
/// the total-page rule is enforced again in `checkTotalPages` once the
/// files exist.
export function validateUploadClaims(
  claims: UploadClaim[],
): ValidationResult<UploadClaim[]> {
  if (claims.length > MAX_FILES_PER_SUBMISSION) {
    return {
      ok: false,
      error: {
        code: "TOO_MANY_FILES",
        message: `You can attach at most ${MAX_FILES_PER_SUBMISSION} files to one submission.`,
      },
    };
  }

  let totalBytes = 0;

  for (const claim of claims) {
    if (!isAllowedMimeType(claim.mimeType)) {
      return {
        ok: false,
        error: {
          code: "UNSUPPORTED_FILE_TYPE",
          message: `"${claim.fileName}" is not a supported file type. Upload JPG, PNG, WebP or PDF.`,
        },
      };
    }

    if (claim.byteSize <= 0 || claim.byteSize > MAX_UPLOAD_FILE_BYTES) {
      return {
        ok: false,
        error: {
          code: "FILE_TOO_LARGE",
          message: `"${claim.fileName}" is larger than ${formatMegabytes(MAX_UPLOAD_FILE_BYTES)}. Try photographing at a lower resolution.`,
        },
      };
    }

    totalBytes += claim.byteSize;
  }

  if (totalBytes > MAX_UPLOAD_TOTAL_BYTES) {
    return {
      ok: false,
      error: {
        code: "SUBMISSION_TOO_LARGE",
        message: `Your files add up to more than ${formatMegabytes(MAX_UPLOAD_TOTAL_BYTES)}. Remove a file or use smaller images.`,
      },
    };
  }

  return { ok: true, value: claims };
}

/// How many pages one file contributes. An image is always one page; a PDF
/// contributes however many pages it really has.
export function pageCountForFile(
  mimeType: AllowedUploadMimeType,
  pdfPageCount: number | null,
): number {
  if (mimeType !== "application/pdf") return 1;
  return pdfPageCount ?? 0;
}

/// Reads a PDF's real page count from its bytes.
///
/// Returns null when the file cannot be parsed, so a corrupt upload becomes
/// a clear "we couldn't read this PDF" message rather than a wrong count or
/// a wasted credit.
export async function countPdfPages(bytes: Uint8Array): Promise<number | null> {
  try {
    const document = await PDFDocument.load(bytes, {
      // Encrypted PDFs would otherwise throw; we still only need the count.
      ignoreEncryption: true,
      updateMetadata: false,
    });
    return document.getPageCount();
  } catch {
    return null;
  }
}

/// The final gate before a credit is spent: does the submission contain any
/// work at all, and does it fit inside the page limit?
export function checkSubmission(
  typedResponse: string | null,
  uploads: CountedUpload[],
): ValidationResult<{ totalPages: number }> {
  const hasTypedWork = Boolean(typedResponse && typedResponse.trim().length > 0);

  // A submission needs work in it. Typed only, uploads only, or both — but
  // not neither.
  if (!hasTypedWork && uploads.length === 0) {
    return {
      ok: false,
      error: {
        code: "NO_WORK_SUBMITTED",
        message: "Add your working — type it in, upload photos or a PDF, or both.",
      },
    };
  }

  const unreadable = uploads.find((upload) => upload.pageCount <= 0);
  if (unreadable) {
    return {
      ok: false,
      error: {
        code: "UNREADABLE_PDF",
        message:
          "One of your PDFs could not be opened. Try re-exporting it, or upload photos of the pages instead.",
      },
    };
  }

  const totalPages = uploads.reduce((sum, upload) => sum + upload.pageCount, 0);

  if (totalPages > MAX_UPLOAD_PAGES_PER_SUBMISSION) {
    return {
      ok: false,
      error: {
        code: "TOO_MANY_PAGES",
        message: `That is ${totalPages} pages of work. The limit is ${MAX_UPLOAD_PAGES_PER_SUBMISSION} pages per submission — each photo counts as one page, and a PDF counts its own pages.`,
      },
    };
  }

  return { ok: true, value: { totalPages } };
}
