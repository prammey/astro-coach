import BrutalButton from "@/components/ui/BrutalButton";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

// Shown for any URL that doesn't match a page ("lost in space").
export default function NotFound() {
  return (
    <div className="starfield-dark flex min-h-[70vh] items-center justify-center bg-navy px-4 py-16">
      <div className="animate-rise-in w-full max-w-md rounded-xl border-[3px] border-ink bg-cream p-8 text-center shadow-brutal-lg">
        <p className="text-6xl font-extrabold text-purple">404</p>
        <h1 className="mt-2 text-2xl font-extrabold text-navy">Lost in space</h1>
        <p className="mt-3 text-navy/80">
          This page drifted out of orbit — the link may be old or mistyped.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <BrutalButton href="/" variant="accent" size="sm">
            Back to home
          </BrutalButton>
          <BrutalButton href="/training" variant="primary" size="sm">
            Practice questions
          </BrutalButton>
        </div>
      </div>
    </div>
  );
}
