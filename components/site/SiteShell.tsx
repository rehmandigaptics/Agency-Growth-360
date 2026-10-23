"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SmoothScroll } from "@/components/site/SmoothScroll";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SiteShell({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".hero-in", {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.13,
        ease: "power3.out",
        delay: 0.15,
      });
      gsap.from(".dash-card", {
        opacity: 0,
        y: 45,
        rotate: 2,
        duration: 1.3,
        delay: 0.35,
        ease: "power3.out",
      });
      gsap.from(".float-badge", {
        opacity: 0,
        scale: 0.8,
        duration: 0.7,
        stagger: 0.2,
        delay: 1,
        ease: "back.out(1.5)",
      });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: { trigger: element, start: "top 92%", once: true },
          opacity: 0,
          y: 45,
          duration: 0.8,
          ease: "power2.out",
        });
      });
      gsap.utils.toArray<HTMLElement>(".feature-img-wrap, .case-shell, .cta-panel").forEach(
        (element) => {
          gsap.fromTo(
            element,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            },
          );
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef}>
      <SmoothScroll />
      {children}
    </div>
  );
}
