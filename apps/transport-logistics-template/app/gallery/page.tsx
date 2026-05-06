import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Photo Gallery | TransGlobal Logistics",
  description: "Explore our operations through our photo gallery. See our fleet, facilities, team, and global logistics network in action.",
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <GalleryHero />
        <GalleryGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
