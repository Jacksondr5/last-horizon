import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AccountCardProps {
  name: string;
  accountNumber: string;
  balance: string;
  type: string;
}

function AccountCard({ name, accountNumber, balance, type }: AccountCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="mb-4">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-500">****{accountNumber}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">{balance}</span>
        <span className="text-sm text-gray-500">{type}</span>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-navy-900 text-2xl font-bold">Welcome back!</h1>
        <p className="text-gray-600">Here&apos;s your financial overview</p>
      </div>

      {/* Accounts List */}
      <div className="mb-8 space-y-4">
        <AccountCard
          name="FirstView Checking"
          accountNumber="4321"
          balance="$2,459.21"
          type="Checking"
        />
        <AccountCard
          name="FirstSave Savings"
          accountNumber="8765"
          balance="$12,543.89"
          type="Savings"
        />
        <AccountCard
          name="Premier CD"
          accountNumber="9876"
          balance="$25,000.00"
          type="Certificate of Deposit"
        />
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <Button variant="primary" className="w-full">
          <Link href="/dashboard/transfer">Transfer Money</Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/oao/welcome">Open New Account</Link>
        </Button>
      </div>
    </div>
  );
}
