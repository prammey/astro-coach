// A simple search box. The parent component owns the actual text value (state)
// and passes it down here along with a function to call when it changes.
export default function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search questions..."
      className="w-full rounded-lg border-4 border-black bg-white px-4 py-2 font-medium text-[var(--color-navy)] placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-blue)]"
    />
  );
}
