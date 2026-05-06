"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const stories = [
  {
    name: "Amara, 12",
    location: "Kigoma, Tanzania",
    img: "/story-amara.jpg",
    program: "Education",
    quote:
      "I used to walk 6 km for dirty water. Now I walk to school — and I want to be a doctor for my village.",
    outcome: "Now top of her class and sponsored through university.",
  },
  {
    name: "Kwame, 14",
    location: "Mbeya Province",
    img: "/story-kwame.jpg",
    program: "Child Protection",
    quote:
      "The bicycle I got from Uzima changed everything. I haven&apos;t missed a single day of school this year.",
    outcome: "One of 2,400+ students who received a Bike-to-School kit in 2025.",
  },
  {
    name: "Grace, 34",
    location: "Arusha, Tanzania",
    img: "/story-grace.jpg",
    program: "Women Empowerment",
    quote:
      "The microloan let me open my own tailoring shop. Today I employ four other women from my village.",
    outcome: "Now a mentor in the Uzima Women&apos;s Business Circle.",
  },
]

export function StoriesCarousel() {
  const [i, setI] = useState(0)
  const s = stories[i]
  const next = () => setI((p) => (p + 1) % stories.length)
  const prev = () => setI((p) => (p - 1 + stories.length) % stories.length)

  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Stories of Change
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-background text-balance sm:text-4xl lg:text-5xl">
              Behind every statistic, there&apos;s a name we won&apos;t forget.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={prev}
              size="icon"
              variant="outline"
              aria-label="Previous story"
              className="h-11 w-11 rounded-full border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={next}
              size="icon"
              variant="outline"
              aria-label="Next story"
              className="h-11 w-11 rounded-full border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 overflow-hidden rounded-2xl border border-background/10 bg-background/5 lg:grid-cols-12">
          <div className="relative aspect-square lg:col-span-5 lg:aspect-auto">
            <Image
              src={s.img || "/placeholder.svg"}
              alt={s.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {s.program}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 p-8 lg:col-span-7 lg:p-12">
            <div>
              <Quote className="h-8 w-8 text-accent" aria-hidden />
              <p
                className="mt-4 font-serif text-2xl leading-snug text-background text-balance sm:text-3xl lg:text-4xl"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${s.quote}&rdquo;` }}
              />
              <p className="mt-6 text-sm text-background/80">
                — <span className="font-semibold text-background">{s.name}</span>, {s.location}
              </p>
            </div>
            <div className="rounded-xl border border-background/10 bg-background/5 p-4">
              <p className="text-xs uppercase tracking-wider text-background/60">Impact update</p>
              <p
                className="mt-1 text-sm text-background/90"
                dangerouslySetInnerHTML={{ __html: s.outcome }}
              />
            </div>
            <div className="flex items-center gap-2">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to story ${idx + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    idx === i ? "w-8 bg-accent" : "w-4 bg-background/30",
                  )}
                />
              ))}
              <Link
                href="/stories"
                className="ml-auto text-sm font-semibold text-accent hover:underline"
              >
                Read all stories &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
