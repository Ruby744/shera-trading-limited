import Image from 'next/image'
import { ClipboardCheck, PackageSearch, Ship, Warehouse } from 'lucide-react'

const PROCESS_STEPS = [
  {
    icon: PackageSearch,
    title: 'Sourcing & Negotiation',
    description:
      'Our Yiwu-based team identifies verified suppliers, negotiates pricing, and secures samples on your behalf.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description:
      'Every shipment is inspected against your specifications before it leaves the factory floor.',
  },
  {
    icon: Warehouse,
    title: 'Consolidation & Warehousing',
    description:
      'Goods from multiple suppliers are consolidated in our warehouse into a single, efficient shipment.',
  },
  {
    icon: Ship,
    title: 'Freight & Customs',
    description:
      'We manage export documentation, ocean or air freight booking, and customs clearance to your port.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              About Shera Trading Limited
            </p>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Built on Yiwu&apos;s market floor, run for global supply chains
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Shera Trading Limited is headquartered in Yiwu, the world&apos;s
              largest small-commodity wholesale hub, giving us on-the-ground
              access to thousands of manufacturers within a single district.
              We built our business around solving the hardest part of
              importing: turning scattered factory relationships into one
              predictable, reliable supply chain.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Rather than acting as a simple middleman, our logistics team
              manages the full chain of custody — supplier vetting, quality
              inspection, warehousing, cargo consolidation, and freight
              forwarding — so importers receive a single consolidated
              shipment instead of a dozen loose vendor relationships.
            </p>

            <div className="mt-8 overflow-hidden rounded-sm">
              <Image
                src="/images/about-warehouse.png"
                alt="Warehouse staff inspecting and packing export goods"
                width={640}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div id="process">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              How We Work
            </p>
            <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-foreground">
              End-to-end logistics, from factory to final mile
            </h3>

            <ol className="mt-8 flex flex-col gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                      <step.icon className="size-5" aria-hidden="true" />
                    </span>
                    {index < PROCESS_STEPS.length - 1 && (
                      <span
                        className="mt-2 w-px flex-1 bg-border"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="pb-2">
                    <h4 className="font-heading text-base font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-sm border border-border bg-card p-6">
              <h4 className="font-heading text-base font-semibold text-foreground">
                Compliance & documentation
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every order ships with commercial invoices, packing lists,
                certificates of origin, and inspection reports prepared to
                your destination country&apos;s customs requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
