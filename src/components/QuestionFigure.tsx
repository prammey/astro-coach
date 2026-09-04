// Renders the figure(s) attached to a question or its solution.
// Diagrams come from the official exam PDFs and have arbitrary aspect
// ratios, so they use a plain <img> that scales to the container width
// rather than next/image with fixed dimensions.

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
          className="overflow-hidden rounded-lg border-4 border-black bg-white p-3"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="mx-auto h-auto max-w-full" />
        </div>
      ))}
    </div>
  );
}
