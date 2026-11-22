// The search box on the Training page. The parent component owns the text
// (state) and passes it down with a function to call when it changes.
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
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/60"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.75}
        strokeLinecap="round"
      >
        <circle cx="11" cy="11" r="6.5" />
        <path d="M20 20l-4.2-4.2" />
      </svg>

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder='Search, e.g. "parallax"'
        className="w-full border-[3px] border-ink bg-white py-3 pl-12 pr-4 text-lg font-semibold text-navy placeholder:font-medium placeholder:text-navy/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
      />
    </label>
  );
}
