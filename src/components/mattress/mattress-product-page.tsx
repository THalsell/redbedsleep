import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MattressOptionsSelector } from "@/components/mattress/mattress-options-selector";
import type { Mattress } from "@/lib/types";

type MattressProductPageProps = {
  mattress: Mattress;
};

/**
 * Reusable mattress product-page template. One component renders every
 * model's page (add a new mattress by adding data, not a new page layout)
 * — see the developer brief's "reusable product template" requirement.
 * Add-to-cart is a disabled placeholder until Shopify checkout exists.
 */
export function MattressProductPage({ mattress }: MattressProductPageProps) {
  const { name, collection, collectionLabel, tagline, startingPrice, sizes, comfortLevels, highlights } =
    mattress;

  return (
    <Container className="py-16 sm:py-24">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-brand-charcoal/60">
        <Link href="/mattresses" className="hover:text-brand-red">
          Mattresses
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/mattresses/${collection}`} className="hover:text-brand-red">
          {collectionLabel}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-brand-charcoal">{name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-2xl bg-brand-ivory text-sm text-brand-charcoal/40">
          Photo coming soon
        </div>

        <div>
          <span className="w-fit rounded-full bg-brand-charcoal/5 px-3 py-1 text-xs font-medium text-brand-charcoal/70">
            {collectionLabel}
          </span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-charcoal sm:text-4xl">
            {name}
          </h1>
          <p className="mt-2 text-lg text-brand-charcoal/70">{tagline}</p>

          <p className="mt-6 text-2xl font-semibold text-brand-charcoal">
            {startingPrice != null
              ? `From $${startingPrice.toLocaleString()}`
              : "Price coming soon"}
          </p>

          <div className="mt-8">
            <MattressOptionsSelector sizes={sizes} comfortLevels={comfortLevels} />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button type="button" size="lg" disabled className="sm:w-auto">
              Add to Cart — coming soon
            </Button>
            <Button href="/mattresses/compare" variant="outline" size="lg">
              Compare mattresses
            </Button>
          </div>

          {highlights.length > 0 ? (
            <ul className="mt-10 space-y-2 border-t border-brand-charcoal/10 pt-6">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-brand-charcoal/80"
                >
                  <span aria-hidden="true" className="mt-1 text-brand-red">
                    &bull;
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </Container>
  );
}
