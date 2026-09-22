import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Shipping & Delivery" };

export default function ShippingPage() {
  return (
    <PlaceholderPage
      title="Shipping & delivery."
      description="Shipping costs, delivery windows, and what to expect when your Red Bed arrives."
      note="Waiting on: Eli's actual shipping rates, carriers, and delivery timelines."
    />
  );
}
