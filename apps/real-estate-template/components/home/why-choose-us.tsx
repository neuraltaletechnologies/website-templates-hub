"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, Users, TrendingUp, Clock } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Agents who know the block",
    description:
      "Every agent works a handful of neighborhoods deeply rather than a whole city thinly, so you get real answers about schools, commutes, and resale value.",
  },
  {
    icon: ShieldCheck,
    title: "No surprises at closing",
    description:
      "We walk you through inspection reports, contingencies, and closing costs in plain language, well before you're staring down a signature deadline.",
  },
  {
    icon: TrendingUp,
    title: "Pricing backed by data",
    description:
      "Listings are priced using recent comparable sales and current demand, not guesswork — which means fewer stale listings and faster, cleaner offers.",
  },
  {
    icon: Clock,
    title: "Responsive, not pushy",
    description:
      "Questions get answered same-day. Showings get scheduled around your calendar, not ours. You set the pace.",
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted/40" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Why Meridian</span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Real estate, handled the way it should be
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
