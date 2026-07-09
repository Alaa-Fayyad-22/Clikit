import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { ARTICLES, getArticle } from "@/lib/insights";
import { pageMeta, serializeJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMeta({
    title: `${article.title} — CLiKiT`,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    type: "article",
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.date,
      author: { "@type": "Organization", name: SITE_NAME },
      publisher: { "@type": "Organization", name: SITE_NAME },
      mainEntityOfPage: `${SITE_URL}/insights/${article.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insights",
          item: `${SITE_URL}/insights`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `${SITE_URL}/insights/${article.slug}`,
        },
      ],
    },
  ];

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6 pt-40 pb-16 sm:pt-44">
        <p className="w-fit rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-[13px] tracking-wide text-primary">
          {article.category}
        </p>
        <h1 className="mt-8 font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 font-mono text-sm text-fog/70">
          {formatDate(article.date)} · {article.readTime}
        </p>
      </div>

      <section className="mx-auto max-w-2xl px-6 pb-24">
        <div className="space-y-6">
          {article.body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-fog">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <CtaBand
        title="Like what you read?"
        subtitle="Let's talk about applying this to your brand."
      />
    </main>
  );
}
