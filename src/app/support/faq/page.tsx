import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <PlaceholderPage
      title="Frequently asked questions."
      description="Common questions about Red Bed mattresses, the infrared technology, sizing, and ordering."
      note="Waiting on: real product/policy details before questions can be written and answered accurately."
    />
  );
}
