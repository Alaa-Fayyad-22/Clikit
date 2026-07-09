import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-svh flex-col items-center justify-center px-6 pt-16 text-center"
    >
      <p className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-[13px] tracking-wide text-primary">
        404
      </p>
      <h1 className="mt-8 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        This page didn&apos;t convert.
      </h1>
      <p className="mt-5 max-w-md text-lg text-fog">
        The page you&apos;re looking for doesn&apos;t exist, or moved
        somewhere else.
      </p>
      <Link
        href="/"
        className="mt-9 rounded-xl bg-primary px-7 py-3.5 font-semibold text-night shadow-[0_0_35px_-8px_rgba(46,211,211,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-soft hover:shadow-[0_0_45px_-6px_rgba(110,231,231,0.7)]"
      >
        Back to home
      </Link>
    </main>
  );
}
