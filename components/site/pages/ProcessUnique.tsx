import { FrameImage } from "@/components/site/FrameImage";
import { siteImages } from "@/lib/images";

const stages = [
  {
    num: "01",
    label: "DISCOVER",
    title: "Understand the gaps",
    body: "We review workflows, acquisition, and the bottlenecks that actually limit growth.",
    detail: "Audit · Priorities · Clear scope",
  },
  {
    num: "02",
    label: "BUILD",
    title: "Create the system",
    body: "Strategy, tools, and automations shaped around how your business already operates.",
    detail: "Plan · Setup · Hand-off ready",
  },
  {
    num: "03",
    label: "OPTIMIZE",
    title: "Improve and scale",
    body: "Refine what works, cut what doesn\u2019t, and keep momentum with clearer signal.",
    detail: "Iterate · Measure · Grow",
  },
];

import { sitePath } from "@/lib/site-path";

export function ProcessUnique() {
  return (
    <div className="page-process-unique">
      <section className="section-pad ppu-visual">
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-lg-6">
              <div className="ppu-visual-media reveal">
                <FrameImage
                  alt="A clear path forward through a mountain landscape"
                  sizes="(max-width: 992px) 100vw, 48vw"
                  src={siteImages.ideaLightbulb}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ppu-visual-copy reveal">
                <span className="section-kicker">THE PATH</span>
                <h2>
                  A clear route from where you are to <em>where you&apos;re going.</em>
                </h2>
                <p>
                  Every engagement follows the same honest sequence — so progress stays
                  visible and decisions stay grounded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad ppu-timeline" aria-label="Our approach">
        <div aria-hidden="true" className="ppu-glow" />
        <div className="container">
          <div className="ppu-intro reveal">
            <span className="section-kicker">OUR APPROACH</span>
            <h2>
              Three stages. One path to <em>smarter growth.</em>
            </h2>
            <p>
              No mystery process. You always know where you are, what we&apos;re building,
              and what comes next.
            </p>
          </div>

          <div className="ppu-track">
            {stages.map((stage) => (
              <article className="ppu-stage reveal" key={stage.num}>
                <div className="ppu-stage-marker">
                  <span className="ppu-num">{stage.num}</span>
                  <span aria-hidden="true" className="ppu-line" />
                </div>
                <div className="ppu-stage-card">
                  <span className="ppu-label">{stage.label}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                  <ul className="ppu-tags">
                    {stage.detail.split(" · ").map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="ppu-foot reveal">
            <a className="btn-lime" href={sitePath("/contact")}>
              Walk through the process <i className="bi bi-arrow-up-right" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
