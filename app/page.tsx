import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { HeroSection } from '@/components/hero-section'
import { ProductShowcase } from '@/components/product-showcase'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <ProductShowcase />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
