export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-[13px] tracking-wide text-fog/70">
        <p>© CLiKiT Agency</p>
        <a
          href="mailto:hello@clikit.agency"
          className="transition-colors hover:text-primary"
        >
          hello@clikit.agency
        </a>
      </div>
    </footer>
  );
}