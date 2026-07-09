import Link from "next/link";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-16">
      {/* Signature motif — the logo's flowing lines, drifting behind everything */}
      {/* <div
        className="waves-drift pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(110% 85% at 50% 32%, black 45%, transparent 98%)",
          WebkitMaskImage:
            "radial-gradient(110% 85% at 50% 32%, black 45%, transparent 98%)",
        }}
        aria-hidden="true"
      >
        <FlowLines className="h-full w-full" />
      </div> */}

      {/* Teal / green auras, echoing the logo glow */}
      {/* <div
        className="glow-orb pointer-events-none absolute left-[10%] top-[20%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(46,211,211,0.2),transparent_65%)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="glow-orb pointer-events-none absolute right-[8%] top-[30%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(108,207,79,0.15),transparent_65%)] blur-2xl [animation-delay:-4.5s]"
        aria-hidden="true"
      /> */}

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <p className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-[13px] tracking-wide text-primary">
          Digital marketing agency
        </p>

        <h1 className="mt-8 font-display text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl md:text-7xl">
          We build brands
          <br />
          that <Typewriter />
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-fog">
          Strategy, content and performance marketing for companies that want
          measurable growth — not vanity metrics.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-primary px-7 py-3.5 font-semibold text-night shadow-[0_0_35px_-8px_rgba(46,211,211,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-soft hover:shadow-[0_0_45px_-6px_rgba(110,231,231,0.7)]"
          >
            Start your project
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
