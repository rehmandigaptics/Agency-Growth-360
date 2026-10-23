import { About } from "@/components/site/About";
import { Audience } from "@/components/site/Audience";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Highlights } from "@/components/site/Highlights";
import { Integrations } from "@/components/site/Integrations";
import { ConversationCta } from "@/components/site/Journal";
import { Process } from "@/components/site/Process";
import { Services, Solutions } from "@/components/site/Services";
import { SiteShell } from "@/components/site/SiteShell";
import { WhyUs } from "@/components/site/WhyUs";
import { Workflows } from "@/components/site/Workflows";

export default function Home() {
  return (
    <SiteShell>
      <Header />
      <main>
        <div className="ag-hero-stage">
          <Hero />
          <Highlights />
        </div>
        <About />
        <Services />
        <Solutions />
        <WhyUs />
        <Workflows />
        <Process />
        <Audience />
        <Integrations />
        <Faq />
        <ConversationCta />
      </main>
      <Footer />
    </SiteShell>
  );
}
