"use client"

import Image from "next/image"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingDonate } from "@/components/floating-donate"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heart, HandHeart, Building2, Shield, Lock, Repeat } from "lucide-react"
import { cn } from "@/lib/utils"

const amounts = [25, 50, 100, 250]
const impact: Record<number, string> = {
  25: "Provides 5 nutritious school meals",
  50: "Funds a week of clean water for a family",
  100: "Sends one child to school for a month",
  250: "Equips a classroom with books &amp; supplies",
}

export default function GetInvolvedPage() {
  const [frequency, setFrequency] = useState<"monthly" | "onetime">("monthly")
  const [amount, setAmount] = useState<number>(50)
  const [custom, setCustom] = useState("")

  const selected = custom ? Number(custom) || 0 : amount

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Get Involved"
          title="Your action is someone&apos;s turning point."
          description="Give, volunteer, or partner — three paths to the same destination."
          image="/volunteers-action.jpg"
          imageAlt="Volunteers distributing food in a rural village"
        />

        {/* Tabs nav */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-4 sm:px-6 lg:px-8">
            {[
              { href: "#donate", label: "Donate", icon: Heart },
              { href: "#volunteer", label: "Volunteer", icon: HandHeart },
              { href: "#partner", label: "Partner", icon: Building2 },
            ].map((t) => (
              <a
                key={t.label}
                href={t.href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40"
              >
                <t.icon className="h-4 w-4 text-primary" aria-hidden />
                {t.label}
              </a>
            ))}
          </div>
        </section>

        {/* DONATE */}
        <section id="donate" className="scroll-mt-20 bg-background">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-28">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Donate"
                title="Make a gift that multiplies."
                description="94¢ of every dollar reaches communities in the field. You&apos;ll receive a tax receipt and real-time project updates."
              />
              <div className="mt-8 space-y-4">
                {[
                  {
                    t: "Transparent",
                    d: "Independently audited. Live impact reporting for every campaign.",
                    icon: Shield,
                  },
                  {
                    t: "Secure",
                    d: "256-bit SSL. PCI-DSS compliant. Your data stays yours.",
                    icon: Lock,
                  },
                  {
                    t: "Flexible",
                    d: "Pause, change, or cancel monthly gifts at any time — no questions.",
                    icon: Repeat,
                  },
                ].map((b) => (
                  <div key={b.t} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <b.icon className="h-4 w-4" aria-hidden />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{b.t}</p>
                      <p className="text-sm text-muted-foreground">{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
              >
                {/* Frequency */}
                <div className="grid grid-cols-2 gap-2 rounded-full bg-muted p-1">
                  {(["monthly", "onetime"] as const).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                        frequency === f
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {f === "monthly" ? "Monthly" : "One-time"}
                    </button>
                  ))}
                </div>

                {/* Amounts */}
                <fieldset className="mt-6">
                  <legend className="mb-3 text-sm font-semibold text-foreground">
                    Choose an amount
                  </legend>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {amounts.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => {
                          setAmount(a)
                          setCustom("")
                        }}
                        className={cn(
                          "rounded-xl border px-4 py-3 text-left transition-all",
                          amount === a && !custom
                            ? "border-primary bg-primary/5"
                            : "border-border bg-card hover:border-primary/40",
                        )}
                      >
                        <div className="font-serif text-xl font-semibold text-foreground">
                          ${a}
                        </div>
                        <div className="text-[11px] leading-snug text-muted-foreground">
                          {frequency === "monthly" ? "/month" : "one-time"}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Label htmlFor="custom" className="sr-only">
                      Custom amount
                    </Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <Input
                        id="custom"
                        inputMode="numeric"
                        placeholder="Custom amount"
                        value={custom}
                        onChange={(e) => setCustom(e.target.value.replace(/\D/g, ""))}
                        className="h-12 rounded-xl pl-8"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Impact */}
                {impact[amount] && !custom && (
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <Heart className="mt-0.5 h-5 w-5 shrink-0 fill-current text-primary" aria-hidden />
                    <p
                      className="text-sm text-foreground"
                      dangerouslySetInnerHTML={{
                        __html: `<strong>$${selected}</strong> ${impact[amount]}.`,
                      }}
                    />
                  </div>
                )}

                {/* Form fields */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" required className="mt-1.5" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required className="mt-1.5" placeholder="jane@email.com" />
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-start gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">
                    <Lock className="mr-1 inline h-3 w-3" /> Secure payment via Stripe · M-Pesa ·
                    PayPal
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 rounded-full bg-accent px-7 font-semibold text-accent-foreground hover:bg-accent/90"
                  >
                    <Heart className="mr-2 h-4 w-4 fill-current" />
                    Give ${selected || 0}
                    {frequency === "monthly" && " /month"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* VOLUNTEER */}
        <section
          id="volunteer"
          className="scroll-mt-20 border-t border-border bg-secondary/40"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionHeading
              eyebrow="Volunteer"
              title="Lend your time, skills, or heart."
              description="We have roles for every schedule — from weekend community events to multi-month field deployments."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Field Volunteer",
                  commitment: "2 – 12 weeks · On-site",
                  desc: "Join a program team in Tanzania, Kenya or Uganda. Teaching, construction, health outreach.",
                  img: "/team-field.jpg",
                },
                {
                  title: "Skilled Pro Bono",
                  commitment: "Flexible · Remote",
                  desc: "Designers, engineers, writers, translators — give a few hours from anywhere in the world.",
                  img: "/volunteers-action.jpg",
                },
                {
                  title: "Community Ambassador",
                  commitment: "Ongoing · Local",
                  desc: "Host events, speak at schools and workplaces, fundraise in your community.",
                  img: "/program-women.jpg",
                },
              ].map((v) => (
                <article
                  key={v.title}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="relative aspect-[5/3]">
                    <Image
                      src={v.img || "/placeholder.svg"}
                      alt={v.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {v.commitment}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                    <Button variant="outline" className="mt-4 w-full rounded-full bg-transparent">
                      Apply
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNER */}
        <section id="partner" className="scroll-mt-20 bg-background">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-28">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Partner With Us"
                title="Corporate &amp; foundation partnerships that scale impact."
                description="From matching gifts to multi-year strategic commitments, we tailor partnerships that make sense for your goals and ours."
              />
              <ul className="mt-8 space-y-3 text-sm text-foreground">
                {[
                  "Custom impact reporting & dashboards",
                  "Employee engagement programs",
                  "Co-branded campaigns and PR",
                  "Site visits to active programs",
                  "ESG-aligned sponsorship packages",
                ].map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="p-name">Name</Label>
                  <Input id="p-name" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="p-org">Organization</Label>
                  <Input id="p-org" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="p-email">Email</Label>
                  <Input id="p-email" type="email" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="p-phone">Phone</Label>
                  <Input id="p-phone" className="mt-1.5" />
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="p-msg">How would you like to partner?</Label>
                <Textarea id="p-msg" rows={4} className="mt-1.5" placeholder="Tell us about your goals…" />
              </div>
              <Button
                type="submit"
                className="mt-6 h-11 rounded-full bg-primary px-6 font-semibold hover:bg-primary/90"
              >
                Start the conversation
              </Button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingDonate />
    </>
  )
}
