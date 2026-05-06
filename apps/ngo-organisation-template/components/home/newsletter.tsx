"use client"

import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/newsletter-bg.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative grid items-center gap-8 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-12 lg:px-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Stay in the loop
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-background text-balance sm:text-4xl lg:text-5xl">
                Get monthly stories of change, straight from the field.
              </h2>
              <p className="mt-4 max-w-lg text-base text-background/85 sm:text-lg">
                Real faces. Real updates. No spam — unsubscribe anytime with one click.
              </p>
            </div>
            <form
              className="lg:col-span-5"
              aria-label="Subscribe to newsletter"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  className="h-12 rounded-full border-background/20 bg-background/10 px-5 text-background placeholder:text-background/60 focus-visible:ring-accent"
                />
                <Button
                  type="submit"
                  className="h-12 rounded-full bg-accent px-6 font-semibold text-accent-foreground hover:bg-accent/90"
                >
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-xs text-background/70">
                By subscribing you agree to our privacy policy. Your data stays with us, always.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
