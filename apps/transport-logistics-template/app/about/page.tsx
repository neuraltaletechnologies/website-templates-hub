import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { CoreValues } from "@/components/about/core-values"
import { TeamSection } from "@/components/about/team-section"
import { Milestones } from "@/components/about/milestones"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "About Us | TransGlobal Logistics",
  description: "Learn about TransGlobal Logistics - 25+ years of excellence in shipping and supply chain solutions. Meet our team and discover our story.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <CompanyStory />
        <CoreValues />
        <Milestones />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
