import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Dog Beds" };

export default function DogBedsPage() {
  return (
    <PlaceholderPage
      title="Better comfort for your best friend."
      description="Red Bed Companion — dog beds built with the same infrared textile concept as the mattress line."
      note="Proposed collection name, not yet confirmed. Sizing, materials, and durability/washability details pending. No orthopedic or therapeutic claims until supported by evidence specific to the dog-bed product."
    />
  );
}
