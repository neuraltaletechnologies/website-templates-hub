import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { QuoteHero } from "@/components/quote/quote-hero"
import { QuoteForm } from "@/components/quote/quote-form"
import { QuoteFeatures } from "@/components/quote/quote-features"

export const metadata: Metadata = {
  title: "Get a Quote | TransGlobal Logistics",
  description: "Request a free shipping quote from TransGlobal Logistics. Get competitive rates for road, air, and ocean freight services.",
}

export default function QuotePage() {
  return (
    <>
      <Header />
      <main>
        <QuoteHero />
        <QuoteForm />
        <QuoteFeatures />
      </main>
      <Footer />
    </>
  )
}
