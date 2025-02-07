"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import mixpanel, { type Config } from "mixpanel-browser";
import LogRocket from "logrocket";
import * as amplitude from "@amplitude/analytics-browser";
import { useUser } from "@clerk/nextjs";
import { type BrowserConfig } from "@amplitude/analytics-types";
interface AnalyticsContextType {
  captureEvent: (
    eventName: string,
    properties?: Record<string, unknown>,
  ) => void;
  identifyUser: (userId: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined,
);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  useEffect(() => {
    posthog.init("phc_IZ7mch276EcoM2IkrasEOF1XaJBMTwJKEKSrTe72zSf", {
      api_host: "/ingest",
      person_profiles: "identified_only",
      ui_host: "https://us.posthog.com",
    });
    mixpanel.init("db07f3010c7a3b4fb335f63e958770c0", {
      api_host: "/api/mixpanel",
      persistence: "localStorage",
      debug: true,
      // types don't match the docs for this one, so we need to cast it to any
      autocapture: true,
    } as unknown as Config);
    LogRocket.init("rmdvl6/last-horizon", {
      // serverURL: `${window.location.origin}/api/logrocket`,
    });
    amplitude.init("774e3c5338de61ff40858286506bd47d", {
      autocapture: true,
      // Amplitude seems to just ignore this.  No clue how to actually redirect the requests.
      serverURL: `${window.location.origin}/api/amplitude`,
      // Amplitude's types seem to be screwed up as well.  The docs say this is what I should use, but it's not valid.
      // https://amplitude.com/docs/sdks/analytics/browser/browser-sdk-2#configure-the-sdk
    } as unknown as BrowserConfig);
  }, []);

  const captureEvent = useCallback(
    (eventName: string, properties?: Record<string, unknown>) => {
      if (typeof window === "undefined") return;

      posthog.capture(eventName, properties);
      mixpanel.track(eventName, properties);
      LogRocket.log(eventName, properties);
      amplitude.track(eventName, properties);
    },
    [],
  );

  const identifyUser = useCallback((userId: string) => {
    posthog.identify(userId);
    mixpanel.identify(userId);
    LogRocket.identify(userId);
    amplitude.setUserId(userId);
  }, []);

  const unidentifyUser = useCallback(() => {
    posthog.reset();
    mixpanel.reset();
    LogRocket.startNewSession();
    amplitude.reset();
  }, []);

  useEffect(() => {
    if (user) {
      identifyUser(user.id);
    } else {
      unidentifyUser();
    }
  }, [user, identifyUser, unidentifyUser]);

  return (
    <AnalyticsContext.Provider value={{ captureEvent, identifyUser }}>
      <PostHogProvider client={posthog}>{children}</PostHogProvider>
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
  }
  return context;
}
