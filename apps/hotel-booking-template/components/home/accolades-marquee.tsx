const accolades = [
  "Condé Nast Traveler — Gold List 2025",
  "Travel + Leisure — World's Best Awards",
  "Michelin Guide — Two Stars, La Maison Kitchen",
  "Forbes Five-Star — Five Consecutive Years",
  "World Luxury Hotel Awards — Best Coastal Resort",
  "TripAdvisor — Travelers' Choice Best of the Best",
]

export function AccoladesMarquee() {
  return (
    <div className="bg-navy text-background border-y border-white/10 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...accolades, ...accolades].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-xs uppercase tracking-[0.24em] text-background/70 flex items-center"
          >
            <span className="h-1 w-1 bg-accent rounded-full mr-8" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
