"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Truck, Plane, Ship, Warehouse } from "lucide-react"

const stats = [
  {
    icon: Truck,
    value: "350+",
    label: "Trucks & Trailers",
    description: "Modern fleet with GPS tracking",
  },
  {
    icon: Plane,
    value: "50+",
    label: "Aircraft Partners",
    description: "Access to global air cargo network",
  },
  {
    icon: Ship,
    value: "100+",
    label: "Vessel Partnerships",
    description: "Connections to major shipping lines",
  },
  {
    icon: Warehouse,
    value: "25+",
    label: "Distribution Centers",
    description: "Strategically located worldwide",
  },
]

export function FleetStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-card rounded-2xl border border-border text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary font-heading">{stat.value}</p>
              <p className="mt-1 text-lg font-semibold text-foreground">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
