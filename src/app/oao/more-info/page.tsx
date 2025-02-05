"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MaskedText } from "@/components/masked-text";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function MoreInfoPage() {
  const [hasDifferentAddress, setHasDifferentAddress] = useState(false);

  return (
    <div>
      {/* Progress bar */}
      <Progress value={20} text="FirstView Checking" className="mb-8" />

      {/* Header section */}
      <h2 className="text-navy-900 mb-2 text-2xl font-bold">
        Just a bit more info.
      </h2>
      <p className="mb-6 text-gray-600">
        We use this info to verify your identity and help prevent fraud. By
        continuing, you&apos;re giving us permission to check your consumer
        report.
      </p>

      <h3 className="mb-6 font-semibold">Identity</h3>

      <form className="space-y-6">
        {/* Date of Birth */}
        <div>
          <label htmlFor="dob" className="mb-2 block font-medium">
            Date of Birth
          </label>
          <Input id="dob" placeholder="mm/dd/yyyy" />
        </div>

        {/* SSN/ITIN */}
        <div>
          <label htmlFor="ssn" className="mb-2 block font-medium">
            SSN/ITIN
          </label>
          <MaskedText
            id="ssn"
            mask="___-__-____"
            value="dont edit this"
            hideInput
            readOnly
          />
          <p className="mt-1 flex items-start gap-2 rounded-md bg-gray-200 p-2 text-sm text-gray-800">
            <span className="">
              <ShieldCheck />
            </span>
            You&apos;re aren&apos;t actually going to enter your <i>real</i> SSN
            into a random banking application someone sent you over email,
            right?
          </p>
        </div>

        {/* Address section */}
        <div className="space-y-6">
          <h3 className="font-semibold">Address</h3>

          {/* Primary Address 1 */}
          <div>
            <label htmlFor="address1" className="mb-2 block font-medium">
              Primary Address 1
            </label>
            <Input id="address1" />
          </div>

          {/* Primary Address 2 */}
          <div>
            <label htmlFor="address2" className="mb-2 block font-medium">
              Primary Address 2{" "}
              <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <Input id="address2" />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="mb-2 block font-medium">
              City
            </label>
            <Input id="city" />
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="mb-2 block font-medium">
              State
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {/* Add state options here */}
                <SelectItem value="AL">Alabama</SelectItem>
                <SelectItem value="AK">Alaska</SelectItem>
                <SelectItem value="IDK">
                  I got tired of adding states, just pick one of these.
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Zip Code */}
          <div>
            <label htmlFor="zipCode" className="mb-2 block font-medium">
              Zip Code
            </label>
            <Input id="zipCode" className="bg-gray-50" />
          </div>
        </div>

        {/* Mailing Address Checkbox */}
        <div className="flex items-start gap-2">
          <Checkbox
            id="differentMailing"
            checked={hasDifferentAddress}
            onCheckedChange={(checked) =>
              setHasDifferentAddress(
                checked === "indeterminate" ? false : checked,
              )
            }
          />
          <label htmlFor="differentMailing" className="text-sm">
            My mailing address is different from my primary address
          </label>
        </div>

        {hasDifferentAddress && (
          <div>
            <p>
              That&apos;s fine, we&apos;ll just send your mail to your primary
              address. I can&apos;t be bothered to make more UI for this.
            </p>
          </div>
        )}

        {/* Continue Button */}
        <Button className="w-full" variant="primary" asChild>
          <Link href="/oao/identity">Continue</Link>
        </Button>
      </form>
    </div>
  );
}
