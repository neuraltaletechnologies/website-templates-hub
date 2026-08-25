"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AgentCard } from "@/components/agents/agent-card"
import { agents } from "@/lib/data/agents"

export function AgentsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <AgentCard agent={agent} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
