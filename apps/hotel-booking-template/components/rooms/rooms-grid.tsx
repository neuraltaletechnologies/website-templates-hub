"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BedDouble, Ruler, Users } from "lucide-react"
import type { Room } from "@/lib/rooms"
import { cn } from "@/lib/utils"

const categories = ["All", "Deluxe", "Premium Suite", "Signature Suite", "Villa", "Romance", "Family"]

export function RoomsGrid({ rooms }: { rooms: Room[] }) {
  const [active, setActive] = useState("All")
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc">("featured")

  const filtered = useMemo(() => {
    let list = active === "All" ? rooms : rooms.filter((r) => r.category === active)
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price)
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [rooms, active, sort])

  return (
    <section className="container-luxe py-20 md:py-28">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "px-4 py-2 text-[11px] uppercase tracking-[0.2em] border transition-colors",
                active === c
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-accent hover:text-accent",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Sort
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="bg-transparent border border-border px-3 py-2 text-sm focus:outline-none focus:border-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
        {filtered.map((room) => (
          <RoomCard key={room.slug} room={room} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No rooms match this filter.
        </div>
      )}
    </section>
  )
}

function RoomCard({ room }: { room: Room }) {
  const availabilityLabel = {
    available: { text: "Available", color: "bg-emerald-600" },
    limited: { text: "Only 2 left", color: "bg-amber-600" },
    "sold-out": { text: "Sold out", color: "bg-destructive" },
  }[room.availability]

  return (
    <Link href={`/rooms/${room.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.24em]">
          {room.category}
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/90 backdrop-blur px-3 py-1.5">
          <span className={cn("h-1.5 w-1.5 rounded-full", availabilityLabel.color)} />
          <span className="text-[10px] uppercase tracking-[0.2em]">{availabilityLabel.text}</span>
        </div>
        <ArrowUpRight className="absolute bottom-4 right-4 h-5 w-5 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="mt-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl leading-tight group-hover:text-accent transition-colors">
            {room.name}
          </h3>
          <div className="text-right shrink-0">
            {room.originalPrice && (
              <div className="text-xs text-muted-foreground line-through">
                ${room.originalPrice}
              </div>
            )}
            <div className="font-serif text-xl">
              ${room.price}
              <span className="text-[10px] text-muted-foreground font-sans ml-1 uppercase tracking-[0.2em]">
                / night
              </span>
            </div>
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground italic">{room.tagline}</p>

        <div className="mt-5 pt-5 border-t border-border flex items-center gap-5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Ruler className="h-3.5 w-3.5 text-accent" />
            {room.size} m²
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-accent" />
            {room.capacity}
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-3.5 w-3.5 text-accent" />
            {room.beds.split(" ")[0]}
          </span>
        </div>
      </div>
    </Link>
  )
}
