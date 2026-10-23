const steps = [
  {
    num: "01 / DISCOVER",
    icon: "bi-search",
    title: "Understand the gaps",
    body: "We review your current workflows, acquisition process, and biggest growth bottlenecks.",
    foot: "Find the opportunities",
  },
  {
    num: "02 / BUILD",
    icon: "bi-layers",
    title: "Create the system",
    body: "We shape the right strategy, tools, and automations around the way your business operates.",
    foot: "Build with purpose",
  },
  {
    num: "03 / OPTIMIZE",
    icon: "bi-graph-up-arrow",
    title: "Improve and scale",
    body: "We refine what works, identify opportunities, and build momentum with clearer data.",
    foot: "Keep getting better",
  },
];

export function Process() {
  return (
    <section className="section-pad process-premium" id="process">
      <div className="container">
        <div className="process-intro text-center">
          <span className="eyebrow">OUR APPROACH</span>
          <h2 className="display-heading mt-3">
            A simple path to <span className="lime">smarter growth.</span>
          </h2>
        </div>
        <div className="row g-4 process-grid">
          {steps.map((step) => (
            <div className="col-md-4 reveal" key={step.num}>
              <div className="step process-step-card">
                <div className="step-num">{step.num}</div>
                <div aria-hidden="true" className="process-symbol">
                  <i className={`bi ${step.icon}`} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="process-foot">{step.foot}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
