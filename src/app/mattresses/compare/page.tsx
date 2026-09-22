import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Compare Mattresses" };

export default function CompareMattressesPage() {
  return (
    <PlaceholderPage
      title="Compare mattresses side by side."
      description="A side-by-side comparison across collections and firmness levels will go here once real model specs exist."
      note="Needs confirmed construction details for each model before this can be built for real."
    />
  );
}
