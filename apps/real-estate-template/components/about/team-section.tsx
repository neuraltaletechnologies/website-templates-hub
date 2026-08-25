"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { agents } from "@/lib/data/agents"

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const leadership = agents.filter((agent) => agent.leadership)

  return (
    <section className="bg-muted/40 py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Leadership</span>
            <h2 className="mt-2 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">The people steering the ship</h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/agents" className="flex items-center gap-2">
              Meet the Full Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {leadership.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-2xl">
                <Image src={agent.image} alt={agent.name} fill className="object-cover" />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-foreground">{agent.name}</h3>
              <p className="text-sm text-primary">{agent.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
