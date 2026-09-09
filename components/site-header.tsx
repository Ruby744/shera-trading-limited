'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'How We Work' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <span className="font-heading text-sm font-bold">S</span>
          </span>
          <span className="font-heading text-base font-semibold tracking-tight text-foreground">
            Shera Trading Ltd.
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<Link href="#contact" />}
            nativeButton={false}
            size="lg"
            className="rounded-sm px-5"
          >
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                render={<Link href="#contact" />}
                nativeButton={false}
                size="lg"
                className="mt-1 w-full rounded-sm"
                onClick={() => setOpen(false)}
              >
                Request a Quote
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
