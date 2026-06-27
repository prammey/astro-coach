import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";

export default function NotFound() {
  return (
    <PageContainer>
      <div className="mt-12 text-center">
        <BrutalCard className="mx-auto max-w-md bg-[var(--color-yellow)]">
          <h1 className="text-3xl font-extrabold text-[var(--color-navy)]">
            Question Not Found
          </h1>
          <p className="mt-4 text-[var(--color-navy)]">
            This question has been removed or no longer exists. It may have been deleted due to an error or content issue.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/training"
              className="inline-block rounded border-2 border-[var(--color-navy)] bg-[var(--color-electric-blue)] px-4 py-2 font-bold text-white hover:bg-[var(--color-purple)] transition-colors"
            >
              Back to Training
            </Link>
            <Link
              href="/dashboard"
              className="inline-block rounded border-2 border-[var(--color-navy)] bg-[var(--color-space-blue)] px-4 py-2 font-bold text-white hover:bg-[var(--color-purple)] transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </BrutalCard>
      </div>
    </PageContainer>
  );
}
