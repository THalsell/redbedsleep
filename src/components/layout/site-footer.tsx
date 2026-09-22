import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

/**
 * Global site footer: nav columns, newsletter placeholder, and legal row.
 * Newsletter form is presentational only for now (no submit handler) until
 * an email provider (Shopify Email / Klaviyo) is wired up.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-brand-charcoal/10 bg-brand-ivory">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-lg font-semibold tracking-tight text-brand-charcoal">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-brand-charcoal/70">
              {siteConfig.description}
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-semibold text-brand-charcoal">
                {group.label}
              </p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-charcoal/70 hover:text-brand-red"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-charcoal/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-brand-charcoal/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-charcoal/60">
            <Link href="/support/faq" className="hover:text-brand-red">
              FAQ
            </Link>
            <Link href="/support/shipping" className="hover:text-brand-red">
              Shipping
            </Link>
            <Link href="/support/returns" className="hover:text-brand-red">
              Returns
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
