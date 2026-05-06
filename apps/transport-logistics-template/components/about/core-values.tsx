"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Users, Lightbulb, Heart, Leaf, Zap } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with honesty and transparency in every interaction, building trust with our clients and partners.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our clients are at the heart of everything we do. We listen, adapt, and deliver solutions that exceed expectations.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously embrace new technologies and ideas to improve our services and stay ahead of industry trends.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Heart,
    title: "Reliability",
    description: "We keep our promises. Our 99.9% on-time delivery rate reflects our commitment to dependable service.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We actively reduce our environmental footprint through green initiatives and carbon offset programs.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We strive for excellence in every shipment, every interaction, and every aspect of our operations.",
    color: "bg-orange-500/10 text-orange-600",
  },
]

export function CoreValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted/50" ref={ref}>
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
              Our Values
            </span>
            <div className="h-px w-12 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
          >
            The Principles That Guide Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          >
            Our core values shape our culture and define how we serve our clients, 
            treat our employees, and contribute to our communities.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${value.color} mb-4 group-hover:scale-110 transition-transform`}>
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-foreground">{value.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
