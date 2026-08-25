"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Handshake, Compass, MessageSquare, Award } from "lucide-react"

const values = [
  {
    icon: Handshake,
    title: "Your interests first",
    description: "We only represent one side of a transaction at a time, and we say so upfront — no dual agency surprises.",
  },
  {
    icon: Compass,
    title: "Neighborhood depth over city breadth",
    description: "Every agent focuses on a handful of areas so their advice comes from lived experience, not a database.",
  },
  {
    icon: MessageSquare,
    title: "Plain-language communication",
    description: "Contracts, contingencies, and closing costs explained the way we'd explain them to a friend.",
  },
  {
    icon: Award,
    title: "Held to a higher standard",
    description: "Every agent completes ongoing ethics and market training beyond what's legally required.",
  },
]

export function CoreValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-muted/40 py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">What We Stand For</span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">Our values, in practice</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
