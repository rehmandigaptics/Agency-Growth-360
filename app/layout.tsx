import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "lenis/dist/lenis.css";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agency Growth 360 — Build Better. Grow Faster.",
  description:
    "Agency Growth 360 helps US digital agencies, freelancers and consultants grow with premium websites, smarter CRM systems, marketing operations and automation.",
};

export const viewport: Viewport = {
  themeColor: "#0b1016",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${dmSans.variable} ${manrope.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
