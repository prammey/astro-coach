// Carries the page title; the signup page itself is a Client Component,
// which cannot export metadata.
export const metadata = {
  // The page's official address, so search engines never count a
  // second copy (e.g. on the vercel.app address) as a duplicate.
  alternates: { canonical: "/signup" },
  title: "Sign up free",
  description:
    "Create a free Astro Coach account to save your progress, earn badges and review the questions you missed.",
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
