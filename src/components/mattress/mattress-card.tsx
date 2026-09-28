import Link from "next/link";
import { comfortLevelLabels, type Mattress } from "@/lib/types";
import { cn } from "@/lib/utils";

type MattressCardProps = {
  mattress: Mattress;
  className?: string;
};

/**
 * Product-summary card for collection/grid listings. Takes a plain
 * `Mattress` object so it works the same whether that object comes from
 * mock data (now) or a mapped Shopify product (later).
 */
export function MattressCard({ mattress, className }: MattressCardProps) {
  const { name, collectionLabel, tagline, startingPrice, comfortLevels, href } =
    mattress;

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-white transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div className="flex aspect-[4/3] items-center justify-center bg-brand-ivory text-sm text-brand-charcoal/40">
        Photo coming soon
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="w-fit rounded-full bg-brand-charcoal/5 px-3 py-1 text-xs font-medium text-brand-charcoal/70">
          {collectionLabel}
        </span>

        <div>
          <h3 className="text-lg font-semibold text-brand-charcoal group-hover:text-brand-red">
            {name}
          </h3>
          <p className="mt-1 text-sm text-brand-charcoal/70">{tagline}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {comfortLevels.map((level) => (
            <span
              key={level}
              className="rounded-full border border-brand-charcoal/15 px-2.5 py-1 text-xs text-brand-charcoal/70"
            >
              {comfortLevelLabels[level]}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <p className="text-base font-semibold text-brand-charcoal">
            {startingPrice != null
              ? `From $${startingPrice.toLocaleString()}`
              : "Price coming soon"}
          </p>
          <span className="text-sm font-medium text-brand-red">
            View details &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
