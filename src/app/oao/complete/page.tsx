import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CompletePage() {
  return (
    <div>
      <h1 className="text-navy-900 mb-2 text-2xl font-bold">
        Yay, you opened a new account!
      </h1>
      <p className="mb-6 text-gray-600">
        Now, you can head over to the dashboard to see your new account.
      </p>
      <Button variant="primary" asChild>
        <Link href="/dashboard">Go to dashboard</Link>
      </Button>
    </div>
  );
}
