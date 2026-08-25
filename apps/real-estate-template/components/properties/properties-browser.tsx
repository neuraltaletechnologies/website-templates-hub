"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { SlidersHorizontal, X, SearchX } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PropertyCard } from "@/components/properties/property-card"
import { properties as allProperties, type PropertyStatus, type PropertyType } from "@/lib/data/properties"

type SortOption = "featured" | "price-asc" | "price-desc" | "beds-desc"

export function PropertiesBrowser() {
  const searchParams = useSearchParams()

  const [query, setQuery] = useState(searchParams.get("q") ?? "")
  const [type, setType] = useState<PropertyType | "any">((searchParams.get("type") as PropertyType) ?? "any")
  const [status, setStatus] = useState<PropertyStatus | "any">((searchParams.get("status") as PropertyStatus) ?? "any")
  const [sort, setSort] = useState<SortOption>("featured")

  const filtered = useMemo(() => {
    let results = allProperties.filter((property) => {
      const matchesQuery =
        query.trim().length === 0 ||
        [property.title, property.city, property.state, property.zip, property.address]
          .join(" ")
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      const matchesType = type === "any" || property.type === type
      const matchesStatus = status === "any" || property.status === status
      return matchesQuery && matchesType && matchesStatus
    })

    results = [...results].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price
      if (sort === "price-desc") return b.price - a.price
      if (sort === "beds-desc") return b.beds - a.beds
      return Number(b.featured) - Number(a.featured)
    })

    return results
  }, [query, type, status, sort])

  const hasActiveFilters = query.trim().length > 0 || type !== "any" || status !== "any"

  const clearFilters = () => {
    setQuery("")
    setType("any")
    setStatus("any")
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by city, ZIP, or address" />
            <Select value={type} onValueChange={(v) => setType(v as PropertyType | "any")}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Type" />
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
            <Select value={status} onValueChange={(v) => setStatus(v as PropertyStatus | "any")}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Buy, rent, or pending</SelectItem>
                <SelectItem value="For Sale">For Sale</SelectItem>
                <SelectItem value="For Rent">For Rent</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="beds-desc">Most Bedrooms</SelectItem>
              </SelectContent>
            </Select>
            {hasActiveFilters && (
              <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-1.5">
                <X className="h-4 w-4" />
                Clear
              </Button>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <SlidersHorizontal className="h-4 w-4" />
          {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
        </div>

        {filtered.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <SearchX className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">No properties match those filters</h3>
            <p className="mt-2 max-w-sm text-muted-foreground">
              Try widening your search or clearing a filter — new listings are added every week.
            </p>
            <Button variant="outline" onClick={clearFilters} className="mt-6">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
