import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ProcessSection } from "@/components/services/process-section"
import { IndustryExpertise } from "@/components/services/industry-expertise"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Our Services | TransGlobal Logistics",
  description: "Comprehensive logistics services including road freight, air freight, ocean freight, warehousing, express delivery, and customs clearance.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <ProcessSection />
        <IndustryExpertise />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
