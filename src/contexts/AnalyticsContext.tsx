"use client";

import React, { createContext, useCallback, useContext } from "react";
import { env } from "@/env";
import { usePostHog } from "posthog-js/react";

interface AnalyticsContextType {
  captureEvent: (eventName: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined,
);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const posthog = usePostHog();
  const captureEvent = useCallback(
    (eventName: string, properties?: Record<string, any>) => {
      if (typeof window === "undefined") return;

      // Log to console in development
      if (env.NODE_ENV === "development") {
        console.log("Analytics Event:", eventName, properties);
      }

      posthog.capture(eventName, properties);
    },
    [posthog],
  );

  return (
    <AnalyticsContext.Provider value={{ captureEvent }}>
      {children}
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
