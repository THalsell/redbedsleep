import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Trial & Returns" };

export default function ReturnsPage() {
  return (
    <PlaceholderPage
      title="Trial & returns."
      description="Sleep trial length, return process, and refund policy."
      note="Waiting on: Eli's actual trial period and return policy."
    />
  );
}
