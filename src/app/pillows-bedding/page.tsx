import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Pillows & Bedding" };

export default function PillowsBeddingPage() {
  return (
    <PlaceholderPage
      title="Complete your sleep system."
      description="Pillows, sheets, and protectors built around the same Red Bed comfort concept."
      note="Waiting on: confirmed pillow/sheet lineup, sizing, fabric details, and pricing."
    />
  );
}
