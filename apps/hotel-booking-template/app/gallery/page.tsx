import { PageHero } from "@/components/page-hero"
import { GalleryGrid } from "@/components/gallery-grid"

export const metadata = {
  title: "Gallery — Maison Lumière",
  description: "A visual journey through the house.",
}

const images = [
  { src: "/images/hero-resort.jpg", category: "Exterior", span: "col-span-2 row-span-2" },
  { src: "/images/room-ocean-suite.jpg", category: "Suites" },
  { src: "/images/amenity-pool.jpg", category: "Pool" },
  { src: "/images/dining-restaurant.jpg", category: "Dining", span: "col-span-2" },
  { src: "/images/amenity-spa.jpg", category: "Spa" },
  { src: "/images/room-garden-villa.jpg", category: "Villas" },
  { src: "/images/dining-rooftop.jpg", category: "Dining" },
  { src: "/images/beach.jpg", category: "Beach", span: "col-span-2" },
  { src: "/images/room-presidential.jpg", category: "Suites", span: "row-span-2" },
  { src: "/images/lobby.jpg", category: "Interior" },
  { src: "/images/dining-dish.jpg", category: "Dining" },
  { src: "/images/room-honeymoon.jpg", category: "Suites" },
  { src: "/images/exterior.jpg", category: "Exterior", span: "col-span-2" },
  { src: "/images/room-deluxe.jpg", category: "Suites" },
  { src: "/images/room-family.jpg", category: "Suites" },
]

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            The house, in <span className="italic">images</span>.
          </>
        }
        subtitle="A visual record of forty years on the coast — architecture, light, tables, and the sea."
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
