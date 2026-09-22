import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Placeholder homepage. Real hero copy/imagery, the collections grid,
 * technology section, comfort finder, etc. land once Eli's brand assets
 * and catalog are confirmed (see project memory). This just proves out
 * the shared UI components against the new header/footer.
 */
export default function Home() {
  return (
    <Container className="py-24 sm:py-32">
      <SectionHeading
        title="Sleep better. Live renewed."
        description="Premium American-made mattresses, engineered comfort, and infrared textile technology. Homepage content is a placeholder until product details, photography, and copy are finalized."
      />
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/mattresses">Shop Mattresses</Button>
        <Button href="/technology" variant="outline">
          Discover the Technology
        </Button>
      </div>
    </Container>
  );
}
