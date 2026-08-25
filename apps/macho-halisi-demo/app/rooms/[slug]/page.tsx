import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BedDouble, Check, MapPin, CalendarRange, Star, Users } from "lucide-react"
import { getRoom, rooms } from "@/lib/rooms"
import { Button } from "@/components/ui/button"
import { RoomGallery } from "@/components/rooms/room-gallery"

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const room = getRoom(slug)
  if (!room) return {}
  return {
    title: `${room.name} — Macho Halisi Ltd`,
    description: room.description,
  }
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const room = getRoom(slug)
  if (!room) notFound()

  const otherRooms = rooms.filter((r) => r.slug !== room.slug).slice(0, 3)

  return (
    <>
      <div className="pt-24 md:pt-28" />

      <section className="container-luxe">
        <Link
          href="/rooms"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground hover:text-accent mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          All Tours & Safaris
        </Link>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <RoomGallery images={room.gallery} name={room.name} />
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow text-accent mb-4">{room.category}</p>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              {room.name}
            </h1>
            <p className="mt-3 text-lg italic text-muted-foreground">{room.tagline}</p>

            <div className="mt-6 flex items-center gap-2 text-sm">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-medium">{room.rating}</span>
              <span className="text-muted-foreground">· {room.reviews} reviews</span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 p-5 bg-secondary/50 border border-border">
              <Detail icon={CalendarRange} label="Duration" value={`${room.size} Days`} />
              <Detail icon={Users} label="Group Size" value={`Up to ${room.capacity} travelers`} />
              <Detail icon={BedDouble} label="Trip Style" value={room.beds} />
              <Detail icon={MapPin} label="Region" value={room.view} />
            </div>

            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              {room.description}
            </p>

            <div className="mt-8">
              <h3 className="eyebrow mb-4">What&apos;s included</h3>
              <ul className="grid grid-cols-2 gap-2">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex items-end justify-between gap-4 mb-6">
                <div>
                  {room.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      ${room.originalPrice}
                    </div>
                  )}
                  <div className="font-serif text-4xl">${room.price}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    per person / per day (illustrative)
                  </div>
                </div>
                {room.originalPrice && (
                  <div className="bg-accent text-accent-foreground px-3 py-2 text-[11px] uppercase tracking-[0.2em] font-medium">
                    Save {Math.round((1 - room.price / room.originalPrice) * 100)}%
                  </div>
                )}
              </div>

              <Button
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-none uppercase tracking-[0.2em] text-xs h-14"
              >
                <Link href={`/book?room=${room.slug}`}>Enquire About This Tour</Link>
              </Button>

              <p className="mt-4 text-xs text-center text-muted-foreground">
                Itineraries can be adjusted before booking is finalized —
                get in touch to start planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-28 mt-20 border-t border-border">
        <h2 className="font-serif text-3xl md:text-4xl mb-10">Other tours you may like</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {otherRooms.map((r) => (
            <Link key={r.slug} href={`/rooms/${r.slug}`} className="group block">
              <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl group-hover:text-accent transition-colors">
                {r.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                From ${r.price} / person / day
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-4 w-4 text-accent mt-0.5" />
      <div>
        <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  )
}
