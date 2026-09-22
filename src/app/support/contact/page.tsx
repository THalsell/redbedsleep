import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Get in touch."
      description="Questions about Red Bed mattresses, orders, or the infrared technology? Reach out."
      note="Waiting on: preferred contact method/form handling (email, form + backend, or a support inbox)."
    />
  );
}
