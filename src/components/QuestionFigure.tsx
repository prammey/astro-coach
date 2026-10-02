import Image from "next/image";

// Renders the figure(s) attached to a question or its solution.
//
// Diagrams come from the official exam PDFs and have arbitrary aspect
// ratios, so they are drawn at their natural size (never wider than the
// card). Going through next/image means students get a resized WebP/AVIF
// instead of the original PNG — several of these are over half a megabyte.
// They load straight away (not lazily): a figure is part of the question,
// and a zero-size lazy placeholder may never be noticed as "on screen".

export default function QuestionFigure({
  assets,
  alt,
}: {
  assets?: readonly string[];
  alt: string;
}) {
  if (!assets || assets.length === 0) return null;

  return (
    <div className="mt-4 space-y-4">
      {assets.map((src) => (
        <div
          key={src}
          className="overflow-hidden rounded-lg border-[3px] border-ink bg-white p-3"
        >
          {/* width/height 0 + h-auto/w-auto: size comes from the image
              itself; `sizes` caps the version downloaded at card width. */}
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 768px"
            loading="eager"
            className="mx-auto h-auto w-auto max-w-full"
          />
        </div>
      ))}
    </div>
  );
}
