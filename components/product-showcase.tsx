import Image from 'next/image'

const PRODUCT_CATEGORIES = [
  {
    name: 'Home & Kitchen',
    description: 'Cookware, utensils, and household essentials.',
    image: '/images/product-home-kitchen.png',
  },
  {
    name: 'Electronics Accessories',
    description: 'Audio, charging, and mobile accessories.',
    image: '/images/product-electronics.png',
  },
  {
    name: 'Textiles & Apparel',
    description: 'Fabric rolls, garments, and soft goods.',
    image: '/images/product-textiles.png',
  },
  {
    name: 'Toys & Gifts',
    description: 'Seasonal, promotional, and novelty items.',
    image: '/images/product-toys-gifts.png',
  },
  {
    name: 'Hardware & Tools',
    description: 'Fasteners, hand tools, and metal fittings.',
    image: '/images/product-hardware.png',
  },
  {
    name: 'Packaging Materials',
    description: 'Cartons, kraft paper, and protective packing.',
    image: '/images/product-packaging.png',
  },
]

export function ProductShowcase() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Product Lines
        </p>
        <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Sourced across every major category in Yiwu&apos;s markets
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          We maintain direct relationships with manufacturers and wholesale
          traders across the Yiwu International Trade City, giving you access
          to competitive pricing and flexible minimum order quantities.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCT_CATEGORIES.map((category) => (
          <article
            key={category.name}
            className="group overflow-hidden rounded-sm border border-border bg-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={category.image || '/placeholder.svg'}
                alt={`${category.name} product samples`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-base font-semibold text-foreground">
                {category.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
