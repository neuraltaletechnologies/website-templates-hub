import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedListings } from "@/components/home/featured-listings"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { StatsSection } from "@/components/home/stats-section"
import { Testimonials } from "@/components/home/testimonials"
import { CtaSection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedListings />
        <WhyChooseUs />
        <StatsSection />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
