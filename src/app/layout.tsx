import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import FlowLines from "@/components/FlowLines";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-face",
  display: "swap",
});

const DEFAULT_TITLE = "CLiKiT — We build brands that convert";
const DEFAULT_DESCRIPTION =
  "Strategy, content and performance marketing for companies that want measurable growth — not vanity metrics.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#050707",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${body.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="bg-night font-sans text-white antialiased">
        {/* Decorative film grain over the whole page */}
         <div
    className="waves-drift pointer-events-none fixed inset-0 z-0"
    aria-hidden="true"
    style={{
      maskImage:
        "radial-gradient(110% 85% at 50% 32%, black 45%, transparent 98%)",
      WebkitMaskImage:
        "radial-gradient(110% 85% at 50% 32%, black 45%, transparent 98%)",
    }}
  >
    <FlowLines className="h-full w-full" />
  </div>

        <div
          className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.05] mix-blend-overlay"
          aria-hidden="true"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}