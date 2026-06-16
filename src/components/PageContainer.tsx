// Wraps page content so every page has the same max width and side padding.
export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      {children}
    </div>
  );
}
