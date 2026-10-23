import type { Metadata } from "next";
import { ContactPanel } from "@/components/site/ContactPanel";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { getPage } from "@/lib/pages";

const page = getPage("contact");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero page={page} variant="split" />
      <ContactPanel />
    </PageShell>
  );
}
