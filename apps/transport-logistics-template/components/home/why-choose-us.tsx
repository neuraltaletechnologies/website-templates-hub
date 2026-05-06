"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Shield,
  Clock,
  HeadphonesIcon,
  Globe2,
  Award,
  TrendingUp,
  Users,
  Leaf,
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure & Insured",
    description: "Full cargo insurance and secure handling protocols protect your shipments from origin to destination.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "99.9% on-time delivery rate backed by advanced route optimization and real-time monitoring.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer service with dedicated account managers for immediate assistance.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    description: "Extensive partner network spanning 150+ countries with seamless cross-border operations.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "ISO 9001, ISO 14001, and C-TPAT certified ensuring quality and compliance standards.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Tracking",
    description: "Advanced GPS and IoT technology provides complete visibility throughout the supply chain.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled logistics professionals with decades of combined experience in freight management.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable logistics solutions with carbon offset programs and green fleet initiatives.",
  },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {isInView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {value}{suffix}
          </motion.span>
        ) : "0"}
      </motion.span>
    </motion.span>
  )
}

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-12 bg-secondary" />
              <span className="text-secondary font-medium tracking-wider uppercase text-sm">
                Why Choose Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
            >
              Trusted by Thousands of Businesses Worldwide
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty"
            >
              With over 25 years of industry experience, TransGlobal Logistics has built 
              a reputation for excellence, reliability, and innovation in the logistics sector.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 grid grid-cols-2 gap-6"
            >
              <div className="p-6 bg-card rounded-xl border border-border">
                <p className="text-4xl font-bold text-primary font-heading">
                  <AnimatedCounter value={25} suffix="+" />
                </p>
                <p className="mt-1 text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <p className="text-4xl font-bold text-primary font-heading">
                  <AnimatedCounter value={10} suffix="K+" />
                </p>
                <p className="mt-1 text-muted-foreground">Happy Clients</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <p className="text-4xl font-bold text-primary font-heading">
                  <AnimatedCounter value={500} suffix="+" />
                </p>
                <p className="mt-1 text-muted-foreground">Fleet Vehicles</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <p className="text-4xl font-bold text-primary font-heading">
                  <AnimatedCounter value={150} suffix="+" />
                </p>
                <p className="mt-1 text-muted-foreground">Countries Served</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="group p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground font-heading">{feature.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
