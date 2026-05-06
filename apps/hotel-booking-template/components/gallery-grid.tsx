"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

type Img = { src: string; category: string; span?: string }

export function GalleryGrid({ images }: { images: Img[] }) {
  const [filter, setFilter] = useState("All")
  const [open, setOpen] = useState<number | null>(null)

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(images.map((i) => i.category)))],
    [images],
  )

  const filtered = useMemo(
    () => (filter === "All" ? images : images.filter((i) => i.category === filter)),
    [images, filter],
  )

  return (
    <section className="container-luxe py-20 md:py-28">
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "px-4 py-2 text-[11px] uppercase tracking-[0.2em] border transition-colors",
              filter === c
                ? "bg-foreground text-background border-foreground"
                : "border-border hover:border-accent hover:text-accent",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
        {filtered.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className={cn(
              "relative overflow-hidden group bg-muted",
              filter === "All" ? img.span : "",
            )}
          >
            <Image
              src={img.src}
              alt={img.category}
              fill
              sizes="(min-width:1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.24em] opacity-0 group-hover:opacity-100 transition-opacity">
              {img.category}
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-background/10 text-background flex items-center justify-center hover:bg-background/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-[3/2]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[open].src}
              alt=""
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}
