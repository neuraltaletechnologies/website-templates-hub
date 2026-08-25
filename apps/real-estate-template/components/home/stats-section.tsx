"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: "18", label: "Years in the region" },
  { value: "2,400+", label: "Homes sold" },
  { value: "6", label: "Cities served" },
  { value: "4.9/5", label: "Average client rating" },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-primary py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-3xl font-bold text-secondary sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
