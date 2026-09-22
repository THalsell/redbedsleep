import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Reserve Collection" };

export default function ReserveCollectionPage() {
  return (
    <PlaceholderPage
      title="Reserve Collection"
      description="Our most refined sleep experience — the Red Bed flagship collection."
      note="Proposed collection name and positioning, not yet confirmed. Model names, specs, and pricing pending."
    />
  );
}
