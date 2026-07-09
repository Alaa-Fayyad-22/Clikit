import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About CLiKiT — The senior-only marketing team",
  description:
    "Meet CLiKiT: a small, senior-only team of strategists, writers and designers. Every client works directly with the person doing the work — no junior hand-offs.",
  path: "/about",
});

const VALUES = [
  {
    title: "Revenue over vanity",
    desc: "We report on pipeline and revenue, not likes and impressions. If a number doesn't move the business, we don't lead with it.",
  },
  {
    title: "Senior, start to finish",
    desc: "The strategist you meet in the first call is the one running your account in month six. No hand-offs to a junior team.",
  },
  {
    title: "Plain-spoken reporting",
    desc: "Every report answers one question: is this working? You'll never need a decoder ring for your own results.",
  },
] as const;

const TEAM = [
  { initials: "MR", name: "Mara Reyes", role: "Founder & Strategy Lead" },
  { initials: "JK", name: "Jonah Kessler", role: "Performance Marketing" },
  { initials: "PS", name: "Priya Shah", role: "SEO & Content" },
  { initials: "TL", name: "Theo Lindqvist", role: "Brand & Web Design" },
] as const;

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="About CLiKiT"
        title={
          <>
            We&apos;re the senior team
            <br />
            you wish you&apos;d hired first.
          </>
        }
        subtitle="CLiKiT started because too many good companies were paying agency prices for junior-team execution. We fixed that by staying small on purpose."
      />

      {/* Story */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Built to stay small.
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-fog">
              <p>
                CLiKiT was founded in 2019 by a performance marketer who was
                tired of watching client budgets fund agency overhead instead
                of ad spend. So the model is deliberately narrow: three
                services, one senior team, no bench of juniors learning on
                your dime.
              </p>
              <p>
                Every client works directly with the person who does the
                work. No account manager relaying messages, no strategy deck
                handed off to someone who&apos;s never seen your product.
                That&apos;s the whole differentiator — not a tagline, just how
                we&apos;re staffed.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-panel p-10">
            <p className="font-display text-2xl leading-snug tracking-tight text-white sm:text-3xl">
              &ldquo;We don&apos;t take on clients we can&apos;t put a senior
              person on. That cap is the whole business model.&rdquo;
            </p>
            <p className="mt-6 font-mono text-sm text-fog">
              — Mara Reyes, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-line/60 bg-panel/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              How we work
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-line bg-night p-8"
              >
                <span
                  className="block h-2 w-2 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-fog">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The team
          </h2>
          <p className="mt-4 text-lg text-fog">
            Four people, three disciplines, zero hand-offs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center rounded-2xl border border-line bg-panel p-8 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                {person.initials}
              </div>
              <p className="mt-5 font-semibold text-white">{person.name}</p>
              <p className="mt-1 text-sm text-fog">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Let's talk about your growth."
        subtitle="One call, no deck — just a straight read on where you stand."
      />
    </main>
  );
}
