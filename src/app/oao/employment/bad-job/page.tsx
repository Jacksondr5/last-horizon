import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BadJobPage() {
  return (
    <div>
      {/* Header */}
      <h1 className="text-navy-900 mb-2 text-2xl font-bold">
        That&apos;s not a real job, try again.
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        I&apos;m noy saying it&apos;s OK to lie to the bank about your
        employment status, but from what you&apos;ve seen so far do you really
        think we&apos;re going to check it?
      </p>

      {/* Action button */}
      <Button variant="primary" className="w-full" asChild>
        <Link href="/oao/employment">Try Again</Link>
      </Button>
    </div>
  );
}
