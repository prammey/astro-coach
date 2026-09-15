// Tests for upload validation — the checks that must all pass before a
// grading credit is spent.

import { describe, expect, it } from "vitest";
import { PDFDocument } from "pdf-lib";
import {
  checkStoredFile,
  checkSubmission,
  countPdfPages,
  pageCountForFile,
  validateUploadClaims,
  type CountedUpload,
} from "./uploads";
import { ownsStudentWorkPath, sanitiseFileName } from "./storage";

function image(pages = 1): CountedUpload {
  return {
    storagePath: "user-1/q-1/photo.jpg",
    mimeType: "image/jpeg",
    byteSize: 500_000,
    pageCount: pages,
  };
}

function pdf(pageCount: number): CountedUpload {
  return {
    storagePath: "user-1/q-1/work.pdf",
    mimeType: "application/pdf",
    byteSize: 1_000_000,
    pageCount,
  };
}

describe("file type and size claims", () => {
  it("accepts the supported formats", () => {
    for (const mimeType of ["image/jpeg", "image/png", "image/webp", "application/pdf"]) {
      const result = validateUploadClaims([{ fileName: "a", mimeType, byteSize: 1000 }]);
      expect(result.ok).toBe(true);
    }
  });

  it("rejects an unsupported format by name", () => {
    const result = validateUploadClaims([
      { fileName: "notes.heic", mimeType: "image/heic", byteSize: 1000 },
    ]);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.code).toBe("UNSUPPORTED_FILE_TYPE");
      expect(result.error.message).toContain("notes.heic");
    }
  });

  it("rejects a file over the per-file size limit", () => {
    const result = validateUploadClaims([
      { fileName: "huge.png", mimeType: "image/png", byteSize: 50 * 1024 * 1024 },
    ]);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.code).toBe("FILE_TOO_LARGE");
  });

  it("rejects a set of files that is too large in total", () => {
    const files = Array.from({ length: 8 }, (_, index) => ({
      fileName: `page-${index}.jpg`,
      mimeType: "image/jpeg",
      byteSize: 9 * 1024 * 1024,
    }));
    const result = validateUploadClaims(files);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.code).toBe("SUBMISSION_TOO_LARGE");
  });

  it("rejects more files than the page limit could ever allow", () => {
    const files = Array.from({ length: 9 }, (_, index) => ({
      fileName: `page-${index}.jpg`,
      mimeType: "image/jpeg",
      byteSize: 1000,
    }));
    const result = validateUploadClaims(files);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.code).toBe("TOO_MANY_FILES");
  });
});

describe("counting pages", () => {
  it("counts every image as one page", () => {
    expect(pageCountForFile("image/jpeg", null)).toBe(1);
    expect(pageCountForFile("image/png", null)).toBe(1);
    expect(pageCountForFile("image/webp", null)).toBe(1);
  });

  it("counts a PDF's real pages", () => {
    expect(pageCountForFile("application/pdf", 4)).toBe(4);
  });

  it("reads the page count out of a real PDF", async () => {
    const document = await PDFDocument.create();
    for (let index = 0; index < 5; index += 1) document.addPage();
    const bytes = await document.save();

    expect(await countPdfPages(bytes)).toBe(5);
  });

  it("returns null for a file that is not a readable PDF", async () => {
    expect(await countPdfPages(new TextEncoder().encode("this is not a pdf"))).toBeNull();
  });
});

describe("the eight-page submission limit", () => {
  it("accepts a 4-page PDF plus 4 images", () => {
    const result = checkSubmission(null, [pdf(4), image(), image(), image(), image()]);
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.value.totalPages).toBe(8);
  });

  it("accepts a mixed 3 + 2 + 2 submission", () => {
    const result = checkSubmission(null, [pdf(3), image(), image(), pdf(2)]);
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.value.totalPages).toBe(7);
  });

  it("accepts eight images", () => {
    const result = checkSubmission(null, Array.from({ length: 8 }, () => image()));
    expect(result.ok).toBe(true);
  });

  it("accepts a single 8-page PDF", () => {
    expect(checkSubmission(null, [pdf(8)]).ok).toBe(true);
  });

  it("rejects an 8-page PDF plus one image", () => {
    const result = checkSubmission(null, [pdf(8), image()]);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.code).toBe("TOO_MANY_PAGES");
      expect(result.error.message).toContain("9 pages");
    }
  });

  it("does not count typed text toward the page limit", () => {
    const longAnswer = "working ".repeat(5000);
    expect(checkSubmission(longAnswer, [pdf(8)]).ok).toBe(true);
  });
});

