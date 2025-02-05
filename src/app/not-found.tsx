"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/back-button";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  return (
    <div className="px-4 py-6">
      {/* Back button */}
      <BackButton />

      {/* Header */}
      <h1 className="text-navy-900 mb-2 text-2xl font-bold">Page not found.</h1>
      <p className="mb-8 text-lg text-gray-600">
        We told you this was a fake banking app right? Did you really expect us
        to have <i>all</i> of our pages working?
      </p>

      {/* Action buttons */}
      <div className="space-y-4">
        <Button variant="primary" className="w-full" asChild>
          <Link href="/oao/welcome">Start a New Application</Link>
        </Button>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => router.back()}
        >
          Go back to where you were
        </Button>
      </div>
    </div>
  );
}
