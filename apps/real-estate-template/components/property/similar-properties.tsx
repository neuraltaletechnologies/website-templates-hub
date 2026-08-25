import { PropertyCard } from "@/components/properties/property-card"
import type { Property } from "@/lib/data/properties"

export function SimilarProperties({ properties }: { properties: Property[] }) {
  if (properties.length === 0) return null

  return (
    <section className="border-t border-border bg-muted/40 py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">You Might Also Like</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
