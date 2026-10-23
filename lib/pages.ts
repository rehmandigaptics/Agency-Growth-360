import { siteImages } from "@/lib/images";

export type PageSlug =
  | "about"
  | "services"
  | "why-us"
  | "process"
  | "who-we-help"
  | "workflows"
  | "contact";

export type PageContent = {
  slug: PageSlug;
  path: `/${PageSlug}`;
  title: string;
  description: string;
  kicker: string;
  headline: string;
  accent: string;
  lead: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

export const pages: Record<PageSlug, PageContent> = {
  about: {
    slug: "about",
    path: "/about",
    title: "About — Agency Growth 360",
    description:
      "Agency Growth 360 helps US digital agencies and freelancers grow with clearer offers, connected systems, and practical execution.",
    kicker: "ABOUT US",
    headline: "Built for teams who want growth to feel",
    accent: "intentional.",
    lead: "We partner with ambitious agencies and independents who have outgrown scattered tools — and want a clearer operating system for growth.",
    ctaLabel: "Explore services",
    ctaHref: "/services",
    image: siteImages.studioTeam,
    imageAlt: "Agency team collaborating in a bright modern studio",
  },
  services: {
    slug: "services",
    path: "/services",
    title: "Services — Agency Growth 360",
    description:
      "Strategy, CRM & automation, web & funnels, marketing systems, client experience, and performance insights — connected for growth.",
    kicker: "SERVICES",
    headline: "Everything you need to",
    accent: "move forward.",
    lead: "Practical, connected solutions for businesses ready to operate at the next level — from offer clarity to the systems that keep work moving.",
    ctaLabel: "Let's talk",
    ctaHref: "/contact",
    image: siteImages.ideaLightbulb,
    imageAlt: "Idea lightbulb over planning sketches",
  },
  "why-us": {
    slug: "why-us",
    path: "/why-us",
    title: "Why Us — Agency Growth 360",
    description:
      "Why agencies and freelancers choose Agency Growth 360: tailored systems, practical execution, and sustainable growth.",
    kicker: "WHY AGENCY GROWTH 360",
    headline: "You focus on the vision.",
    accent: "We strengthen the engine.",
    lead: "Growing a service business is hard enough. Your systems shouldn't make it harder — we bring the pieces together with clarity and consistency.",
    ctaLabel: "See how we work",
    ctaHref: "/process",
    image: siteImages.growthChart,
    imageAlt: "Hand presenting an upward growth chart",
  },
  process: {
    slug: "process",
    path: "/process",
    title: "Our Process — Agency Growth 360",
    description:
      "A simple path to smarter growth: understand the gaps, create the system, improve and scale.",
    kicker: "OUR APPROACH",
    headline: "A simple path to",
    accent: "smarter growth.",
    lead: "Discover, build, and optimize — a clear engagement path so you always know what comes next.",
    ctaLabel: "Start a conversation",
    ctaHref: "/contact",
    image: siteImages.growthPath,
    imageAlt: "A clear path forward through a mountain landscape",
  },
  "who-we-help": {
    slug: "who-we-help",
    path: "/who-we-help",
    title: "Who We Help — Agency Growth 360",
    description:
      "Built for digital agencies and freelancers who want repeatable systems, stronger delivery, and room to scale.",
    kicker: "BUILT FOR YOUR BUSINESS",
    headline: "Small teams.",
    accent: "Big ambitions.",
    lead: "Whether you're growing a team or running solo, build the foundation for your next chapter.",
    ctaLabel: "Talk with us",
    ctaHref: "/contact",
    image: siteImages.focusedFreelancer,
    imageAlt: "Independent professional focused at a bright workspace",
  },
  workflows: {
    slug: "workflows",
    path: "/workflows",
    title: "Workflows — Agency Growth 360",
    description:
      "Stop juggling tools. Connect pipelines, follow-ups, and visibility into one clearer growth workflow.",
    kicker: "A CLEARER VIEW OF GROWTH",
    headline: "Stop juggling tools.",
    accent: "Start connecting the dots.",
    lead: "Imagine an organized pipeline, faster response times, and a clear picture of every opportunity — the kind of workflow we help you build.",
    ctaLabel: "Discuss your workflow",
    ctaHref: "/contact",
    image: siteImages.analyticsDashboard,
    imageAlt: "Growth analytics dashboard with clear performance signals",
  },
  contact: {
    slug: "contact",
    path: "/contact",
    title: "Contact — Agency Growth 360",
    description:
      "Tell us what's slowing you down. We'll help identify a practical next step for your agency or freelance business.",
    kicker: "LET'S CONNECT",
    headline: "Ready to make growth feel",
    accent: "less complicated?",
    lead: "Share where you are today and what you're trying to build. We'll reply with a sensible next step — no pressure, no fluff.",
    ctaLabel: "Send a message",
    ctaHref: "#contact-form",
    image: siteImages.partnershipHandshake,
    imageAlt: "A partnership handshake sealed in warm natural light",
  },
};

export function getPage(slug: PageSlug): PageContent {
  return pages[slug];
}
