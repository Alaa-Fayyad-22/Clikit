import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import { ARTICLES } from "@/lib/insights";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Insights — CLiKiT",
  description:
    "Notes on strategy, content and performance marketing from the CLiKiT team.",
  path: "/insights",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Insights"
        title="Notes on growth, from the team doing the work."
        subtitle="No gated whitepapers, no fluff — just what we've actually seen work."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
           <Link
  key={article.slug}
  href={`/insights/${article.slug}`}
  className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-panel p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_50px_-25px_rgba(46,211,211,0.35)]"
>
  {/* Hover overlay */}
  <div
    className="absolute inset-0 bg-[rgba(46,211,211,0.05)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
    aria-hidden="true"
  />

  {/* Content */}
  <div className="relative z-10 flex flex-col h-full">
    <span className="w-fit rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
      {article.category}
    </span>

    <h2 className="mt-6 font-display text-xl font-bold leading-snug tracking-tight">
      {article.title}
    </h2>

    <p className="mt-3 leading-relaxed text-fog">
      {article.excerpt}
    </p>

    <p className="mt-6 font-mono text-xs text-fog/70">
      {formatDate(article.date)} · {article.readTime}
    </p>

    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
      Read the article
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </span>
  </div>
</Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Have a topic you want covered?"
        subtitle="Let us know what you're wrestling with."
      />
    </main>
  );
}
