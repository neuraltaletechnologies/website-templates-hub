"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export function CompanyStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&h=700&fit=crop"
              alt="Meridian Realty office"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Story</span>
            <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
              From one desk to six cities
            </h2>
            <div className="mt-4 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Sofia Marchetti started Meridian Realty out of a single shared office in 2008, frustrated by
                how transactional the industry had become. Her thesis was simple: agents who live in the
                neighborhoods they sell make better matches than agents chasing volume across an entire metro.
              </p>
              <p>
                Eighteen years later, that's still the model. Every Meridian agent works a focused set of
                neighborhoods, which means fewer generic showings and more conversations that actually move
                a deal forward. We've grown to six cities, but we've kept the team small on purpose.
              </p>
              <p>
                Today, Meridian Realty has helped over 2,400 families buy, sell, or rent — and roughly a third
                of our business comes from repeat clients and referrals, which is the number we're proudest of.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
