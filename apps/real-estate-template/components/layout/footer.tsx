"use client"

import Link from "next/link"
import {
  Building2,
  Key,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  properties: [
    { name: "Homes For Sale", href: "/properties?status=For+Sale" },
    { name: "Homes For Rent", href: "/properties?status=For+Rent" },
    { name: "New Construction", href: "/properties?status=Pending" },
    { name: "Condos & Townhomes", href: "/properties?type=Condo" },
    { name: "Land & Lots", href: "/properties?type=Land" },
    { name: "All Listings", href: "/properties" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Agents", href: "/agents" },
    { name: "Careers", href: "/careers" },
    { name: "News & Insights", href: "/blog" },
    { name: "Reviews", href: "/about#testimonials" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "List Your Property", href: "/contact" },
    { name: "Schedule a Tour", href: "/contact" },
    { name: "FAQs", href: "/contact#faq" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold font-heading text-balance">New Listings, Straight to Your Inbox</h3>
              <p className="mt-2 text-primary-foreground/80 text-pretty">
                Get fresh listings and market updates for your neighborhood before they hit the general market.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 min-w-[280px]"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground">
                <Building2 className="h-7 w-7 text-primary" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                  <Key className="h-2.5 w-2.5 text-secondary-foreground" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight font-heading">Meridian</span>
                <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">Realty</span>
              </div>
            </Link>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed text-pretty">
              Meridian Realty helps buyers, sellers, and renters find their place with a curated portfolio of
              homes and a team of agents who know every neighborhood inside and out.
            </p>

            <div className="mt-8 space-y-4">
              <a href="tel:+1-555-201-4400" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Call Us</p>
                  <p className="font-medium">+1 (555) 201-4400</p>
                </div>
              </a>
              <a href="mailto:hello@meridianrealty.example" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Email Us</p>
                  <p className="font-medium">hello@meridianrealty.example</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Visit Us</p>
                  <p className="font-medium">200 Market Street, Austin, TX 78701</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Office Hours</p>
                  <p className="font-medium">Mon - Sat: 8:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-heading mb-6">Properties</h4>
            <ul className="space-y-3">
              {footerLinks.properties.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-heading mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-heading mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70 text-center md:text-left">
              &copy; {new Date().getFullYear()} Meridian Realty. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
