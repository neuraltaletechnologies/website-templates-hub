import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    title: "Wildlife Game Drives",
    caption: "Dawn and dusk, across the northern circuit.",
    image: "/images/beach.jpg",
    href: "/rooms",
    span: "lg:col-span-5 lg:row-span-2",
  },
  {
    title: "Cultural Encounters",
    caption: "Time with Maasai, Hadzabe and Datoga communities.",
    image: "/images/amenity-spa.jpg",
    href: "/rooms",
    span: "lg:col-span-4",
  },
  {
    title: "Taste of Tanzania",
    caption: "Camp dinners and coastal Swahili cuisine.",
    image: "/images/dining-restaurant.jpg",
    href: "/dining",
    span: "lg:col-span-3",
  },
  {
    title: "Safari Sundowners",
    caption: "A cold drink as the plains cool at dusk.",
    image: "/images/dining-rooftop.jpg",
    href: "/dining",
    span: "lg:col-span-3",
  },
  {
    title: "Zanzibar Beach Time",
    caption: "Dhow sails and sunset walks on the Swahili Coast.",
    image: "/images/exterior.jpg",
    href: "/rooms",
    span: "lg:col-span-4",
  },
]

export function HomeExperiences() {
  return (
    <section className="bg-navy text-background py-20 md:py-32">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="eyebrow text-accent mb-4">What we offer</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-2xl">
              Tours built around
              <br />
              <span className="italic">real</span> experiences.
            </h2>
          </div>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-background hover:text-accent transition-colors border-b border-background hover:border-accent pb-1 self-start"
          >
            See All Tours <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-8 lg:grid-rows-2 gap-4 auto-rows-[260px] md:auto-rows-[320px]">
          {experiences.map((e) => (
            <Link
              key={e.title}
              href={e.href}
              className={`group relative overflow-hidden block ${e.span}`}
            >
              <Image
                src={e.image}
                alt={e.title}
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-background">
                <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                  {e.title}
                </h3>
                <p className="mt-1 text-sm text-background/80">{e.caption}</p>
              </div>
              <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
