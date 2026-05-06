import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Heart, HandHeart, Building2 } from "lucide-react"

const ways = [
  {
    icon: Heart,
    title: "Donate",
    desc: "Give monthly, one-time, or sponsor a child — transparently.",
    cta: "Give today",
    href: "/get-involved#donate",
    img: "/volunteers-action.jpg",
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    desc: "Join a field deployment or lend your skills from anywhere.",
    cta: "Browse roles",
    href: "/get-involved#volunteer",
    img: "/team-field.jpg",
  },
  {
    icon: Building2,
    title: "Partner",
    desc: "Corporate, foundation and community partnerships that scale impact.",
    cta: "Talk to our team",
    href: "/get-involved#partner",
    img: "/program-livelihood.jpg",
  },
]

export function GetInvolvedCTA() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Get Involved"
          title="There&apos;s a place for you in this work."
          description="Whether you give an hour or a dollar, it all adds up to real, measurable change."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ways.map((w) => (
            <div
              key={w.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={w.img || "/placeholder.svg"}
                  alt={w.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <w.icon className="h-5 w-5" aria-hidden />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 text-primary">
                  <Link href={w.href}>{w.cta} &rarr;</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
