"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const HEADER_OFFSET = 92;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const id = decodeURIComponent(url.hash.slice(1));
      const element = document.getElementById(id);
      if (!element) return;

      event.preventDefault();
      window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
      lenis.scrollTo(element, { offset: -HEADER_OFFSET, duration: 1.15 });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    const pathChanged = previousPath.current !== pathname;
    previousPath.current = pathname;

    const hash = typeof window !== "undefined" ? window.location.hash : "";

    const run = () => {
      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        const element = document.getElementById(id);
        if (element) {
          if (lenis && !prefersReducedMotion()) {
            lenis.scrollTo(element, { offset: -HEADER_OFFSET, duration: 1.15 });
          } else {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          return;
        }
      }

      if (pathChanged) {
        if (lenis && !prefersReducedMotion()) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }

      lenis?.resize();
      ScrollTrigger.refresh();
    };

    const early = window.setTimeout(run, 50);
    const late = window.setTimeout(run, 300);
    return () => {
      window.clearTimeout(early);
      window.clearTimeout(late);
    };
  }, [pathname]);

  return null;
}
