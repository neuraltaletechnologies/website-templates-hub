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
                alt="The Maison Lumière lobby"
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="aspect-[3/4] relative overflow-hidden mt-10">
              <Image
                src="/images/beach.jpg"
                alt="The private beach"
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="eyebrow text-accent mb-5">Our house</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            A forty-year conversation with the sea.
          </h2>
          <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
            <p>
              Maison Lumière began in 1984 as the quiet vision of a single family — a
              home on the Zanzibar coast where travellers could arrive as guests and
              leave as friends. Four decades later, the house has grown, but the feeling
              has not changed.
            </p>
            <p>
              Every suite, every menu, every greeting is shaped by the same idea: that
              true luxury is the absence of friction, and the presence of care.
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
              <Stat number="64" label="Suites & Villas" />
              <Stat number="40" label="Years of Welcome" />
              <Stat number="3" label="Signature Restaurants" />
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
