"use client"

import Link from "next/link"
import {
  Globe,
  Truck,
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
  services: [
    { name: "Road Freight", href: "/services#road" },
    { name: "Air Freight", href: "/services#air" },
    { name: "Ocean Freight", href: "/services#ocean" },
    { name: "Warehousing", href: "/services#warehouse" },
    { name: "Express Delivery", href: "/services#express" },
    { name: "Custom Clearance", href: "/services#customs" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Careers", href: "/careers" },
    { name: "News & Blog", href: "/blog" },
    { name: "Partners", href: "/partners" },
    { name: "Sustainability", href: "/sustainability" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Track Shipment", href: "/tracking" },
    { name: "Get a Quote", href: "/quote" },
    { name: "FAQs", href: "/faq" },
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
              <h3 className="text-2xl font-bold font-heading text-balance">Subscribe to Our Newsletter</h3>
              <p className="mt-2 text-primary-foreground/80 text-pretty">
                Get the latest updates on shipping rates, industry news, and exclusive offers.
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
                <Globe className="h-7 w-7 text-primary" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                  <Truck className="h-2.5 w-2.5 text-secondary-foreground" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight font-heading">TransGlobal</span>
                <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">Logistics</span>
              </div>
            </Link>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed text-pretty">
              TransGlobal Logistics is your trusted partner for comprehensive shipping and supply chain solutions. 
              With over 25 years of experience, we deliver excellence across land, air, and sea.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <a href="tel:+1-800-555-0199" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Call Us</p>
                  <p className="font-medium">+1 (800) 555-0199</p>
                </div>
              </a>
              <a href="mailto:info@transglobal.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Email Us</p>
                  <p className="font-medium">info@transglobal.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Visit Us</p>
                  <p className="font-medium">123 Logistics Way, New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Working Hours</p>
                  <p className="font-medium">Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors inline-flex items-center gap-2 group"
                  >
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
              &copy; {new Date().getFullYear()} TransGlobal Logistics. All rights reserved.
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
