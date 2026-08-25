"use client"

import Image from "next/image"
import Link from "next/link"
import { BedDouble, Bath, Ruler, MapPin, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Property } from "@/lib/data/properties"
import { formatPrice } from "@/lib/data/properties"
import { cn } from "@/lib/utils"

const statusStyles: Record<Property["status"], string> = {
  "For Sale": "bg-primary text-primary-foreground",
  "For Rent": "bg-secondary text-secondary-foreground",
  Pending: "bg-muted text-muted-foreground",
}

export function PropertyCard({ property, className }: { property: Property; className?: string }) {
  const isLand = property.type === "Land"

  return (
    <Link
      href={`/properties/${property.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge className={cn("border-0", statusStyles[property.status])}>{property.status}</Badge>
          <Badge variant="outline" className="border-0 bg-background/90 text-foreground">
            {property.type}
          </Badge>
        </div>
        <div className="absolute bottom-3 right-3 rounded-lg bg-background/90 px-3 py-1.5 backdrop-blur-sm">
          <span className="font-heading text-lg font-bold text-foreground">{formatPrice(property)}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary text-balance">
            {property.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="text-pretty">
              {property.city}, {property.state}
            </span>
          </p>
        </div>

        {!isLand ? (
          <div className="mt-auto flex items-center gap-4 border-t border-border pt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4" />
              {property.beds} bd
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="h-4 w-4" />
              {property.baths} ba
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler className="h-4 w-4" />
              {property.sqft.toLocaleString()} sqft
            </span>
          </div>
        ) : (
          <div className="mt-auto flex items-center gap-4 border-t border-border pt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Ruler className="h-4 w-4" />
              {property.lotSize}
            </span>
          </div>
        )}

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          View Details
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  )
}
