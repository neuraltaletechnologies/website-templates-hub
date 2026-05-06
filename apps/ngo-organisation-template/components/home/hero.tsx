import Image from "next/image"
import Link from "next/link"
import { Heart, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-children.jpg"
          alt="Children laughing in a classroom in Tanzania"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pt-24 pb-12 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Empowering 250,000+ lives since 2014
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] text-white text-balance sm:text-5xl lg:text-7xl">
            Every child deserves a future full of possibility.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Together we&apos;re building schools, digging wells, and opening clinics in the
            communities that need them most — because hope, multiplied, changes everything.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-accent px-7 text-base font-semibold text-accent-foreground shadow-xl hover:bg-accent/90"
            >
              <Link href="/get-involved#donate">
                <Heart className="mr-2 h-4 w-4 fill-current" aria-hidden />
                Donate Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/40 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
            >
              <Link href="/stories">
                <Play className="mr-2 h-4 w-4 fill-current" aria-hidden />
                Watch Our Story
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-white/80">
            <div className="flex -space-x-2">
              {[
                "/volunteers-action.jpg",
                "/story-amara.jpg",
                "/story-kwame.jpg",
                "/story-grace.jpg",
              ].map((src) => (
                <div
                  key={src}
                  className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-background"
                >
                  <Image src={src || "/placeholder.svg"} alt="" fill className="object-cover" sizes="36px" />
                </div>
              ))}
            </div>
            <p className="text-sm">
              Join <strong className="font-semibold text-white">18,400+ monthly donors</strong>
              <br className="sm:hidden" />{" "}
              <span className="text-white/70">transforming lives across East Africa.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
