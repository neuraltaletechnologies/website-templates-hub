import { BedDouble, Bath, Ruler, Calendar, MapPin, Trees } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Property } from "@/lib/data/properties"
import { formatPrice } from "@/lib/data/properties"
import { cn } from "@/lib/utils"

const statusStyles: Record<Property["status"], string> = {
  "For Sale": "bg-primary text-primary-foreground",
  "For Rent": "bg-secondary text-secondary-foreground",
  Pending: "bg-muted text-muted-foreground",
}

export function PropertyOverview({ property }: { property: Property }) {
  const isLand = property.type === "Land"

  const stats = isLand
    ? [{ icon: Trees, label: "Lot Size", value: property.lotSize }]
    : [
        { icon: BedDouble, label: "Bedrooms", value: `${property.beds}` },
        { icon: Bath, label: "Bathrooms", value: `${property.baths}` },
        { icon: Ruler, label: "Living Area", value: `${property.sqft.toLocaleString()} sqft` },
        { icon: Calendar, label: "Year Built", value: `${property.yearBuilt}` },
      ]

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge className={cn("border-0", statusStyles[property.status])}>{property.status}</Badge>
        <Badge variant="outline">{property.type}</Badge>
      </div>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">{property.title}</h1>
          <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            {property.address}, {property.city}, {property.state} {property.zip}
          </p>
        </div>
        <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">{formatPrice(property)}</p>
      </div>

      <div className={cn("mt-8 grid gap-4 rounded-2xl border border-border bg-card p-6", isLand ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-4")}>
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="font-semibold text-foreground">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
