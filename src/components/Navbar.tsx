"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // A section is "active" on its own page and any page nested under it
  // (e.g. "/work" stays highlighted while viewing "/work/some-case-study").
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  // Close on Escape and return focus to the toggle; lock body scroll while open.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/70 backdrop-blur-md">
     <nav className="flex h-16 w-full items-center justify-between px-8 lg:px-12"
        aria-label="Main"
      >
        <Link
          href="/"
          className="font-display text-xxl font-bold"
          onClick={() => setOpen(false)}
        >
          {/* CL<span className="text-primary">i</span>K
          <span className="text-primary">i</span>T
          <span className="text-cta">.</span> */}

<div className="flex items-center">
  <Image
    src="/logo_2.png"
    alt="CLiKiT logo"
    width={320}
    height={80}
    className="h-8 w-full h-full  sm:h-10 md:h-12"
    priority
  />
</div>

        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <li key={label}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    active
                      ? "font-semibold text-primary"
                      : "text-fog hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-night transition-all hover:bg-primary-soft hover:shadow-[0_0_24px_-6px_rgba(110,231,231,0.7)] md:inline-block"
        >
          Book a call
        </Link>

        {/* Mobile menu toggle */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white transition-colors hover:border-primary/50 md:hidden"
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/5 bg-night/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-3 text-base transition-colors ${
                      active
                        ? "bg-primary/10 font-semibold text-primary"
                        : "text-fog hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-night transition-all hover:bg-primary-soft"
              >
                Book a call
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}