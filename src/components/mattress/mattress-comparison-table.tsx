import { comfortLevelLabels, type Mattress } from "@/lib/types";
import { cn } from "@/lib/utils";

type MattressComparisonTableProps = {
  mattresses: Mattress[];
  className?: string;
};

type ComparisonRow = {
  label: string;
  render: (mattress: Mattress) => React.ReactNode;
};

const rows: ComparisonRow[] = [
  { label: "Collection", render: (m) => m.collectionLabel },
  {
    label: "Starting price",
    render: (m) =>
      m.startingPrice != null ? `$${m.startingPrice.toLocaleString()}` : "TBD",
  },
  {
    label: "Comfort levels",
    render: (m) => m.comfortLevels.map((level) => comfortLevelLabels[level]).join(", "),
  },
  { label: "Sizes", render: (m) => m.sizes.join(", ") },
  {
    label: "Highlights",
    render: (m) => (
      <ul className="space-y-1">
        {m.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ),
  },
];

/**
 * Side-by-side comparison table. Same `Mattress` shape as MattressCard —
 * pass any subset of the catalog (a collection, a filtered set, etc).
 */
export function MattressComparisonTable({
  mattresses,
  className,
}: MattressComparisonTableProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto rounded-2xl border border-brand-charcoal/10",
        className
      )}
    >
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-brand-charcoal/10 bg-brand-ivory">
            <th scope="col" className="w-40 p-4 font-semibold text-brand-charcoal">
              <span className="sr-only">Attribute</span>
            </th>
            {mattresses.map((m) => (
              <th
                key={m.slug}
                scope="col"
                className="p-4 font-semibold text-brand-charcoal"
              >
                {m.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={cn(
                "border-b border-brand-charcoal/10 last:border-0",
                i % 2 === 1 && "bg-brand-ivory/40"
              )}
            >
              <th
                scope="row"
                className="p-4 align-top font-medium text-brand-charcoal/70"
              >
                {row.label}
              </th>
              {mattresses.map((m) => (
                <td key={m.slug} className="p-4 align-top text-brand-charcoal/80">
                  {row.render(m)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
