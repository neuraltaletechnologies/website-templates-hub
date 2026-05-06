"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Heart, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingDonate() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none",
      )}
    >
      <Link
        href="#"
        aria-label="Chat with us on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.62_0.16_150)] text-white shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
      </Link>
      <Link
        href="/get-involved#donate"
        className="group flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-xl hover:bg-accent/90 hover:scale-105 transition-transform"
      >
        <Heart className="h-4 w-4 fill-current animate-pulse" aria-hidden />
        Donate
      </Link>
    </div>
  )
}
