import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HomeIntro() {
  return (
    <section className="container-luxe py-20 md:py-32">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/lobby.jpg"
                alt="Macho Halisi safari planning and hospitality"
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="aspect-[3/4] relative overflow-hidden mt-10">
              <Image
                src="/images/beach.jpg"
                alt="Wildlife on the northern Tanzania safari circuit"
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="eyebrow text-accent mb-5">Who we are</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Native eyes, deep local knowledge.
          </h2>
          <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
            <p>
              Macho Halisi — Swahili for &ldquo;true eyes&rdquo; — has spent
              more than fourteen years showing travellers the Tanzania we
              know as home. What began with Kudu Lodge and Campsite on the
              northern safari circuit has grown into full safari and tour
              operations across the country, still locally owned and run by
              native Tanzanians.
            </p>
            <p>
              Every itinerary, every guide, every detail is shaped by the
              same idea: that the most honest way to see this country is
              through the eyes of the people who have always called it home.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-foreground hover:text-accent transition-colors border-b border-foreground hover:border-accent pb-1"
            >
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-8 text-sm">
              <Stat number="6" label="Tour Categories" />
              <Stat number="15" label="Safari Vehicles" />
              <Stat number="14+" label="Years Guiding Tanzania" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl md:text-4xl text-accent">{number}</div>
      <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  )
}
