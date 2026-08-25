import { HomeHero } from "@/components/home/hero"
import { AccoladesMarquee } from "@/components/home/accolades-marquee"
import { HomeIntro } from "@/components/home/intro"
import { FeaturedRooms } from "@/components/home/featured-rooms"
import { HomePillars } from "@/components/home/pillars"
import { HomeExperiences } from "@/components/home/experiences"
import { HomeOffers } from "@/components/home/offers"
import { HomeTestimonials } from "@/components/home/testimonials"
import { HomeCta } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AccoladesMarquee />
      <HomeIntro />
      <FeaturedRooms />
      <HomePillars />
      <HomeExperiences />
      <HomeOffers />
      <HomeTestimonials />
      <HomeCta />
    </>
  )
}
