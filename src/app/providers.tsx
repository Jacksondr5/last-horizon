// app/providers.js
"use client";
import { env } from "@/env";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import mixpanel from "mixpanel-browser";

if (typeof window !== "undefined") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
  });
  mixpanel.init(env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
    persistence: "localStorage",
    debug: true,
    // types don't match the docs for this one, so we need to cast it to any
    autocapture: true,
  } as any);
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
