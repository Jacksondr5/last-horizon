"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MaskedText } from "@/components/masked-text";
import { useState } from "react";

export default function ContactInfoPage() {
  const [phone, setPhone] = useState("(___) ___-____");

  return (
    <div>
      {/* Header */}
      <h1 className="text-navy-900 mb-2 text-2xl font-bold">
        Let&apos;s get started.
      </h1>
      <p className="mb-6 text-gray-600">This should only take a few minutes.</p>

      <h2 className="mb-6 text-lg font-semibold">Contact Info</h2>

      <form className="space-y-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="mb-2 block font-medium">
            First Name
          </label>
          <Input
            id="firstName"
            footer="Make sure this matches the name on your government ID."
          />
        </div>

        {/* Middle Name */}
        <div>
          <label htmlFor="middleName" className="mb-2 block font-medium">
            Middle Name{" "}
            <span className="font-normal text-gray-500">(optional)</span>
          </label>
          <Input id="middleName" />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="mb-2 block font-medium">
            Last Name
          </label>
          <Input id="lastName" />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block font-medium">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            footer="We'll email you information about your account."
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-2 block font-medium">
            Mobile Number
          </label>
          <MaskedText
            id="phone"
            mask="(___) ___-____"
            value={phone}
            onChange={setPhone}
          />
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-600">
          By giving us your email address and mobile number, you give your
          consent to receive communications regarding your accounts with us.
          Please see our{" "}
          <Link href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </Link>{" "}
          for more details.
        </p>

        {/* Continue Button */}
        <Button className="mb-4 w-full" variant="primary" asChild>
          <Link href="/oao/more-info">Continue</Link>
        </Button>
      </form>
    </div>
  );
}
