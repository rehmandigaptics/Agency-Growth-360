
const pageServices = [
  {
    number: "/01",
    category: "Strategy & Positioning",
    icon: "bi-diagram-3",
    title: "Agency Growth Strategy",
    body: "Turn ambitious goals into an actionable plan for positioning, lead generation, client acquisition, and scale.",
    subject: "Growth Strategy",
  },
  {
    number: "/02",
    category: "Demand Generation",
    icon: "bi-crosshair",
    title: "Lead Generation",
    body: "Build reliable pipelines with clearer offers, capture systems, and outreach that consistently creates qualified conversations.",
    subject: "Lead Generation",
  },
  {
    number: "/03",
    category: "Smarter Operations",
    icon: "bi-cpu",
    title: "CRM & Automation",
    body: "Organize your pipeline, automate follow-ups, and create repeatable processes that save valuable time.",
    subject: "CRM Automation",
  },
  {
    number: "/04",
    category: "Workflow Automation",
    icon: "bi-diagram-2",
    title: "N8N",
    body: "Connect tools and orchestrate custom automations with N8N — so leads, handoffs, and follow-ups move without manual busywork.",
    subject: "N8N Automation",
  },
  {
    number: "/05",
    category: "All-in-One Growth Stack",
    icon: "bi-lightning-charge",
    title: "GHL",
    body: "Implement and refine GoHighLevel for pipelines, messaging, funnels, and client workflows in one connected system.",
    subject: "GoHighLevel Setup",
  },
  {
    number: "/06",
    category: "Digital Experiences",
    icon: "bi-window-stack",
    title: "Web & Funnel Solutions",
    body: "Build high-converting digital experiences, clear customer journeys, and smarter conversion pathways.",
    subject: "Web and Funnels",
  },
  {
    number: "/07",
    category: "Demand Generation",
    icon: "bi-megaphone",
    title: "Marketing Systems",
    body: "Connect campaigns, content, lead capture, and reporting into one coordinated acquisition system.",
    subject: "Marketing Systems",
  },
  {
    number: "/08",
    category: "Client Operations",
    icon: "bi-people",
    title: "Client Experience",
    body: "Simplify proposals, onboarding, communication, and delivery so every client relationship starts strong.",
    subject: "Client Experience",
  },
  {
    number: "/09",
    category: "Reporting & Analytics",
    icon: "bi-graph-up-arrow",
    title: "Performance Insights",
    body: "Make smarter decisions with clear KPIs, useful dashboards, and visibility into what actually works.",
    subject: "Performance Insights",
  },
];

export function ServicesPageSection() {
  return (
    <section className="section-pad ag-services-page" id="services">
      <div className="container">
        <div className="ag-services-page-intro reveal">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2 className="display-heading">
              Everything you need to <span className="lime">move forward.</span>
            </h2>
          </div>
          <p className="ag-services-page-lead">
            Strategy, acquisition, automation, and delivery — including Lead Generation,
            N8N, and GHL — connected into one practical growth system.
          </p>
        </div>

        <div className="row g-4 ag-services-page-grid">
          {pageServices.map((service) => (
            <div className="col-md-6 col-xl-4 reveal" key={service.number}>
              <article className="ag-svc-tile">
                <div className="ag-svc-tile-top">
                  <span className="ag-svc-tile-num">{service.number}</span>
                  <span className="ag-svc-tile-cat">{service.category}</span>
                </div>
                <div className="ag-svc-tile-icon">
                  <i aria-hidden="true" className={`bi ${service.icon}`} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <a
                  aria-label={`Discuss ${service.title}`}
                  className="ag-svc-tile-link"
                  href="/contact"
                >
                  <span>Explore solution</span>
                  <span className="ag-svc-tile-arrow">
                    <i aria-hidden="true" className="bi bi-arrow-up-right" />
                  </span>
                </a>
              </article>
            </div>
          ))}
        </div>

        <div className="ag-services-page-outro reveal">
          <div className="ag-services-page-outro-copy">
            <span className="ag-outro-mark">
              <i aria-hidden="true" className="bi bi-lightning-charge" />
            </span>
            <span>
              Not sure where to begin? <strong>Let&apos;s map your next move.</strong>
            </span>
          </div>
          <a href="/contact">
            Let&apos;s talk about your goals{" "}
            <i aria-hidden="true" className="bi bi-arrow-up-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
