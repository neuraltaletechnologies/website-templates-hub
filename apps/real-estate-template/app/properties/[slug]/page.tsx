import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PropertyGallery } from "@/components/property/property-gallery"
import { PropertyOverview } from "@/components/property/property-overview"
import { PropertyDescription } from "@/components/property/property-description"
import { PropertyMap } from "@/components/property/property-map"
import { PropertyAgentCard } from "@/components/property/property-agent-card"
import { SimilarProperties } from "@/components/property/similar-properties"
import { properties, getPropertyBySlug, getSimilarProperties, formatPrice } from "@/lib/data/properties"
import { agents } from "@/lib/data/agents"

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) return { title: "Property Not Found | Meridian Realty" }

  return {
    title: `${property.title} | Meridian Realty`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: `${formatPrice(property)} · ${property.city}, ${property.state}`,
      images: [property.images[0]],
    },
  }
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) notFound()

  const agent = agents.find((a) => a.id === property.agentId) ?? agents[0]
  const similar = getSimilarProperties(property)

  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PropertyGallery images={property.images} title={property.title} />
              <PropertyOverview property={property} />
              <PropertyDescription property={property} />
              <PropertyMap property={property} />
            </div>
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <PropertyAgentCard agent={agent} propertyTitle={property.title} />
              </div>
            </div>
          </div>
        </div>
        <SimilarProperties properties={similar} />
      </main>
      <Footer />
    </>
  )
}
