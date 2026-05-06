"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, Shield, DollarSign, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "Receive your customized quote within 24 hours of submission.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "We analyze multiple options to provide the best rates for your shipment.",
  },
  {
    icon: Shield,
    title: "No Obligation",
    description: "Your quote request is completely free with no commitment required.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Our logistics specialists are ready to answer your questions.",
  },
]

export function QuoteFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card rounded-xl border border-border text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm text-pretty">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
