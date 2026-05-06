import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingDonate } from "@/components/floating-donate"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contact",
  description: "Get in touch with Uzima Foundation — offices in Arusha, Nairobi, and New York.",
}

const offices = [
  {
    city: "Arusha, Tanzania",
    address: "12 Uhuru Road, Arusha 23102",
    phone: "+255 712 345 678",
    email: "arusha@uzima.org",
    hours: "Mon – Fri · 8am – 5pm EAT",
    label: "Global Headquarters",
  },
  {
    city: "Nairobi, Kenya",
    address: "4th Floor, Westlands Plaza",
    phone: "+254 712 345 678",
    email: "nairobi@uzima.org",
    hours: "Mon – Fri · 8am – 5pm EAT",
    label: "Regional Office",
  },
  {
    city: "New York, USA",
    address: "240 5th Ave, Suite 800",
    phone: "+1 212 345 6789",
    email: "usa@uzima.org",
    hours: "Mon – Fri · 9am – 6pm EST",
    label: "Fundraising Office",
  },
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="We&apos;d love to hear from you."
          description="Partners, press, volunteers, donors, the curious — every message finds its way to a real person."
          image="/team-field.jpg"
          imageAlt="Uzima field team"
        />

        {/* Offices */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading eyebrow="Our Offices" title="Three homes, one mission." />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {offices.map((o) => (
                <div key={o.city} className="rounded-2xl border border-border bg-card p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {o.label}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                    {o.city}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {o.address}
                    </li>
                    <li className="flex items-start gap-2">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {o.phone}
                    </li>
                    <li className="flex items-start gap-2">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <a href={`mailto:${o.email}`} className="hover:text-primary">
                        {o.email}
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {o.hours}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + map */}
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-28">
            <div>
              <SectionHeading
                eyebrow="Send a message"
                title="Questions? Press? A story to share?"
                description="Drop us a line and we&apos;ll reply within two working days."
              />
              <form
                action="#"
                className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="c-name">Name</Label>
                    <Input id="c-name" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="c-email">Email</Label>
                    <Input id="c-email" type="email" required className="mt-1.5" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="c-topic">I&apos;m interested in</Label>
                    <select
                      id="c-topic"
                      className="mt-1.5 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                    >
                      <option>Donating</option>
                      <option>Volunteering</option>
                      <option>Corporate partnership</option>
                      <option>Press &amp; media</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="c-msg">Message</Label>
                    <Textarea id="c-msg" required rows={5} className="mt-1.5" />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="mt-6 h-11 rounded-full bg-primary px-6 font-semibold hover:bg-primary/90"
                >
                  Send message
                </Button>
              </form>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <iframe
                title="Map of Arusha office"
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.67%2C-3.39%2C36.71%2C-3.35&amp;layer=mapnik"
                className="h-full min-h-[500px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingDonate />
    </>
  )
}
