"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="border-b border-border bg-muted/40 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Get In Touch</span>
          <h1 className="mt-2 text-balance font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Let's find your next move
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Whether you're buying, selling, renting, or just curious what your home is worth — send us a
            note and the right agent will follow up within one business day.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
