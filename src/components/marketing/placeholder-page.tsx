import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

type PlaceholderPageProps = {
  title: string;
  description: string;
  /** Shown in a muted callout — use for what's still pending (specs, photos, copy). */
  note?: string;
  id?: string;
  /** Optional demo content (e.g. component previews with mock data) rendered below the note. */
  children?: React.ReactNode;
};

/**
 * Standard shell for pages whose real content isn't ready yet (no confirmed
 * product data, photography, or copy). Every top-level nav/footer route
 * uses this until it's replaced with real page content, so links resolve
 * instead of 404ing while we wait on Eli.
 */
export function PlaceholderPage({
  title,
  description,
  note,
  id,
  children,
}: PlaceholderPageProps) {
  return (
    <Container id={id} className="py-24 sm:py-32">
      <SectionHeading title={title} description={description} />
      {note ? (
        <p className="mt-8 max-w-2xl rounded-lg border border-brand-sand/40 bg-brand-ivory px-4 py-3 text-sm text-brand-charcoal/70">
          {note}
        </p>
      ) : null}
      {children ? <div className="mt-12">{children}</div> : null}
      <div className="mt-8">
        <Button href="/" variant="outline" size="sm">
          Back to home
        </Button>
      </div>
    </Container>
  );
}
