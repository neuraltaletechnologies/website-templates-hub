import Image from "next/image"
import { PageHero } from "@/components/page-hero"

export const metadata = {
  title: "About — Macho Halisi Ltd",
  description: "Our story, our values, and the team behind Macho Halisi.",
}

const milestones = [
  {
    year: "Kudu Lodge & Campsite",
    title:
      "Macho Halisi's story begins with Kudu Lodge and Campsite, on Tanzania's northern safari circuit — the foundation the company was built on.",
  },
  {
    year: "Growing the Guiding Team",
    title:
      "As demand grew, the business expanded into full safari and tour operations — wildlife drives, mountain treks, and cultural tours across northern Tanzania.",
  },
  {
    year: "TATO Membership",
    title:
      "Macho Halisi becomes a member of the Tanzania Association of Tour Operators, part of a locally owned business built on native Tanzanian expertise.",
  },
  {
    year: "Today",
    title:
      "Over fourteen years since it began, Macho Halisi is still run by the people who know this land best — offering safaris, treks, cultural tours, and beach holidays from a base in Karatu.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title={
          <>
            True eyes on
            <br />
            <span className="italic">Tanzania</span>.
          </>
        }
        subtitle="Macho Halisi Ltd is a locally owned Tanzanian safari and tour operator based in Karatu, Arusha Region — run by native Tanzanians with more than fourteen years in the business of showing travellers the country they call home."
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
                alt="Macho Halisi guiding and safari planning"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow text-accent mb-5">Our story</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              Our story.
            </h2>
            <div className="mt-10 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                Macho Halisi means &ldquo;true eyes&rdquo; in Swahili — and
                that idea sits behind everything we do. The company was
                founded by Dawson Minja, and it started by building Kudu
                Lodge and Campsite on Tanzania&apos;s northern safari
                circuit, a small operation built on local knowledge rather
                than outside investment. Over more than fourteen years, that
                grew into full safari and tour operations: wildlife safaris
                across the northern parks, Kilimanjaro and Meru treks,
                cultural tours with the Maasai, Hadzabe and Datoga, and beach
                time on Zanzibar.
              </p>
              <p>
                We are locally owned and operated by native Tanzanians, based
                in Karatu — the small town that has long served as the
                overnight hub for travellers heading into the Ngorongoro and
                Serengeti circuit. Our team includes guides, drivers and
                staff who grew up on this land, and that&apos;s the
                perspective we want every guest to travel with.
              </p>
              <p>
                We&apos;re also a member of the Tanzania Association of Tour
                Operators (TATO), which holds us — and the rest of the
                industry — to standards that keep travellers safe and the
                business accountable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-luxe">
          <p className="eyebrow text-accent mb-5">Our journey</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] max-w-2xl">
            Fourteen years, in brief.
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
                    <div className="font-serif text-2xl md:text-3xl text-accent">
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
            title="Local Knowledge"
            body="We are Tanzanians guiding Tanzania — every itinerary, every guide, every recommendation comes from people who live here."
          />
          <Value
            title="Honesty"
            body="No inflated claims, no theatre. We tell you what a trip really involves, and we guide it the way we'd want to be guided."
          />
          <Value
            title="Care"
            body="The details that make a trip work — the right pace, the right guide, the right season — are felt across the length of a journey, not listed in a brochure."
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
