const platforms = [
  {
    meta: "CAPABILITY / 01",
    icon: "bi-kanban",
    title: "CRM & Pipelines",
    body: "Bring prospects, opportunities, and follow-ups into one clear view.",
  },
  {
    meta: "CAPABILITY / 02",
    icon: "bi-envelope-paper",
    title: "Email & Nurture",
    body: "Build helpful, consistent communications across the client journey.",
  },
  {
    meta: "CAPABILITY / 03",
    icon: "bi-calendar2-check",
    title: "Scheduling",
    body: "Reduce back-and-forth and make it easier to book a conversation.",
  },
  {
    meta: "CAPABILITY / 04",
    icon: "bi-bar-chart-line",
    title: "Reporting",
    body: "See the signals that matter and make better growth decisions.",
  },
];

const rows = [
  ["Lead management", "Scattered inboxes", "Central pipeline"],
  ["Client follow-up", "Manual reminders", "Repeatable workflows"],
  ["Delivery process", "Ad-hoc handoffs", "Clear steps"],
  ["Business visibility", "Guesswork", "Useful reporting"],
];

export function Integrations() {
  return (
    <section className="new-section deep integrations-premium" id="integrations">
      <div className="container">
        <div className="row gy-3 align-items-end mb-5 integrations-intro">
          <div className="col-lg-8">
            <span className="section-kicker">CONNECTED BUSINESS OPERATIONS</span>
            <h2 className="premium-heading">
              Work smarter with your <em>favorite platforms.</em>
            </h2>
          </div>
          <div className="col-lg-4">
            <p className="premium-muted">
              We plan around the tools that make sense for your team. Platform support
              and integration scope are confirmed during discovery.
            </p>
          </div>
        </div>
        <div className="row g-4 integrations-grid">
          {platforms.map((platform) => (
            <div className="col-md-6 col-lg-3 reveal" key={platform.meta}>
              <div className="platform-card platform-premium-card">
                <div className="platform-meta">{platform.meta}</div>
                <div className="platform-icon">
                  <i className={`bi ${platform.icon}`} />
                </div>
                <h3>{platform.title}</h3>
                <p>{platform.body}</p>
                <div aria-hidden="true" className="platform-bottom">
                  <span>CONNECTED OPERATIONS</span>
                  <i className="bi bi-arrow-up-right" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row align-items-center gy-4 mt-5 compare-wrap">
          <div className="col-lg-5">
            <span className="section-kicker">THE DIFFERENCE</span>
            <h2
              className="premium-heading"
              style={{ fontSize: "clamp(30px, 3.5vw, 48px)" }}
            >
              Less chaos. <em>More momentum.</em>
            </h2>
            <p className="premium-muted">
              A simple picture of the shift from disconnected work to a structured,
              repeatable growth engine.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="compare-table compare-premium">
              <div className="compare-row heading">
                <div>Focus area</div>
                <div>Disconnected setup</div>
                <div>Connected setup</div>
              </div>
              {rows.map(([area, before, after]) => (
                <div className="compare-row compare-data-row" key={area}>
                  <div>{area}</div>
                  <div>{before}</div>
                  <div>
                    <i className="bi bi-check-circle-fill" />
                    {after}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
