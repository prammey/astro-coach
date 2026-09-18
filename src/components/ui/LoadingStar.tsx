// A small "loading" indicator: a star that breathes next to a label.
// Used wherever the page waits for data, so every loading state on the site
// looks the same.
//
//   tone = "dark" on a cream page (navy text), "light" on a navy page.
export default function LoadingStar({
  label = "Loading…",
  tone = "dark",
  className = "",
}: {
  label?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const textColor = tone === "light" ? "text-white/85" : "text-navy/80";

  return (
    <div role="status" className={`flex items-center gap-3 py-6 ${textColor} ${className}`}>
      <span aria-hidden className="inline-block animate-star-pulse text-2xl leading-none text-yellow">
        ★
      </span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
