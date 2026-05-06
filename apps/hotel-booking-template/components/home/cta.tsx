import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeCta() {
  return (
    <section className="relative">
      <div className="relative h-[520px] md:h-[620px] w-full overflow-hidden">
        <Image
          src="/images/exterior.jpg"
          alt="Maison Lumière exterior at twilight"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

        <div className="relative container-luxe h-full flex flex-col items-center justify-center text-center text-background">
          <p className="eyebrow text-accent mb-6">Your arrival awaits</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1] text-balance max-w-4xl">
            Begin your <span className="italic">stay</span>.
          </h2>
          <p className="mt-8 text-base md:text-lg text-background/80 max-w-xl leading-relaxed">
            Our reservations team is available around the clock to craft the
            perfect visit — however long, however quiet, however extraordinary.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none uppercase tracking-[0.2em] text-xs h-12 px-8"
            >
              <Link href="/book">Check Availability</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-background text-background hover:bg-background hover:text-foreground rounded-none uppercase tracking-[0.2em] text-xs h-12 px-8"
            >
              <Link href="/contact">
                Speak to the Concierge <ArrowUpRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
