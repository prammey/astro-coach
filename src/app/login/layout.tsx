// Carries the page title; the login page itself is a Client Component,
// which cannot export metadata.
export const metadata = {
  title: "Log in",
  description: "Log in to Astro Coach to save your progress and see your dashboard.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
