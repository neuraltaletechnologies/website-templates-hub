"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I find my tracking number?",
    answer: "Your tracking number is provided in the confirmation email you received when your shipment was booked. It typically starts with 'TGL-' followed by the year and a unique identifier. You can also find it in your account dashboard if you created a shipment online.",
  },
  {
    question: "How often is tracking information updated?",
    answer: "Our tracking system updates in real-time as your shipment passes through our network. For road freight, updates typically occur every 1-2 hours. Air and ocean freight updates happen at each major checkpoint - departure, arrival, and customs clearance.",
  },
  {
    question: "What does each status mean?",
    answer: "Processing: Your shipment is being prepared for transport. In Transit: Your package is on the move. Out for Delivery: Your package is with a driver for final delivery. Delivered: Your package has been successfully delivered.",
  },
  {
    question: "My tracking shows no updates. What should I do?",
    answer: "If your tracking hasn't updated in more than 24 hours (for domestic) or 48 hours (for international), please contact our customer service team at support@transglobal.com or call +1 (800) 555-0199. Have your tracking number ready.",
  },
  {
    question: "Can I change my delivery address after shipping?",
    answer: "Yes, in most cases we can redirect your shipment to a new address. Contact us as soon as possible with your tracking number and the new delivery address. Additional fees may apply depending on the location change.",
  },
  {
    question: "What if I miss my delivery?",
    answer: "If you miss a delivery attempt, the driver will leave a notice with instructions. Typically, we'll make up to 3 delivery attempts. You can also request to hold your package at a local facility for pickup, or schedule a specific delivery time.",
  },
]

export function TrackingFAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <div className="h-px w-12 bg-secondary" />
              <span className="text-secondary font-medium tracking-wider uppercase text-sm">
                FAQ
              </span>
              <div className="h-px w-12 bg-secondary" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
