import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact — Maison Lumière",
  description: "Speak to our concierge, any time of day.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Reach us"
        title={
          <>
            Write to us,
            <br />
            we&apos;ll <span className="italic">write back</span>.
          </>
        }
        subtitle="Our reservations team is available around the clock. For quiet, considered answers, please get in touch."
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
              Whether you are planning a short escape or an extended stay, our
              concierge will respond — thoughtfully, and usually within the hour.
            </p>

            <div className="mt-12 space-y-8">
              <ContactInfo
                icon={MapPin}
                title="The House"
                lines={["Maison Lumière", "Nungwi Beach, Zanzibar", "Tanzania"]}
              />
              <ContactInfo
                icon={Phone}
                title="Concierge"
                lines={["+255 774 000 000 (Zanzibar)", "+44 20 7946 0001 (London desk)"]}
              />
              <ContactInfo
                icon={Mail}
                title="Written enquiries"
                lines={["stay@maisonlumiere.co", "events@maisonlumiere.co"]}
              />
              <ContactInfo
                icon={Clock}
                title="Hours"
                lines={["Concierge · 24 hours", "Reservations · 7am – 11pm EAT"]}
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
