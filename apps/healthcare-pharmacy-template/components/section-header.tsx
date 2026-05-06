"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({ label, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {label && (
        <span className="inline-block text-sm font-medium text-primary mb-2 uppercase tracking-wider">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  )
}
