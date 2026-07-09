import Link from "next/link";

type CtaBandProps = {
  title: string;
  subtitle?: string;
};

export default function CtaBand({ title, subtitle }: CtaBandProps) {
  return (
    <section className="border-t border-line/60 bg-panel/50">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-lg text-fog">{subtitle}</p>}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-primary px-7 py-3.5 font-semibold text-night shadow-[0_0_35px_-8px_rgba(46,211,211,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-soft hover:shadow-[0_0_45px_-6px_rgba(110,231,231,0.7)]"
          >
            Book a call
          </Link>
          <Link
            href="/work"
            className="rounded-xl border border-line bg-white/[0.02] px-7 py-3.5 font-semibold text-white transition-colors hover:border-primary/50 hover:bg-white/[0.05]"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
