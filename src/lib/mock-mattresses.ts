import type { Mattress } from "@/lib/types";

/**
 * SAMPLE DATA ONLY — not real Red Bed products. Names, prices, sizes, and
 * highlights below are invented purely to build and preview MattressCard /
 * MattressComparisonTable. Replace this file's contents (or swap it for a
 * Shopify-backed fetch) once Eli confirms the actual catalog — the
 * components themselves shouldn't need to change.
 */
export const mockMattresses: Mattress[] = [
  {
    slug: "essential-sample",
    name: "Essential (sample)",
    collection: "essential",
    collectionLabel: "Essential",
    tagline: "Accessible infrared comfort.",
    startingPrice: 899,
    comfortLevels: ["firm", "medium", "plush"],
    sizes: ["Twin XL", "Full", "Queen", "King", "Cal King"],
    highlights: [
      "Passive infrared textile",
      "Made in the USA",
      "Entry-level construction",
    ],
    href: "/mattresses/essential/essential-sample",
  },
  {
    slug: "performance-sample",
    name: "Performance (sample)",
    collection: "performance",
    collectionLabel: "Performance",
    tagline: "Elevated comfort and support.",
    startingPrice: 1499,
    comfortLevels: ["firm", "medium", "plush"],
    sizes: ["Twin XL", "Full", "Queen", "King", "Cal King"],
    highlights: [
      "Passive infrared textile",
      "Upgraded support core",
      "Made in the USA",
    ],
    href: "/mattresses/performance/performance-sample",
  },
  {
    slug: "reserve-sample",
    name: "Reserve (sample)",
    collection: "reserve",
    collectionLabel: "Reserve",
    tagline: "Our most refined sleep experience.",
    startingPrice: 2199,
    comfortLevels: ["medium", "plush", "ultra-plush"],
    sizes: ["Twin XL", "Full", "Queen", "King", "Cal King"],
    highlights: [
      "Passive infrared textile",
      "Premium materials and finishing",
      "Made in the USA",
    ],
    href: "/mattresses/reserve/reserve-sample",
  },
];
