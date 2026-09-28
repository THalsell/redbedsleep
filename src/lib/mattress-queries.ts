import { mockMattresses } from "@/lib/mock-mattresses";
import type { Mattress, MattressCollection } from "@/lib/types";

/**
 * Lookup helpers over the mattress catalog. Kept separate from the mock
 * data file itself so that swapping the data source (mock -> Shopify)
 * later only means changing these two functions, not every call site.
 */

export function getMattressesByCollection(
  collection: MattressCollection
): Mattress[] {
  return mockMattresses.filter((m) => m.collection === collection);
}

export function getMattressBySlug(
  collection: MattressCollection,
  slug: string
): Mattress | undefined {
  return mockMattresses.find(
    (m) => m.collection === collection && m.slug === slug
  );
}
