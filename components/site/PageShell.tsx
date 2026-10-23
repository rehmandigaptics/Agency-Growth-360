import type { ReactNode } from "react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SiteShell } from "@/components/site/SiteShell";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <SiteShell>
      <Header />
      <main>{children}</main>
      <Footer />
    </SiteShell>
  );
}
