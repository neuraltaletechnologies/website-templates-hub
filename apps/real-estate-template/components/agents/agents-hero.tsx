"use client"

import { motion } from "framer-motion"

export function AgentsHero() {
  return (
    <section className="border-b border-border bg-muted/40 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Team</span>
          <h1 className="mt-2 text-balance font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Agents who actually answer the phone
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Six agents, six areas of specialty — from first-time buyers to investment portfolios. Find the
            one whose experience matches what you're looking for.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
