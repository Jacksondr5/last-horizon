import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CitizenPage() {
  return (
    <div>
      {/* Header */}
      <h1 className="text-navy-900 mb-2 text-2xl font-bold">
        Are you a U.S. citizen?
      </h1>
      <p className="mb-8 text-gray-600">
        This is to confirm your eligibility to open an account.
      </p>

      {/* Selection buttons */}
      <div className="mb-8 space-y-3">
        <Button
          variant="outline"
          className="h-12 w-full justify-center text-base font-normal"
          asChild
        >
          <Link href="/oao/contact-info">Yes</Link>
        </Button>
        <Button
          variant="outline"
          className="h-12 w-full justify-center text-base font-normal"
          asChild
        >
          <Link href="/oao/contact-info">No</Link>
        </Button>
      </div>

      {/* Footer text */}
      <p className="text-sm text-gray-600">
        Applicant must be at least 18 years of age and a US citizen to open an
        account online.
      </p>
    </div>
  );
}
