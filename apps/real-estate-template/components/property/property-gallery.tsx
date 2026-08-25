"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { cn } from "@/lib/utils"

export function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0)

  const next = () => setActive((i) => (i + 1) % images.length)
  const prev = () => setActive((i) => (i - 1 + images.length) % images.length)

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted">
        <Image src={images[active]} alt={`${title} - photo ${active + 1}`} fill priority className="object-cover" />
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
          <Expand className="h-3.5 w-3.5" />
          {active + 1} / {images.length}
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-colors hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-colors hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image + index}
              onClick={() => setActive(index)}
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition-colors",
                active === index ? "border-primary" : "border-transparent hover:border-border"
              )}
            >
              <Image src={image} alt={`${title} thumbnail ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
