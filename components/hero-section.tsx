import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STATS = [
  { value: '12+', label: 'Years sourcing from Yiwu' },
  { value: '46', label: 'Countries served' },
  { value: '3,000+', label: 'Verified factory partners' },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-port.png"
          alt=""
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Yiwu, China — Global Sourcing &amp; Trade
        </p>
        <h1 className="mt-5 max-w-2xl text-balance font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Your sourcing partner from Yiwu&apos;s markets to your warehouse door.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 md:text-lg">
          Shera Trading Limited connects importers worldwide with vetted
          suppliers in Yiwu&apos;s wholesale markets, handling procurement,
          quality control, consolidation, and freight from factory floor to
          final delivery.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button
            render={<Link href="#contact" />}
            nativeButton={false}
            size="lg"
            className="h-11 rounded-sm bg-accent px-6 text-accent-foreground hover:bg-accent/90"
          >
            Request a Quote
            <ArrowRight className="size-4" data-icon="inline-end" />
          </Button>
          <Button
            render={<Link href="#products" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="h-11 rounded-sm border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10"
          >
            Browse Product Lines
          </Button>
        </div>

        <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-2xl font-semibold text-accent md:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 text-xs leading-snug text-primary-foreground/70 md:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
