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
  Home as HomeIcon,
  Building2,
  Key,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const propertyLinks = [
  { name: "For Sale", href: "/properties?status=For+Sale", icon: HomeIcon, description: "Browse homes and condos on the market" },
  { name: "For Rent", href: "/properties?status=For+Rent", icon: Key, description: "Apartments and homes ready to lease" },
  { name: "New Construction", href: "/properties?status=Pending", icon: Building2, description: "Recently built and pending listings" },
  { name: "All Listings", href: "/properties", icon: Search, description: "See every property in our portfolio" },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties", hasDropdown: true },
  { name: "Agents", href: "/agents" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [propertiesOpen, setPropertiesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setPropertiesOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+1-555-201-4400" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 201-4400</span>
              </a>
              <a href="mailto:hello@meridianrealty.example" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                <span>hello@meridianrealty.example</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>200 Market Street, Austin, TX</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
              </span>
              <Link href="/agents" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <span>Meet Our Agents</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-card"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-primary">
                <Building2 className="h-7 w-7 text-primary-foreground" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                  <Key className="h-2.5 w-2.5 text-secondary-foreground" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight font-heading">Meridian</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Realty</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setPropertiesOpen(true)}
                      onMouseLeave={() => setPropertiesOpen(false)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname === link.href || pathname.startsWith("/properties")
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", propertiesOpen && "rotate-180")} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname === link.href ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.hasDropdown && (
                    <div onMouseEnter={() => setPropertiesOpen(true)} onMouseLeave={() => setPropertiesOpen(false)}>
                      <AnimatePresence>
                        {propertiesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                          >
                            <div className="bg-card rounded-xl shadow-xl border border-border p-6 w-[500px]">
                              <div className="grid grid-cols-2 gap-4">
                                {propertyLinks.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/item"
                                  >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                      <item.icon className="h-5 w-5 text-primary group-hover/item:text-primary-foreground" />
                                    </div>
                                    <div>
                                      <p className="font-medium text-foreground">{item.name}</p>
                                      <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                  </Link>
                                ))}
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
                <Link href="/properties" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </Link>
              </Button>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/contact" className="flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  List Your Property
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
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
                          onClick={() => setPropertiesOpen(!propertiesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                        >
                          {link.name}
                          <ChevronDown className={cn("h-5 w-5 transition-transform", propertiesOpen && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {propertiesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {propertyLinks.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                                >
                                  <item.icon className="h-4 w-4" />
                                  {item.name}
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
                          pathname === link.href ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/properties" className="flex items-center justify-center gap-2">
                    <Search className="h-4 w-4" />
                    Search Properties
                  </Link>
                </Button>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    <Key className="h-4 w-4" />
                    List Your Property
                  </Link>
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <a href="tel:+1-555-201-4400" className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +1 (555) 201-4400
                </a>
                <a href="mailto:hello@meridianrealty.example" className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  hello@meridianrealty.example
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
