import { FrameImage } from "@/components/site/FrameImage";
import { siteImages } from "@/lib/images";

const services = [
  {
    number: "/01",
    category: "Strategy & Positioning",
    icon: "bi-diagram-3",
    title: "Agency Growth Strategy",
    body: "Turn ambitious goals into an actionable plan for positioning, lead generation, client acquisition, and scale.",
    subject: "Growth Strategy",
    featured: true,
  },
  {
    number: "/02",
    category: "Smarter Operations",
    icon: "bi-cpu",
    title: "CRM & Automation",
    body: "Organize your pipeline, automate follow-ups, and create repeatable processes that save valuable time.",
    subject: "CRM Automation",
    featured: false,
  },
  {
    number: "/03",
    category: "Digital Experiences",
    icon: "bi-window-stack",
    title: "Web & Funnel Solutions",
    body: "Build high-converting digital experiences, clear customer journeys, and smarter conversion pathways.",
    subject: "Web and Funnels",
    featured: false,
  },
  {
    number: "/04",
    category: "Demand Generation",
    icon: "bi-megaphone",
    title: "Marketing Systems",
    body: "Connect campaigns, content, lead capture, and reporting into one coordinated acquisition system.",
    subject: "Marketing Systems",
    featured: false,
  },
  {
    number: "/05",
    category: "Client Operations",
    icon: "bi-people",
    title: "Client Experience",
    body: "Simplify proposals, onboarding, communication, and delivery so every client relationship starts strong.",
    subject: "Client Experience",
    featured: false,
  },
  {
    number: "/06",
    category: "Reporting & Analytics",
    icon: "bi-graph-up-arrow",
    title: "Performance Insights",
    body: "Make smarter decisions with clear KPIs, useful dashboards, and visibility into what actually works.",
    subject: "Performance Insights",
    featured: false,
  },
  {
    number: "/07",
    category: "Pipeline Growth",
    icon: "bi-funnel",
    title: "Lead Generation",
    body: "Attract qualified prospects with offers, capture flows, and follow-up systems built to fill your pipeline.",
    subject: "Lead Generation",
    featured: false,
  },
  {
    number: "/08",
    category: "Workflow Automation",
    icon: "bi-bounding-box-circles",
    title: "N8N",
    body: "Connect your tools with flexible n8n workflows — automations you can see, edit, and scale with your team.",
    subject: "N8N Automation",
    featured: false,
  },
  {
    number: "/09",
    category: "CRM Platform",
    icon: "bi-lightning-charge",
    title: "GHL",
    body: "Implement and optimize GoHighLevel for pipelines, messaging, calendars, and client delivery in one place.",
    subject: "GoHighLevel",
    featured: false,
  },
];

function ServiceCard({
  service,
  hidden = false,
}: {
  service: (typeof services)[number];
  hidden?: boolean;
}) {
  return (
    <article className={`ag-service-card${service.featured ? " featured" : ""}`}>
      <div className="ag-card-top">
        <span className="ag-service-number">{service.number}</span>
        <span className="ag-service-category">{service.category}</span>
      </div>
      <div className="ag-icon-wrap">
        <i aria-hidden="true" className={`bi ${service.icon}`} />
      </div>
      <div className="ag-card-main">
        <h3>{service.title}</h3>
        <p>{service.body}</p>
      </div>
      <a
        aria-label={hidden ? undefined : `Discuss ${service.title}`}
        className="ag-service-link"
        href="/contact"
        tabIndex={hidden ? -1 : undefined}
      >
        <span>Explore solution</span>
        <span className="ag-link-arrow">
          <i aria-hidden="true" className="bi bi-arrow-up-right" />
        </span>
      </a>
      <span aria-hidden="true" className="ag-service-glow" />
    </article>
  );
}

