import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import { SERVICES } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Services — CLiKiT",
  description:
    "Performance marketing, SEO & content, and brand & web design — three focused services from one senior team.",
  path: "/services",
});

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
      aria-hidden="true"
    >
      <path
        d="M4 10.5L8 14.5L16 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Services"
        title="Three services. One senior team."
        subtitle="No bundled retainers, no bloated scopes — pick what your brand actually needs right now."
      />

      <div className="mx-auto max-w-5xl px-6 pb-8">
        {SERVICES.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-16 ${
              i !== 0 ? "border-t border-line/60" : ""
            }`}
          >
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-14">
              <div className="flex md:flex-col md:items-start">
                <span
                  className={`w-fit rounded-md border px-2.5 py-1 font-mono text-sm ${
                    service.featured
                      ? "border-cta/25 bg-cta/10 text-cta"
                      : "border-primary/25 bg-primary/10 text-primary"
                  }`}
                >
                  {service.num}
                </span>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-fog">
                  {service.description}
                </p>

                <div className="mt-8 grid gap-10 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-fog/70">
                      What&apos;s included
                    </p>
                    <ul className="mt-4 space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckIcon />
                          <span className="leading-snug text-fog">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-fog/70">
                      Ideal for
                    </p>
                    <p className="mt-4 leading-relaxed text-white">
                      {service.idealFor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaBand
        title="Not sure which service fits?"
        subtitle="Book a 20-minute call — we'll tell you straight, even if the answer is 'not us.'"
      />
    </main>
  );
}
