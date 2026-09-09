'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: 'Office',
    value: 'Building 4, Yiwu International Trade City, Yiwu, Zhejiang, China',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 579 8500 1234',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@sheratrading.com',
  },
]

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitted')
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Get In Touch
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Tell us what you&apos;re looking to import
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Share your product requirements and our Yiwu team will respond
            with sourcing options and a freight estimate within one business
            day.
          </p>

          <ul className="mt-10 flex flex-col gap-6">
            {CONTACT_DETAILS.map((detail) => (
              <li key={detail.label} className="flex items-start gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-secondary text-foreground">
                  <detail.icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {detail.label}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-foreground">
                    {detail.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          {status === 'submitted' ? (
            <div
              role="status"
              className="flex flex-col items-start gap-3 rounded-sm border border-border bg-secondary/50 p-8"
            >
              <CheckCircle2 className="size-8 text-accent" aria-hidden="true" />
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Inquiry received
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Thank you for reaching out to Shera Trading Limited. A member
                of our team will contact you shortly to discuss sourcing and
                shipping options.
              </p>
              <Button
                variant="outline"
                className="mt-2 rounded-sm"
                onClick={() => setStatus('idle')}
              >
                Send another inquiry
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-sm border border-border bg-card p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Jane Doe" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Your company" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" name="country" placeholder="United States" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="product">Product category</Label>
                  <Input
                    id="product"
                    name="product"
                    placeholder="e.g. Home & kitchen goods"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about the products, quantities, and destination port you need."
                    rows={5}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 h-11 w-full rounded-sm sm:w-auto"
              >
                Send Inquiry
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
