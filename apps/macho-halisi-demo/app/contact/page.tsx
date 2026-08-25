import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact — Macho Halisi Ltd",
  description: "Get in touch with our team in Karatu, Arusha Region, Tanzania.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Plan your trip
            <br />
            with <span className="italic">native eyes</span>.
          </>
        }
        subtitle="Our team is based in Karatu, Arusha Region — reach out and we'll help build the right Tanzania itinerary for you."
        image="/images/exterior.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="container-luxe py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent mb-4">Get in touch</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              A quiet conversation.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Whether you&apos;re planning a short safari or a longer
              combination trip across the northern circuit, Zanzibar, and
              Kilimanjaro, our team will respond thoughtfully — usually
              within a day or two. Connectivity in parts of northern
              Tanzania can be limited, so please bear with us if a reply
              takes a little longer.
            </p>

            <div className="mt-12 space-y-8">
              <ContactInfo
                icon={MapPin}
                title="Our Base"
                lines={["Macho Halisi Ltd", "Karatu, Arusha Region", "Tanzania"]}
              />
              <ContactInfo
                icon={Phone}
                title="Call Us"
                lines={["+255 754 474 792", "+255 789 718 505"]}
              />
              <ContactInfo
                icon={Mail}
                title="Email"
                lines={["info@machohalisi.com"]}
              />
              <ContactInfo
                icon={Clock}
                title="Response Time"
                lines={["We typically reply within 1–2 business days", "Response times may vary during peak safari season"]}
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-secondary/60 p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactInfo({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  lines: string[]
}) {
  return (
    <div className="flex items-start gap-4 border-t border-border pt-6">
      <Icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
      <div>
        <div className="eyebrow mb-2">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm">
            {l}
          </div>
        ))}
      </div>
    </div>
  )
}
