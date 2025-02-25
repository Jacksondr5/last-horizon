import Link from "next/link";
import EventButton from "@/components/event-button";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-20 text-center">
          {/* Logo */}
          <div className="text-navy-900 mb-8 text-6xl font-bold">
            Last<span className="text-blue-600"> Horizon</span>
          </div>

          {/* Tagline */}
          <h1 className="text-navy-900 mb-4 text-4xl font-bold tracking-tight">
            Banking for the rest of us
          </h1>
          <p className="mb-12 text-xl text-gray-600">
            A totally real bank that definitely won&apos;t lose your money
          </p>

          {/* CTA Buttons */}
          <div className="space-y-4 sm:space-x-4 sm:space-y-0">
            <EventButton
              variant="primary"
              size="lg"
              className="min-w-[200px]"
              asChild
              eventName="open_account_click"
            >
              <Link href="/oao/welcome">Open an Account</Link>
            </EventButton>
            <EventButton
              variant="outline"
              size="lg"
              className="min-w-[200px]"
              asChild
              eventName="sign_in_click"
            >
              <Link href="/dashboard">Sign In</Link>
            </EventButton>
          </div>

          {/* Feature List */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-2 text-lg font-semibold">Totally Secure</h3>
              <p className="text-gray-600">
                We keep your money safe using blockchain AI quantum computing
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-2 text-lg font-semibold">No Hidden Fees</h3>
              <p className="text-gray-600">
                All our fees are clearly visible in 2pt font at the bottom of
                page 47
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-2 text-lg font-semibold">24/7 Support</h3>
              <p className="text-gray-600">
                Our AI chatbot is always happy to misunderstand your questions
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-sm text-gray-500">
            <p>
              This is a demo application. Please don&apos;t try to deposit real
              money.
            </p>
            <p className="mt-2 text-xs">
              I mean, we&apos;ll take it, but we can&apos;t promise you&apos;ll
              get it back.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
