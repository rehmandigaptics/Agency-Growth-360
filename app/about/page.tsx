import type { Metadata } from "next";
import { PageCta } from "@/components/site/PageCta";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { AboutUnique } from "@/components/site/pages/AboutUnique";
import { getPage } from "@/lib/pages";

const page = getPage("about");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero page={page} variant="split" />
      <AboutUnique />
      <PageCta />
    </PageShell>
  );
}
