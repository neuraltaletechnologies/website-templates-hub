import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export const metadata = {
  title: "Why Travel With Us — Macho Halisi Ltd",
  description: "Local guides, safari-outfitted vehicles, TATO membership, and flexible custom itineraries.",
}

const reasons = [
  {
    title: "Expert Local Guides",
    eyebrow: "Guiding",
    image: "/images/amenity-spa.jpg",
    description:
      "Every trip is led by a native Tanzanian guide who has spent years — often a lifetime — on this land. That means tracks read correctly, timing that matches the animals' movement, and context no guidebook can give you.",
    hours: "On every itinerary",
    details: ["Fluent English-speaking guides", "Deep bush & wildlife knowledge", "Local language fluency", "Safety-first approach"],
  },
  {
    title: "Safari-Outfitted Vehicles",
    eyebrow: "Our Fleet",
    image: "/images/amenity-pool.jpg",
    description:
      "A fleet of roughly 15 vehicles outfitted for wildlife viewing, maintained for the long, rough drives the northern circuit demands. Comfortable seating and drivers who know exactly where to position for the best sighting.",
    hours: "Available for every safari",
    details: ["~15 safari vehicles", "4x4 capability", "View-friendly seating", "Regularly maintained fleet"],
  },
  {
    title: "TATO Membership",
    eyebrow: "Accreditation",
    image: "/images/dining-restaurant.jpg",
    description:
      "We're a member of the Tanzania Association of Tour Operators (TATO), the industry body that sets standards for licensed, accountable tour operators across the country. One more reason to trust who's driving.",
    hours: "Verified membership",
    details: ["Licensed operator", "Industry-standard practices", "Accountability & oversight", "Peace of mind for travellers"],
  },
  {
    title: "Flexible, Custom Itineraries",
    eyebrow: "Planning",
    image: "/images/dining-rooftop.jpg",
    description:
      "Wildlife safaris, mountain treks, cultural tours, and beach time — combined and paced however suits your trip. We build itineraries around you, not the other way around.",
    hours: "Custom quotes on request",
    details: ["Safari + Zanzibar combos", "Family-paced options", "Photographic safari itineraries", "Multi-region routing"],
  },
  {
    title: "Family-Friendly Travel",
    eyebrow: "Family",
    image: "/images/room-family.jpg",
    description:
      "Game drives paced for families, itineraries that mix wildlife with beach downtime, and guides used to answering a curious child's questions as readily as an adult's.",
    hours: "By arrangement",
    details: ["Family-paced game drives", "Safari + beach combos", "Guides experienced with kids", "Flexible scheduling"],
  },
  {
    title: "Deep Cultural Knowledge",
    eyebrow: "Culture",
    image: "/images/exterior.jpg",
    description:
      "Our guiding team can arrange respectful visits with Maasai, Hadzabe, and Datoga communities — built on relationships, not staged performances, and led by guides who understand the history behind what you're seeing.",
    hours: "By arrangement",
    details: ["Maasai village visits", "Hadzabe encounters near Lake Eyasi", "Datoga community visits", "Small-group, respectful format"],
  },
]

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Why travel with us"
        title={
          <>
            The <span className="italic">Macho Halisi</span>
            <br />
            difference.
          </>
        }
        subtitle="What sets a locally owned, native-run operator apart — from the guide in the vehicle to the itinerary on paper."
        image="/images/amenity-spa.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Why Travel With Us" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <div className="space-y-24 md:space-y-32">
            {reasons.map((a, i) => (
              <div
                key={a.title}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-7 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(min-width:1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="eyebrow text-accent mb-4">{a.eyebrow}</p>
                  <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
                    {a.title}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {a.description}
                  </p>

                  <ul className="mt-8 grid grid-cols-2 gap-3">
                    {a.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-sm border-t border-border pt-3"
                      >
                        <span className="h-1 w-1 bg-accent rounded-full" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      <Clock className="h-3 w-3" /> {a.hours}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-foreground hover:text-accent border-b border-foreground hover:border-accent pb-0.5"
                    >
                      Enquire <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
