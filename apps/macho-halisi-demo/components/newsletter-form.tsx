"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { toast } from "sonner"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    toast.success("Thank you — we'll be in touch with something beautiful soon.")
    setEmail("")
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <label htmlFor="newsletter" className="sr-only">Email</label>
      <input
        id="newsletter"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full bg-transparent border-b border-white/30 py-3 pr-12 text-background placeholder:text-background/40 focus:outline-none focus:border-accent transition-colors"
      />
      <button
        type="submit"
        disabled={loading}
        aria-label="Subscribe"
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-background/80 hover:text-accent transition-colors disabled:opacity-50"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </form>
  )
}
