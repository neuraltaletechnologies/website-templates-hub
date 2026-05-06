"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"

const leadership = [
  {
    name: "James Mitchell",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "25+ years in logistics, former VP at DHL",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Chen",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Supply chain expert, MBA from Stanford",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Roberts",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Tech innovator, former Google engineer",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Johnson",
    role: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "CPA, former CFO at FedEx Ground",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Park",
    role: "VP of Global Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "20 years international logistics experience",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Lisa Thompson",
    role: "VP of Customer Success",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Customer experience strategist",
    linkedin: "#",
    twitter: "#",
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background" ref={ref}>
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
              Leadership Team
            </span>
            <div className="h-px w-12 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
          >
            Meet the People Behind Our Success
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          >
            Our leadership team brings decades of combined experience in logistics, 
            technology, and business strategy.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay with social links */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-3">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-primary-foreground/90 flex items-center justify-center hover:bg-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 rounded-full bg-primary-foreground/90 flex items-center justify-center hover:bg-primary-foreground transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@transglobal.com`}
                      className="w-10 h-10 rounded-full bg-primary-foreground/90 flex items-center justify-center hover:bg-primary-foreground transition-colors"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="mt-1 text-sm text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
