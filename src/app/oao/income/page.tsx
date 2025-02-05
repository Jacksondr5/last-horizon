import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function IncomePage() {
  return (
    <div className="px-4 py-6">
      {/* Progress bar */}
      <Progress value={30} text="FirstView Checking" className="mb-8" />

      {/* Main content */}
      <h2 className="text-navy-900 mb-2 text-2xl font-bold">
        What&apos;s your primary source of income?
      </h2>
      <p className="mb-8 text-gray-600">
        This won&apos;t affect the approval of your application. But we will
        keep this in mind for the future.
      </p>

      {/* Income Sources */}
      <div className="space-y-3">
        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/sign-up">Salaried Employment</Link>
        </Button>

        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/sign-up">Entrepreneural Spirit</Link>
        </Button>

        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/sign-up">Panhandling</Link>
        </Button>

        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/sign-up">Cyrpto Scheming</Link>
        </Button>

        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/sign-up">Sugar Daddy/Mommy</Link>
        </Button>

        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/sign-up">Prefer Not to Say</Link>
        </Button>
      </div>
    </div>
  );
}
