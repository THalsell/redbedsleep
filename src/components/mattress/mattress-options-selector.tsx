"use client";

import { useState } from "react";
import { comfortLevelLabels, type ComfortLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

type Selection = { size: string; comfort: ComfortLevel };

type MattressOptionsSelectorProps = {
  sizes: string[];
  comfortLevels: ComfortLevel[];
  defaultSize?: string;
  defaultComfort?: ComfortLevel;
  onChange?: (selection: Selection) => void;
  className?: string;
};

function OptionGroup<T extends string>({
  legend,
  options,
  value,
  labels,
  onSelect,
}: {
  legend: string;
  options: T[];
  value: T;
  labels?: Record<T, string>;
  onSelect: (option: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-brand-charcoal">
        {legend}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label={legend}>
        {options.map((option) => {
          const active = option === value;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onSelect(option)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "border-brand-red bg-brand-red text-white"
                  : "border-brand-charcoal/20 text-brand-charcoal hover:border-brand-red/40"
              )}
            >
              {labels ? labels[option] : option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

/**
 * Size + firmness picker for the mattress product page. Manages its own
 * selection state and reports changes via `onChange` so a parent can wire
 * it up to pricing/cart logic once Shopify is connected — the selector
 * itself doesn't know anything about carts or checkout.
 */
export function MattressOptionsSelector({
  sizes,
  comfortLevels,
  defaultSize,
  defaultComfort,
  onChange,
  className,
}: MattressOptionsSelectorProps) {
  const [size, setSize] = useState(defaultSize ?? sizes[0]);
  const [comfort, setComfort] = useState<ComfortLevel>(
    defaultComfort ?? comfortLevels[0]
  );

  function selectSize(next: string) {
    setSize(next);
    onChange?.({ size: next, comfort });
  }

  function selectComfort(next: ComfortLevel) {
    setComfort(next);
    onChange?.({ size, comfort: next });
  }

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <OptionGroup
        legend="Firmness"
        options={comfortLevels}
        value={comfort}
        labels={comfortLevelLabels}
        onSelect={selectComfort}
      />
      <OptionGroup
        legend="Size"
        options={sizes}
        value={size}
        onSelect={selectSize}
      />
    </div>
  );
}
