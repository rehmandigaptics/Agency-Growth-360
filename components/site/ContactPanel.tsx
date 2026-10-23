import { ContactForm } from "@/components/site/ContactForm";
import { CONTACT_EMAIL, mail } from "@/lib/site";

const expectations = [
  {
    num: "01",
    title: "Tell us where you are",
    body: "Share your goals, bottlenecks, and the tools you already use.",
  },
  {
    num: "02",
    title: "We'll map a sensible next step",
    body: "A clear reply focused on priorities — not a generic sales pitch.",
  },
  {
    num: "03",
    title: "Decide together",
    body: "If it's a fit, we outline scope. If not, you'll still leave with clarity.",
  },
];

export function ContactPanel() {
  return (
    <section className="section-pad ag-contact" id="contact-form">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-stretch">
          <div className="col-lg-8">
            <div className="ag-contact-form-card">
              <span className="section-kicker">SEND A MESSAGE</span>
              <h2 className="ag-contact-heading">Tell us what you&apos;re building.</h2>
              <p className="ag-contact-copy">
                Share a few details and we&apos;ll reply with a practical next step —
                no pressure, no fluff.
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ag-contact-side">
              <div className="ag-contact-card">
                <span className="section-kicker">DIRECT LINE</span>
                <h2 className="ag-contact-heading">Prefer email?</h2>
                <p className="ag-contact-copy">
                  Reach the team at Agency Growth 360. We work with US digital agencies,
                  freelancers, and consultants who want stronger systems and clearer growth.
                </p>
                <a className="ag-contact-email" href={mail("Let's Plan My Agency Growth")}>
                  {CONTACT_EMAIL}
                  <i className="bi bi-arrow-up-right" />
                </a>
              </div>
              <div className="ag-contact-steps">
                <span className="section-kicker">WHAT TO EXPECT</span>
                <div className="ag-contact-list">
                  {expectations.map((item) => (
                    <div className="ag-contact-step" key={item.num}>
                      <span>{item.num}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
