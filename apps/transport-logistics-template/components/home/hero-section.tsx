"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, ArrowRight, Truck, Plane, Ship, Package, Clock, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const stats = [
  { value: "25+", label: "Years Experience", icon: Clock },
  { value: "150+", label: "Countries Served", icon: Globe },
  { value: "50K+", label: "Deliveries Daily", icon: Package },
  { value: "99.9%", label: "On-Time Delivery", icon: Shield },
]

const services = [
  { icon: Truck, label: "Road Freight" },
  { icon: Plane, label: "Air Freight" },
  { icon: Ship, label: "Ocean Freight" },
  { icon: Package, label: "Express" },
]

export function HeroSection() {
  const [trackingNumber, setTrackingNumber] = useState("")

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"
        />
        
        {/* Animated truck path */}
        <svg className="absolute bottom-0 left-0 w-full h-40 opacity-10" preserveAspectRatio="none">
          <motion.path
            d="M0,100 Q250,20 500,100 T1000,100 T1500,100 T2000,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10,5"
            className="text-primary-foreground"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-12 bg-secondary" />
              <span className="text-secondary font-medium tracking-wider uppercase text-sm">
                Global Logistics Leader
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-balance"
            >
              Delivering Excellence{" "}
              <span className="text-secondary">Worldwide</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-xl text-pretty"
            >
              Your trusted partner for seamless logistics solutions. From road to air to ocean, 
              we connect businesses across 150+ countries with reliable, efficient, and 
              sustainable shipping services.
            </motion.p>

            {/* Tracking Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20"
            >
              <p className="text-sm font-medium mb-3">Track Your Shipment</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter tracking number..."
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="pl-10 h-12 bg-card text-card-foreground border-0"
                  />
                </div>
                <Button 
                  asChild
                  className="h-12 px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <Link href={`/tracking${trackingNumber ? `?id=${trackingNumber}` : ""}`}>
                    Track Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Service Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {services.map((service, index) => (
                <div
                  key={service.label}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm border border-primary-foreground/20"
                >
                  <service.icon className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium">{service.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <stat.icon className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
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
