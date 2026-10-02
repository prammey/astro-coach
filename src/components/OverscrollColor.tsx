"use client";

import { useEffect } from "react";

// When you push past the top or bottom of a page (the trackpad "rubber
// band" bounce), the browser shows the <html> background color in the gap.
// The navbar (top) and footer (bottom) are different dark blues, so this
// component tells the CSS which way you are scrolling:
//   - scrolling up   → no attribute → navy, matching the navbar
//   - scrolling down → data-overscroll="bottom" → space blue, matching the footer
// Direction works even on short pages that cannot scroll at all, because
// the trackpad still reports which way you pushed. The colors themselves
// live in globals.css. Renders nothing.
export default function OverscrollColor() {
  useEffect(() => {
    const root = document.documentElement;
    let lastScrollY = window.scrollY;
    let lastTouchY = 0;

    // Point the bounce color at the edge you are heading toward.
    const setDirection = (isGoingDown: boolean) => {
      if (isGoingDown) {
        root.dataset.overscroll = "bottom";
      } else {
        delete root.dataset.overscroll;
      }
    };

    // Trackpad / mouse wheel: positive deltaY means scrolling down.
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY !== 0) setDirection(event.deltaY > 0);
    };

    // Keyboard, scrollbar and phone scrolling all move the page.
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY !== lastScrollY) setDirection(scrollY > lastScrollY);
      lastScrollY = scrollY;
    };

    // Phones on pages too short to scroll: a finger moving up scrolls down.
    const handleTouchStart = (event: TouchEvent) => {
      lastTouchY = event.touches[0].clientY;
    };
    const handleTouchMove = (event: TouchEvent) => {
      const touchY = event.touches[0].clientY;
      if (touchY !== lastTouchY) setDirection(touchY < lastTouchY);
      lastTouchY = touchY;
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return null;
}
