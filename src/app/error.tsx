"use client";

import { useEffect } from "react";
import BrutalButton from "@/components/ui/BrutalButton";

// Shown when a page crashes while rendering, instead of a blank screen.
// The Navbar and Footer (in the root layout) stay visible around it.
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Log it so it shows up in the browser console and Vercel logs.
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="starfield-dark flex min-h-[70vh] items-center justify-center bg-navy px-4 py-16">
      <div className="w-full max-w-md rounded-xl border-[3px] border-ink bg-cream p-8 text-center shadow-brutal-lg">
        <h1 className="text-2xl font-extrabold text-navy">Houston, we have a problem</h1>
        <p className="mt-3 text-navy/80">
          Something went wrong loading this page. Try again — if it keeps happening, it&apos;s
          on our side and we&apos;ll fix it.
        </p>
        {error.digest && (
          <p className="mt-2 text-xs text-navy/50">Error code: {error.digest}</p>
        )}
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <BrutalButton onClick={reset} variant="accent" size="sm">
            Try again
          </BrutalButton>
          <BrutalButton href="/" variant="ghost" size="sm">
            Back to home
          </BrutalButton>
        </div>
      </div>
    </div>
  );
}
