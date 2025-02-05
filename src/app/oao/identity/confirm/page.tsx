import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function IdentityConfirmPage() {
  return (
    <div>
      {/* Header */}
      <h1 className="text-navy-900 mb-2 text-2xl font-bold">
        Actually, that sounds pretty hard.
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        You seem trustworthy, so let&apos;s just pretend that we verified your
        ID and that you are who you say you are.
      </p>

      {/* Action button */}
      <Button variant="primary" className="w-full" asChild>
        <Link href="/oao/employment">Continue</Link>
      </Button>
    </div>
  );
}
