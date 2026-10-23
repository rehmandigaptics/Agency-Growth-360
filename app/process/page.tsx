import type { Metadata } from "next";
import { PageCta } from "@/components/site/PageCta";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { ProcessUnique } from "@/components/site/pages/ProcessUnique";
import { getPage } from "@/lib/pages";

const page = getPage("process");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function ProcessPage() {
  return (
    <PageShell>
      <PageHero page={page} variant="split" />
      <ProcessUnique />
      <PageCta />
    </PageShell>
  );
}
