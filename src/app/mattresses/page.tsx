import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";
import { MattressCard } from "@/components/mattress/mattress-card";
import { mockMattresses } from "@/lib/mock-mattresses";

export const metadata: Metadata = { title: "Mattresses" };

export default function MattressesPage() {
  return (
    <PlaceholderPage
      title="Find your perfect Red Bed."
      description="The full mattress lineup — organized by collection and comfort level — will go here once the catalog is finalized."
      note="Waiting on: confirmed model names, firmness availability per model, sizes, and pricing. The cards below use sample data to preview the layout only."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockMattresses.map((mattress) => (
          <MattressCard key={mattress.slug} mattress={mattress} />
        ))}
      </div>
    </PlaceholderPage>
  );
}
