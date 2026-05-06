"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Home } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-8"
        >
          <Link href="/" className="flex items-center gap-1 hover:text-primary-foreground transition-colors">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary-foreground">About Us</span>
        </motion.nav>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-px w-12 bg-secondary" />
            <span className="text-secondary font-medium tracking-wider uppercase text-sm">
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-foreground text-balance"
          >
            Connecting the World Through Logistics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-primary-foreground/80 leading-relaxed text-pretty"
          >
            For over 25 years, TransGlobal Logistics has been at the forefront of innovative 
            shipping and supply chain solutions. We combine cutting-edge technology with 
            personalized service to deliver excellence across the globe.
          </motion.p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 32.7C384 32.7 480 41.3 576 50C672 58.7 768 67.3 864 62.7C960 58 1056 40 1152 32.7C1248 25.3 1344 28.7 1392 30.3L1440 32V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
