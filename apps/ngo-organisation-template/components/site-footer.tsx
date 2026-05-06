import Link from "next/link"
import { Heart, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerNav = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Leadership", href: "/about#leadership" },
    { name: "Transparency", href: "/about#transparency" },
    { name: "Annual Reports", href: "/about#reports" },
    { name: "Careers", href: "/about#careers" },
  ],
  programs: [
    { name: "Education", href: "/programs#education" },
    { name: "Clean Water", href: "/programs#water" },
    { name: "Healthcare", href: "/programs#healthcare" },
    { name: "Women Empowerment", href: "/programs#women" },
    { name: "Environment", href: "/programs#environment" },
  ],
  getInvolved: [
    { name: "Donate", href: "/get-involved#donate" },
    { name: "Volunteer", href: "/get-involved#volunteer" },
    { name: "Partner", href: "/get-involved#partner" },
    { name: "Fundraise", href: "/get-involved#fundraise" },
    { name: "Events", href: "/get-involved#events" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      {/* Trust badges */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <TrustBadge title="Registered NGO" sub="Gov't Certified · 2014" />
            <TrustBadge title="Tax Deductible" sub="501(c)(3) Donations" />
            <TrustBadge title="Secure Payments" sub="256-bit SSL Encryption" />
            <TrustBadge title="4★ Charity Navigator" sub="Financial Transparency" />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Brand + newsletter */}
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Heart className="h-4 w-4 fill-current" aria-hidden />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg font-semibold text-foreground">Uzima</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Foundation
              </span>
            </div>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Uzima is a Swahili word meaning &ldquo;wholeness of life.&rdquo; We work alongside
            communities across East Africa to build lasting change through education, clean water,
            health and economic opportunity.
          </p>

          <form className="mt-6 flex max-w-sm gap-2" aria-label="Newsletter signup">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <Input
              id="footer-email"
              type="email"
              placeholder="your@email.com"
              className="bg-background"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 shrink-0">
              Subscribe
            </Button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <SocialLink href="#" label="Facebook">
              <Facebook className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="#" label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="#" label="Twitter">
              <Twitter className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="#" label="YouTube">
              <Youtube className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        {/* Link columns */}
        <FooterCol title="About" links={footerNav.about} />
        <FooterCol title="Programs" links={footerNav.programs} />
        <FooterCol title="Get Involved" links={footerNav.getInvolved} />

        {/* Contact */}
        <div className="lg:col-span-2">
          <h3 className="font-serif text-base font-semibold text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>12 Uhuru Road, Arusha, Tanzania</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <Link href="mailto:hello@uzima.org" className="hover:text-primary">
                hello@uzima.org
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>+255 712 345 678</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Uzima Foundation. Registration No. NGO/R2/0014/2014</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Cookies</Link>
            <Link href="#" className="hover:text-foreground">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <h3 className="font-serif text-base font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.name}>
            <Link href={l.href} className="text-muted-foreground hover:text-primary">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
    >
      {children}
    </Link>
  )
}

function TrustBadge({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-foreground">{title}</span>
      <span className="text-xs text-muted-foreground">{sub}</span>
    </div>
  )
}
