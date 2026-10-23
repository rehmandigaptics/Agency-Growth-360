const defaultPillars = [
  {
    num: "01",
    icon: "bi-bullseye",
    title: "Clarity first",
    body: "Positioning, offers, and priorities shaped around how you actually win work.",
  },
  {
    num: "02",
    icon: "bi-diagram-3",
    title: "Systems that connect",
    body: "Website, CRM, automation, and follow-up designed as one operating rhythm.",
  },
  {
    num: "03",
    icon: "bi-graph-up-arrow",
    title: "Momentum you can keep",
    body: "Practical delivery your team can run — without constant firefighting.",
  },
];

export function PagePillars({
  kicker = "THE FOUNDATION",
  title = "What every engagement is built around.",
  accent,
  pillars = defaultPillars,
}: {
  kicker?: string;
  title?: string;
  accent?: string;
  pillars?: typeof defaultPillars;
}) {
  return (
    <section className="section-pad ag-page-pillars">
      <div aria-hidden="true" className="ag-page-pillars-glow" />
      <div className="container">
        <div className="ag-page-pillars-intro reveal">
          <div>
            <span className="section-kicker">{kicker}</span>
            <h2 className="ag-page-pillars-title">
              {title}
              {accent ? <em> {accent}</em> : null}
            </h2>
          </div>
          <p className="ag-page-pillars-aside">
            A simple frame for every engagement — clear thinking, connected systems, and
            work that keeps moving after the kickoff.
          </p>
        </div>

        <div className="ag-page-pillars-rail">
          {pillars.map((pillar, index) => (
            <article className="ag-page-pillar reveal" key={pillar.num}>
              <span aria-hidden="true" className="ag-page-pillar-wash">
                {pillar.num}
              </span>
              <div className="ag-page-pillar-head">
                <span className="ag-page-pillar-index">
                  <span>{pillar.num}</span>
                </span>
                <span className="ag-page-pillar-icon">
                  <i aria-hidden="true" className={`bi ${pillar.icon}`} />
                </span>
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
              <div aria-hidden="true" className="ag-page-pillar-step">
                Step {index + 1} of {pillars.length}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
