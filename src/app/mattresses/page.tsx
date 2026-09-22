import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Mattresses" };

export default function MattressesPage() {
  return (
    <PlaceholderPage
      title="Find your perfect Red Bed."
      description="The full mattress lineup — organized by collection and comfort level — will go here once the catalog is finalized."
      note="Waiting on: confirmed model names, firmness availability per model, sizes, and pricing."
    />
  );
}
