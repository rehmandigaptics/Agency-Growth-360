import { FrameImage } from "@/components/site/FrameImage";
import { siteImages } from "@/lib/images";

const contrasts = [
  {
    before: "Scattered inboxes and ad-hoc follow-up",
    after: "A clear pipeline with consistent next steps",
  },
  {
    before: "Strategy decks that never become systems",
    after: "Practical setup your team can run next week",
  },
  {
    before: "Tools chosen in isolation",
    after: "Website, CRM, and automation planned together",
  },
  {
    before: "Growth that depends on founder memory",
    after: "Repeatable processes that scale beyond one person",
  },
];

const promises = [
  {
    icon: "bi-buildings",
    title: "Built for service businesses",
    body: "Agencies and independents — not generic SMB templates.",
  },
  {
    icon: "bi-gear-wide-connected",
    title: "Connected by design",
    body: "Marketing, sales, and delivery talking to each other.",
  },
  {
    icon: "bi-heart-pulse",
    title: "Sustainable pace",
    body: "Systems that reduce firefighting instead of adding noise.",
  },
];

import { sitePath } from "@/lib/site-path";

export function WhyUsUnique() {
  return (
    <div className="page-why-unique">
      <section className="section-pad pwu-visual">
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="pwu-visual-copy reveal">
                <span className="section-kicker">THE DIFFERENCE</span>
                <h2>
                  Growth that compounds — without the <em>chaos tax.</em>
                </h2>
                <p>
                  We strengthen the engine behind the vision so your team can scale with
                  more clarity and less firefighting.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pwu-visual-media reveal">
                <FrameImage
                  alt="Hand presenting an upward growth chart"
                  sizes="(max-width: 992px) 100vw, 48vw"
                  src={siteImages.partnershipHandshake}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pwu-contrast" aria-label="Before and after">
        <div aria-hidden="true" className="pwu-contrast-glow" />
        <div className="container">
          <div className="pwu-contrast-head reveal">
            <span className="section-kicker">INSTEAD OF THIS</span>
            <h2>
              A clearer trade: noise out, <em>momentum in.</em>
            </h2>
          </div>
          <div className="pwu-contrast-rows">
            {contrasts.map((row, i) => (
              <article className="pwu-contrast-row reveal" key={row.before}>
                <span aria-hidden="true" className="pwu-contrast-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pwu-before">
                  <span>Before</span>
                  <p>{row.before}</p>
                </div>
                <span aria-hidden="true" className="pwu-arrow">
                  <i className="bi bi-arrow-right" />
                </span>
                <div className="pwu-after">
                  <span>With AG360</span>
                  <p>{row.after}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pwu-promises" aria-label="What you get">
        <div className="container">
          <div className="pwu-promise-grid">
            {promises.map((item) => (
              <article className="pwu-promise reveal" key={item.title}>
                <span aria-hidden="true" className="pwu-promise-icon">
                  <i className={`bi ${item.icon}`} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="pwu-cta reveal">
            <a className="btn-lime" href={sitePath("/contact")}>
              Talk through your goals <i className="bi bi-arrow-up-right" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
