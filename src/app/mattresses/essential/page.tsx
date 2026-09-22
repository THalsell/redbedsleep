import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Essential Collection" };

export default function EssentialCollectionPage() {
  return (
    <PlaceholderPage
      title="Essential Collection"
      description="Accessible infrared comfort — the entry point into the Red Bed lineup."
      note="Proposed collection name and positioning, not yet confirmed. Model names, specs, and pricing pending."
    />
  );
}
