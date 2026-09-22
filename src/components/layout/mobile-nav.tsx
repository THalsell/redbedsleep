"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Hamburger menu + slide-down panel for small screens. Desktop nav
 * (site-header.tsx) is hidden below `lg`, this is shown below `lg`.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-brand-charcoal hover:bg-brand-charcoal/5"
      >
        <span className="sr-only">Toggle menu</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6l12 12M18 6L6 18"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          )}
        </svg>
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-brand-charcoal/10 bg-white shadow-lg">
          <nav className="flex flex-col divide-y divide-brand-charcoal/10 px-6">
            {mainNav.map((item) => (
              <div key={item.label} className="py-2">
                {item.groups ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2 text-left text-base font-medium text-brand-charcoal"
                      aria-expanded={openGroup === item.label}
                      onClick={() =>
                        setOpenGroup((cur) =>
                          cur === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openGroup === item.label && "rotate-180"
                        )}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                    {openGroup === item.label ? (
                      <div className="pb-2 pl-4">
                        {item.groups.map((group) => (
                          <div key={group.label} className="mb-3">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-charcoal/50">
                              {group.label}
                            </p>
                            <ul className="space-y-1">
                              {group.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block py-1 text-sm text-brand-charcoal/80 hover:text-brand-red"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-base font-medium text-brand-charcoal"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
