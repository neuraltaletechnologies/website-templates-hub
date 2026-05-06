const partners = [
  "UNICEF",
  "Save the Children",
  "USAID",
  "Rotary Intl.",
  "Gates Foundation",
  "World Vision",
  "Ford Foundation",
  "Oxfam",
]

export function PartnersStrip() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Proudly partnered with
        </p>
        <div className="mt-6 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {partners.map((p) => (
            <span
              key={p}
              className="font-serif text-base font-semibold text-muted-foreground/70 sm:text-lg"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
