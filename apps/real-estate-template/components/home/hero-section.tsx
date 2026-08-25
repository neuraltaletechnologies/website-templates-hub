"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, MapPin, Home as HomeIcon, ArrowRight, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function HeroSection() {
  const router = useRouter()
  const [location, setLocation] = useState("")
  const [type, setType] = useState("any")
  const [status, setStatus] = useState("any")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location.trim()) params.set("q", location.trim())
    if (type !== "any") params.set("type", type)
    if (status !== "any") params.set("status", status)
    router.push(`/properties${params.toString() ? `?${params.toString()}` : ""}`)
  }

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
          alt="Modern home exterior at dusk"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
      </div>

      <div className="container relative mx-auto px-4 pt-20 pb-32 lg:pt-28 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            <HomeIcon className="h-4 w-4 text-secondary" />
            Trusted by 4,200+ families across the region
          </span>
          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Find the place that finally feels like <span className="text-secondary">home</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Meridian Realty pairs a curated portfolio of homes with agents who actually know the
            neighborhood — so you spend less time guessing and more time deciding.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSearch}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border bg-card p-3 shadow-2xl sm:p-4"
        >
          <div className="grid gap-3 sm:grid-cols-[1.5fr_1fr_1fr_auto]">
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, neighborhood, or ZIP"
                className="pl-9"
              />
            </div>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any type</SelectItem>
                <SelectItem value="House">House</SelectItem>
                <SelectItem value="Condo">Condo</SelectItem>
                <SelectItem value="Townhome">Townhome</SelectItem>
                <SelectItem value="Villa">Villa</SelectItem>
                <SelectItem value="Land">Land</SelectItem>
              </SelectContent>
            </Select>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="For sale or rent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Buy or rent</SelectItem>
                <SelectItem value="For Sale">For Sale</SelectItem>
                <SelectItem value="For Rent">For Rent</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Search className="h-4 w-4" />
              <span className="sm:hidden">Search Properties</span>
            </Button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors"
          >
            <PlayCircle className="h-5 w-5" />
            Watch how it works
          </Link>
          <div className="hidden h-4 w-px bg-primary-foreground/20 sm:block" />
          <Link href="/properties" className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline">
            Browse all listings
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