export function Services() {
  return (
    <section className="section-pad ag-services-section" id="services">
      <div className="container">
        <div className="ag-services-intro">
          <div className="ag-services-heading">
            <span className="eyebrow">WHAT WE DO</span>
            <h2 className="display-heading">
              Everything you need to <span className="lime">move forward.</span>
            </h2>
          </div>
          <div className="ag-services-summary">
            <span aria-hidden="true" className="ag-summary-line" />
            <p>
              Practical, connected solutions for businesses ready to operate at the next
              level.
            </p>
            <div className="ag-summary-stamp">
              <i aria-hidden="true" className="bi bi-stars" /> YOUR GROWTH PARTNER
            </div>
          </div>
        </div>
      </div>
      <div aria-label="Services" className="ag-services-carousel">
        <div className="ag-services-track">
          <div className="ag-services-group">
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
          <div aria-hidden="true" className="ag-services-group">
            {services.map((service) => (
              <ServiceCard key={`${service.number}-copy`} hidden service={service} />
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="ag-services-outro">
          <div className="ag-outro-left">
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

function ToolkitPhoto({
  label,
  src,
  alt,
  title,
  caption,
}: {
  label: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
}) {
  return (
    <div className="col-lg-6 reveal">
      <div className="feature-img-wrap">
        <span className="toolkit-photo-label">{label}</span>
        <FrameImage alt={alt} className="feature-image" src={src} />
        <div className="image-caption">
          {title}
          <small>{caption}</small>
        </div>
      </div>
    </div>
  );
}

function ToolkitPanel({
  index,
  kicker,
  title,
  body,
  points,
  href,
  cta,
}: {
  index: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  href: string;
  cta: string;
}) {
  return (
    <div className="col-lg-6 reveal">
      <div className="feature-panel">
        <span aria-hidden="true" className="toolkit-panel-index">
          {index}
        </span>
        <span className="section-kicker">{kicker}</span>
        <h3 className="mt-3">{title}</h3>
        <p>{body}</p>
        <ul className="toolkit-checklist feature-list">
          {points.map((point) => (
            <li key={point}>
              <i className="bi bi-check-circle-fill" />
              {point}
            </li>
          ))}
        </ul>
        <a className="mini-link toolkit-cta" href={href}>
          {cta} <i className="bi bi-arrow-up-right ms-2" />
        </a>
      </div>
    </div>
  );
}

export function Solutions() {
  return (
    <section className="new-section deep" id="solutions">
      <div className="container">
        <div className="section-intro refined-heading toolkit-intro reveal">
          <div className="intro-copy">
            <span className="intro-kicker">
              <span className="intro-dot" /> THE GROWTH TOOLKIT
            </span>
            <h2 className="premium-heading">
              Your next chapter starts with <em>better foundations.</em>
            </h2>
            <p className="intro-description">
              From first impression to client retention, every touchpoint should work
              harder for your business.
            </p>
          </div>
          <span aria-hidden="true" className="intro-decoration">
            <i className="bi bi-arrow-up-right" />
          </span>
        </div>
        <div className="row g-4">
          <ToolkitPhoto
            alt="Team reviewing website wireframes and digital experience flows"
            caption="More structure. Less friction."
            label="01 / CREATIVE & DIGITAL"
            src={siteImages.wireframeReview}
            title="Built for ambitious agencies"
          />
          <ToolkitPanel
            body="Stand out from generic competitors with a premium digital presence designed around a clear offer, persuasive story, and conversion-friendly experience."
            cta="Explore website solutions"
            href="/contact"
            index="01 — / 02"
            kicker="01 / DIGITAL EXPERIENCE"
            points={[
              "Strategic landing pages and funnels",
              "Responsive and performance-minded builds",
              "Conversion-focused website architecture",
            ]}
            title="Websites that look exceptional and work strategically."
          />
          <ToolkitPanel
            body="Put your leads, client communication, workflows, and reporting into a system that keeps moving even when your calendar gets busy."
            cta="Explore automation solutions"
            href="/contact"
            index="02 — / 02"
            kicker="02 / OPERATIONS & SCALE"
            points={[
              "CRM setup and pipeline design",
              "Automated lead nurturing and follow-up",
              "Connected reporting and handoff processes",
            ]}
            title="A smarter back end for every client you win."
          />
          <ToolkitPhoto
            alt="Connected CRM and automation dashboards on laptop and phone"
            caption="Designed around your workflow."
            label="02 / SYSTEMS & OPERATIONS"
            src={siteImages.crmDashboard}
            title="One connected operating system"
          />
        </div>
      </div>
    </section>
  );
}
