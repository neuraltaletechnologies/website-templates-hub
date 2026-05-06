import Image from "next/image"
import Link from "next/link"

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumbs,
}: {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  image: string
  breadcrumbs?: { label: string; href?: string }[]
}) {
  return (
    <section className="relative h-[68vh] min-h-[520px] w-full overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

      <div className="relative container-luxe h-full flex flex-col justify-end pb-16 md:pb-24 pt-32 text-background">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-background/70">
              {breadcrumbs.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  {b.href ? (
                    <Link href={b.href} className="hover:text-accent transition-colors">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-accent">{b.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="eyebrow text-accent mb-5">{eyebrow}</p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-base md:text-lg text-background/85 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
