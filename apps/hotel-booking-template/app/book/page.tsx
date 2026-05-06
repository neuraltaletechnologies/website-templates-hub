import { BookingFlow } from "@/components/booking/booking-flow"

export const metadata = {
  title: "Book Your Stay — Maison Lumière",
  description: "Reserve your suite at Maison Lumière.",
}

export default function BookPage() {
  return (
    <>
      <div className="pt-24 md:pt-28" />
      <section className="container-luxe py-16 md:py-24">
        <div className="max-w-xl mb-12 md:mb-16">
          <p className="eyebrow text-accent mb-4">Reservations</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Begin your <span className="italic">stay</span>.
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Six quiet steps. Full cancellation flexibility. A human at the other end
            of every message.
          </p>
        </div>

        <BookingFlow />
      </section>
    </>
  )
}
