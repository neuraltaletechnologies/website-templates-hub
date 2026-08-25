"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Renee & Paul Ibarra",
    role: "Bought in Cedar Ridge",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
    quote:
      "Daniel found us three houses in our range before we'd even finished our pre-approval. We closed in five weeks and never felt rushed once.",
    rating: 5,
  },
  {
    name: "Ken Whitfield",
    role: "Sold in Old Town",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces",
    quote:
      "Elena's pricing strategy got us four offers in the first weekend, $22,000 over asking. She clearly knew that market better than we did.",
    rating: 5,
  },
  {
    name: "Marisol Chen",
    role: "Rented in Riverside Park",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=faces",
    quote:
      "I was relocating from out of state and nervous about renting sight unseen. Marcus did a video walkthrough for me and answered every question same-day.",
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Client Stories</span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            What it's like to work with us
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <Quote className="h-8 w-8 text-secondary/40" />
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full">
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
