"use client";

import { useState } from "react";

/**
 * No backend is wired up yet, so this composes a mailto: link from the
 * filled-in fields and hands off to the visitor's email client. That's
 * honest and works with zero infrastructure, but it depends on the visitor
 * having a configured email client, and you get no structured record of
 * submissions.
 *
 * To collect submissions properly, replace handleSubmit with either:
 *  - a POST to a Next.js API route (src/app/api/contact/route.ts) that
 *    sends mail via a provider like Resend or Postmark, or
 *  - a form service like Formspree, wired via its endpoint URL.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `New project inquiry from ${name || "website"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      message,
    ].filter((line): line is string => line !== null);

    const mailto = `mailto:hello@clikit.agency?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-night px-4 py-2.5 text-white placeholder:text-fog/60 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-night px-4 py-2.5 text-white placeholder:text-fog/60 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-white"
        >
          Company{" "}
          <span className="font-normal text-fog/60">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-2 w-full rounded-lg border border-line bg-night px-4 py-2.5 text-white placeholder:text-fog/60 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          placeholder="Company name"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white"
        >
          What are you trying to solve?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full resize-none rounded-lg border border-line bg-night px-4 py-2.5 text-white placeholder:text-fog/60 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          placeholder="Tell us about your brand, your goals, and your timeline."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-primary px-7 py-3.5 font-semibold text-night shadow-[0_0_35px_-8px_rgba(46,211,211,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-soft hover:shadow-[0_0_45px_-6px_rgba(110,231,231,0.7)] sm:w-auto"
      >
        Send message
      </button>

      <p className="text-xs text-fog/60">
        This opens your email client with the message pre-filled — we read
        every message personally.
      </p>

      <div aria-live="polite" role="status">
        {submitted && (
          <div className="rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-white">
            <p className="font-semibold text-primary">
              Your email client should have opened.
            </p>
            <p className="mt-1 text-fog">
              If nothing happened, email us directly at{" "}
              <a
                href="mailto:hello@clikit.agency"
                className="text-primary underline underline-offset-2 hover:text-primary-soft"
              >
                hello@clikit.agency
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
