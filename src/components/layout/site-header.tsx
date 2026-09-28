import Image from "next/image";
import Link from "next/link";
import { mainNav, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/layout/mobile-nav";

/**
 * Global site header: logo, primary nav (with hover/focus dropdowns on
 * desktop), and the mobile menu. Desktop dropdowns are pure CSS
 * (group-hover/focus-within) so no client JS is needed for them.
 */
export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-white/10 bg-brand-charcoal">
      <Container className="flex h-28 items-center justify-between lg:h-32">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/Red_Bed_logo_option_1_Transparent.png"
            alt={siteConfig.name}
            width={448}
            height={448}
            priority
            className="h-24 w-24 lg:h-28 lg:w-28"
          />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center py-8 text-sm font-medium text-white/90 hover:text-brand-red"
                >
                  {item.label}
                </Link>

                {item.groups ? (
                  <div className="invisible absolute left-1/2 top-full flex w-max -translate-x-1/2 gap-10 rounded-xl border border-brand-charcoal/10 bg-white p-6 opacity-0 shadow-xl transition-[opacity,visibility] group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.groups.map((group) => (
                      <div key={group.label} className="min-w-40">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-charcoal/50">
                          {group.label}
                        </p>
                        <ul className="space-y-2">
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="text-sm text-brand-charcoal/80 hover:text-brand-red"
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
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            aria-label="Cart"
            className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/10"
          >
            <Image
              src="/shopping-cart-icon.png"
              alt=""
              width={64}
              height={64}
              className="h-8 w-8 brightness-0 invert"
            />
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
