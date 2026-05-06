import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { DonationProgress } from "@/components/donation-progress"
import { Button } from "@/components/ui/button"

const campaigns = [
  {
    slug: "clean-water-kigoma",
    title: "Clean water for 12 villages in Kigoma",
    tag: "Water & Sanitation",
    img: "/program-water.jpg",
    raised: 78400,
    goal: 120000,
    donors: 642,
    daysLeft: 28,
    urgent: true,
  },
  {
    slug: "girls-education-arusha",
    title: "Keep 400 girls in school through grade 12",
    tag: "Education",
    img: "/program-education.jpg",
    raised: 56200,
    goal: 85000,
    donors: 1_104,
    daysLeft: 45,
  },
  {
    slug: "maternal-clinic-mbeya",
    title: "A maternal health clinic for Mbeya district",
    tag: "Healthcare",
    img: "/program-healthcare.jpg",
    raised: 142_000,
    goal: 200_000,
    donors: 928,
    daysLeft: 62,
  },
]

export function ProgramsGrid() {
  return (
    <section id="campaigns" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Active Campaigns"
            title="Fund the projects changing lives right now."
            description="Pick a cause close to your heart. 100% of restricted gifts go to the project you choose."
          />
          <Button asChild variant="ghost" className="self-start sm:self-end">
            <Link href="/programs">All campaigns &rarr;</Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => (
            <article
              key={c.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={c.img || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  {c.tag}
                </span>
                {c.urgent && (
                  <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Urgent
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-xl font-semibold leading-snug text-foreground text-balance">
                  {c.title}
                </h3>
                <div className="mt-5">
                  <DonationProgress
                    raised={c.raised}
                    goal={c.goal}
                    donors={c.donors}
                    daysLeft={c.daysLeft}
                  />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <Link
                    href={`/programs#${c.slug}`}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more
                  </Link>
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href={`/get-involved#donate?campaign=${c.slug}`}>
                      Donate <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
