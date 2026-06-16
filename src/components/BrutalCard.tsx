// A reusable "neo-brutalist" card: thick black border, bold offset shadow, and a chosen background color.
export default function BrutalCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border-4 border-black bg-white p-6 shadow-[6px_6px_0_0_#000] ${className}`}
    >
      {children}
    </div>
  );
}
