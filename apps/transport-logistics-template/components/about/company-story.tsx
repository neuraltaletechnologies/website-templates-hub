"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Target, Eye, CheckCircle2 } from "lucide-react"

const highlights = [
  "Founded in 1998 with a single truck",
  "Expanded to 150+ countries by 2010",
  "Launched digital tracking platform in 2015",
  "Achieved carbon-neutral operations in 2023",
  "Named Top 10 Global Logistics Provider",
]

export function CompanyStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                alt="TransGlobal Logistics warehouse operations"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-xl border border-border"
            >
              <p className="text-4xl font-bold text-primary font-heading">25+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-12 bg-secondary" />
              <span className="text-secondary font-medium tracking-wider uppercase text-sm">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
            >
              Building a Global Network, One Delivery at a Time
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-muted-foreground leading-relaxed text-pretty"
            >
              TransGlobal Logistics was founded in 1998 with a simple mission: to make 
              global shipping accessible, reliable, and efficient for businesses of all sizes. 
              What started as a small trucking company with a single vehicle has grown into 
              one of the world&apos;s leading integrated logistics providers.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-muted-foreground leading-relaxed text-pretty"
            >
              Today, we operate in over 150 countries, employ more than 5,000 logistics 
              professionals, and handle over 50,000 shipments daily. Our commitment to 
              innovation, sustainability, and customer service excellence remains the 
              cornerstone of everything we do.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 space-y-3"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 bg-card rounded-2xl border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold font-heading text-foreground">Our Mission</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              To empower businesses worldwide with seamless, sustainable, and innovative 
              logistics solutions that drive growth and connect communities across the globe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 bg-card rounded-2xl border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
              <Eye className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold font-heading text-foreground">Our Vision</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              To be the world&apos;s most trusted and innovative logistics partner, setting 
              industry standards for efficiency, sustainability, and customer experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
