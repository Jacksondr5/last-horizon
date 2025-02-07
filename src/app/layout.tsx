import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import { AnalyticsProvider } from "@/contexts/AnalyticsContext";
export const metadata: Metadata = {
  title: "Last Horizon",
  description: "A testing platform for stuff",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <AnalyticsProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </AnalyticsProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
