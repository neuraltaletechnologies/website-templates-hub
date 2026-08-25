import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { CoreValues } from "@/components/about/core-values"
import { Milestones } from "@/components/about/milestones"
import { TeamSection } from "@/components/about/team-section"
import { Testimonials } from "@/components/home/testimonials"

export const metadata: Metadata = {
  title: "About Us | Meridian Realty",
  description: "Meridian Realty has helped over 2,400 families buy, sell, and rent since 2008 across six cities.",
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
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
