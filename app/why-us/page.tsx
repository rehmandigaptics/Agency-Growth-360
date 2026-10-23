import type { Metadata } from "next";
import { PageCta } from "@/components/site/PageCta";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { WhyUsUnique } from "@/components/site/pages/WhyUsUnique";
import { getPage } from "@/lib/pages";

const page = getPage("why-us");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function WhyUsPage() {
  return (
    <PageShell>
      <PageHero page={page} variant="split" />
      <WhyUsUnique />
      <PageCta />
    </PageShell>
  );
}
