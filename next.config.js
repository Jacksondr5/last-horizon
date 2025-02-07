/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  async rewrites() {
    return [
      // PostHog
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
      // MixPanel
      {
        source: "/api/mixpanel/:path*",
        destination: "https://api.mixpanel.com/:path*",
      },
      // LogRocket
      {
        source: "/api/logrocket/:path*",
        destination: "https://r.lrkt-in.com/i/:path*",
      },
      {
        source: "/scripts/logrocket/logger.min.js",
        destination: "https://r.lrkt-in.com/logger.min.js",
      },
      // Amplitude
      {
        source: "/api/amplitude/:path*",
        destination: "https://api2.amplitude.com/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default config;
