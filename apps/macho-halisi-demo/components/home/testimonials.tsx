"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Our guide read the plains like a book — game drives felt unhurried but we saw everything, from lions at dawn to a full day in the crater that left us speechless.",
    name: "A traveler",
    location: "United Kingdom",
    suite: "6 Days Northern Parks Safari",
  },
  {
    quote:
      "Meeting the Hadzabe near Lake Eyasi was the most honest cultural exchange we've had on any trip — nothing staged, just real conversation and real skill on display.",
    name: "A family",
    location: "Germany",
    suite: "Cultural Tourism: Maasai, Hadzabe & Datoga",
  },
  {
    quote:
      "We climbed Kilimanjaro via Lemosho and the pacing made all the difference — every guide and porter on the mountain clearly knew what they were doing.",
    name: "A couple",
    location: "United States",
    suite: "Kilimanjaro, Meru & Ol Doinyo Lengai Treks",
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
        <p className="eyebrow text-accent mb-3">In travellers&apos; words</p>
        <p className="text-xs text-muted-foreground mb-8 max-w-md mx-auto">
          Sample testimonials representative of guest feedback for this demo
          — not verbatim reviews.
        </p>

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
          <RatingBadge platform="TripAdvisor" rating="5.0" note="Guest Favorite" />
          <RatingBadge platform="SafariBookings" rating="5.0" note="Verified Operator" />
          <RatingBadge platform="Google" rating="4.9" note="Guest Favorite" />
        </div>
        <p className="mt-6 text-[11px] text-muted-foreground">
          Ratings shown are illustrative for this demo — see Macho Halisi&apos;s
          real guest reviews on TripAdvisor and SafariBookings.
        </p>
      </div>
    </section>
  )
}

function RatingBadge({
  platform,
  rating,
  note,
}: {
  platform: string
  rating: string
  note: string
}) {
  return (
    <div className="text-left sm:text-center">
      <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        {platform}
      </div>
      <div className="mt-2 font-serif text-3xl">{rating}</div>
      <div className="mt-1 text-xs text-muted-foreground">{note}</div>
    </div>
  )
}
