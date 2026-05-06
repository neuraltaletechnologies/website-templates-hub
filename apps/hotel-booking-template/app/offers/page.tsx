import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export const metadata = {
  title: "Offers — Maison Lumière",
  description: "Curated offers and packages for your next stay.",
}

const offers = [
  {
    title: "The Long Stay",
    discount: "30% Off",
    description:
      "Stay five nights or more and enjoy a third off the best available rate, a daily breakfast, and a $150 spa credit.",
    image: "/images/room-ocean-suite.jpg",
    validity: "Through 31 March 2026",
    terms: ["5+ nights", "Includes breakfast", "$150 spa credit", "Free cancellation"],
  },
  {
    title: "Romance on the Coast",
    discount: "Suite Upgrade",
    description:
      "A complimentary upgrade, a bottle of Ruinart on arrival, a couples spa treatment, and a candlelit dinner on the beach.",
    image: "/images/room-honeymoon.jpg",
    validity: "Year-round",
    terms: ["Upgrade on arrival", "Champagne", "Couples spa", "Private dinner"],
  },
  {
    title: "Early Bird",
    discount: "25% Off",
    description:
      "Book sixty days ahead and save on any suite or villa. Full flexibility, full benefits, lower rate.",
    image: "/images/room-garden-villa.jpg",
    validity: "Limited availability",
    terms: ["60+ days ahead", "Any room type", "Breakfast included", "Flexible dates"],
  },
  {
    title: "Family Season",
    discount: "Kids Stay Free",
    description:
      "Children under 12 stay and eat complimentary. Kids Club access, family activities, and connecting room options.",
    image: "/images/room-family.jpg",
    validity: "School holidays",
    terms: ["Kids under 12 free", "Kids Club", "Family menu", "Connecting rooms"],
  },
  {
    title: "Long Weekend",
    discount: "4th Night Free",
    description:
      "Stay three nights, enjoy the fourth on us. Ideal for the coastal escape that doesn&apos;t rush.",
    image: "/images/beach.jpg",
    validity: "Weekday arrivals",
    terms: ["3-night minimum", "4th night free", "Monday – Thursday", "Selected rooms"],
  },
  {
    title: "Wellness Week",
    discount: "Spa Package",
    description:
      "Seven nights of daily spa rituals, yoga at sunrise and dusk, and a bespoke consultation with our in-house ayurvedic doctor.",
    image: "/images/amenity-spa.jpg",
    validity: "From €4,900 / person",
    terms: ["7 nights", "Daily spa", "Ayurvedic consult", "All meals"],
  },
]

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Offers & packages"
        title={
          <>
            Considered offers,
            <br />
            <span className="italic">quietly</span> given.
          </>
        }
        subtitle="A small collection of seasonal packages. Each is available by booking directly with the house."
        image="/images/room-ocean-suite.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Offers" },
        ]}
      />

      <section className="container-luxe py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {offers.map((o) => (
            <article key={o.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={o.image}
                  alt={o.title}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5 bg-accent text-accent-foreground px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium">
                  {o.discount}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                  {o.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  {o.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {o.terms.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="h-1 w-1 bg-accent rounded-full" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    <Clock className="h-3 w-3" /> {o.validity}
                  </span>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-foreground hover:text-accent border-b border-foreground hover:border-accent pb-0.5"
                  >
                    Reserve <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
