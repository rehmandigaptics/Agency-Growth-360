const highlights = [
  "CLIENT ACQUISITION",
  "BUSINESS AUTOMATION",
  "HIGH-CONVERTING WEBSITES",
  "CRM & PIPELINES",
  "WHITE-LABEL SUPPORT",
  "REVENUE OPERATIONS",
];

const trust = [
  ["bi-bullseye", "Strategy"],
  ["bi-arrow-repeat", "Automation"],
  ["bi-kanban", "Systems"],
  ["bi-graph-up", "Growth"],
] as const;

export function Highlights() {
  const loop = [...highlights, ...highlights];

  return (
    <>
      <section aria-label="Growth engine highlights" className="ag-trust">
        <div aria-hidden="true" className="ag-trust-aura" />
        <div className="container">
          <div className="ag-trust-panel">
            <div className="ag-trust-rail">
              <div className="ag-trust-brand">
                <span aria-hidden="true" className="ag-trust-pulse" />
                <div className="ag-trust-brand-copy">
                  <p className="ag-trust-kicker">Growth infrastructure</p>
                  <p className="ag-trust-label">One connected growth engine</p>
                </div>
              </div>
              <ul className="ag-trust-list">
                {trust.map(([icon, label]) => (
                  <li className="ag-trust-item" key={label}>
                    <span aria-hidden="true" className="ag-trust-icon">
                      <i className={`bi ${icon}`} />
                    </span>
                    <span className="ag-trust-text">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Growth capabilities" className="ag-marquee">
        <div className="ag-marquee-track">
          {loop.map((label, index) => (
            <span className="ag-marquee-item" key={`${label}-${index}`}>
              <i aria-hidden="true" className="bi bi-asterisk" />
              {label}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
