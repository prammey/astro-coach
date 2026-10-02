// Carries the page title; the dashboard itself is a Client Component.
// Private to each student, so search engines are told not to index it.
export const metadata = {
  title: "Dashboard",
  robots: { index: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
