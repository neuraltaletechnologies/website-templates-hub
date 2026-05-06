"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Shield, Wrench, Leaf, Wifi, Clock } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Real-time location tracking on every vehicle for complete visibility and transparency.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive cargo insurance coverage protects your shipments from pickup to delivery.",
  },
  {
    icon: Wrench,
    title: "Regular Maintenance",
    description: "Rigorous maintenance schedules ensure optimal performance and minimize downtime.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "Growing fleet of electric and hybrid vehicles for sustainable logistics solutions.",
  },
  {
    icon: Wifi,
    title: "Connected Technology",
    description: "IoT sensors monitor temperature, humidity, and cargo conditions in real-time.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock dispatch and support for urgent shipping requirements.",
  },
]

export function FleetFeatures() {
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
              Fleet Technology
            </span>
            <div className="h-px w-12 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
          >
            Advanced Fleet Management
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          >
            Our fleet is equipped with cutting-edge technology for maximum efficiency, 
            safety, and environmental responsibility.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-foreground">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground text-pretty">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
