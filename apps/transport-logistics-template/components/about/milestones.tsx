"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Truck, Globe, Rocket, Award, Leaf, Building2 } from "lucide-react"

const milestones = [
  {
    year: "1998",
    title: "The Beginning",
    description: "TransGlobal founded in New York with a single truck and a vision for global logistics.",
    icon: Truck,
  },
  {
    year: "2005",
    title: "Going International",
    description: "Expanded operations to Europe and Asia, establishing our first overseas distribution centers.",
    icon: Globe,
  },
  {
    year: "2010",
    title: "Digital Transformation",
    description: "Launched proprietary tracking platform, revolutionizing real-time shipment visibility.",
    icon: Rocket,
  },
  {
    year: "2015",
    title: "Industry Recognition",
    description: "Named Top 10 Global Logistics Provider by Logistics Management Magazine.",
    icon: Award,
  },
  {
    year: "2020",
    title: "Sustainability Initiative",
    description: "Committed to carbon neutrality, introducing electric vehicles and green warehouses.",
    icon: Leaf,
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Reached 150+ countries with state-of-the-art facilities on every continent.",
    icon: Building2,
  },
]

export function Milestones() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-12 bg-secondary" />
            <span className="text-secondary font-medium tracking-wider uppercase text-sm">
              Our Journey
            </span>
            <div className="h-px w-12 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
          >
            Milestones That Define Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          >
            From humble beginnings to global leadership, explore the key moments 
            that shaped TransGlobal Logistics.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`p-6 bg-card rounded-xl border border-border ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  } max-w-md`}>
                    <span className="text-3xl font-bold text-primary font-heading">{milestone.year}</span>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{milestone.title}</h3>
                    <p className="mt-2 text-muted-foreground text-pretty">{milestone.description}</p>
                  </div>
                </div>

                {/* Icon (center) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary items-center justify-center z-10">
                  <milestone.icon className="h-7 w-7 text-primary-foreground" />
                </div>

                {/* Empty space for other side */}
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
