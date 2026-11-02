import { FrameImage } from "@/components/site/FrameImage";
import { sitePath } from "@/lib/site-path";
import type { PageContent } from "@/lib/pages";

type PageHeroProps = {
  page: PageContent;
  /** Visual layout variant for page uniqueness */
  variant?: "split" | "centered" | "editorial";
};

export function PageHero({ page, variant = "split" }: PageHeroProps) {
  if (variant === "centered") {
    return (
      <section className="ag-page-hero ag-page-hero--centered">
        <div aria-hidden="true" className="ag-page-hero-glow" />
        <div aria-hidden="true" className="ag-page-hero-grid" />
        <div className="container">
          <div className="ag-page-hero-centered-inner">
            <span className="section-kicker hero-in">{page.kicker}</span>
            <h1 className="ag-page-hero-title hero-in">
              {page.headline} <em>{page.accent}</em>
            </h1>
            <p className="ag-page-hero-lead hero-in">{page.lead}</p>
            <div className="ag-page-hero-actions hero-in">
              <a className="btn-lime" href={sitePath(page.ctaHref)}>
                {page.ctaLabel} <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "editorial") {
    return (
      <section className="ag-page-hero ag-page-hero--editorial">
        <div className="container">
          <div className="ag-page-hero-editorial reveal">
            <span className="section-kicker">{page.kicker}</span>
            <h1 className="ag-page-hero-title">
              {page.headline} <em>{page.accent}</em>
            </h1>
            <p className="ag-page-hero-lead">{page.lead}</p>
            <div className="ag-page-hero-actions">
              <a className="btn-lime" href={sitePath(page.ctaHref)}>
                {page.ctaLabel} <i className="bi bi-arrow-up-right" />
              </a>
              {page.slug !== "contact" ? (
                <a className="btn-outline-lightish" href={sitePath("/contact")}>
                  Contact <i className="bi bi-arrow-up-right" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="ag-page-hero-editorial-media">
          <FrameImage
            alt={page.imageAlt}
            priority
            sizes="100vw"
            src={page.image}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="ag-page-hero">
      <div aria-hidden="true" className="ag-page-hero-glow" />
      <div aria-hidden="true" className="ag-page-hero-grid" />
      <div className="container">
        <div className="row align-items-center g-4 g-xl-5 ag-page-hero-layout">
          <div className="col-lg-6">
            <div className="ag-page-hero-copy">
              <span className="section-kicker hero-in">{page.kicker}</span>
              <h1 className="ag-page-hero-title hero-in">
                {page.headline} <em>{page.accent}</em>
              </h1>
              <p className="ag-page-hero-lead hero-in">{page.lead}</p>
              <div className="ag-page-hero-actions hero-in">
                <a className="btn-lime" href={sitePath(page.ctaHref)}>
                  {page.ctaLabel} <i className="bi bi-arrow-up-right" />
                </a>
                {page.slug !== "contact" ? (
                  <a className="btn-outline-lightish" href={sitePath("/contact")}>
                    Contact <i className="bi bi-arrow-up-right" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ag-page-hero-media hero-in">
              <div className="ag-page-hero-frame">
                <FrameImage
                  alt={page.imageAlt}
                  priority
                  sizes="(max-width: 992px) 100vw, 48vw"
                  src={page.image}
                />
              </div>
              <span aria-hidden="true" className="ag-page-hero-orbit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
