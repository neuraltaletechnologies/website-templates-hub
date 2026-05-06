"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Car,
  Pill,
  ShoppingBag,
  Cpu,
  Leaf,
  Factory,
  Utensils,
  Building,
} from "lucide-react"

const industries = [
  {
    icon: Car,
    name: "Automotive",
    description: "JIT delivery and supply chain solutions for auto manufacturers and suppliers.",
  },
  {
    icon: Pill,
    name: "Pharmaceutical",
    description: "Temperature-controlled logistics for medications and medical devices.",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    description: "Omnichannel fulfillment and last-mile delivery for online retailers.",
  },
  {
    icon: Cpu,
    name: "Technology",
    description: "Secure handling of high-value electronics and sensitive equipment.",
  },
  {
    icon: Leaf,
    name: "Agriculture",
    description: "Cold chain logistics for perishables and agricultural products.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Raw materials sourcing and finished goods distribution.",
  },
  {
    icon: Utensils,
    name: "Food & Beverage",
    description: "Fresh and frozen food logistics with HACCP compliance.",
  },
  {
    icon: Building,
    name: "Construction",
    description: "Heavy cargo and project logistics for building materials.",
  },
]

export function IndustryExpertise() {
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
              Industry Expertise
            </span>
            <div className="h-px w-12 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
          >
            Tailored Solutions for Every Industry
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          >
            With deep expertise across diverse sectors, we understand the unique 
            logistics challenges of your industry.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <industry.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground">{industry.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
