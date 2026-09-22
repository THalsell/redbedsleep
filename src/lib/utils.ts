/**
 * Joins class names, filtering out falsy values. A minimal `cn` helper so
 * we don't need to pull in clsx/tailwind-merge for a handful of conditional
 * classes.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
