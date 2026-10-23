import { FrameImage } from "@/components/site/FrameImage";
import { siteImages } from "@/lib/images";

const steps = [
  ["Capture every opportunity", "Send incoming leads into an organized pipeline."],
  ["Follow up without friction", "Trigger timely, consistent next steps."],
  ["See what needs attention", "Track progress and keep your team aligned."],
];

export function Workflows() {
  return (
    <section className="section-pad workflow-premium" id="workflows">
      <div className="container">
        <div className="row align-items-center g-4 g-xl-5 workflow-layout">
          <div className="col-lg-5 workflow-copy reveal">
            <span className="section-kicker">A CLEARER VIEW OF GROWTH</span>
            <h2 className="workflow-heading">
              Stop juggling tools. <em>Start connecting the dots.</em>
            </h2>
            <p className="workflow-lead">
              Imagine your business with an organized pipeline, faster response times,
              and a clear picture of every opportunity. This is the kind of workflow we
              help you build.
            </p>
            <div className="workflow-roadmap-wrap">
              <div className="workflow-roadmap" />
            </div>
            <div className="step-line">
              {steps.map(([title, body]) => (
                <div key={title}>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              ))}
            </div>
            <a className="btn-lime workflow-button" href="/contact">
              Discuss your workflow <i className="bi bi-arrow-up-right" />
            </a>
            <div className="workflow-footnote">Connected systems • Clear next steps</div>
          </div>
          <div className="col-lg-7 workflow-visual-col reveal">
            <div className="case-shell">
              <div className="case-browser">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
                <b>AG360 / WORKFLOW PREVIEW</b>
                <i className="bi bi-three-dots" />
              </div>
              <div className="case-body workflow-photo">
                <FrameImage
                  alt="Connected operations desk with dashboards across multiple screens"
                  sizes="(max-width: 992px) 100vw, 55vw"
                  src={siteImages.opsMonitors}
                />
              </div>
            </div>
            <p className="workflow-disclaimer" style={{ color: "#8c9ba1" }}>
              Conceptual product mockup — not actual customer results or live analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
