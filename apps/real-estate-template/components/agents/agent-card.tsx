import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Star, Home } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Agent } from "@/lib/data/agents"

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div id={agent.slug} className="scroll-mt-24 flex flex-col rounded-2xl border border-border bg-card p-6 text-center">
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full">
        <Image src={agent.image} alt={agent.name} fill className="object-cover" />
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{agent.name}</h3>
      <p className="text-sm font-medium text-primary">{agent.title}</p>

      <div className="mt-2 flex items-center justify-center gap-1 text-sm text-muted-foreground">
        <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
        {agent.rating.toFixed(1)}
        <span className="mx-1">·</span>
        <Home className="h-3.5 w-3.5" />
        {agent.listingsCount} listings
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{agent.bio}</p>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {agent.specialties.map((specialty) => (
          <Badge key={specialty} variant="outline">
            {specialty}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4">
        <a href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <Phone className="h-4 w-4" />
          {agent.phone}
        </a>
        <a href={`mailto:${agent.email}`} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <Mail className="h-4 w-4" />
          {agent.email}
        </a>
      </div>

      <Link
        href={`/contact?agent=${agent.slug}`}
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Contact {agent.name.split(" ")[0]}
      </Link>
    </div>
  )
}
