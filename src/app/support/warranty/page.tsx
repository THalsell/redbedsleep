import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Warranty" };

export default function WarrantyPage() {
  return (
    <PlaceholderPage
      title="Warranty."
      description="Coverage, exclusions, and how to make a claim."
      note="Waiting on: Eli's actual warranty terms and coverage length."
    />
  );
}
