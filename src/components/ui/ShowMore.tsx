import BrutalButton from "./BrutalButton";

// The "Show 24 more" button and "Showing 24 of 724" line under a long list.
// Shared by both question banks so paging looks and works the same.
//
//   shown    = how many items are on screen now
//   total    = how many match the current search and filters
//   pageSize = how many one click adds
export default function ShowMore({
  shown,
  total,
  pageSize,
  onShowMore,
}: {
  shown: number;
  total: number;
  pageSize: number;
  onShowMore: () => void;
}) {
  const hidden = total - shown;
  if (hidden <= 0) return null;

  return (
    <div className="mt-8 flex flex-col items-center gap-2">
      <BrutalButton variant="dark" onClick={onShowMore}>
        Show {Math.min(pageSize, hidden)} more
      </BrutalButton>
      <p className="text-sm text-navy/70">
        Showing {shown} of {total}
      </p>
    </div>
  );
}
