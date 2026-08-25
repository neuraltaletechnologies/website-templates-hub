import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { NewsletterForm } from "./newsletter-form"

export function SiteFooter() {
  return (
    <footer className="bg-navy text-background">
      <div className="container-luxe py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="font-serif text-3xl md:text-4xl leading-tight text-balance">
              Get our occasional dispatches — season updates, travel tips,
              and stories from the road.
            </h3>
            <div className="mt-8 max-w-md">
              <NewsletterForm />
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <FooterColumn
              title="Explore"
              links={[
                { label: "Our Safaris", href: "/rooms" },
                { label: "Why Travel With Us", href: "/amenities" },
                { label: "Taste of Tanzania", href: "/dining" },
                { label: "Gallery", href: "/gallery" },
                { label: "Offers", href: "/offers" },
              ]}
            />
            <FooterColumn
              title="Information"
              links={[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Travel Guides", href: "/about" },
                { label: "Careers", href: "/contact" },
              ]}
            />
            <FooterColumn
              title="Reach Us"
              links={[
                { label: "Karatu, Arusha Region, Tanzania", href: "/contact" },
                { label: "+255 754 474 792", href: "tel:+255754474792" },
                { label: "+255 789 718 505", href: "tel:+255789718505" },
                { label: "info@machohalisi.com", href: "mailto:info@machohalisi.com" },
              ]}
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="font-serif text-xl">
              <span className="italic">Macho</span>{" "}
              <span className="text-accent">Halisi</span>
            </span>
            <span className="hidden md:inline text-xs uppercase tracking-[0.2em] text-background/50">
              TATO Member · 14+ Years Guiding
            </span>
          </div>

          <div className="flex items-center gap-6">
            <SocialLink href="#" label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="#" label="Facebook">
              <Facebook className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="#" label="YouTube">
              <Youtube className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-background/50">
          <span>© {new Date().getFullYear()} Macho Halisi Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-background">Privacy</Link>
            <Link href="#" className="hover:text-background">Terms</Link>
            <Link href="#" className="hover:text-background">Accessibility</Link>
            <Link href="#" className="hover:text-background">Cookies</Link>
          </div>
        </div>

        <p className="mt-6 text-[11px] normal-case tracking-normal leading-relaxed text-background/40 max-w-2xl">
          This is an independent concept/demo build created to showcase web
          design work, not the official Macho Halisi Ltd website. Pricing
          shown throughout is illustrative only.
        </p>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h4 className="font-sans text-[11px] uppercase tracking-[0.24em] text-accent mb-6">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-background/80 hover:text-background transition-colors"
            >
              {l.label}
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
    <a
      href={href}
      aria-label={label}
      className="h-10 w-10 flex items-center justify-center border border-white/20 rounded-full text-background/80 hover:text-accent hover:border-accent transition-colors"
    >
      {children}
    </a>
  )
}
