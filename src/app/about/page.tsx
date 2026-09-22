import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "About Red Bed" };

export default function AboutPage() {
  return (
    <>
      <Container className="py-24 sm:py-32">
        <SectionHeading
          title="Built by us. Made for you."
          description="Red Bed's story — American craftsmanship, thoughtful design, and innovative materials."
        />
        <p className="mt-8 max-w-2xl rounded-lg border border-brand-sand/40 bg-brand-ivory px-4 py-3 text-sm text-brand-charcoal/70">
          Waiting on: Eli&rsquo;s brand story, company background, and founder
          details.
        </p>
      </Container>

      <Container id="manufacturing" className="pb-24 sm:pb-32">
        <SectionHeading
          title="American manufacturing."
          description="We manufacture in our own U.S. factories, bringing hands-on experience and attention to detail to every Red Bed we make."
        />
        <p className="mt-8 max-w-2xl rounded-lg border border-brand-sand/40 bg-brand-ivory px-4 py-3 text-sm text-brand-charcoal/70">
          Waiting on: manufacturing details and substantiation of origin
          claims.
        </p>
      </Container>
    </>
  );
}
