// Issues signed URLs so a student's browser can upload solution pages
// straight to private Supabase Storage, without the files passing through
// a Vercel function.
//
// Nothing is charged here. Getting an upload URL, uploading a file, or
// uploading a file we later reject all cost zero grading credits — a credit
// is only ever spent by a confirmed submission that passed every check.

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/pro/auth-guard";
import { canViewQuestion } from "@/lib/pro/entitlements";
import { getPrisma } from "@/lib/prisma";
import { validateUploadClaims } from "@/lib/pro/uploads";
import { createSignedUploadUrl, studentWorkPath } from "@/lib/pro/storage";
import { STUDENT_WORK_BUCKET } from "@/lib/pro/config";

const requestSchema = z.object({
  frqQuestionId: z.string().min(1),
  files: z
    .array(
      z.object({
        fileName: z.string().min(1).max(255),
        mimeType: z.string().min(1).max(100),
        byteSize: z.number().int().positive(),
      }),
    )
    .min(1),
});

export async function POST(request: Request) {
  const auth = await requireUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid upload request." }, { status: 400 });
  }

  const { frqQuestionId, files } = parsed.data;
  const userId = auth.user.id;

  try {
    const prisma = getPrisma();

    // Only published questions accept work, and only from someone allowed
    // to see the question in the first place.
    const question = await prisma.frqQuestion.findFirst({
      where: { id: frqQuestionId, status: "PUBLISHED" },
      select: { id: true },
    });
    if (!question) {
      return NextResponse.json({ error: "Question not found." }, { status: 404 });
    }

    if (!(await canViewQuestion(userId, frqQuestionId, prisma))) {
      return NextResponse.json(
        { error: "This question is part of Astro Coach Pro." },
        { status: 403 },
      );
    }

    const validation = validateUploadClaims(files);
    if (!validation.ok) {
      return NextResponse.json(
        { error: validation.error.message, code: validation.error.code },
        { status: 400 },
      );
    }

    // Paths are built server-side from the authenticated user ID, so a
    // student can only ever be given a URL that writes into their own folder.
    const uploads = await Promise.all(
      files.map(async (file) => {
        const path = studentWorkPath(userId, frqQuestionId, file.fileName);
        const signed = await createSignedUploadUrl(STUDENT_WORK_BUCKET, path);
        return {
          fileName: file.fileName,
          storagePath: signed.path,
          signedUrl: signed.signedUrl,
          token: signed.token,
        };
      }),
    );

    return NextResponse.json({ bucket: STUDENT_WORK_BUCKET, uploads });
  } catch (error) {
    console.error("Failed to create upload URLs:", error);
    return NextResponse.json(
      { error: "Could not prepare your upload. Please try again." },
      { status: 500 },
    );
  }
}
