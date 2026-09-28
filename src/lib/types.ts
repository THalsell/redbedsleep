export type ComfortLevel =
  | "extra-firm"
  | "firm"
  | "medium"
  | "plush"
  | "ultra-plush";

export const comfortLevelLabels: Record<ComfortLevel, string> = {
  "extra-firm": "Extra Firm",
  firm: "Firm",
  medium: "Medium",
  plush: "Plush",
  "ultra-plush": "Ultra Plush",
};

export type MattressCollection = "essential" | "performance" | "reserve";

/**
 * Shape used by MattressCard / MattressComparisonTable. Deliberately
 * backend-agnostic — this same shape should work whether it's populated
 * from local mock data now or mapped from Shopify products/variants/
 * metafields later, so the components don't need to change.
 */
export type Mattress = {
  slug: string;
  name: string;
  collection: MattressCollection;
  collectionLabel: string;
  tagline: string;
  /** Lowest variant price across sizes/firmness, in whole dollars. Null if unknown/TBD. */
  startingPrice: number | null;
  comfortLevels: ComfortLevel[];
  sizes: string[];
  highlights: string[];
  href: string;
};
