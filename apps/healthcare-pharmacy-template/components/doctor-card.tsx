"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface DoctorCardProps {
  name: string
  specialty: string
  image: string
  credentials?: string
  index?: number
}

export function DoctorCard({ name, specialty, image, credentials, index = 0 }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button asChild className="w-full" size="sm">
              <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-primary">{specialty}</p>
          {credentials && (
            <p className="text-xs text-muted-foreground mt-1">{credentials}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
