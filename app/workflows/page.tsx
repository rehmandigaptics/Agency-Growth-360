import type { Metadata } from "next";
import { PageCta } from "@/components/site/PageCta";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { WorkflowsUnique } from "@/components/site/pages/WorkflowsUnique";
import { getPage } from "@/lib/pages";

const page = getPage("workflows");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function WorkflowsPage() {
  return (
    <PageShell>
      <PageHero page={page} variant="split" />
      <WorkflowsUnique />
      <PageCta />
    </PageShell>
  );
}
