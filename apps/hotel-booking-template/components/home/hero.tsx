import Image from "next/image"
import { BookingWidget } from "@/components/booking-widget"

export function HomeHero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-resort.jpg"
          alt="Oceanfront view of Maison Lumière at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      <div className="relative container-luxe h-full flex flex-col justify-end pb-40 md:pb-48 lg:pb-56 pt-32 text-background">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent mb-6">Nungwi Beach · Zanzibar</p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
            Where the coast
            <br />
            <span className="italic">remembers</span> you.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-background/85 leading-relaxed">
            Forty years of quiet luxury on one of the world&apos;s most storied shorelines.
            Oceanfront suites, a celebrated kitchen, and a spa designed for genuine rest.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pb-10 md:pb-12">
        <div className="container-luxe">
          <BookingWidget variant="hero" />
        </div>
      </div>
    </section>
  )
}
