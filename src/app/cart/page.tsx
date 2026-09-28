import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <PlaceholderPage
      title="Your cart."
      description="Cart and checkout will go live once Shopify is connected — that's planned as the last step of the build, after the rest of the site is finished."
      note="No cart/checkout functionality yet — this page is a placeholder for the header cart icon."
    />
  );
}
