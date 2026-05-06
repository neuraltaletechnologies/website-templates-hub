import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"

const offers = [
  {
    title: "The Long Stay",
    discount: "30% Off",
    description: "Five nights or more, inclusive of breakfast and a spa credit.",
    image: "/images/room-ocean-suite.jpg",
    validity: "Through March 2026",
  },
  {
    title: "Romance on the Coast",
    discount: "Suite Upgrade",
    description: "Champagne on arrival, couples spa, private beach dinner.",
    image: "/images/room-honeymoon.jpg",
    validity: "Year-round",
  },
  {
    title: "Early Bird",
    discount: "25% Off",
    description: "Book sixty days ahead and save on any suite.",
    image: "/images/room-garden-villa.jpg",
    validity: "Limited availability",
  },
]

export function HomeOffers() {
  return (
    <section className="container-luxe py-20 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
        <div>
          <p className="eyebrow text-accent mb-4">Seasonal offers</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-2xl">
            Stay longer, <span className="italic">stay better</span>.
          </h2>
        </div>
        <Link
          href="/offers"
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-foreground hover:text-accent transition-colors border-b border-foreground hover:border-accent pb-1 self-start"
        >
          All Offers <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((o) => (
          <article key={o.title} className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={o.image}
                alt={o.title}
                fill
                sizes="(min-width:768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 bg-accent text-accent-foreground px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium">
                {o.discount}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-background">
                <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                  {o.title}
                </h3>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {o.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {o.validity}
                </span>
                <Link
                  href="/book"
                  className="text-[11px] uppercase tracking-[0.24em] text-foreground hover:text-accent border-b border-foreground hover:border-accent pb-0.5"
                >
                  Reserve
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
