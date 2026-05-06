import { Waves, UtensilsCrossed, Flower2, Sparkles } from "lucide-react"

const pillars = [
  {
    icon: Waves,
    title: "Private Shoreline",
    body: "Three hundred metres of soft white sand, reserved solely for guests of the house.",
  },
  {
    icon: UtensilsCrossed,
    title: "Two-Star Kitchen",
    body: "La Maison Kitchen, under the direction of Chef Amelia Okonkwo, reimagines coastal cuisine.",
  },
  {
    icon: Flower2,
    title: "Sanctuary Spa",
    body: "A 1,200 m² wellness house with hammam, thalasso pool, and a dedicated ayurvedic wing.",
  },
  {
    icon: Sparkles,
    title: "Considered Service",
    body: "A 3:1 staff-to-guest ratio and a private host assigned to every suite.",
  },
]

export function HomePillars() {
  return (
    <section className="container-luxe py-20 md:py-32">
      <div className="max-w-3xl mb-16">
        <p className="eyebrow text-accent mb-4">Why choose us</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
          Four <span className="italic">quiet</span> promises.
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
