// Carries the page title; the login page itself is a Client Component,
// which cannot export metadata.
export const metadata = {
  // The page's official address, so search engines never count a
  // second copy (e.g. on the vercel.app address) as a duplicate.
  alternates: { canonical: "/login" },
  title: "Log in",
  description: "Log in to Astro Coach to save your progress and see your dashboard.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
