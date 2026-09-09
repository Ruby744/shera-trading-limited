import Link from 'next/link'

const FOOTER_LINKS = [
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'How We Work' },
  { href: '#contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                <span className="font-heading text-sm font-bold">S</span>
              </span>
              <span className="font-heading text-base font-semibold tracking-tight">
                Shera Trading Ltd.
              </span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              International trading and supply chain logistics company based
              in Yiwu, China, sourcing wholesale goods for importers
              worldwide.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Shera Trading Limited. All
            rights reserved.
          </p>
          <p>Yiwu, Zhejiang, China</p>
        </div>
      </div>
    </footer>
  )
}
