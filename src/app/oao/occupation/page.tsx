"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OccupationPage() {
  const [occupation, setOccupation] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    // For demo purposes, redirect to bad-job page if they select "Influencer"
    if (occupation === "influencer") {
      router.push("/oao/employment/bad-job");
      return;
    }
    // Otherwise continue to next page
    router.push("/oao/income");
  };

  return (
    <div>
      {/* Progress bar */}
      <Progress value={30} text="FirstView Checking" className="mb-8" />

      {/* Main content */}
      <h2 className="text-navy-900 mb-2 text-2xl font-bold">
        What&apos;s your occupation or profession?
      </h2>
      <p className="mb-8 text-gray-600">
        We are required to ask for this information for regulatory purposes.
        We&apos;re also very nosy.
      </p>

      {/* Form */}
      <div className="space-y-6">
        <h3 className="font-medium">Employment Info</h3>

        <div className="space-y-2">
          <label htmlFor="occupation" className="block font-medium">
            Occupation or Profession
          </label>
          <Select onValueChange={setOccupation}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="software">Software Developer</SelectItem>
              <SelectItem value="healthcare">
                Healthcare Professional
              </SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="influencer">
                Social Media Influencer
              </SelectItem>
              {/* Add more occupations as needed */}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="employer" className="block font-medium">
            Employer Name
          </label>
          <Input id="employer" className="bg-gray-50" />
        </div>

        {/* Continue Button */}
        <Button variant="primary" className="w-full" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
}
