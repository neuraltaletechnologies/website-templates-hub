import Image from "next/image"

interface Props {
  eyebrow?: string
  title: string
  description?: string
  image: string
  imageAlt: string
}

export function PageHero({ eyebrow, title, description, image, imageAlt }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-foreground">
      <div className="absolute inset-0 -z-10">
        <Image src={image || "/placeholder.svg"} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-24 lg:px-8 lg:pt-44 lg:pb-28">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-background text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