describe("what counts as a submission", () => {
  it("accepts typed work with no files", () => {
    expect(checkSubmission("v = sqrt(GM/r)", []).ok).toBe(true);
  });

  it("accepts files with no typed work", () => {
    expect(checkSubmission(null, [image()]).ok).toBe(true);
  });

  it("accepts both together", () => {
    expect(checkSubmission("see attached", [pdf(2)]).ok).toBe(true);
  });

  it("rejects an empty submission", () => {
    const result = checkSubmission("   ", []);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.code).toBe("NO_WORK_SUBMITTED");
  });

  it("rejects a PDF whose pages could not be read", () => {
    const result = checkSubmission(null, [pdf(0)]);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.code).toBe("UNREADABLE_PDF");
  });
});

describe("storage path ownership", () => {
  it("accepts a path inside the user's own folder", () => {
    expect(ownsStudentWorkPath("user-1", "user-1/q-1/work.pdf")).toBe(true);
  });

  it("rejects another user's path", () => {
    expect(ownsStudentWorkPath("user-1", "user-2/q-1/work.pdf")).toBe(false);
  });

  it("rejects a path that tries to climb out of the folder", () => {
    expect(ownsStudentWorkPath("user-1", "user-1/../user-2/work.pdf")).toBe(false);
  });

  it("rejects a prefix that only looks like the user's folder", () => {
    expect(ownsStudentWorkPath("user-1", "user-10/q-1/work.pdf")).toBe(false);
  });

  it("strips directory traversal and odd characters out of filenames", () => {
    expect(sanitiseFileName("../../etc/passwd")).toBe("passwd");
    expect(sanitiseFileName("my work (1).jpg")).toBe("my_work__1_.jpg");
  });
});

describe("the real stored file, not what the browser claimed", () => {
  const TEN_MB = 10 * 1024 * 1024;

  it("accepts a file at exactly the limit", () => {
    expect(checkStoredFile("image/jpeg", TEN_MB, "page.jpg").ok).toBe(true);
  });

  it("accepts a comfortably small file", () => {
    const result = checkStoredFile("application/pdf", 500_000, "work.pdf");
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.value).toBe("application/pdf");
  });

  it("rejects a stored file over the limit", () => {
    const result = checkStoredFile("image/jpeg", TEN_MB + 1, "huge.jpg");
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.code).toBe("FILE_TOO_LARGE");
      expect(result.error.message).toContain("huge.jpg");
    }
  });

  it("cannot be fooled by a browser that lies about the size", () => {
    // The browser claims 1 MB, so the pre-upload check lets it through...
    const claim = validateUploadClaims([
      { fileName: "sneaky.pdf", mimeType: "application/pdf", byteSize: 1_000_000 },
    ]);
    expect(claim.ok).toBe(true);

    // ...but the file that actually landed is 500 MB, and the check that
    // reads real storage metadata refuses it.
    const stored = checkStoredFile("application/pdf", 500 * 1024 * 1024, "sneaky.pdf");
    expect(stored.ok).toBe(false);
    if (!stored.ok) expect(stored.error.code).toBe("FILE_TOO_LARGE");
  });

  it("rejects a stored file whose real type is not allowed", () => {
    // Uploaded as "image/png" but stored as something else entirely.
    const result = checkStoredFile("application/zip", 1000, "notes.png");
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.code).toBe("UNSUPPORTED_FILE_TYPE");
  });

  it("rejects an empty file", () => {
    expect(checkStoredFile("image/png", 0, "empty.png").ok).toBe(false);
  });
});

describe("the whole-submission size cap, measured on real bytes", () => {
  function sized(bytes: number): CountedUpload {
    return {
      storagePath: "user-1/q-1/page.jpg",
      mimeType: "image/jpeg",
      byteSize: bytes,
      pageCount: 1,
    };
  }

  it("accepts a submission inside the 40 MB cap", () => {
    // 4 files x 9 MB = 36 MB.
    const result = checkSubmission(null, Array.from({ length: 4 }, () => sized(9 * 1024 * 1024)));
    expect(result.ok).toBe(true);
  });

  it("rejects a submission over the 40 MB cap", () => {
    // 5 files x 9 MB = 45 MB, each individually under the per-file limit.
    const result = checkSubmission(null, Array.from({ length: 5 }, () => sized(9 * 1024 * 1024)));
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.code).toBe("SUBMISSION_TOO_LARGE");
  });

  it("still enforces the 8-page rule alongside the size cap", () => {
    // Well under 40 MB, but nine pages.
    const nine = Array.from({ length: 9 }, () => sized(100_000));
    const result = checkSubmission(null, nine);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.code).toBe("TOO_MANY_PAGES");
  });
});
