import { Phone, Mail, MapPin, Clock } from "lucide-react"

const details = [
  { icon: Phone, label: "Call Us", value: "+1 (555) 201-4400", href: "tel:+1-555-201-4400" },
  { icon: Mail, label: "Email Us", value: "hello@meridianrealty.example", href: "mailto:hello@meridianrealty.example" },
  { icon: MapPin, label: "Visit Us", value: "200 Market Street, Austin, TX 78701", href: "https://www.google.com/maps/search/?api=1&query=200+Market+Street+Austin+TX" },
  { icon: Clock, label: "Office Hours", value: "Mon – Sat: 8:00 AM – 7:00 PM" },
]

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {details.map((detail) => {
        const content = (
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <detail.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{detail.label}</p>
              <p className="mt-0.5 font-medium text-foreground">{detail.value}</p>
            </div>
          </div>
        )
        return detail.href ? (
          <a key={detail.label} href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block transition-opacity hover:opacity-80">
            {content}
          </a>
        ) : (
          <div key={detail.label}>{content}</div>
        )
      })}
    </div>
  )
}
