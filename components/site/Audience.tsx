import { FrameImage } from "@/components/site/FrameImage";
import { siteImages } from "@/lib/images";

const audiences = [
  {
    eyebrow: "01 / FOR GROWING TEAMS",
    title: "Digital Agencies",
    body: "Build repeatable systems, manage leads, streamline delivery, and create room to scale.",
    alt: "Digital agency professionals collaborating around a table",
    src: siteImages.strategyMeeting,
  },
  {
    eyebrow: "02 / FOR INDEPENDENT EXPERTS",
    title: "Freelancers & Consultants",
    body: "Present professionally, automate admin work, and focus more of your time on high-value work.",
    alt: "Independent professional working at a premium desk",
    src: siteImages.freelancerDesk,
  },
];

export function Audience() {
  return (
    <section className="section-pad soft ag-audience-v13" id="who-we-help">
      <div className="container">
        <div className="section-intro refined-heading audience-intro reveal">
          <div className="intro-copy">
            <span className="intro-kicker">
              <span className="intro-dot" /> BUILT FOR YOUR BUSINESS
            </span>
            <h2 className="display-heading">
              Small teams. <span className="lime">Big ambitions.</span>
            </h2>
            <p className="intro-description">
              Whether you&apos;re growing a team or running solo, build the foundation for
              your next chapter.
            </p>
          </div>
          <span aria-hidden="true" className="intro-decoration">
            <i className="bi bi-arrow-up-right" />
          </span>
        </div>
        <div className="row g-4">
          {audiences.map((item) => (
            <div className="col-md-6 reveal" key={item.title}>
              <div className="audience-card ag-audience-card">
                <FrameImage alt={item.alt} src={item.src} />
                <div className="audience-content">
                  <span className="ag-audience-eyebrow">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <span aria-hidden="true" className="ag-audience-arrow">
                  <i className="bi bi-arrow-up-right" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
