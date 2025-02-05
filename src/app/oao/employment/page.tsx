import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function EmploymentPage() {
  return (
    <div>
      {/* Progress bar */}
      <Progress value={30} text="FirstView Checking" className="mb-8" />

      {/* Main content */}
      <h2 className="text-navy-900 mb-2 text-2xl font-bold">
        Tell us about your employment.
      </h2>
      <p className="mb-8 text-gray-600">
        We are required to ask for this information for regulatory purposes.
      </p>

      {/* Employment Status */}
      <div className="space-y-3">
        <h3 className="mb-2 font-medium">Employment Status</h3>

        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/occupation">Employment (Full or part time)</Link>
        </Button>

        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/occupation">Self-employed</Link>
        </Button>

        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/employment/bad-job">Paid leave</Link>
        </Button>

        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/employment/bad-job">Student</Link>
        </Button>

        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/employment/bad-job">Retired</Link>
        </Button>

        <Button variant="option" className="w-full" asChild>
          <Link href="/oao/employment/bad-job">Unemployed</Link>
        </Button>
      </div>
    </div>
  );
}
