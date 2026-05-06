"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
  rating: number
  index?: number
}

export function TestimonialCard({ name, role, image, quote, rating, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border-0 shadow-sm">
        <CardContent className="p-6">
          <Quote className="h-8 w-8 text-primary/20 mb-4" />
          <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
            {quote}
          </p>
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "fill-accent text-accent" : "text-muted"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-foreground">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
