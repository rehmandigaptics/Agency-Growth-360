import type { Metadata } from "next";
import { PageCta } from "@/components/site/PageCta";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { WhoHelpUnique } from "@/components/site/pages/WhoHelpUnique";
import { getPage } from "@/lib/pages";

const page = getPage("who-we-help");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function WhoWeHelpPage() {
  return (
    <PageShell>
      <PageHero page={page} variant="split" />
      <WhoHelpUnique />
      <PageCta />
    </PageShell>
  );
}
