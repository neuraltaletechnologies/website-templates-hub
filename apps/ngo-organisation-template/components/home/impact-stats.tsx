import { ImpactCounter } from "@/components/impact-counter"

const stats = [
  { value: 250000, suffix: "+", label: "Lives directly impacted", sub: "across 6 countries" },
  { value: 142, label: "Active community projects", sub: "running in 2026" },
  { value: 3.8, suffix: "M", prefix: "$", label: "Funds raised this year", sub: "94¢ per $1 to the field", decimals: 1 },
  { value: 18400, suffix: "+", label: "Monthly donors & volunteers", sub: "the heart of our work" },
]

export function ImpactStats() {
  return (
    <section className="relative border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Collective Impact
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Small gifts. Profound change.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Every number is a person, a family, a village transformed. Updated quarterly with
            audited figures.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 sm:p-8">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dt>
              <dd className="mt-3 font-serif text-4xl font-semibold text-primary sm:text-5xl">
                <ImpactCounter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </dd>
              <p className="mt-2 text-xs text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
