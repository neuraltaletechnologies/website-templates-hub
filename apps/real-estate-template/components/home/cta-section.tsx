"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Key } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-16"
        >
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
              <Key className="h-7 w-7 text-secondary-foreground" />
            </div>
            <h2 className="mx-auto mt-6 max-w-xl text-balance font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">
              Thinking about buying, selling, or renting?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-primary-foreground/80">
              Tell us what you're looking for and we'll match you with an agent who knows that market cold —
              no obligation, no pressure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact" className="flex items-center gap-2">
                  Talk to an Agent
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="/properties">Browse Listings</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
