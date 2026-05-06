"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Home, Truck, Plane, Ship, Warehouse, Package, FileText } from "lucide-react"

const quickLinks = [
  { icon: Truck, label: "Road Freight", href: "#road" },
  { icon: Plane, label: "Air Freight", href: "#air" },
  { icon: Ship, label: "Ocean Freight", href: "#ocean" },
  { icon: Warehouse, label: "Warehousing", href: "#warehouse" },
  { icon: Package, label: "Express Delivery", href: "#express" },
  { icon: FileText, label: "Customs", href: "#customs" },
]

export function ServicesHero() {
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
          <span className="text-primary-foreground">Services</span>
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
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-foreground text-balance"
          >
            End-to-End Logistics Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-primary-foreground/80 leading-relaxed text-pretty"
          >
            From origin to destination, we provide comprehensive shipping and supply chain 
            services tailored to your unique business needs. Discover how our integrated 
            solutions can streamline your operations.
          </motion.p>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {quickLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <link.icon className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </motion.div>
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
