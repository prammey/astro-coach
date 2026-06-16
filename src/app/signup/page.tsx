import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";
import { signUpWithPassword, signInWithGoogle } from "@/lib/actions/auth";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)]">Sign Up</h1>

      <BrutalCard className="mt-6 max-w-md bg-[var(--color-cream)]">
        {error && (
          <p className="mb-4 rounded-lg border-2 border-black bg-red-200 p-3 text-sm font-bold text-red-900">
            {error}
          </p>
        )}

        <form action={signInWithGoogle}>
          <button
            type="submit"
            className="w-full rounded-lg border-4 border-black bg-white px-4 py-2 font-bold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Continue with Google
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs font-bold text-black/40">
          <span className="h-px flex-1 bg-black/20" />
          OR
          <span className="h-px flex-1 bg-black/20" />
        </div>

        <form action={signUpWithPassword} className="space-y-4">
          <label className="block font-bold text-[var(--color-navy)]">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border-4 border-black bg-white p-2 font-normal"
            />
          </label>
          <label className="block font-bold text-[var(--color-navy)]">
            Password
            <input
              type="password"
              name="password"
              required
              minLength={6}
              className="mt-1 w-full rounded-lg border-4 border-black bg-white p-2 font-normal"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg border-4 border-black bg-[var(--color-yellow)] px-4 py-2 font-bold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-[var(--color-navy)]">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-[var(--color-purple)] hover:underline">
            Log in
          </Link>
        </p>
      </BrutalCard>
    </PageContainer>
  );
}
