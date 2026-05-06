"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navItems = [
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Amenities", href: "/amenities" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Offers", href: "/offers" },
  { label: "About", href: "/about" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container-luxe flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className={cn(
            "font-serif text-xl md:text-2xl tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-background",
          )}
        >
          <span className="italic">Maison</span>{" "}
          <span className="text-accent">Lumière</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent",
                scrolled ? "text-foreground" : "text-background",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="tel:+255774000000"
            className={cn(
              "hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.18em] transition-colors hover:text-accent",
              scrolled ? "text-foreground" : "text-background",
            )}
          >
            <Phone className="h-3.5 w-3.5" />
            +255 774 000 000
          </a>
          <Button
            asChild
            className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 rounded-none uppercase tracking-[0.2em] text-xs h-10 px-5"
          >
            <Link href="/book">Book Now</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button
                aria-label="Open menu"
                className={cn(
                  "p-2 -mr-2 transition-colors",
                  scrolled ? "text-foreground" : "text-background",
                )}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[380px] bg-navy text-background border-none p-0"
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                  <span className="font-serif text-xl text-background">
                    <span className="italic">Maison</span>{" "}
                    <span className="text-accent">Lumière</span>
                  </span>
                  <button
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="text-background/80 hover:text-background"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <nav className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-serif text-3xl text-background hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-6 border-t border-white/10 flex flex-col gap-3">
                  <Button
                    asChild
                    onClick={() => setOpen(false)}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none uppercase tracking-[0.2em] text-xs h-12"
                  >
                    <Link href="/book">Book Now</Link>
                  </Button>
                  <a
                    href="tel:+255774000000"
                    className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-background/80"
                  >
                    <Phone className="h-3.5 w-3.5" /> +255 774 000 000
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
