import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The picture shown when someone shares an Astro Coach link (Discord,
// iMessage, X, LinkedIn…). Drawn in code at build time, in the site's
// neo-brutalist style, so there is no image file to keep in sync.
// Next.js serves it at /opengraph-image and adds the <meta> tags itself.
//
// The font is KaTeX's sans-serif (already installed for maths), read at
// build time, because the image renderer's built-in font has no bold.

export const alt = "Astro Coach — astronomy olympiad training";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The site's colours (match --color-* in globals.css).
const NAVY = "#0b0f2e";
const PURPLE = "#7c3aed";
const ELECTRIC = "#3b82f6";
const YELLOW = "#fde047";
const CREAM = "#fdf6e3";

/// The points of a five-pointed star inside a 100×100 box.
function starPoints(): string {
  const points: string[] = [];
  for (let index = 0; index < 10; index += 1) {
    const radius = index % 2 === 0 ? 48 : 20;
    const angle = (Math.PI * index) / 5 - Math.PI / 2;
    points.push(`${(50 + radius * Math.cos(angle)).toFixed(2)},${(50 + radius * Math.sin(angle)).toFixed(2)}`);
  }
  return points.join(" ");
}

/// A small square dot of "starlight" for the background.
function Dot({ x, y, size: dotSize }: { x: number; y: number; size: number }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: dotSize,
        height: dotSize,
        borderRadius: dotSize,
        background: "rgba(255,255,255,0.55)",
      }}
    />
  );
}

// Fixed positions, so every build draws the same sky.
const DOTS = [
  [80, 70, 4], [260, 140, 3], [520, 60, 4], [700, 120, 3], [940, 80, 5],
  [1110, 170, 3], [1040, 520, 4], [860, 560, 3], [140, 540, 4], [60, 330, 3],
  [1150, 380, 3], [620, 580, 3],
];

/// Loads one of KaTeX's bundled sans-serif fonts.
function loadFont(fileName: string): Promise<Buffer> {
  return readFile(join(process.cwd(), "node_modules/katex/dist/fonts", fileName));
}

export default async function OpengraphImage() {
  const [regular, bold] = await Promise.all([
    loadFont("KaTeX_SansSerif-Regular.ttf"),
    loadFont("KaTeX_SansSerif-Bold.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: NAVY,
          padding: 64,
          fontFamily: "Sans",
        }}
      >
        {DOTS.map(([x, y, dotSize]) => (
          <Dot key={`${x}-${y}`} x={x} y={y} size={dotSize} />
        ))}

        {/* The main card, with a hard black offset shadow. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            background: CREAM,
            border: "6px solid #000",
            borderRadius: 20,
            boxShadow: "14px 14px 0 #000",
            padding: "44px 56px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <svg width="76" height="76" viewBox="0 0 100 100">
              <polygon points={starPoints()} fill={YELLOW} stroke="#000" strokeWidth="5" />
            </svg>
            <div style={{ fontSize: 44, fontWeight: 700, color: NAVY }}>Astro Coach</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 66, fontWeight: 700, color: NAVY, lineHeight: 1.08 }}>
              Train for your astronomy olympiad.
            </div>
            <div style={{ fontSize: 30, color: "#333a66" }}>
              Real past questions · practice by topic · AI feedback
            </div>
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            {[
              ["USAAAO", ELECTRIC],
              ["IAAC", PURPLE],
              ["BAAO", NAVY],
            ].map(([label, colour]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  padding: "10px 22px",
                  background: colour,
                  color: "#fff",
                  fontSize: 26,
                  fontWeight: 700,
                  border: "4px solid #000",
                  borderRadius: 12,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sans", data: regular, weight: 400, style: "normal" },
        { name: "Sans", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
