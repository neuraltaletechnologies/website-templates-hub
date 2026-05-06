import Image from "next/image"
import { PageHero } from "@/components/page-hero"

export const metadata = {
  title: "About — Maison Lumière",
  description: "Our story, our values, and the family behind the house.",
}

const milestones = [
  { year: "1984", title: "The house opens with twelve rooms and a single kitchen." },
  { year: "1996", title: "The east wing is added; the spa first opens." },
  { year: "2008", title: "La Maison Kitchen earns its first Michelin star." },
  { year: "2019", title: "A second Michelin star is awarded; the villas are added." },
  { year: "2024", title: "Forty years of welcome. A renewed commitment to the coast." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our house"
        title={
          <>
            Four decades of
            <br />
            <span className="italic">quiet</span> hospitality.
          </>
        }
        subtitle="Maison Lumière began in 1984 as a family's vision for a home on the Zanzibar coast. It remains, above all, a place where guests are welcomed as friends."
        image="/images/exterior.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="container-luxe py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/lobby.jpg"
                alt="The Maison Lumière lobby"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow text-accent mb-5">Our story</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              A letter from the founders.
            </h2>
            <div className="mt-10 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                In 1984, our parents bought a small, crumbling colonial-era guesthouse at
                the northern tip of Zanzibar. It had twelve rooms, a leaky roof, and a
                single cook named Bibi Fatma who made the best coconut curry on the
                coast. They named it Maison Lumière — House of Light — for the way the
                sun flooded the terrace each morning.
              </p>
              <p>
                Four decades later, the house has grown to sixty-four suites and
                villas, three restaurants, a celebrated spa, and a staff of two
                hundred — many of whom are the children and grandchildren of the
                original team. Bibi Fatma&apos;s curry is still on the menu.
              </p>
              <p>
                What hasn&apos;t changed is the principle our parents set down that first
                summer: every guest is a friend; every friend deserves the quiet gift
                of genuine care.
              </p>
              <p className="italic">— Aisha & Hamza Said, second generation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-luxe">
          <p className="eyebrow text-accent mb-5">Milestones</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] max-w-2xl">
            Forty years, in brief.
          </h2>

          <div className="mt-16 relative">
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 h-3 w-3 rounded-full bg-accent" />
                  <div
                    className={`${
                      i % 2 === 1 ? "md:col-start-2" : ""
                    }`}
                  >
                    <div className="font-serif text-4xl md:text-5xl text-accent">
                      {m.year}
                    </div>
                    <p className="mt-2 text-base text-muted-foreground leading-relaxed max-w-md">
                      {m.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-28">
        <div className="grid lg:grid-cols-3 gap-12">
          <Value
            title="Rootedness"
            body="We are of this coast. Our ingredients, our team, our stories — all local, all considered, all lasting."
          />
          <Value
            title="Quietness"
            body="Luxury without announcement. Service without theatre. The best moments at our house are the ones you notice only after."
          />
          <Value
            title="Care"
            body="The details that matter cannot be listed in a brochure. They are felt, slowly, across the length of a stay."
          />
        </div>
      </section>
    </>
  )
}

function Value({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t border-border pt-6">
      <h3 className="font-serif text-3xl md:text-4xl">{title}</h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  )
}
