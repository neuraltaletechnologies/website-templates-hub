import Image from "next/image"
import { BookingWidget } from "@/components/booking-widget"

export function HomeHero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-resort.jpg"
          alt="Golden hour over the Tanzanian safari circuit"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      <div className="relative container-luxe h-full flex flex-col justify-end pb-40 md:pb-48 lg:pb-56 pt-32 text-background">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent mb-6">Karatu · Arusha Region · Tanzania</p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
            See Tanzania
            <br />
            through <span className="italic">native eyes</span>.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-background/85 leading-relaxed">
            Locally owned and operated by native Tanzanians for over fourteen
            years — wildlife safaris, mountain treks, cultural tours, and
            Zanzibar beach time, planned from our base in Karatu.
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
