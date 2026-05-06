"use client"

import Image from "next/image"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingDonate } from "@/components/floating-donate"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Quote, MapPin, Calendar } from "lucide-react"

const filters = ["All", "Education", "Water", "Healthcare", "Women", "Environment"]

const stories = [
  {
    name: "Amara, 12",
    program: "Education",
    location: "Kigoma",
    year: "2025",
    img: "/story-amara.jpg",
    excerpt:
      "From walking 6 km for water to top of her 6th grade class — how one scholarship rewrote Amara&apos;s life.",
    quote: "I want to be a doctor for my village.",
    feature: true,
  },
  {
    name: "Kwame, 14",
    program: "Education",
    location: "Mbeya",
    year: "2025",
    img: "/story-kwame.jpg",
    excerpt:
      "A bicycle and a dream: how 2,400 students are staying in school thanks to the Bike-to-School program.",
    quote: "I haven&apos;t missed a single day.",
  },
  {
    name: "Grace, 34",
    program: "Women",
    location: "Arusha",
    year: "2024",
    img: "/story-grace.jpg",
    excerpt:
      "Four employees later, Grace&apos;s tailoring shop has become the village blueprint for women-led enterprise.",
    quote: "I employ four other women now.",
  },
  {
    name: "Mwanza Village",
    program: "Water",
    location: "Mwanza",
    year: "2024",
    img: "/program-water.jpg",
    excerpt:
      "Before and after: the morning a hand-pump well replaced a 5 km walk to a contaminated river.",
    quote: "The children drank clean water for the first time.",
  },
  {
    name: "Dr. Asha&apos;s Clinic",
    program: "Healthcare",
    location: "Rukwa",
    year: "2025",
    img: "/program-healthcare.jpg",
    excerpt:
      "One mobile clinic. 40,000 patients. Meet the team making rural healthcare routine, not rare.",
    quote: "Nobody should die from a preventable illness.",
  },
  {
    name: "Green Highlands",
    program: "Environment",
    location: "Kilimanjaro",
    year: "2025",
    img: "/program-environment.jpg",
    excerpt:
      "A million trees and counting: how local nurseries are reshaping the slopes of Kilimanjaro.",
    quote: "Our grandchildren will see a forest.",
  },
]

export default function StoriesPage() {
  const [active, setActive] = useState("All")
  const filtered =
    active === "All" ? stories : stories.filter((s) => s.program.toLowerCase() === active.toLowerCase())
  const featured = filtered.find((s) => s.feature) ?? filtered[0]
  const rest = filtered.filter((s) => s !== featured)

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Impact & Stories"
          title="The faces behind the numbers."
          description="Every story is a reminder: change isn&apos;t an abstraction. It&apos;s a person, a family, a village."
          image="/story-amara.jpg"
          imageAlt="Portrait of a young student"
        />

        {/* Filters */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    active === f
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary/40",
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured story */}
        {featured && (
          <section className="bg-background">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
              <article className="group grid gap-0 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={featured.img || "/placeholder.svg"}
                    alt={featured.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Featured story · {featured.program}
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
                    {featured.name}
                  </h2>
                  <p
                    className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
                    dangerouslySetInnerHTML={{ __html: featured.excerpt }}
                  />
                  <div className="mt-6 flex items-start gap-3 rounded-xl bg-secondary/60 p-5">
                    <Quote className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                    <p
                      className="font-serif text-xl italic text-foreground"
                      dangerouslySetInnerHTML={{ __html: `&ldquo;${featured.quote}&rdquo;` }}
                    />
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {featured.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {featured.year}
                    </span>
                  </div>
                  <Button asChild className="mt-8 w-fit rounded-full bg-primary hover:bg-primary/90">
                    <a href="#grid">Read full story</a>
                  </Button>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Grid */}
        <section id="grid" className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              More stories of change
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((s, i) => (
                <article
                  key={i}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={s.img || "/placeholder.svg"}
                      alt={s.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
                      {s.program}
                    </span>
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {s.location}
                      </span>
                      <span>·</span>
                      <span>{s.year}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-foreground">
                      {s.name}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: s.excerpt }}
                    />
                  </div>
                </article>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="py-20 text-center text-muted-foreground">
                No stories in this category yet — check back soon.
              </p>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingDonate />
    </>
  )
}
