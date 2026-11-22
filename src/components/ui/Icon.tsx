// A small set of line icons drawn as inline SVG, so they cost no image
// request and take the text color of whatever they sit in.
//
// <Icon name="compass" />           just the icon
// <IconTile name="compass" tone="yellow" />   the icon on a flat colored
//                                             square, used in card corners

export type IconName =
  | "compass"
  | "search"
  | "check"
  | "telescope"
  | "chart"
  | "pencil"
  | "book"
  | "shield"
  | "mail"
  | "trophy"
  | "document";

// The drawing for each icon, on a 24 × 24 grid.
const PATHS: Record<IconName, React.ReactNode> = {
  // A compass: picking your direction.
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </>
  ),
  // A magnifying glass: searching the bank.
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.2-4.2" />
    </>
  ),
  // A tick in a box: feedback on an answer.
  check: (
    <>
      <path d="M4 4h16v16H4z" />
      <path d="M8 12.5l2.8 2.8L16.5 9" />
    </>
  ),
  // A telescope on a tripod: real astronomy questions.
  telescope: (
    <>
      <path d="M3.5 11.5l13-6 2 4.3-13 6z" />
      <path d="M16.5 5.5l1-.5 2 4.3-1 .5" />
      <path d="M10.5 13l-3 8M11.5 13l3 8" />
    </>
  ),
  // A rising line chart: progress.
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M7.5 15l3.5-4 3 2.5 5-6.5" />
    </>
  ),
  // A pencil: written, graded answers.
  pencil: (
    <>
      <path d="M15 4.5l4.5 4.5L9 19.5H4.5V15z" />
      <path d="M12.5 7l4.5 4.5" />
    </>
  ),
  // An open book: where the questions come from.
  book: (
    <>
      <path d="M12 6.5C10 5 7 4.5 3.5 5v13.5c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5z" />
      <path d="M12 6.5V20" />
    </>
  ),
  // A shield: independent, no affiliation.
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.5-3.2 8-7.5 9.5-4.3-1.5-7.5-5-7.5-9.5V6z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </>
  ),
  // An envelope: contact.
  mail: (
    <>
      <path d="M3.5 6h17v12h-17z" />
      <path d="M3.5 6.5l8.5 7 8.5-7" />
    </>
  ),
  // A page with a folded corner: the constants sheet PDF.
  document: (
    <>
      <path d="M6 3h8.5L19 7.5V21H6z" />
      <path d="M14 3v5h5M9 13h7M9 17h5" />
    </>
  ),
  // A trophy: competitions and badges.
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 01-10 0z" />
      <path d="M7 6H4v1.5A3.5 3.5 0 007.5 11M17 6h3v1.5a3.5 3.5 0 01-3.5 3.5" />
      <path d="M12 14v3.5M8.5 20.5h7l-1-3h-5z" />
    </>
  ),
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {PATHS[name]}
    </svg>
  );
}

// Background and icon color for each tile tone. Same brand colors as the
// buttons, so a card's icon and its button can match.
type TileTone = "yellow" | "electric" | "purple" | "navy" | "white";

const TILE_CLASSES: Record<TileTone, string> = {
  yellow: "bg-yellow text-navy",
  electric: "bg-electric text-white",
  purple: "bg-purple text-white",
  navy: "bg-navy text-yellow",
  white: "bg-white text-navy",
};

// The icon on a flat colored square with a black border. No shadow: the
// offset shadow is kept for panels and buttons only.
export function IconTile({
  name,
  tone = "yellow",
  className = "",
}: {
  name: IconName;
  tone?: TileTone;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-ink ${TILE_CLASSES[tone]} ${className}`}
    >
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}
