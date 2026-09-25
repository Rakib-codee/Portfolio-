"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const HEADER_OFFSET = -88;

/**
 * Lenis smooth scrolling plus in-page anchor handling.
 * Disabled entirely when the user prefers reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("/#") && window.location.pathname !== "/") return;
      const hash = href.slice(href.indexOf("#"));
      if (hash.length < 2) return;
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: HEADER_OFFSET });
      window.history.pushState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    // Honour a hash that is already in the URL on first load.
    if (window.location.hash.length > 1) {
      const target = document.querySelector<HTMLElement>(window.location.hash);
      if (target) lenis.scrollTo(target, { offset: HEADER_OFFSET, immediate: true });
    }

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
