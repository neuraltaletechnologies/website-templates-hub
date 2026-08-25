"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop"
          alt="Meridian Realty team neighborhood"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/50" />
      </div>
      <div className="container relative mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">About Meridian Realty</span>
          <h1 className="mt-2 text-balance font-heading text-4xl font-bold text-primary-foreground sm:text-5xl">
            Built by agents who got tired of the old way of doing this
          </h1>
          <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
            Founded in 2008, Meridian Realty has grown from a two-desk office to a team of agents covering
            six cities — without losing the part where we actually know your neighborhood.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
