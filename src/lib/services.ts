export type Service = {
  slug: string;
  num: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "performance-marketing",
    num: "01",
    title: "Performance marketing",
    summary:
      "Paid search and social campaigns, optimized weekly against revenue — not impressions.",
    description:
      "We run paid search and paid social as a revenue channel, not a media-buying exercise. Every campaign is built around a target cost-per-acquisition and reviewed weekly against pipeline data — never against click-through rate or impressions. If a channel isn't paying for itself within an agreed window, we say so and reallocate the budget.",
    deliverables: [
      "Google & Meta ad account setup and management",
      "Weekly optimization against CAC and ROAS targets",
      "Landing page testing to lift conversion rate",
      "Monthly reporting tied to pipeline and revenue",
    ],
    idealFor:
      "Teams with a proven offer who need acquisition that scales predictably.",
  },
  {
    slug: "seo-content",
    num: "02",
    title: "SEO & content",
    summary:
      "Rank for what your buyers actually search, with content they actually read.",
    description:
      "SEO only matters if it brings in people who buy. We start with the searches your actual buyers type — not broad keyword volume — and build content around those. Technical fixes come first, then a content calendar built to rank and convert, not just to fill a blog.",
    deliverables: [
      "Technical SEO audit and fixes",
      "Keyword research tied to buyer intent",
      "Monthly content calendar and writing",
      "Quarterly ranking and traffic reporting",
    ],
    idealFor:
      "Companies playing a longer game who want organic traffic that compounds.",
  },
  {
    slug: "brand-web-design",
    num: "03",
    title: "Brand & web design",
    summary: "Minimal, fast websites built to convert visitors into customers.",
    description:
      "A good site is a sales tool, not a portfolio piece. We design and build fast, minimal sites focused on getting a visitor from landing to action — whether that's a booked call, a signup, or a purchase. No template themes, no bloated page builders.",
    deliverables: [
      "Brand identity or refresh (logo, type, color system)",
      "Custom website design and build",
      "Conversion-focused copywriting",
      "Performance and accessibility audit before launch",
    ],
    idealFor:
      "Brands whose current site undersells them or converts too little traffic.",
    featured: true,
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
