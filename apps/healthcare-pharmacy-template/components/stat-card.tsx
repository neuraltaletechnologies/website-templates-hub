"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  value: string
  label: string
  icon: LucideIcon
  index?: number
}

export function StatCard({ value, label, icon: Icon, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <div className="text-4xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </motion.div>
  )
}
