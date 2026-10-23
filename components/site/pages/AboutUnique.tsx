import { FrameImage } from "@/components/site/FrameImage";
import { siteImages } from "@/lib/images";

const beliefs = [
  {
    title: "Growth should feel intentional",
    body: "Not a pile of disconnected tactics. A clear point of view, a connected plan, and work your team can keep running.",
  },
  {
    title: "Systems beat heroics",
    body: "Pipelines, follow-ups, and delivery should not depend on someone remembering. Repeatable beats reactive.",
  },
  {
    title: "Clarity before complexity",
    body: "We start with how you actually win work — then shape the tools and automations around that reality.",
  },
];

export function AboutUnique() {
  return (
    <div className="page-about-unique">
      <section className="section-pad pau-story">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="pau-story-media reveal">
                <FrameImage
                  alt="Partners reviewing growth strategy together"
                  sizes="(max-width: 992px) 100vw, 42vw"
                  src={siteImages.strategyMeeting}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="pau-story-copy reveal">
                <span className="section-kicker">OUR STORY</span>
                <h2>
                  A growth partner for teams who have outgrown <em>scattered tools.</em>
                </h2>
                <p>
                  Agency Growth 360 works with US digital agencies, freelancers, and
                  consultants who need stronger foundations — clearer offers, sharper
                  digital experiences, and operations that keep moving when calendars get
                  busy.
                </p>
                <p>
                  We do not sell one-off tactics. We help you build a practical operating
                  rhythm for acquisition, delivery, and follow-through.
                </p>
                <a className="btn-lime" href="/contact">
                  Start a conversation <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pau-quote" aria-label="Brand statement">
        <div aria-hidden="true" className="pau-quote-atmosphere">
          <span className="pau-quote-glow pau-quote-glow--core" />
          <span className="pau-quote-glow pau-quote-glow--rim" />
          <span className="pau-quote-grain" />
        </div>
        <div className="container">
          <blockquote className="pau-quote-block reveal">
            <div className="pau-quote-frame" aria-hidden="true">
              <span className="pau-quote-corner pau-quote-corner--tl" />
              <span className="pau-quote-corner pau-quote-corner--tr" />
              <span className="pau-quote-corner pau-quote-corner--bl" />
              <span className="pau-quote-corner pau-quote-corner--br" />
            </div>
            <span className="pau-quote-kicker">Brand promise</span>
            <span aria-hidden="true" className="pau-quote-mark">
              ”
            </span>
            <p>
              You focus on the vision. We strengthen the engine — so growth feels{" "}
              <em>steadier</em>, not louder.
            </p>
            <footer className="pau-quote-attrib">
              <span aria-hidden="true" className="pau-quote-rule" />
              <cite>Agency Growth 360</cite>
              <span aria-hidden="true" className="pau-quote-rule" />
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="section-pad pau-beliefs">
        <div aria-hidden="true" className="pau-beliefs-glow" />
        <div className="container">
          <div className="pau-beliefs-intro reveal">
            <span className="section-kicker">WHAT WE BELIEVE</span>
            <h2>
              Principles that shape <em>every engagement.</em>
            </h2>
            <p>
              These are the filters behind every recommendation — so the work stays
              clear, useful, and durable.
            </p>
          </div>
          <ol className="pau-belief-list">
            {beliefs.map((item, i) => (
              <li className="pau-belief reveal" key={item.title}>
                <div className="pau-belief-index" aria-hidden="true">
                  <span className="pau-belief-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="pau-belief-body">
                  <span className="pau-belief-tag">Principle</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <span aria-hidden="true" className="pau-belief-mark">
                  <i className="bi bi-arrow-up-right" />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
