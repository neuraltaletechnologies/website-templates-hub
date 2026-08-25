import Image from "next/image"
import { Clock, MapPin } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Taste of Tanzania — Macho Halisi Ltd",
  description: "Camp dining, safari sundowners, and coastal Swahili cuisine — the food that goes with the journey.",
}

const venues = [
  {
    name: "Camp & Lodge Dining",
    eyebrow: "On Safari · Every Day",
    chef: "Included with lodge & camp stays",
    description:
      "Most nights on safari are spent at your lodge or tented camp, where dinner draws on fresh local produce and a Swahili-coastal accent — hearty stews, grilled meats, and vegetables sourced locally where possible. Simple, well-made food after a long day in the vehicle.",
    image: "/images/dining-restaurant.jpg",
    location: "Lodge or tented camp",
    hours: "Included with every safari itinerary",
  },
  {
    name: "Safari Sundowners",
    eyebrow: "Drinks · Golden Hour",
    chef: "A safari tradition",
    description:
      "A safari ritual: stopping wherever the day's game drive ends, as the light turns gold, for a cold drink and a wide view of the plains. Simple, unhurried, and one of the moments travellers remember longest.",
    image: "/images/dining-rooftop.jpg",
    location: "Wherever the drive ends",
    hours: "Most evenings on safari",
  },
  {
    name: "Zanzibar & the Coast",
    eyebrow: "Swahili Cuisine",
    chef: "A Stone Town institution",
    description:
      "On the coast, the food changes with the landscape — grilled seafood, coconut-based curries, and spice-forward Swahili dishes. Forodhani Gardens' night market in Stone Town is the essential stop: grilled seafood skewers, Zanzibar pizza, and sugarcane juice, eaten shoulder to shoulder with locals.",
    image: "/images/dining-dish.jpg",
    location: "Stone Town & the Zanzibar coast",
    hours: "Evenings, especially at Forodhani Gardens",
  },
]

export default function DiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Taste of Tanzania"
        title={
          <>
            Flavors that <span className="italic">travel</span>
            <br />
            with you.
          </>
        }
        subtitle="From camp dinners under the stars to Zanzibar's spice-driven coastal cooking — food is part of every itinerary we build."
        image="/images/dining-restaurant.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Taste of Tanzania" },
        ]}
      />

      <section className="container-luxe py-20 md:py-28">
        <div className="space-y-24 md:space-y-32">
          {venues.map((r, i) => (
            <div
              key={r.name}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              <div
                className={`lg:col-span-6 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-6 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="eyebrow text-accent mb-4">{r.eyebrow}</p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                  {r.name}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {r.chef}
                </p>

                <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                  {r.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Clock className="h-3 w-3" /> {r.hours}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" /> {r.location}
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none uppercase tracking-[0.2em] text-xs h-12 px-6">
                    Enquire About This Trip
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-none uppercase tracking-[0.2em] text-xs h-12 px-6"
                  >
                    See Sample Itinerary
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-background py-20 md:py-28">
        <div className="container-luxe text-center">
          <p className="eyebrow text-accent mb-5">Private bush meals</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl mx-auto text-balance">
            A table, wherever <span className="italic">you</span> are.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-background/80 leading-relaxed">
            Sundowner snacks on the plains, a bush breakfast after an early
            game drive, or a private dinner arranged by your guide — small,
            memorable touches we can build into any itinerary.
          </p>
        </div>
      </section>
    </>
  )
}
