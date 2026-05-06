import { cn } from "@/lib/utils"

interface Props {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  as?: "h1" | "h2" | "h3"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
}: Props) {
  const Tag = as
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-6 bg-primary" aria-hidden />
          {eyebrow}
        </span>
      )}
      <Tag className="font-serif text-3xl font-semibold leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
