// Carries the page title for everything under /profile (Client Components).
export const metadata = {
  title: "Profile settings",
  robots: { index: false },
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return children;
}
