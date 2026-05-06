import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingDonate } from "@/components/floating-donate"
import { Hero } from "@/components/home/hero"
import { ImpactStats } from "@/components/home/impact-stats"
import { Mission } from "@/components/home/mission"
import { ProgramsGrid } from "@/components/home/programs-grid"
import { HowWeHelp } from "@/components/home/how-we-help"
import { StoriesCarousel } from "@/components/home/stories-carousel"
import { GetInvolvedCTA } from "@/components/home/get-involved-cta"
import { PartnersStrip } from "@/components/home/partners-strip"
import { Newsletter } from "@/components/home/newsletter"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ImpactStats />
        <Mission />
        <ProgramsGrid />
        <HowWeHelp />
        <StoriesCarousel />
        <GetInvolvedCTA />
        <PartnersStrip />
        <Newsletter />
      </main>
      <SiteFooter />
      <FloatingDonate />
    </>
  )
}
