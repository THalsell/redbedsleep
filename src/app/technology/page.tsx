import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Our Technology" };

export default function TechnologyPage() {
  return (
    <PlaceholderPage
      title="Innovation woven into every night."
      description="An explanation of the passive infrared textile used across the Red Bed lineup — no plugs, no batteries."
      note="Waiting on: real technology documentation and substantiation from Eli. No health, circulation, or recovery claims should be published until they're backed by evidence for the actual finished product."
    />
  );
}
