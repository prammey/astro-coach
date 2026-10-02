// Carries the page title; the page itself is a Client Component.
export const metadata = {
  title: "Choose a new password",
  robots: { index: false },
};

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
  return children;
}
