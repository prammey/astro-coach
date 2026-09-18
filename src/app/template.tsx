// Wraps every page's content in a short fade-in.
//
// A `template.tsx` re-mounts on each navigation (unlike `layout.tsx`, which
// stays put), so the animation plays again every time you move to a new
// page. The Navbar and Footer live in the layout, so they stay still while
// the page content underneath them fades in.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
