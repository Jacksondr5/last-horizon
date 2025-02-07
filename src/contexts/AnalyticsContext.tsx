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
      api_host: "https://us.i.posthog.com",
      person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    });
    mixpanel.init("db07f3010c7a3b4fb335f63e958770c0", {
      persistence: "localStorage",
      debug: true,
      // types don't match the docs for this one, so we need to cast it to any
      autocapture: true,
    } as unknown as Config);
    LogRocket.init("rmdvl6/last-horizon");
    amplitude.init("774e3c5338de61ff40858286506bd47d", { autocapture: true });
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
