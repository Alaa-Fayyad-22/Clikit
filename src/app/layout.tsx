import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "CLiKiT — We build brands that convert",
  description:
    "Strategy, content and performance marketing for companies that want measurable growth — not vanity metrics.",
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
      className={`${body.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="bg-night font-sans text-white antialiased">
        {/* Decorative film grain over the whole page */}
        <div
          className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.05] mix-blend-overlay"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}