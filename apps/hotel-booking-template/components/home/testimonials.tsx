"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "We came for four nights and stayed for nine. The staff knew our names by breakfast, our preferences by dinner, and our children's favourite songs by day three. Unforgettable.",
    name: "Eleanor & James Whitfield",
    location: "London, UK",
    suite: "Ocean View Suite · 9 nights",
  },
  {
    quote:
      "I've stayed in the world's great hotels. Maison Lumière is something different — quieter, warmer, more thoughtful. The spa alone is worth the journey.",
    name: "Dr. Priya Raghavan",
    location: "Mumbai, India",
    suite: "Garden Villa · 6 nights",
  },
  {
    quote:
      "Our honeymoon could not have been more perfect. The sunset dinner on the beach, the morning in the spa, the private pool. We are already planning to return for our anniversary.",
    name: "Marcus & Aria Bennett",
    location: "New York, USA",
    suite: "Honeymoon Suite · 7 nights",
  },
]

export function HomeTestimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section className="container-luxe py-20 md:py-32">
      <div className="max-w-5xl mx-auto text-center">
        <p className="eyebrow text-accent mb-8">In guests&apos; words</p>

        <div className="flex items-center justify-center gap-1 mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>

        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-balance">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        <div className="mt-10">
          <div className="font-medium">{current.name}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {current.location} · {current.suite}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="h-11 w-11 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-0.5 transition-all ${
                  i === index ? "w-10 bg-accent" : "w-5 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="h-11 w-11 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-16 pt-10 border-t border-border grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <RatingBadge platform="TripAdvisor" rating="5.0" reviews="2,847" />
          <RatingBadge platform="Booking.com" rating="9.7" reviews="1,932" />
          <RatingBadge platform="Google" rating="4.9" reviews="1,204" />
        </div>
      </div>
    </section>
  )
}

function RatingBadge({
  platform,
  rating,
  reviews,
}: {
  platform: string
  rating: string
  reviews: string
}) {
  return (
    <div className="text-left sm:text-center">
      <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        {platform}
      </div>
      <div className="mt-2 font-serif text-3xl">{rating}</div>
      <div className="mt-1 text-xs text-muted-foreground">{reviews} reviews</div>
    </div>
  )
}
