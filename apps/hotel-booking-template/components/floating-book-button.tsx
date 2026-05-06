"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingBookButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <Link
      href="/book"
      className={cn(
        "fixed bottom-6 right-6 z-40 sm:hidden inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 text-xs uppercase tracking-[0.2em] shadow-lg transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none",
      )}
    >
      <Calendar className="h-4 w-4" />
      Book Now
    </Link>
  )
}
