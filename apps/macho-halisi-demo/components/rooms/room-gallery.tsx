"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function RoomGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="relative aspect-[5/4] overflow-hidden bg-muted">
        <Image
          src={images[active]}
          alt={name}
          fill
          priority
          sizes="(min-width:1024px) 58vw, 100vw"
          className="object-cover transition-opacity duration-300"
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-[5/4] overflow-hidden transition-opacity",
              active === i ? "opacity-100 ring-2 ring-accent" : "opacity-60 hover:opacity-100",
            )}
            aria-label={`View image ${i + 1}`}
          >
            <Image
              src={img}
              alt={`${name} view ${i + 1}`}
              fill
              sizes="33vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
