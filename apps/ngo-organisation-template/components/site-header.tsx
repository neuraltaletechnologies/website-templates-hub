"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const programs = [
  { name: "Education", href: "/programs#education", img: "/program-education.jpg" },
  { name: "Clean Water", href: "/programs#water", img: "/program-water.jpg" },
  { name: "Healthcare", href: "/programs#healthcare", img: "/program-healthcare.jpg" },
  { name: "Women Empowerment", href: "/programs#women", img: "/program-women.jpg" },
  { name: "Environment", href: "/programs#environment", img: "/program-environment.jpg" },
  { name: "Livelihood", href: "/programs#livelihood", img: "/program-livelihood.jpg" },
]

const mainNav = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs", hasMega: true },
  { name: "Impact", href: "/stories" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Heart className="h-4 w-4 fill-current" aria-hidden />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-foreground">Uzima</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Foundation</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {mainNav.map((item) =>
            item.hasMega ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
                >
                  {item.name}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                </Link>
                <div
                  className={cn(
                    "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-opacity",
                    megaOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                  )}
                >
                  <div className="w-[640px] rounded-xl border border-border bg-card p-4 shadow-xl">
                    <div className="grid grid-cols-3 gap-3">
                      {programs.map((p) => (
                        <Link
                          key={p.name}
                          href={p.href}
                          className="group relative block overflow-hidden rounded-lg border border-border"
                        >
                          <div className="relative aspect-[4/3] w-full">
                            <Image
                              src={p.img || "/placeholder.svg"}
                              alt={p.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="200px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <span className="absolute bottom-2 left-3 text-sm font-semibold text-white">
                              {p.name}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-sm">
                      <span className="text-muted-foreground">Explore all our focus areas</span>
                      <Link href="/programs" className="font-semibold text-primary hover:underline">
                        View all programs &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
            <Link href="/get-involved#volunteer">Volunteer</Link>
          </Button>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm"
          >
            <Link href="/get-involved#donate">
              <Heart className="mr-1.5 h-4 w-4 fill-current" aria-hidden />
              Donate Now
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => setMobileOpen(false)}
                >
                  <Link href="/get-involved#donate">
                    <Heart className="mr-1.5 h-4 w-4 fill-current" aria-hidden />
                    Donate Now
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
