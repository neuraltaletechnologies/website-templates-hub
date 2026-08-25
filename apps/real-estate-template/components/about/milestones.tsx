"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const milestones = [
  { year: "2008", title: "Meridian Realty founded", description: "Sofia Marchetti opens a single shared office in Austin, TX." },
  { year: "2013", title: "First 500 homes sold", description: "The team grows to five agents and opens a second office in Denver." },
  { year: "2018", title: "Expanded to six cities", description: "Meridian adds Charleston, Portland, Nashville, and Scottsdale." },
  { year: "2023", title: "2,000th family served", description: "Repeat clients and referrals now make up a third of all business." },
]

export function Milestones() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Milestones</span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">18 years, one neighborhood at a time</h2>
        </motion.div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />
          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 pl-12 sm:pl-0"
              >
                <div className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-secondary sm:left-1/2" />
                <div className="sm:grid sm:w-full sm:grid-cols-2 sm:gap-8">
                  <div className="sm:text-right">
                    <span className="font-heading text-xl font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{milestone.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground text-pretty">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
