import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact — CLiKiT",
  description:
    "Tell CLiKiT about your brand and what you're trying to solve. We reply within one business day.",
  path: "/contact",
});

const STEPS = [
  ["1", "We reply within one business day."],
  ["2", "A 20-minute call to see if it's a fit."],
  ["3", "If it is, a straightforward proposal — no bloated deck."],
] as const;

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your growth."
        subtitle="Tell us about your brand and what you're trying to solve. We reply within one business day."
      />

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="grid gap-14 md:grid-cols-[1fr_320px]">
          <div className="rounded-2xl border border-line bg-panel p-8 sm:p-10">
            <ContactForm />
          </div>

          <aside className="space-y-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-fog/70">
                Direct
              </p>
              <a
                href="mailto:hello@clikit.agency"
                className="mt-3 block font-display text-xl font-bold tracking-tight text-primary hover:text-primary-soft"
              >
                hello@clikit.agency
              </a>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-fog/70">
                What happens next
              </p>
              <ol className="mt-4 space-y-4">
                {STEPS.map(([num, text]) => (
                  <li key={num} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 font-mono text-xs text-primary">
                      {num}
                    </span>
                    <span className="pt-0.5 leading-snug text-fog">
                      {text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
