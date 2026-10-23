import { FrameImage } from "@/components/site/FrameImage";
import { siteImages } from "@/lib/images";

const benefits = [
  "Solutions tailored to agencies and independent professionals",
  "Practical execution, not just a strategy presentation",
  "Connected marketing, sales, and operations workflows",
  "Designed to support sustainable, long-term growth",
];

export function WhyUs() {
  return (
    <section className="section-pad why-premium" id="why-us">
      <div className="container">
        <div className="row align-items-center g-4 g-xl-5 why-layout">
          <div className="col-lg-5">
            <div className="photo-frame why-photo reveal">
              <div aria-hidden="true" className="why-photo-top">
                <span className="why-status-dot" />
                <span>Built around your business</span>
              </div>
              <FrameImage
                alt="Consultant and client reviewing a growth plan together"
                className="feature-photo"
                sizes="(max-width: 992px) 100vw, 42vw"
                src={siteImages.consultation}
              />
              <div className="photo-stat why-goal">
                <span className="eyebrow">THE GOAL</span>
                <div className="why-goal-title">
                  A business that runs smarter — without constant firefighting.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 why-copy">
            <span className="eyebrow">WHY AGENCY GROWTH 360</span>
            <h2 className="why-heading">
              You focus on the vision.{" "}
              <span className="lime">We strengthen the engine.</span>
            </h2>
            <p className="why-lead">
              Growing a service business is hard enough. Your systems shouldn&apos;t make
              it harder. We bring the pieces together so your agency can run with greater
              clarity, consistency, and confidence.
            </p>
            <div className="why-check-grid">
              {benefits.map((benefit) => (
                <div className="list-check why-benefit" key={benefit}>
                  <i className="bi bi-check-circle-fill" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <a className="btn-lime why-button" href="/contact">
              Discuss Your Goals <i className="bi bi-arrow-up-right" />
            </a>
            <span className="why-cta-note">Strategy · Systems · Scalable growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
