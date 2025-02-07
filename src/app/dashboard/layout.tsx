import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between border-b px-4 py-3">
        <Link href="/dashboard" className="text-navy-900 text-lg font-semibold">
          Last Horizon
        </Link>
        <UserButton />
      </header>

      {/* Main content */}
      <main>{children}</main>
    </div>
  );
}
