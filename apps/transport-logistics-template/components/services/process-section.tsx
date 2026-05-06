"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, ClipboardList, Truck, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Request a Quote",
    description: "Share your shipping requirements with us. Our team will analyze your needs and provide a competitive, customized quote within 24 hours.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Plan & Prepare",
    description: "Once confirmed, we plan the optimal route and mode of transport. Our team handles all documentation and coordination.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Ship & Track",
    description: "Your cargo is picked up and transported via our global network. Track your shipment in real-time through our digital platform.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Deliver & Confirm",
    description: "We ensure safe, on-time delivery to your destination. Receive proof of delivery and complete documentation instantly.",
  },
]

export function ProcessSection() {
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
              Our Process
            </span>
            <div className="h-px w-12 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          >
            Our streamlined process ensures your shipments are handled efficiently 
            from quote to delivery.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                className="relative"
              >
                <div className="bg-card p-6 rounded-2xl border border-border text-center h-full">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4 mx-auto">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-7 w-7 text-secondary" />
                  </div>

                  <h3 className="text-xl font-semibold font-heading text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-muted-foreground text-pretty">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
