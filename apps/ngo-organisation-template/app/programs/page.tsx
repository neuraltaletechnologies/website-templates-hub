import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingDonate } from "@/components/floating-donate"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { DonationProgress } from "@/components/donation-progress"

export const metadata = {
  title: "Programs",
  description:
    "Explore Uzima's programs in education, clean water, healthcare, women's empowerment, environment, and more.",
}

const programs = [
  {
    id: "education",
    tag: "Education",
    title: "Classrooms that open futures",
    img: "/program-education.jpg",
    stats: "28,400 students &middot; 76 schools &middot; 5 countries",
    desc: "From primary scholarships to teacher training and digital classrooms, we keep kids learning — and teachers thriving.",
  },
  {
    id: "water",
    tag: "Water &amp; Sanitation",
    title: "Clean water, within walking distance",
    img: "/program-water.jpg",
    stats: "180+ wells &middot; 92 villages &middot; 65,000 people served",
    desc: "Every well is community-owned, with paid local technicians trained to maintain them for decades.",
  },
  {
    id: "healthcare",
    tag: "Healthcare",
    title: "Care that reaches the last mile",
    img: "/program-healthcare.jpg",
    stats: "12 mobile clinics &middot; 48,000 patients/year",
    desc: "Maternal health, pediatric care, and community health workers embedded in rural districts.",
  },
  {
    id: "women",
    tag: "Women Empowerment",
    title: "When women thrive, villages transform",
    img: "/program-women.jpg",
    stats: "3,200 microloans &middot; 96% repayment rate",
    desc: "Entrepreneurship cohorts, financial literacy, and business mentorship — built around women&apos;s realities.",
  },
  {
    id: "environment",
    tag: "Environment",
    title: "Roots of a greener tomorrow",
    img: "/program-environment.jpg",
    stats: "1.2M trees planted &middot; 14 watersheds restored",
    desc: "Agroforestry, climate-smart farming techniques, and native-species reforestation led by community nurseries.",
  },
  {
    id: "child",
    tag: "Child Protection",
    title: "Safe spaces for every child",
    img: "/program-child.jpg",
    stats: "24 safe centers &middot; 6,800 children supported",
    desc: "Trauma-informed counseling, anti-trafficking outreach, and safe spaces staffed around the clock.",
  },
  {
    id: "livelihood",
    tag: "Livelihood",
    title: "Farms and skills that feed futures",
    img: "/program-livelihood.jpg",
    stats: "5,400 farmers &middot; +34% avg. yield",
    desc: "Vocational training, climate-smart agriculture, and market access programs to lift household incomes.",
  },
  {
    id: "emergency",
    tag: "Emergency Relief",
    title: "First in, last out",
    img: "/volunteers-action.jpg",
    stats: "9 rapid deployments in 2025",
    desc: "When floods, drought, or crisis strikes, our pre-positioned teams move within 48 hours.",
  },
]

const featured = {
  id: "clean-water-kigoma",
  tag: "Featured Campaign",
  title: "Clean water for 12 villages in Kigoma",
  desc: "Right now, 12 rural villages walk up to 8 km for water from a contaminated river. Together we can change that by December.",
  img: "/program-water.jpg",
  raised: 78_400,
  goal: 120_000,
  donors: 642,
  daysLeft: 28,
}

export default function ProgramsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our Programs"
          title="Eight focus areas. One shared belief: communities lead, we follow."
          description="Explore the work that your donations make possible — audited, community-owned, and built for the long haul."
          image="/program-water.jpg"
          imageAlt="Children drinking clean water from a hand pump"
        />

        {/* Featured campaign */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-12">
              <div className="relative aspect-[5/4] lg:col-span-6 lg:aspect-auto">
                <Image
                  src={featured.img || "/placeholder.svg"}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {featured.tag}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 lg:col-span-6 lg:p-12">
                <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {featured.desc}
                </p>
                <div className="mt-6">
                  <DonationProgress
                    raised={featured.raised}
                    goal={featured.goal}
                    donors={featured.donors}
                    daysLeft={featured.daysLeft}
                  />
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="h-11 rounded-full bg-accent px-6 font-semibold text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href="/get-involved#donate">Support this campaign</Link>
                  </Button>
                  <Button asChild variant="outline" className="h-11 rounded-full bg-transparent">
                    <Link href="/stories">Read impact stories</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program grid */}
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="All Programs"
              title="Eight lanes, one destination."
              description="Each program is designed hand-in-hand with local leaders. Click any card to see recent updates, galleries, and how to support."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {programs.map((p) => (
                <article
                  key={p.id}
                  id={p.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={p.img || "/placeholder.svg"}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span
                      className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur"
                      dangerouslySetInnerHTML={{ __html: p.tag }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-xl font-semibold leading-snug text-foreground text-balance">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <p
                      className="mt-4 text-xs font-medium text-primary"
                      dangerouslySetInnerHTML={{ __html: p.stats }}
                    />
                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-border">
                      <Link href="/get-involved#donate" className="text-sm font-semibold text-foreground hover:text-primary">
                        Support this
                      </Link>
                      <Link
                        href={`/stories?program=${p.id}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                      >
                        Stories <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingDonate />
    </>
  )
}
