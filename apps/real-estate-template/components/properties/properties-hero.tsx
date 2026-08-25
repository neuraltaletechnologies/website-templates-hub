"use client"

import { motion } from "framer-motion"

export function PropertiesHero() {
  return (
    <section className="border-b border-border bg-muted/40 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Listings</span>
          <h1 className="mt-2 text-balance font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Browse every home in our portfolio
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Filter by type, status, or price to narrow things down — or start with a location and see what's
            actually available right now.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
