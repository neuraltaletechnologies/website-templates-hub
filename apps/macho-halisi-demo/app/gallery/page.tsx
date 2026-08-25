import { PageHero } from "@/components/page-hero"
import { GalleryGrid } from "@/components/gallery-grid"

export const metadata = {
  title: "Gallery — Macho Halisi Ltd",
  description: "A visual journey across our safaris, treks, and tours.",
}

const images = [
  { src: "/images/hero-resort.jpg", category: "Wildlife Safari", span: "col-span-2 row-span-2" },
  { src: "/images/room-ocean-suite.jpg", category: "Beach Holiday" },
  { src: "/images/amenity-pool.jpg", category: "Beach Holiday" },
  { src: "/images/dining-restaurant.jpg", category: "Safari Life", span: "col-span-2" },
  { src: "/images/amenity-spa.jpg", category: "Cultural Tours" },
  { src: "/images/room-garden-villa.jpg", category: "Mountain Trekking" },
  { src: "/images/dining-rooftop.jpg", category: "Safari Life" },
  { src: "/images/beach.jpg", category: "The Great Migration", span: "col-span-2" },
  { src: "/images/room-presidential.jpg", category: "Historical Sites", span: "row-span-2" },
  { src: "/images/lobby.jpg", category: "Safari Life" },
  { src: "/images/dining-dish.jpg", category: "Beach Holiday" },
  { src: "/images/room-deluxe.jpg", category: "Beach Holiday" },
  { src: "/images/exterior.jpg", category: "Wildlife Safari", span: "col-span-2" },
  { src: "/images/room-honeymoon.jpg", category: "Historical Sites" },
  { src: "/images/room-family.jpg", category: "Cultural Tours" },
]

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Tanzania, in <span className="italic">images</span>.
          </>
        }
        subtitle="A visual record of the landscapes, wildlife, and cultures across our tours — the plains, the mountains, the coast."
        image="/images/lobby.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      <GalleryGrid images={images} />
    </>
  )
}
