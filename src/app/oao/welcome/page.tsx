"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useAnalytics } from "@/contexts/AnalyticsContext";
export default function WelcomePage() {
  const [isExistingCustomer, setIsExistingCustomer] = useState<string>("");
  const { captureEvent } = useAnalytics();
  return (
    <div>
      {/* Header */}
      <h1 className="text-navy-900 mb-2 text-2xl font-bold">
        Before we start.
      </h1>
      <p className="mb-6 text-gray-600">Here are a few things to know.</p>

      {/* Info box */}
      <div className="mb-8 rounded-lg bg-blue-50 p-4">
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>This should take 5-10 minutes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>
              If you need a break, your progress will be saved so you can return
              anytime
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>
              You&apos;ll need your social security number and driver&apos;s
              license or state ID
            </span>
          </li>
        </ul>
      </div>

      {/* Customer question */}
      <div className="mb-8">
        <p className="mb-4 font-medium">
          Are you a First Horizon Digital Banking customer?
        </p>
        <RadioGroup defaultValue="" onValueChange={setIsExistingCustomer}>
          <div className="mb-3 flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <label htmlFor="no">No</label>
          </div>
        </RadioGroup>
      </div>
      {isExistingCustomer === "yes" && (
        <p className="text-md mb-4 text-lg font-semibold text-gray-600">
          Great! I&apos;d tell you to proceed to login to your existing account
          for a quicker application, but this is a fake banking app, so we
          don&apos;t have those fancy features.
        </p>
      )}
      {/* Additional fields when "No" is selected */}
      {isExistingCustomer === "no" && (
        <div className="mb-8 space-y-4">
          <div>
            <label htmlFor="zipCode" className="mb-2 block font-medium">
              Zip Code
            </label>
            <Input
              id="zipCode"
              footer="Enter the 5-digit zip code of your home address"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="promoCode" className="mb-2 block font-medium">
              Promo Code{" "}
              <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <Input id="promoCode" className="w-full bg-gray-50" />
          </div>
        </div>
      )}

      {/* Location notice */}
      <p className="mb-8 text-sm text-gray-600">
        Applicant must reside within 50 miles of a{" "}
        <Link
          href="https://letmegooglethat.com/?q=first+horizon+banking+center+near+me"
          className="underline"
        >
          First Horizon banking center
        </Link>
        .
      </p>

      {/* Action buttons */}
      <Button
        className="mb-4 w-full"
        variant="primary"
        asChild
        onClick={() =>
          captureEvent("user_is_existing_customer", {
            value: isExistingCustomer,
          })
        }
      >
        <Link href="/oao/citizen">Continue</Link>
      </Button>

      <Link href="#" className="block text-center text-gray-600 underline">
        Resume Application
      </Link>
    </div>
  );
}
