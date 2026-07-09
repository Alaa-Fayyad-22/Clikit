import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsBar from "@/components/StatsBar";
import { serializeJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Strategy, content and performance marketing for companies that want measurable growth — not vanity metrics.",
};

export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }}
      />
      <Hero />
      <StatsBar />
      <Services />
    </main>
  );
}
