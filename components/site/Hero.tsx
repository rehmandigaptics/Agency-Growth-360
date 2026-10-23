import Image from "next/image";
import { siteImages } from "@/lib/images";

const portraits = [
  { src: siteImages.consultation, position: "42% 18%" },
  { src: siteImages.freelancerDesk, position: "48% 12%" },
  { src: siteImages.teamCollab, position: "72% 28%" },
];

const bars = ["26%", "41%", "36%", "54%", "49%", "67%", "59%", "77%", "70%", "91%"];

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="eyebrow hero-in">YOUR PARTNER IN DIGITAL GROWTH</div>
            <h1 className="hero-in">
              The smarter way to <span className="lime">scale your agency.</span>
            </h1>
            <p className="hero-lead hero-in">
              We help ambitious US digital agencies and independent freelancers turn
              scattered operations into streamlined systems — and growth goals into a
              practical plan.
            </p>
            <div className="d-flex gap-3 flex-wrap mt-4 hero-in">
              <a className="btn-lime" href="/contact">
                Book a Free Consultation <i className="bi bi-arrow-up-right" />
              </a>
              <a className="btn-outline-lightish" href="/services">
                Explore Services <i className="bi bi-arrow-down-right" />
              </a>
            </div>
            <div className="hero-proof hero-in">
              <div className="avatar-stack">
                {portraits.map((portrait) => (
                  <Image
                    key={portrait.src}
                    alt="Professional portrait"
                    height={70}
                    src={portrait.src}
                    style={{ objectFit: "cover", objectPosition: portrait.position }}
                    width={70}
                  />
                ))}
              </div>
              <div>
                Built for ambitious teams and solo founders
                <br />
                <span style={{ color: "#829492" }}>
                  Strategy • Systems • Sustainable Growth
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              aria-label="Illustrative business growth dashboard"
              className="hero-visual premium-dashboard"
            >
              <div className="orbit" />
              <div className="orbit" />
              <div className="float-badge top">
                <i className="bi bi-stars me-2" /> Streamlined workflows
              </div>
              <div className="dash-card">
                <div className="dash-head">
                  <div>
                    <div className="dash-label">
                      AGENCY PERFORMANCE{" "}
                      <span className="live-indicator">
                        <i /> LIVE DEMO
                      </span>
                    </div>
                    <strong className="dashboard-title">Growth overview</strong>
                  </div>
                  <div className="dot-group">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="metric-row">
                  <div className="metric">
                    <div className="dash-label">Lead Pipeline</div>
                    <span aria-label="Pipeline growth" className="pipeline-icon">
                      <svg
                        aria-hidden="true"
                        fill="none"
                        height="31"
                        viewBox="0 0 48 48"
                        width="31"
                      >
                        <path
                          d="M8 33L19 22L26 28L40 12"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.8"
                        />
                        <path
                          d="M29 12H40V23"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.8"
                        />
                        <circle cx="9" cy="33" fill="currentColor" r="2.5" />
                        <circle cx="19" cy="22" fill="currentColor" r="2.5" />
                      </svg>
                    </span>
                    <small>
                      <b>More clarity</b> at every stage
                    </small>
                  </div>
                  <div className="metric">
                    <div className="dash-label">Automations</div>
                    <strong>24/7</strong>
                    <small>
                      <b>Always-on</b> follow-up
                    </small>
                  </div>
                </div>
                <div className="chart-heading">
                  <div>
                    <div className="dash-label">PERFORMANCE SNAPSHOT</div>
                    <strong>Building momentum</strong>
                  </div>
                  <span className="chart-period">
                    Illustrative trend <i className="bi bi-arrow-up-right" />
                  </span>
                </div>
                <div className="bar-chart">
                  {bars.map((height) => (
                    <span key={height} style={{ height }} />
                  ))}
                </div>
                <div className="chart-footer">
                  <span>JAN</span>
                  <span>MAR</span>
                  <span>MAY</span>
                  <span>JUL</span>
                  <span>SEP</span>
                </div>
                <div className="mock-row">
                  <span>
                    <i className="bi bi-check-circle-fill lime me-2" />
                    <small>Client onboarding workflow</small>
                  </span>
                  <span className="tiny-pill">
                    <i className="bi bi-check2-circle me-1" /> Automated
                  </span>
                </div>
              </div>
              <div className="float-badge bottom">
                <i className="bi bi-lightning-charge-fill me-2" /> Less busywork. More
                momentum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
