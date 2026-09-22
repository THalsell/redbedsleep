import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Performance Collection" };

export default function PerformanceCollectionPage() {
  return (
    <PlaceholderPage
      title="Performance Collection"
      description="Elevated comfort and support — the core Red Bed collection."
      note="Proposed collection name and positioning, not yet confirmed. Model names, specs, and pricing pending."
    />
  );
}
