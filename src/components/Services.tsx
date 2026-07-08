import FlowLines from "./FlowLines";

const SERVICES = [
  {
    num: "01",
    title: "Performance marketing",
    desc: "Paid search and social campaigns, optimized weekly against revenue — not impressions.",
    featured: false,
  },
  {
    num: "02",
    title: "SEO & content",
    desc: "Rank for what your buyers actually search, with content they actually read.",
    featured: false,
  },
  {
    num: "03",
    title: "Brand & web design",
    desc: "Minimal, fast websites built to convert visitors into customers.",
    featured: true,
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-28">
      {/* Faint echo of the motif, drifting off the right edge */}
      <div
        className="pointer-events-none absolute -right-96 -top-40 w-[70rem] rotate-12 opacity-40"
        style={{
          maskImage:
            "radial-gradient(60% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(60% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <FlowLines animated={false} lines={11} className="h-auto w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Everything your brand needs to{" "}
            <span className="text-primary">grow.</span>
          </h2>
          <p className="mt-5 text-lg text-fog">
            Three focused services. One senior team. No fluff.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.num}
              className={`group relative flex flex-col rounded-2xl border bg-panel p-8 transition-all duration-300 hover:-translate-y-1 ${
                service.featured
                  ? "border-cta/60 shadow-[0_0_45px_-18px_rgba(139,255,92,0.45)] hover:border-cta hover:shadow-[0_0_60px_-15px_rgba(139,255,92,0.55)]"
                  : "border-line hover:border-primary/50 hover:shadow-[0_18px_50px_-25px_rgba(46,211,211,0.35)]"
              }`}
            >
              <span
                className={`w-fit rounded-md border px-2.5 py-1 font-mono text-sm ${
                  service.featured
                    ? "border-cta/25 bg-cta/10 text-cta"
                    : "border-primary/25 bg-primary/10 text-primary"
                }`}
              >
                {service.num}
              </span>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-3 leading-relaxed text-fog">{service.desc}</p>

              <a
                href="#contact"
                className={`mt-auto inline-flex items-center gap-2 pt-10 text-sm font-semibold ${
                  service.featured ? "text-cta" : "text-primary"
                }`}
              >
                Learn more
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}