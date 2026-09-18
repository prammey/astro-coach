import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";

export default function NotFound() {
  return (
    <PageContainer>
      <div className="mt-12 text-center">
        <BrutalCard tone="yellow" className="mx-auto max-w-md">
          <h1 className="text-3xl font-extrabold text-navy">
            Question Not Found
          </h1>
          <p className="mt-4 text-navy">
            This question has been removed or no longer exists. It may have been deleted due to an error or content issue.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/training"
              className="inline-block rounded border-2 border-navy bg-electric px-4 py-2 font-bold text-white hover:bg-purple transition-colors"
            >
              Back to Training
            </Link>
            <Link
              href="/dashboard"
              className="inline-block rounded border-2 border-navy bg-space px-4 py-2 font-bold text-white hover:bg-purple transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </BrutalCard>
      </div>
    </PageContainer>
  );
}
