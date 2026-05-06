import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/mission-hands.jpg"
              alt="Hands of people from different backgrounds joined in solidarity"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden w-56 rounded-xl bg-primary p-5 text-primary-foreground shadow-2xl sm:-right-6 sm:block lg:-right-10">
            <p className="font-serif text-3xl font-semibold leading-none">94¢</p>
            <p className="mt-1 text-xs leading-snug text-primary-foreground/90">
              of every dollar goes directly to programs in the field.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Mission
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            We believe in dignity, opportunity, and the quiet power of communities shaping their
            own future.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Uzima Foundation partners with rural communities across East Africa to unlock their
            potential — not through charity alone, but through shared investment in schools,
            water, health, and enterprise. We measure success in lives, not logos.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { t: "Community-led", d: "Every project is designed and owned by the people it serves." },
              { t: "Transparent", d: "Real-time impact tracking and independently audited finances." },
              { t: "Lasting", d: "We don&apos;t visit — we invest for generations." },
              { t: "Measurable", d: "Clear outcomes reported to every donor, every quarter." },
            ].map((v) => (
              <li key={v.t} className="rounded-xl border border-border bg-card p-4">
                <p className="font-serif text-lg font-semibold text-foreground">{v.t}</p>
                <p
                  className="mt-1 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: v.d }}
                />
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/about">
                More about our story <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
