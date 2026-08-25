import { Binoculars, Leaf, Users, TentTree } from "lucide-react"

const pillars = [
  {
    icon: Binoculars,
    title: "Expert Local Guiding",
    body: "Native Tanzanian guides who read the land, the wildlife, and the weather the way others read a map.",
  },
  {
    icon: Leaf,
    title: "TATO Member",
    body: "A member of the Tanzania Association of Tour Operators, held to the standards that keep travellers safe and the industry accountable.",
  },
  {
    icon: Users,
    title: "True Local Ownership",
    body: "Founded and run by native Tanzanians — not a foreign operator working through local partners.",
  },
  {
    icon: TentTree,
    title: "Flexible, Custom Itineraries",
    body: "Wildlife safaris, mountain treks, beach time, and cultural encounters — combined and paced to fit the trip you actually want.",
  },
]

export function HomePillars() {
  return (
    <section className="container-luxe py-20 md:py-32">
      <div className="max-w-3xl mb-16">
        <p className="eyebrow text-accent mb-4">Why travel with us</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
          Four <span className="italic">honest</span> reasons.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {pillars.map((p) => (
          <div key={p.title} className="bg-background p-8 lg:p-10">
            <p.icon className="h-8 w-8 text-accent" strokeWidth={1.25} />
            <h3 className="mt-8 font-serif text-2xl leading-tight">{p.title}</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
