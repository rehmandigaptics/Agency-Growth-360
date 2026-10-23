import { FrameImage } from "@/components/site/FrameImage";
import { siteImages } from "@/lib/images";

const personas = [
  {
    eyebrow: "01 / DIGITAL AGENCIES",
    title: "Growing teams that need room to scale",
    body: "Build repeatable acquisition, manage leads cleanly, streamline delivery, and create capacity without adding chaos.",
    points: [
      "Central pipeline and follow-up",
      "Clearer delivery handoffs",
      "Systems beyond founder memory",
    ],
    image: siteImages.studioTeam,
    alt: "Agency team collaborating in a bright modern studio",
    cta: "Talk agency growth",
    subject: "Agency Growth Conversation",
    reverse: true,
  },
  {
    eyebrow: "02 / FREELANCERS & CONSULTANTS",
    title: "Independents who want to look — and run — more premium",
    body: "Present professionally, automate admin, and protect time for high-value client work.",
    points: [
      "Stronger first impression online",
      "Less back-and-forth admin",
      "Simple systems you can actually keep",
    ],
    image: siteImages.focusedFreelancer,
    alt: "Independent professional focused at a bright workspace",
    cta: "Talk freelance systems",
    subject: "Freelancer Systems Conversation",
  },
];

export function WhoHelpUnique() {
  return (
    <div className="page-who-unique">
      {personas.map((persona) => (
        <section
          className={`section-pad pwho-persona${persona.reverse ? " is-reverse" : ""}`}
          key={persona.eyebrow}
        >
          <div className="container">
            <div className="row g-4 g-xl-5 align-items-center">
              <div className={`col-lg-6${persona.reverse ? " order-lg-2" : ""}`}>
                <div className="pwho-copy reveal">
                  <span className="section-kicker">{persona.eyebrow}</span>
                  <h2>{persona.title}</h2>
                  <p>{persona.body}</p>
                  <ul>
                    {persona.points.map((point) => (
                      <li key={point}>
                        <i aria-hidden="true" className="bi bi-check2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a className="btn-lime" href="/contact">
                    {persona.cta} <i className="bi bi-arrow-up-right" />
                  </a>
                </div>
              </div>
              <div className={`col-lg-6${persona.reverse ? " order-lg-1" : ""}`}>
                <div className="pwho-media reveal">
                  <FrameImage
                    alt={persona.alt}
                    sizes="(max-width: 992px) 100vw, 50vw"
                    src={persona.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
