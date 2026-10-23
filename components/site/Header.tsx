"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "@/components/site/Brand";

const links = [
  ["/about", "About"],
  ["/services", "Services"],
  ["/why-us", "Why Us"],
  ["/process", "How It Works"],
  ["/who-we-help", "Who We Help"],
  ["/workflows", "Workflows"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`nav-shell ag-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
    >
      <nav aria-label="Main navigation" className="navbar navbar-expand-lg">
        <div className="container ag-header-bar">
          <Brand onClick={close} />
          <button
            aria-controls="mainNav"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="navbar-toggler ag-header-toggle"
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className="ag-header-toggle-lines">
              <span />
              <span />
              <span />
            </span>
          </button>
          <div
            className={`collapse navbar-collapse mobile-nav ag-header-panel${open ? " show" : ""}`}
            id="mainNav"
          >
            <p className="ag-header-panel-label">Navigate</p>
            <ul className="navbar-nav ag-header-links">
              {links.map(([href, label], index) => {
                const active = pathname === href;
                return (
                  <li className="nav-item" key={href}>
                    <Link
                      className={`nav-link${active ? " is-active" : ""}`}
                      href={href}
                      onClick={close}
                    >
                      <span aria-hidden="true" className="ag-header-link-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="ag-header-link-label">{label}</span>
                      <i
                        aria-hidden="true"
                        className="bi bi-arrow-up-right ag-header-link-arrow"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="ag-header-panel-foot">
              <Link className="btn-lime ag-header-cta" href="/contact" onClick={close}>
                Let&apos;s Talk
                <span aria-hidden="true" className="btn-icon ag-header-cta-icon">
                  <i className="bi bi-arrow-up-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
