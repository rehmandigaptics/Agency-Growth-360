import { FrameImage } from "@/components/site/FrameImage";
import { siteImages } from "@/lib/images";

const flow = [
  { icon: "bi-inbox", title: "Capture", body: "Leads land in one organized place." },
  { icon: "bi-send", title: "Respond", body: "Timely follow-ups trigger automatically." },
  { icon: "bi-kanban", title: "Advance", body: "Opportunities move through a clear pipeline." },
  { icon: "bi-graph-up", title: "See", body: "Visibility into what needs attention." },
];

import { sitePath } from "@/lib/site-path";

export function WorkflowsUnique() {
  return (
    <div className="page-workflows-unique">
      <section className="section-pad pwf-hero-band" aria-label="Connected workflows">
        <div aria-hidden="true" className="pwf-band-glow" />
        <div aria-hidden="true" className="pwf-band-grid" />
        <div className="container">
          <div className="row g-5 g-xl-5 align-items-center">
            <div className="col-lg-7">
              <div className="pwf-media reveal">
                <div className="pwf-media-frame">
                  <FrameImage
                    alt="Connected operations dashboards"
                    sizes="(max-width: 992px) 100vw, 55vw"
                    src={siteImages.workflowChecklist}
                  />
                  <span aria-hidden="true" className="pwf-media-vignette" />
                </div>
                <span aria-hidden="true" className="pwf-media-orbit" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pwf-copy reveal">
                <span className="section-kicker">CONNECTED WORKFLOWS</span>
                <h2>
                  From first inquiry to follow-through — <em>without the juggling.</em>
                </h2>
                <p>
                  We help you connect capture, nurture, pipeline, and visibility so growth
                  work keeps moving even when the calendar is full.
                </p>
                <a className="btn-lime" href={sitePath("/contact")}>
                  Discuss your workflow <i className="bi bi-arrow-up-right" />
                </a>
                <ul className="pwf-rail" aria-label="Workflow steps">
                  {flow.map((step, i) => (
                    <li key={step.title}>
                      {i > 0 ? (
                        <i aria-hidden="true" className="bi bi-chevron-right" />
                      ) : null}
                      <span>{step.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pwf-stack">
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-lg-6">
              <div className="pwf-stack-copy reveal">
                <span className="section-kicker">CONNECTED STACK</span>
                <h2>
                  Your tools, one rhythm — <em>no more juggling.</em>
                </h2>
                <p>
                  We help you connect the platforms you already use so capture, follow-up,
                  and visibility stay in sync.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pwf-stack-media reveal">
                <FrameImage
                  alt="Connected platforms around a central automation hub"
                  sizes="(max-width: 992px) 100vw, 48vw"
                  src={siteImages.integrationsHub}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pwf-flow" aria-label="The flow">
        <div aria-hidden="true" className="pwf-flow-glow" />
        <div className="container">
          <div className="pwf-flow-intro reveal">
            <span className="section-kicker">THE FLOW</span>
            <h2>
              A simple rhythm your team can <em>actually keep.</em>
            </h2>
          </div>
          <div className="pwf-flow-grid">
            {flow.map((step, i) => (
              <article className="pwf-flow-step reveal" key={step.title}>
                <span className="pwf-flow-num">0{i + 1}</span>
                <span aria-hidden="true" className="pwf-flow-icon">
                  <i className={`bi ${step.icon}`} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
