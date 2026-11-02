"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand } from "@/components/site/Brand";
import { CONTACT_EMAIL } from "@/lib/site";
import { sitePath } from "@/lib/site-path";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5">
            <Brand className="mb-3" />
            <p style={{ maxWidth: 345 }}>
              Helping US agencies and freelancers build stronger systems and pursue
              sustainable growth.
            </p>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3">Explore</h6>
            <div className="d-grid gap-2">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/why-us">Why Us</Link>
              <Link href="/process">Our Process</Link>
              <Link href="/workflows">Workflows</Link>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3">For You</h6>
            <div className="d-grid gap-2">
              <Link href="/who-we-help">Agencies</Link>
              <Link href="/who-we-help">Freelancers</Link>
              <Link href="/#faq">FAQs</Link>
            </div>
          </div>
          <div className="col-lg-3">
            <h6 className="fw-bold mb-3">Let&apos;s Connect</h6>
            <p>Tell us what you&apos;re building.</p>
            <Link href="/contact">Contact us</Link>
            <div className="mt-2">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL} <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span>© {year} Agency Growth 360. All rights reserved.</span>
          <a
            className="footer-powered"
            href="https://360growthlab.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer-powered-label">Powered by</span>
            <Image
              src={sitePath("/images/partners/360growthlab.png")}
              alt="360 Growth Lab"
              width={140}
              height={37}
              className="footer-powered-logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
