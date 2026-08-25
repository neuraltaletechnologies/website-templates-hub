import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Property } from "@/lib/data/properties"

export function PropertyMap({ property }: { property: Property }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${property.lat},${property.lng}`

  return (
    <div className="mt-10">
      <h2 className="font-heading text-xl font-semibold text-foreground">Location</h2>
      <div className="relative mt-3 flex aspect-[16/7] items-center justify-center overflow-hidden rounded-2xl border border-border bg-[linear-gradient(135deg,_var(--muted)_25%,_transparent_25%),linear-gradient(225deg,_var(--muted)_25%,_transparent_25%),linear-gradient(45deg,_var(--muted)_25%,_transparent_25%),linear-gradient(315deg,_var(--muted)_25%,_var(--card)_25%)] bg-[length:24px_24px] bg-card">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium text-foreground">
              {property.address}, {property.city}, {property.state}
            </p>
            <p className="text-sm text-muted-foreground">
              {property.lat.toFixed(4)}, {property.lng.toFixed(4)}
            </p>
          </div>
          <Button asChild variant="outline" size="sm">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              <Navigation className="h-3.5 w-3.5" />
              Open in Google Maps
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
