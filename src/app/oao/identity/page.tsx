import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import {
  CreditCard,
  Smartphone,
  BookOpen,
  IdCard,
  ChevronRight,
} from "lucide-react";

export default function IdentityPage() {
  return (
    <div>
      {/* Progress bar */}
      <Progress value={30} text="FirstView Checking" className="mb-8" />

      {/* Main content */}
      <h2 className="text-navy-900 mb-2 text-2xl font-bold">
        Let&apos;s confirm it&apos;s you.
      </h2>
      <p className="mb-8 text-gray-600">
        Upload a photo of an ID type below. It&apos;s quick and secure, and
        trusted by millions of users.
      </p>

      {/* ID Type Selection */}
      <div className="mb-6 space-y-3">
        <h3 className="mb-2 font-medium">Select ID type</h3>

        {/* Driver's License */}
        <Link
          href="/oao/identity/confirm"
          className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-blue-600" />
            <span>Driver&apos;s license</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        {/* Military ID */}
        <Link
          href="/oao/identity/confirm"
          className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <Smartphone className="h-5 w-5 text-blue-600" />
            <span>Military ID</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        {/* Passport */}
        <Link
          href="/oao/identity/confirm"
          className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <span>Passport</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        {/* State ID */}
        <Link
          href="/oao/identity/confirm"
          className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <IdCard className="h-5 w-5 text-blue-600" />
            <span>State issued ID card</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>
      </div>

      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-4 text-gray-500">or</span>
        </div>
      </div>

      {/* Manual Entry Option */}
      <Link
        href="/oao/identity/confirm"
        className="block w-full rounded-lg border border-blue-600 p-4 text-center text-blue-600"
      >
        Enter manually
      </Link>

      {/* Footer Text */}
      <p className="mt-6 text-sm text-gray-600">
        By selecting your ID type on this screen, you agree to our collection,
        use, and storage of your information for identity verification. Please
        see our{" "}
        <Link href="/privacy-policy" className="text-blue-600 underline">
          Privacy Policy
        </Link>{" "}
        for more details.
      </p>
    </div>
  );
}
