import BackButton from "@/components/back-button";

export default function OaoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-6">
      <BackButton />
      {children}
    </div>
  );
}
