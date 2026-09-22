import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * The recurring "heading / short description" block used at the top of
 * homepage and landing-page sections.
 */
export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-brand-charcoal sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-brand-charcoal/70">
          {description}
        </p>
      ) : null}
    </div>
  );
}
