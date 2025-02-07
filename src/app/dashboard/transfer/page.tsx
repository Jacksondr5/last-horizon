"use client";

import { Button } from "@/components/ui/button";
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

const ACCOUNTS = [
  {
    id: "checking",
    name: "FirstView Checking",
    number: "****4321",
    balance: "$2,459.21",
  },
  {
    id: "savings",
    name: "FirstSave Savings",
    number: "****8765",
    balance: "$12,543.89",
  },
  { id: "cd", name: "Premier CD", number: "****9876", balance: "$25,000.00" },
];

export default function TransferPage() {
  const [amount, setAmount] = useState("");
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const router = useRouter();

  const handleTransfer = () => {
    // In a real app, this would make an API call
    // For demo, just go back to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="px-4 py-6">
      <h1 className="text-navy-900 mb-2 text-2xl font-bold">Transfer Money</h1>
      <p className="mb-8 text-gray-600">Move money between your accounts</p>

      <div className="space-y-6">
        {/* Amount */}
        <div>
          <label htmlFor="amount" className="mb-2 block font-medium">
            Amount
          </label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="bg-gray-50"
          />
        </div>

        {/* From Account */}
        <div>
          <label className="mb-2 block font-medium">From</label>
          <Select onValueChange={setFromAccount} value={fromAccount}>
            <SelectTrigger>
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              {ACCOUNTS.map((account) => (
                <SelectItem key={account.id} value={account.id}>
                  <div>
                    <div>{account.name}</div>
                    <div className="text-sm text-gray-500">
                      {account.number} • Balance: {account.balance}
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* To Account */}
        <div>
          <label className="mb-2 block font-medium">To</label>
          <Select onValueChange={setToAccount} value={toAccount}>
            <SelectTrigger>
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="123">
                <div>
                  <div>Jackson&apos;s account</div>
                  <div className="text-sm text-gray-500">
                    ****1234 • Balance: That&apos;s personal information,
                    don&apos;t be nosy.
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Transfer Button */}
        <Button
          variant="primary"
          className="w-full"
          onClick={handleTransfer}
          disabled={!amount || !fromAccount || !toAccount}
        >
          Transfer Money
        </Button>
      </div>
    </div>
  );
}
