import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] tracking-wide text-fog/70"
        >
          {FOOTER_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] tracking-wide text-fog/70">
          <p>© CLiKiT Agency</p>
          <a
            href="mailto:hello@clikit.agency"
            className="transition-colors hover:text-primary"
          >
            hello@clikit.agency
          </a>
        </div>
      </div>
    </footer>
  );
}
