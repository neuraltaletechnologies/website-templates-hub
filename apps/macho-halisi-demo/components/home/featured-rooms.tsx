import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { rooms } from "@/lib/rooms"

export function FeaturedRooms() {
  const featured = rooms.slice(0, 4)

  return (
    <section className="bg-secondary/50 py-20 md:py-32">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="eyebrow text-accent mb-4">Our Safaris</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-2xl">
              Six ways to see
              <br />
              Tanzania <span className="italic">up close</span>.
            </h2>
          </div>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-foreground hover:text-accent transition-colors border-b border-foreground hover:border-accent pb-1 self-start"
          >
            All Tours & Safaris <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-14 lg:gap-y-20">
          {featured.map((room, i) => (
            <Link
              key={room.slug}
              href={`/rooms/${room.slug}`}
              className={`group block ${i % 2 === 1 ? "md:mt-20" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5 bg-background/90 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.24em]">
                  {room.category}
                </div>
                {room.originalPrice && (
                  <div className="absolute top-5 right-5 bg-accent text-accent-foreground px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium">
                    Save {Math.round((1 - room.price / room.originalPrice) * 100)}%
                  </div>
                )}
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
                    {room.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground italic">
                    {room.tagline}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  {room.originalPrice && (
                    <div className="text-xs text-muted-foreground line-through">
                      ${room.originalPrice}
                    </div>
                  )}
                  <div className="font-serif text-2xl">
                    ${room.price}
                    <span className="text-xs text-muted-foreground font-sans ml-1">
                      / person / day
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
