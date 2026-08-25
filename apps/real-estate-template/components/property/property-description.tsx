import { CheckCircle2 } from "lucide-react"
import type { Property } from "@/lib/data/properties"

export function PropertyDescription({ property }: { property: Property }) {
  return (
    <div className="mt-10 space-y-8">
      <div>
        <h2 className="font-heading text-xl font-semibold text-foreground">About This Property</h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{property.description}</p>
      </div>

      <div>
        <h2 className="font-heading text-xl font-semibold text-foreground">Features & Amenities</h2>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {property.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
