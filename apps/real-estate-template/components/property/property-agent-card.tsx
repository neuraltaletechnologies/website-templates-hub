"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Phone, Mail, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { Agent } from "@/lib/data/agents"

const tourSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
})

type TourFormData = z.infer<typeof tourSchema>

export function PropertyAgentCard({ agent, propertyTitle }: { agent: Agent; propertyTitle: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TourFormData>({
    resolver: zodResolver(tourSchema),
    defaultValues: {
      message: `I'd like to schedule a tour of ${propertyTitle}.`,
    },
  })

  const onSubmit = async (data: TourFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log("Tour request:", { ...data, propertyTitle, agentId: agent.id })
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <Link href={`/agents#${agent.slug}`} className="flex items-center gap-3">
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
          <Image src={agent.image} alt={agent.name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-heading font-semibold text-foreground">{agent.name}</p>
          <p className="text-sm text-muted-foreground">{agent.title}</p>
        </div>
      </Link>

      <div className="mt-4 flex flex-col gap-2">
        <a href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <Phone className="h-4 w-4" />
          {agent.phone}
        </a>
        <a href={`mailto:${agent.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <Mail className="h-4 w-4" />
          {agent.email}
        </a>
      </div>

      <div className="mt-6 border-t border-border pt-6">
        {isSubmitted ? (
          <div className="flex flex-col items-center py-4 text-center">
            <CheckCircle className="h-8 w-8 text-primary" />
            <p className="mt-3 font-medium text-foreground">Request sent!</p>
            <p className="mt-1 text-sm text-muted-foreground">{agent.name.split(" ")[0]} will reach out shortly to confirm a time.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <h3 className="font-heading font-semibold text-foreground">Schedule a Tour</h3>
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} className={errors.name ? "border-destructive" : ""} />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} className={errors.email ? "border-destructive" : ""} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" {...register("phone")} className={errors.phone ? "border-destructive" : ""} />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={3} {...register("message")} />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : (
                <>
                  Request a Tour
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
