"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  index?: number
}

export function ServiceCard({ title, description, image, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden h-full border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          <Button variant="link" asChild className="p-0 h-auto text-primary">
            <Link href={href} className="flex items-center gap-1">
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
