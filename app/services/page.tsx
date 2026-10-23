import type { Metadata } from "next";
import { PageCta } from "@/components/site/PageCta";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { ServicesPageSection } from "@/components/site/ServicesPage";
import { getPage } from "@/lib/pages";

const page = getPage("services");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero page={page} variant="split" />
      <ServicesPageSection />
      <PageCta />
    </PageShell>
  );
}
