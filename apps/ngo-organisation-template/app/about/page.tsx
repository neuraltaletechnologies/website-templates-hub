import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingDonate } from "@/components/floating-donate"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Award, Target, Eye, Sparkles } from "lucide-react"

export const metadata = {
  title: "About Us",
  description: "Our story, mission, and the people who make Uzima Foundation's work possible.",
}

const timeline = [
  {
    year: "2014",
    title: "Founded in Arusha",
    text: "Mary Mushi launches Uzima with three volunteers and one mission: support a girls&apos; school in her home village.",
    img: "/founder.jpg",
  },
  {
    year: "2017",
    title: "First clean water program",
    text: "Six wells delivered to Kigoma region — the beginning of our water portfolio.",
    img: "/program-water.jpg",
  },
  {
    year: "2020",
    title: "Mobile clinics launched",
    text: "Rapid-response health teams reach 40,000 people during the COVID-19 emergency.",
    img: "/program-healthcare.jpg",
  },
  {
    year: "2023",
    title: "250,000 lives impacted",
    text: "Uzima crosses a quarter-million lives directly served across East Africa.",
    img: "/team-field.jpg",
  },
  {
    year: "2026",
    title: "Expanding to four new districts",
    text: "Our largest expansion yet — with your help, we&apos;re going further than ever.",
    img: "/program-environment.jpg",
  },
]

const values = [
  {
    icon: Target,
    title: "Mission",
    text: "To unlock opportunity for rural East African communities through education, health, water, and economic empowerment.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "A future where every child grows up healthy, schooled, and empowered to shape their own life.",
  },
  {
    icon: Sparkles,
    title: "Values",
    text: "Dignity. Transparency. Community-led design. Long-term investment over short-term aid.",
  },
]

const leaders = [
  { name: "Mary Mushi", role: "Founder & Executive Director", img: "/founder.jpg" },
  { name: "David Ochieng", role: "Programs Director", img: "/volunteers-action.jpg" },
  { name: "Fatuma Kibwana", role: "Field Operations Lead", img: "/story-grace.jpg" },
  { name: "James Mwakasege", role: "Finance & Transparency", img: "/team-field.jpg" },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About Uzima"
          title="A story of dignity, built village by village."
          description="For over a decade, we&apos;ve walked alongside communities across East Africa to turn hope into lasting infrastructure."
          image="/mission-hands.jpg"
          imageAlt="Joined hands in solidarity"
        />

        {/* Founder story */}
        <section className="bg-background">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/founder.jpg"
                  alt="Mary Mushi, founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Founder&apos;s Letter
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl">
                &ldquo;I grew up walking to a school that had no books. Today, that same village
                has a library.&rdquo;
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  My grandmother used to say <em>uzima</em> — wholeness of life — is something we
                  owe each other. It was her voice I heard the day I quit my marketing job in
                  Nairobi and came home to start this work.
                </p>
                <p>
                  Twelve years later, what began as a single girls&apos; scholarship has become a
                  movement of teachers, nurses, engineers, and donors who believe the same
                  stubborn truth: that communities know what they need, and our job is to show
                  up, listen, and invest.
                </p>
              </div>
              <p className="mt-6 font-serif text-lg italic text-foreground">
                — Mary Mushi, Founder &amp; Executive Director
              </p>
            </div>
          </div>
        </section>

        {/* Mission/Vision/Values */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              align="center"
              eyebrow="What we stand for"
              title="Mission, vision, and the values we live by."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionHeading
              eyebrow="Our Journey"
              title="Milestones along the way."
              description="From a single classroom to a network of programs across six countries."
            />
            <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {timeline.map((t) => (
                <li
                  key={t.year}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={t.img || "/placeholder.svg"}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 20vw"
                    />
                  </div>
                  <div className="flex-1 p-5">
                    <span className="font-serif text-2xl font-semibold text-primary">{t.year}</span>
                    <h3 className="mt-1 text-base font-semibold text-foreground">{t.title}</h3>
                    <p
                      className="mt-2 text-sm leading-relaxed text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: t.text }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeading
              eyebrow="Our Team"
              title="Led by the communities we serve."
              description="Our leadership is made up almost entirely of local people with decades of field experience."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leaders.map((p) => (
                <div key={p.name} className="overflow-hidden rounded-2xl bg-card border border-border">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={p.img || "/placeholder.svg"}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-serif text-lg font-semibold text-foreground">{p.name}</p>
                    <p className="text-sm text-muted-foreground">{p.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section id="transparency" className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Transparency
                </span>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground text-balance sm:text-4xl">
                  Where your money really goes.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  We publish audited financials every year and provide real-time project updates
                  to every donor. Because trust is earned one disclosure at a time.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
                    <Award className="h-4 w-4 text-accent" aria-hidden />
                    4★ Charity Navigator
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
                    <Award className="h-4 w-4 text-accent" aria-hidden />
                    Platinum GuideStar
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
                    <Award className="h-4 w-4 text-accent" aria-hidden />
                    ISO 9001 Certified
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    FY 2025 Allocation
                  </h3>
                  <ul className="mt-6 space-y-5">
                    {[
                      { label: "Programs in the field", pct: 94 },
                      { label: "Administration", pct: 4 },
                      { label: "Fundraising", pct: 2 },
                    ].map((row) => (
                      <li key={row.label}>
                        <div className="flex justify-between text-sm font-medium text-foreground">
                          <span>{row.label}</span>
                          <span>{row.pct}%</span>
                        </div>
                        <div className="mt-1 h-2 rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${row.pct}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingDonate />
    </>
  )
}
