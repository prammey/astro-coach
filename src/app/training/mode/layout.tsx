// Carries the page title; the training run itself is a Client Component.
export const metadata = {
  title: "Training run",
  robots: { index: false },
};

export default function TrainingModeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
