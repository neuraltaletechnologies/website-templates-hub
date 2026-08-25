import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AgentsHero } from "@/components/agents/agents-hero"
import { AgentsGrid } from "@/components/agents/agents-grid"

export const metadata: Metadata = {
  title: "Our Agents | Meridian Realty",
  description: "Meet the Meridian Realty team — agents specializing in first-time buyers, luxury homes, investment properties, and more.",
}

export default function AgentsPage() {
  return (
    <>
      <Header />
      <main>
        <AgentsHero />
        <AgentsGrid />
      </main>
      <Footer />
    </>
  )
}
