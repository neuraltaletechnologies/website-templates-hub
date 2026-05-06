import Image from "next/image"
import { Star, Clock, MapPin } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Dining — Maison Lumière",
  description: "Three restaurants, one bar, and a coastal kitchen with two Michelin stars.",
}

const restaurants = [
  {
    name: "La Maison Kitchen",
    eyebrow: "Fine Dining · Two Michelin Stars",
    chef: "Chef Amelia Okonkwo",
    description:
      "A tasting menu of seven courses reimagined seasonally. The kitchen champions local produce — line-caught kingfish, grown-on-site herbs, spice farms just inland — with technique that bows to both Swahili tradition and classical European cuisine.",
    image: "/images/dining-restaurant.jpg",
    location: "Ground Floor, East Wing",
    hours: "Dinner only · 7pm — 11pm",
    stars: 2,
  },
  {
    name: "Le Toit Bar",
    eyebrow: "Rooftop · Cocktails & Small Plates",
    chef: "Mixologist Jean-Luc Moreau",
    description:
      "The rooftop cocktail bar with uninterrupted views of the Indian Ocean. An ever-changing cocktail list, an exceptional wine programme, and small plates designed for sunset.",
    image: "/images/dining-rooftop.jpg",
    location: "Rooftop",
    hours: "5pm — 1am",
    stars: 0,
  },
  {
    name: "Jardin",
    eyebrow: "All-Day Dining · Terrace",
    chef: "Chef Tomás Riveras",
    description:
      "Relaxed, light, and open to the breeze. Breakfast that begins slowly, Mediterranean-Zanzibari lunches on the terrace, and a late-night menu for guests returning from the bar.",
    image: "/images/dining-dish.jpg",
    location: "Garden Terrace",
    hours: "6:30am — 11pm",
    stars: 0,
  },
]

export default function DiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Dining"
        title={
          <>
            A kitchen that <span className="italic">remembers</span>
            <br />
            where it is.
          </>
        }
        subtitle="Three restaurants, one bar — each rooted in the produce, people, and traditions of the coast."
        image="/images/dining-restaurant.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dining" },
        ]}
      />

      <section className="container-luxe py-20 md:py-28">
        <div className="space-y-24 md:space-y-32">
          {restaurants.map((r, i) => (
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

                {r.stars > 0 && (
                  <div className="mt-5 inline-flex items-center gap-2 px-3 py-2 border border-accent">
                    {Array.from({ length: r.stars }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                    <span className="text-[11px] uppercase tracking-[0.2em] ml-1">
                      Michelin Guide
                    </span>
                  </div>
                )}

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
                    Reserve a Table
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-none uppercase tracking-[0.2em] text-xs h-12 px-6"
                  >
                    View Menu
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-background py-20 md:py-28">
        <div className="container-luxe text-center">
          <p className="eyebrow text-accent mb-5">In-suite dining</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl mx-auto text-balance">
            Dinner, served to your <span className="italic">terrace</span>.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-background/80 leading-relaxed">
            The full menu from any restaurant, delivered to your suite around the
            clock. A dedicated butler will set the table, light the candles, and
            vanish.
          </p>
        </div>
      </section>
    </>
  )
}
