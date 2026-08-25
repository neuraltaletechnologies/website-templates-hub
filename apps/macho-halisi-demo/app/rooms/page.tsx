import { PageHero } from "@/components/page-hero"
import { RoomsGrid } from "@/components/rooms/rooms-grid"
import { BookingWidget } from "@/components/booking-widget"
import { rooms } from "@/lib/rooms"

export const metadata = {
  title: "Tours & Safaris — Macho Halisi Ltd",
  description: "Six ways to experience Tanzania — wildlife safaris, mountain treks, cultural tours, beach holidays, migration safaris, and historical Zanzibar heritage tours.",
}

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tours & Safaris"
        title={
          <>
            Six ways
            <br />
            to see <span className="italic">Tanzania</span>.
          </>
        }
        subtitle="From the Serengeti's plains to Kilimanjaro's summit to Zanzibar's coast — six tour categories built around how you actually want to travel."
        image="/images/room-ocean-suite.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tours & Safaris" },
        ]}
      />

      <section className="container-luxe -mt-10 relative z-10">
        <BookingWidget variant="hero" />
      </section>

      <RoomsGrid rooms={rooms} />
    </>
  )
}
