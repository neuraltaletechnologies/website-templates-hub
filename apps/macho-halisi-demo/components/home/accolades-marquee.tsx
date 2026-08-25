const accolades = [
  "TATO Member — Tanzania Association of Tour Operators",
  "Featured on SafariBookings",
  "Locally Owned & Operated Since Day One",
  "5-Star Rated by Travelers",
  "Northern Circuit Safari Specialists",
  "Guided by Native Tanzanians",
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
