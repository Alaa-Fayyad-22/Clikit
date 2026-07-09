import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content-Security-Policy.
 *
 * This is a static marketing site, so we deliberately use the config-based
 * CSP (Next.js "Without Nonces" approach) rather than a nonce-based policy.
 * Nonces would force every page into dynamic rendering, disabling static
 * generation and CDN caching — the wrong trade-off for a brochure site.
 *
 * Notes on the sources below:
 *  - Fonts are self-hosted: `next/font/google` downloads and serves the font
 *    files from our own origin at build time, so `font-src 'self'` is enough
 *    and we do NOT need fonts.googleapis.com / fonts.gstatic.com.
 *  - `'unsafe-inline'` on script/style is required because Next.js injects
 *    inline bootstrap scripts (hydration/streaming) and inline styles, and we
 *    are not using nonces. It is the documented static-rendering trade-off.
 *  - `data:` in img-src covers the inline SVG film-grain background in
 *    globals.css. `blob:` is kept for Next.js image handling.
 *  - `'unsafe-eval'` is added in development only (React dev tooling uses it);
 *    it is never emitted in production.
 */
const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' blob: data:`,
  `font-src 'self'`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  // Same-origin nav/data fetches; ws:/wss: needed for HMR in dev only.
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  `upgrade-insecure-requests`,
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Belt-and-suspenders with CSP frame-ancestors for older browsers.
  { key: "X-Frame-Options", value: "DENY" },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework/version in responses.
  poweredByHeader: false,
  // Never emit browser source maps in production builds (this is also the
  // default, but we pin it so a future change can't leak source unexpectedly).
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
