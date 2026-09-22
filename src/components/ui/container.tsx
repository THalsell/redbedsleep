import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType;
};

/**
 * Centers content and applies the site's max-width + side padding.
 * Use this instead of repeating `mx-auto max-w-* px-*` in every section.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
