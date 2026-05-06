import { PageHero } from "@/components/page-hero"
import { RoomsGrid } from "@/components/rooms/rooms-grid"
import { BookingWidget } from "@/components/booking-widget"
import { rooms } from "@/lib/rooms"

export const metadata = {
  title: "Rooms & Suites — Maison Lumière",
  description: "Sixty-four suites and villas on the Zanzibar coast. Each designed for rest.",
}

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodations"
        title={
          <>
            Sixty-four ways
            <br />
            to <span className="italic">arrive</span>.
          </>
        }
        subtitle="From intimate Deluxe rooms to standalone villas with private plunge pools, every residence has been considered down to the linen thread count."
        image="/images/room-ocean-suite.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rooms & Suites" },
        ]}
      />

      <section className="container-luxe -mt-10 relative z-10">
        <BookingWidget variant="hero" />
      </section>

      <RoomsGrid rooms={rooms} />
    </>
  )
}
