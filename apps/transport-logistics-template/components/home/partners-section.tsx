"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const partners = [
  { name: "FedEx", logo: "FedEx" },
  { name: "DHL", logo: "DHL" },
  { name: "Maersk", logo: "Maersk" },
  { name: "UPS", logo: "UPS" },
  { name: "Emirates", logo: "Emirates SkyCargo" },
  { name: "CMA CGM", logo: "CMA CGM" },
]

const certifications = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "C-TPAT Certified",
  "AEO Certified",
  "IATA Certified",
  "SmartWay Partner",
]

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 bg-muted/30 border-y border-border" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted Partners & Carriers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="flex items-center justify-center px-6 py-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <span className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors">
                {partner.logo}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-12 border-t border-border"
        >
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Industry Certifications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/20"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
