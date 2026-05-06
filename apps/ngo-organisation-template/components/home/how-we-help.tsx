import Link from "next/link"
import {
  BookOpen,
  Droplets,
  Stethoscope,
  Sprout,
  Users,
  Shield,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const areas = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "Scholarships, school construction, teacher training and digital classrooms.",
    href: "/programs#education",
  },
  {
    icon: Droplets,
    title: "Clean Water",
    desc: "Wells, rainwater harvesting and sanitation for entire villages.",
    href: "/programs#water",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Mobile clinics, maternal care and immunization drives.",
    href: "/programs#healthcare",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    desc: "Microloans, vocational training and entrepreneurship cohorts.",
    href: "/programs#women",
  },
  {
    icon: Sprout,
    title: "Environment",
    desc: "Reforestation, climate-smart farming and conservation.",
    href: "/programs#environment",
  },
  {
    icon: Shield,
    title: "Child Protection",
    desc: "Safe spaces, counseling, and anti-trafficking programs.",
    href: "/programs#child",
  },
]

export function HowWeHelp() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="How We Help"
          title="Six focus areas. One shared goal."
          description="We partner with local leaders to tackle the root causes of poverty, not the symptoms."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="group relative flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <a.icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                <span className="mt-3 inline-block text-xs font-semibold text-primary">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
