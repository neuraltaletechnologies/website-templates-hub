"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, ArrowRight, Calculator, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-12 bg-secondary" />
            <span className="text-secondary font-medium tracking-wider uppercase text-sm">
              Get Started Today
            </span>
            <div className="h-px w-12 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-balance"
          >
            Ready to Streamline Your Logistics?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty"
          >
            Join thousands of businesses that trust TransGlobal Logistics for their 
            shipping needs. Get a free quote today and experience the difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
            >
              <Link href="/quote" className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </motion.div>

          {/* Phone Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-primary-foreground/10 rounded-full backdrop-blur-sm border border-primary-foreground/20">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Phone className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xs text-primary-foreground/70">Call Us Anytime</p>
                <a href="tel:+1-800-555-0199" className="text-lg font-bold hover:text-secondary transition-colors">
                  +1 (800) 555-0199
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
