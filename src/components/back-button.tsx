"use client";

import { useRouter } from "next/navigation";

export interface BackButtonProps {
  label?: string;
}

export default function BackButton({ label = "←" }: BackButtonProps) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="mb-4 inline-block">
      <span className="text-2xl">{label}</span>
    </button>
  );
}
