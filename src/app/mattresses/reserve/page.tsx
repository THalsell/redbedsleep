import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";
import { MattressCard } from "@/components/mattress/mattress-card";
import { getMattressesByCollection } from "@/lib/mattress-queries";

export const metadata: Metadata = { title: "Reserve Collection" };

export default function ReserveCollectionPage() {
  const mattresses = getMattressesByCollection("reserve");

  return (
    <PlaceholderPage
      title="Reserve Collection"
      description="Our most refined sleep experience — the Red Bed flagship collection."
      note="Proposed collection name and positioning, not yet confirmed. The card below uses sample data to preview the layout only."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mattresses.map((mattress) => (
          <MattressCard key={mattress.slug} mattress={mattress} />
        ))}
      </div>
    </PlaceholderPage>
  );
}
