import Link from "next/link";

const NAV_LINKS = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Insights", "#insights"],
] as const;

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/70 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Main"
      >
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight"
        >
          CL<span className="text-primary">i</span>K
          <span className="text-primary">i</span>T
          <span className="text-cta">.</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-fog transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:hello@clikit.agency"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-night transition-all hover:bg-primary-soft hover:shadow-[0_0_24px_-6px_rgba(110,231,231,0.7)]"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}