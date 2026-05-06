import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export const metadata = {
  title: "Amenities — Maison Lumière",
  description: "Spa, pools, fitness, concierge, and private beach.",
}

const amenities = [
  {
    title: "The Spa",
    eyebrow: "Wellness",
    image: "/images/amenity-spa.jpg",
    description:
      "A 1,200-square-metre sanctuary shaped in stone and teak. Eight treatment suites, a hammam, a thalasso pool, and a dedicated ayurvedic wing led by Dr. Ravi Menon.",
    hours: "6am — 10pm daily",
    details: ["8 treatment rooms", "Hammam & sauna", "Ayurvedic wing", "Couples suite"],
  },
  {
    title: "Pools & Beach",
    eyebrow: "Water",
    image: "/images/amenity-pool.jpg",
    description:
      "Three heated pools — the main infinity pool, a quieter adults-only pool overlooking the reef, and a supervised children's pool. Three hundred metres of private shoreline with reserved cabanas.",
    hours: "Open dawn to dusk",
    details: ["Infinity edge pool", "Adults-only reef pool", "Kids' pool & splash pad", "Beach cabanas"],
  },
  {
    title: "La Maison Kitchen",
    eyebrow: "Dining",
    image: "/images/dining-restaurant.jpg",
    description:
      "Two Michelin stars. Chef Amelia Okonkwo leads a kitchen that celebrates coastal produce with technique that pays its respect to both local tradition and classical European cuisine.",
    hours: "Dinner only · 7pm — 11pm",
    details: ["Two Michelin stars", "Tasting menu", "Sommelier-paired wines", "Chef's table"],
  },
  {
    title: "Fitness & Movement",
    eyebrow: "Body",
    image: "/images/lobby.jpg",
    description:
      "A bright, fully equipped gym overlooking the garden. Daily yoga at sunrise and at dusk, private pilates, a tennis court, and complimentary bicycles for exploring the village.",
    hours: "24 hours",
    details: ["Full gym", "Yoga pavilion", "Tennis court", "Bicycle rental"],
  },
  {
    title: "Kids & Family",
    eyebrow: "Family",
    image: "/images/room-family.jpg",
    description:
      "A supervised Kids Club for ages 3–12, a teen lounge with film screenings and games, and a babysitting service available around the clock.",
    hours: "9am — 6pm",
    details: ["Kids Club (3-12)", "Teen lounge", "Babysitting 24/7", "Family activities"],
  },
  {
    title: "Concierge",
    eyebrow: "Service",
    image: "/images/exterior.jpg",
    description:
      "Our concierge team, led by a chef concierge with Les Clefs d&apos;Or, can arrange anything from private dhow sailing and spice-farm tours to bespoke beach dinners.",
    hours: "24 hours",
    details: ["Airport transfers", "Private excursions", "Restaurant bookings", "In-suite services"],
  },
]

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title={
          <>
            Quiet <span className="italic">pleasures</span>,
            <br />
            carefully kept.
          </>
        }
        subtitle="A house of small, unhurried rituals — from morning yoga on the terrace to candlelit dinners by the water."
        image="/images/amenity-spa.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Amenities" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <div className="space-y-24 md:space-y-32">
            {amenities.map((a, i) => (
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
