import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export const metadata = {
  title: "Offers — Macho Halisi Ltd",
  description: "Curated seasonal ideas and packages for your next Tanzania trip.",
}

const offers = [
  {
    title: "Great Migration Season",
    discount: "Priority Booking",
    description:
      "Time your safari to the herds' seasonal movement across the Serengeti's plains, with a dedicated vehicle and guide for the trip.",
    image: "/images/room-presidential.jpg",
    validity: "Seasonal — ask for current timing",
    terms: ["Dedicated vehicle & guide", "Northern circuit routing", "Flexible lodge or camp stays", "Full-day Serengeti game drives"],
  },
  {
    title: "Green Season Safari Rates",
    discount: "Reduced Rates",
    description:
      "The short rains bring newborn wildlife, dramatic skies, and quieter parks — often at a lower cost than peak season.",
    image: "/images/room-ocean-suite.jpg",
    validity: "Apr – May",
    terms: ["Lower-season rates", "Fewer crowds", "Newborn wildlife season", "Any of our 6 tour categories"],
  },
  {
    title: "Family Safari Package",
    discount: "Family-Paced",
    description:
      "Game drives paced for younger travellers, itineraries that mix wildlife with Zanzibar beach time, and guides used to curious questions.",
    image: "/images/room-family.jpg",
    validity: "Year-round",
    terms: ["Family-paced game drives", "Safari + beach combo available", "Guides experienced with kids", "Flexible scheduling"],
  },
  {
    title: "Honeymoon Safari & Zanzibar Combo",
    discount: "Custom Combo",
    description:
      "Days on safari across the northern circuit, followed by time on Zanzibar's beaches — a combination built for couples.",
    image: "/images/room-deluxe.jpg",
    validity: "Year-round",
    terms: ["Custom-built itinerary", "Safari + Zanzibar combo", "Flexible pacing", "Private vehicle available"],
  },
  {
    title: "Photographic Safari Week",
    discount: "Dedicated Vehicle",
    description:
      "A private vehicle, extra time at sightings, and early-departure drives timed to the best light — for travellers who want to come home with real images.",
    image: "/images/beach.jpg",
    validity: "Jun – Sep",
    terms: ["Private vehicle", "Extended time at sightings", "Early-departure drives", "Experienced driver-guide"],
  },
  {
    title: "Kilimanjaro + Safari Combo",
    discount: "Custom Itinerary",
    description:
      "Combine a Kilimanjaro trek — Marangu, Machame, Lemosho, or another route — with a northern circuit safari, paced to your fitness and schedule.",
    image: "/images/room-garden-villa.jpg",
    validity: "Best: Jun – Sep & Feb – Mar",
    terms: ["Route options: 5–8 days", "Northern circuit safari add-on", "Professional guide & porters", "Flexible pacing"],
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
            <span className="italic">honestly</span> given.
          </>
        }
        subtitle="A small collection of seasonal ideas, matched to Tanzania's travel calendar. All final pricing and availability is confirmed directly with our team."
        image="/images/room-presidential.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Offers" },
        ]}
      />

      <section className="container-luxe pt-10 md:pt-14">
        <p className="text-xs text-muted-foreground border border-border px-4 py-3 max-w-2xl">
          This is a concept/demo build, not the official Macho Halisi Ltd
          website. Pricing and packages shown here are illustrative only —
          contact us directly for current offers and rates.
        </p>
      </section>

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
                    Enquire <ArrowUpRight className="h-3.5 w-3.5" />
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
