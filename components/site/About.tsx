import { FrameImage } from "@/components/site/FrameImage";
import { siteImages } from "@/lib/images";

const points = [
  {
    num: "01",
    title: "A clear point of view",
    body: "Positioning and offers shaped around how your agency actually wins work.",
  },
  {
    num: "02",
    title: "One connected plan",
    body: "Website, CRM, and marketing decisions made together, not in separate silos.",
  },
  {
    num: "03",
    title: "Work you can run",
    body: "Systems your team can keep using after the engagement, without constant firefighting.",
  },
];

export function About() {
  return (
    <section className="section-pad ag-about" id="about">
      <div className="container">
        <div className="row align-items-center g-4 g-xl-5 ag-about-layout">
          <div className="col-lg-5">
            <div className="ag-about-photo reveal">
              <FrameImage
                alt="Agency colleagues celebrating a win together in the office"
                priority
                sizes="(max-width: 992px) 100vw, 42vw"
                src={siteImages.teamCollab}
              />
              <div className="ag-about-float">
                <span className="eyebrow">WHO WE ARE</span>
                <strong>A growth partner for US agencies and independents.</strong>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ag-about-copy reveal">
            <span className="eyebrow">ABOUT US</span>
            <h2 className="ag-about-heading">
              Built for teams who want growth to feel{" "}
              <span className="lime">intentional.</span>
            </h2>
            <p className="ag-about-lead">
              Agency Growth 360 works with digital agencies, freelancers, and
              consultants who have outgrown scattered inboxes, one-off websites, and
              manual follow-up. We bring the offer, the experience, and the operations
              into one practical plan.
            </p>
            <div className="ag-about-points">
              {points.map((point) => (
                <div className="ag-about-point" key={point.num}>
                  <span>{point.num}</span>
                  <div>
                    <strong>{point.title}</strong>
                    <p>{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="btn-lime ag-about-button" href="/services">
              Explore services <i className="bi bi-arrow-down-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
