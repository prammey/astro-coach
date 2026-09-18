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
    <label className="relative block">
      <span className="sr-only">Search questions</span>

      {/* Magnifying glass, sitting inside the left edge of the box. */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/50"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search questions..."
        className="w-full rounded-lg border-[3px] border-ink bg-white py-3 pl-12 pr-4 font-medium text-navy shadow-brutal-sm transition-[box-shadow] duration-200 placeholder:text-navy/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
      />
    </label>
  );
}
