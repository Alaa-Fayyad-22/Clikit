import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { pageMeta, serializeJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { CASE_STUDIES, getCaseStudy } from "@/lib/work";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMeta({
    title: `${study.client} — CLiKiT`,
    description: study.summary,
    path: `/work/${study.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${SITE_URL}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.client,
        item: `${SITE_URL}/work/${study.slug}`,
      },
    ],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6 pt-40 pb-16 text-center sm:pt-44">
        <p className="mx-auto w-fit rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-[13px] tracking-wide text-primary">
          {study.industry}
        </p>
        <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          {study.client}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fog">
          {study.summary}
        </p>
      </div>

      {/* Results strip */}
      <section className="border-y border-line/60 bg-panel/50">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-16 gap-y-4 px-6 py-10">
          {study.results.map((result) => (
            <div key={result.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {result.value}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-fog/70">
                {result.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-14">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              The challenge
            </h2>
            <p className="mt-4 leading-relaxed text-fog">{study.challenge}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              What we did
            </h2>
            <ul className="mt-5 space-y-3">
              {study.approach.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed text-fog">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              The outcome
            </h2>
            <p className="mt-4 leading-relaxed text-fog">{study.outcome}</p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want results like this?"
        subtitle="Tell us where your numbers are stuck."
      />
    </main>
  );
}
