import { Suspense } from "react"
import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Meridian Realty",
  description: "Get in touch with Meridian Realty to buy, sell, rent, or ask a question — we respond within one business day.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </div>
              <div className="lg:col-span-1">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
