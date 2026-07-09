import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import { CASE_STUDIES } from "@/lib/work";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Work — Case studies & real revenue results",
  description:
    "Real campaigns, real revenue. See how CLiKiT turned paid search, SEO and rebrands into measurable growth for outdoor, healthcare and DTC brands.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Our work"
        title="Real campaigns, real revenue."
        subtitle="A few of the brands we've helped grow — and exactly what changed."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-panel p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_50px_-25px_rgba(46,211,211,0.35)]"
            >
              <span className="w-fit rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
                {study.industry}
              </span>

              <h2 className="mt-6 font-display text-2xl font-bold tracking-tight">
                {study.client}
              </h2>

              <p className="mt-3 leading-relaxed text-fog">{study.summary}</p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {study.results.slice(0, 2).map((result) => (
                  <p key={result.label} className="font-mono text-sm">
                    <span className="font-semibold text-white">
                      {result.value}
                    </span>{" "}
                    <span className="text-fog/70">{result.label}</span>
                  </p>
                ))}
              </div>

              <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-primary">
                Read the case study
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Want to be the next one here?"
        subtitle="Tell us what you're building."
      />
    </main>
  );
}
