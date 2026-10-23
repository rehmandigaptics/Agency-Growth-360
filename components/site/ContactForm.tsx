"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const FORM_ID = "KgSe8E9cbvbuksn8C1eM";

/** Measured from the live GHL form: stacked ~665px, two-column ~471px. */
function formHeightForEmbedWidth(width: number) {
  if (width < 680) return 680;
  return 560;
}

function applyEmbedFrame(height: number) {
  const iframe = document.querySelector(
    ".ag-contact-embed iframe",
  ) as HTMLIFrameElement | null;
  if (!iframe) return;

  iframe.style.setProperty("height", `${height}px`, "important");
  iframe.style.setProperty("overflow", "hidden", "important");
  iframe.setAttribute("scrolling", "no");
  iframe.dataset.height = String(height);
}

export function ContactForm() {
  const iframeId = `inline-${FORM_ID}`;
  const [height, setHeight] = useState(560);

  useEffect(() => {
    const sync = () => {
      const embed = document.querySelector(".ag-contact-embed");
      const width = embed?.clientWidth || window.innerWidth;
      const next = formHeightForEmbedWidth(width);
      setHeight(next);
      applyEmbedFrame(next);
    };

    sync();
    window.addEventListener("resize", sync);

    const embed = document.querySelector(".ag-contact-embed");
    const ro =
      embed && "ResizeObserver" in window
        ? new ResizeObserver(() => sync())
        : null;
    if (embed && ro) ro.observe(embed);

    return () => {
      window.removeEventListener("resize", sync);
      ro?.disconnect();
    };
  }, []);

  return (
    <div
      className="ag-contact-embed reveal"
      style={{ ["--ag-form-h" as string]: `${height}px` }}
    >
      <iframe
        src={`https://links.360growthlab.com/widget/form/${FORM_ID}`}
        id={iframeId}
        scrolling="no"
        style={{
          width: "100%",
          height,
          border: "none",
          borderRadius: 12,
          display: "block",
          overflow: "hidden",
        }}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Send message Form Rehman Ali"
        data-height={String(height)}
        data-layout-iframe-id={iframeId}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Send message Form Rehman Ali"
      />
      <Script
        src="https://links.360growthlab.com/js/form_embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          const embed = document.querySelector(".ag-contact-embed");
          applyEmbedFrame(
            formHeightForEmbedWidth(embed?.clientWidth || window.innerWidth),
          );
        }}
      />
    </div>
  );
}
