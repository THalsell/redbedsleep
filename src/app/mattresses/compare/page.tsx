import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";
import { MattressComparisonTable } from "@/components/mattress/mattress-comparison-table";
import { mockMattresses } from "@/lib/mock-mattresses";

export const metadata: Metadata = { title: "Compare Mattresses" };

export default function CompareMattressesPage() {
  return (
    <PlaceholderPage
      title="Compare mattresses side by side."
      description="A side-by-side comparison across collections and firmness levels will go here once real model specs exist."
      note="Needs confirmed construction details for each model before this can be built for real. The table below uses sample data to preview the layout only."
    >
      <MattressComparisonTable mattresses={mockMattresses} />
    </PlaceholderPage>
  );
}
