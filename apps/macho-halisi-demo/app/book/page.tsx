import { BookingFlow } from "@/components/booking/booking-flow"

export const metadata = {
  title: "Enquire About Your Safari — Macho Halisi Ltd",
  description: "Start planning your Tanzania safari, trek, or tour with Macho Halisi.",
}

export default function BookPage() {
  return (
    <>
      <div className="pt-24 md:pt-28" />
      <section className="container-luxe py-16 md:py-24">
        <div className="max-w-xl mb-12 md:mb-16">
          <p className="eyebrow text-accent mb-4">Plan your trip</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Begin your <span className="italic">journey</span>.
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Six quick steps. Flexible planning. A real person at the other
            end of every message.
          </p>
        </div>

        <BookingFlow />
      </section>
    </>
  )
}
