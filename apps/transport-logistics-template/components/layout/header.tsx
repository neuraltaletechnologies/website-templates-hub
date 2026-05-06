"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Truck,
  Plane,
  Ship,
  Package,
  Warehouse,
  FileText,
  Calculator,
  Search,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  { name: "Road Freight", href: "/services#road", icon: Truck, description: "Full & partial load trucking" },
  { name: "Air Freight", href: "/services#air", icon: Plane, description: "Express air cargo solutions" },
  { name: "Ocean Freight", href: "/services#ocean", icon: Ship, description: "Global sea shipping" },
  { name: "Warehousing", href: "/services#warehouse", icon: Warehouse, description: "Storage & distribution" },
  { name: "Express Delivery", href: "/services#express", icon: Package, description: "Same-day & next-day" },
  { name: "Custom Clearance", href: "/services#customs", icon: FileText, description: "Import/export documentation" },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Fleet", href: "/fleet" },
  { name: "Tracking", href: "/tracking" },
  { name: "Routes", href: "/routes" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+1-800-555-0199" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+1 (800) 555-0199</span>
              </a>
              <a href="mailto:info@transglobal.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@transglobal.com</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Logistics Way, New York, NY</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </span>
              <Link href="/tracking" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Search className="h-4 w-4" />
                <span>Track Shipment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-card"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-primary">
                <Globe className="h-7 w-7 text-primary-foreground" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                  <Truck className="h-2.5 w-2.5 text-secondary-foreground" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight font-heading">TransGlobal</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Logistics</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname === link.href || pathname.startsWith("/services")
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Services Mega Menu */}
                  {link.hasDropdown && (
                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                          >
                            <div className="bg-card rounded-xl shadow-xl border border-border p-6 w-[500px]">
                              <div className="grid grid-cols-2 gap-4">
                                {services.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                                  >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                      <service.icon className="h-5 w-5 text-primary group-hover/item:text-primary-foreground" />
                                    </div>
                                    <div>
                                      <p className="font-medium text-foreground">{service.name}</p>
                                      <p className="text-sm text-muted-foreground">{service.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-border">
                                <Link
                                  href="/services"
                                  className="flex items-center justify-center gap-2 text-primary font-medium hover:underline"
                                >
                                  View All Services
                                  <ChevronDown className="h-4 w-4 -rotate-90" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/tracking" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Track
                </Link>
              </Button>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/quote" className="flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  Get Quote
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden bg-card border-b border-border shadow-lg overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                        >
                          {link.name}
                          <ChevronDown className={cn(
                            "h-5 w-5 transition-transform",
                            servicesOpen && "rotate-180"
                          )} />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                                >
                                  <service.icon className="h-4 w-4" />
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-4 py-3 font-medium rounded-lg transition-colors",
                          pathname === link.href
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/tracking" className="flex items-center justify-center gap-2">
                    <Search className="h-4 w-4" />
                    Track Shipment
                  </Link>
                </Button>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/quote" className="flex items-center justify-center gap-2">
                    <Calculator className="h-4 w-4" />
                    Get a Quote
                  </Link>
                </Button>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <a href="tel:+1-800-555-0199" className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +1 (800) 555-0199
                </a>
                <a href="mailto:info@transglobal.com" className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  info@transglobal.com
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
