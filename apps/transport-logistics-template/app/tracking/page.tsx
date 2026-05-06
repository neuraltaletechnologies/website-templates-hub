import { Metadata } from "next"
import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TrackingHero } from "@/components/tracking/tracking-hero"
import { TrackingInterface } from "@/components/tracking/tracking-interface"
import { TrackingFAQ } from "@/components/tracking/tracking-faq"

export const metadata: Metadata = {
  title: "Track Your Shipment | TransGlobal Logistics",
  description: "Track your shipment in real-time with our advanced tracking system. Get instant updates on your cargo location and delivery status.",
}

export default function TrackingPage() {
  return (
    <>
      <Header />
      <main>
        <TrackingHero />
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" /></div>}>
          <TrackingInterface />
        </Suspense>
        <TrackingFAQ />
      </main>
      <Footer />
    </>
  )
}
