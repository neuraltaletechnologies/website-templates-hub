"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Truck,
  Plane,
  Ship,
  Warehouse,
  Package,
  FileText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Truck,
    title: "Road Freight",
    description: "Full truckload (FTL) and less-than-truckload (LTL) shipping solutions with real-time GPS tracking across all major highways.",
    features: ["GPS Tracking", "FTL & LTL Options", "Cross-Border"],
    href: "/services#road",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Express air cargo services connecting major airports worldwide. Priority handling for time-sensitive shipments.",
    features: ["Express Delivery", "Global Network", "Customs Support"],
    href: "/services#air",
    color: "bg-sky-500/10 text-sky-600",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective sea freight for bulk shipments. FCL and LCL options with comprehensive port coverage.",
    features: ["FCL & LCL", "Major Ports", "Competitive Rates"],
    href: "/services#ocean",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "State-of-the-art storage facilities with climate control, inventory management, and distribution services.",
    features: ["Climate Control", "Inventory System", "Pick & Pack"],
    href: "/services#warehouse",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Package,
    title: "Express Delivery",
    description: "Same-day and next-day delivery for urgent shipments. Dedicated courier network for last-mile excellence.",
    features: ["Same-Day Option", "Next-Day Guaranteed", "Last-Mile"],
    href: "/services#express",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: FileText,
    title: "Custom Clearance",
    description: "Expert customs brokerage services for seamless import/export. Complete documentation and compliance support.",
    features: ["Documentation", "Duty Optimization", "Compliance"],
    href: "/services#customs",
    color: "bg-emerald-500/10 text-emerald-600",
  },
]

export function ServicesOverview() {
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
              Our Services
            </span>
            <div className="h-px w-12 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
          >
            Comprehensive Logistics Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          >
            From origin to destination, we provide end-to-end logistics services 
            tailored to your business needs with unmatched reliability and efficiency.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl ${service.color} mb-4`}>
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold font-heading text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-primary font-medium">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
