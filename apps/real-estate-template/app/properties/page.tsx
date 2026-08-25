import { Suspense } from "react"
import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PropertiesHero } from "@/components/properties/properties-hero"
import { PropertiesBrowser } from "@/components/properties/properties-browser"

export const metadata: Metadata = {
  title: "Property Listings | Meridian Realty",
  description: "Browse homes, condos, townhomes, and land for sale or rent with Meridian Realty.",
}

export default function PropertiesPage() {
  return (
    <>
      <Header />
      <main>
        <PropertiesHero />
        <Suspense fallback={null}>
          <PropertiesBrowser />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
