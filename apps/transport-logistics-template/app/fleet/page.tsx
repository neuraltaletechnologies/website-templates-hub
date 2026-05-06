import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FleetHero } from "@/components/fleet/fleet-hero"
import { FleetShowcase } from "@/components/fleet/fleet-showcase"
import { FleetStats } from "@/components/fleet/fleet-stats"
import { FleetFeatures } from "@/components/fleet/fleet-features"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Our Fleet | TransGlobal Logistics",
  description: "Explore our modern fleet of trucks, aircraft, and vessels. Over 500 vehicles equipped with GPS tracking and maintained to the highest standards.",
}

export default function FleetPage() {
  return (
    <>
      <Header />
      <main>
        <FleetHero />
        <FleetStats />
        <FleetShowcase />
        <FleetFeatures />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
