/**
 * Global site data: brand name, nav structure, footer links.
 *
 * NOTE: The navigation shape below reflects the proposed structure from
 * planning discussions (Mattresses / Pillows & Bedding / Dog Beds /
 * Our Technology / About). Collection names, comfort levels, and routes
 * are placeholders until the real product catalog is confirmed — update
 * this file (and nowhere else) once real routes/collections exist.
 */

export const siteConfig = {
  name: "Red Bed Sleep",
  shortName: "Red Bed",
  description:
    "Premium American-made mattresses with infrared textile technology.",
};

export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href: string;
  /** Optional dropdown content for desktop nav / expandable section on mobile. */
  groups?: NavGroup[];
};

export const mainNav: NavItem[] = [
  {
    label: "Mattresses",
    href: "/mattresses",
    groups: [
      {
        label: "Shop by Collection",
        links: [
          { label: "Essential", href: "/mattresses/essential" },
          { label: "Performance", href: "/mattresses/performance" },
          { label: "Reserve", href: "/mattresses/reserve" },
          { label: "Compare All", href: "/mattresses/compare" },
        ],
      },
      {
        label: "Shop by Comfort",
        links: [
          { label: "Extra Firm", href: "/mattresses?comfort=extra-firm" },
          { label: "Firm", href: "/mattresses?comfort=firm" },
          { label: "Medium", href: "/mattresses?comfort=medium" },
          { label: "Plush", href: "/mattresses?comfort=plush" },
          { label: "Ultra Plush", href: "/mattresses?comfort=ultra-plush" },
        ],
      },
    ],
  },
  { label: "Pillows & Bedding", href: "/pillows-bedding" },
  { label: "Dog Beds", href: "/dog-beds" },
  { label: "Our Technology", href: "/technology" },
  { label: "About Red Bed", href: "/about" },
];

export const footerNav: NavGroup[] = [
  {
    label: "Shop",
    links: [
      { label: "All Mattresses", href: "/mattresses" },
      { label: "Compare Mattresses", href: "/mattresses/compare" },
      { label: "Pillows & Bedding", href: "/pillows-bedding" },
      { label: "Dog Beds", href: "/dog-beds" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Our Technology", href: "/technology" },
      { label: "About Red Bed", href: "/about" },
      { label: "American Manufacturing", href: "/about#manufacturing" },
    ],
  },
  {
    label: "Support",
    links: [
      { label: "Shipping & Delivery", href: "/support/shipping" },
      { label: "Warranty", href: "/support/warranty" },
      { label: "Trial & Returns", href: "/support/returns" },
      { label: "FAQ", href: "/support/faq" },
      { label: "Contact", href: "/support/contact" },
    ],
  },
];
