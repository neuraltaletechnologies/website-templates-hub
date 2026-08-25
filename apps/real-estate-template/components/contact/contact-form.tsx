"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { agents } from "@/lib/data/agents"

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  reason: z.enum(["buying", "selling", "renting", "general"]),
  agentId: z.string().optional(),
  message: z.string().min(10, "Tell us a little more so we can route this to the right agent"),
})

type ContactFormData = z.infer<typeof contactSchema>

const reasons = [
  { value: "buying", label: "I'm looking to buy" },
  { value: "selling", label: "I'm looking to sell" },
  { value: "renting", label: "I'm looking to rent" },
  { value: "general", label: "General question" },
]

export function ContactForm() {
  const searchParams = useSearchParams()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      reason: "buying",
      agentId: "any",
    },
  })

  useEffect(() => {
    const agentSlug = searchParams.get("agent")
    if (agentSlug && agents.some((a) => a.slug === agentSlug)) {
      setValue("agentId", agentSlug)
    }
  }, [searchParams, setValue])

  const selectedReason = watch("reason")
  const selectedAgent = watch("agentId")

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Contact request:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">Message Sent</h2>
        <p className="mt-3 max-w-sm text-muted-foreground">
          Thanks for reaching out — someone from our team will follow up within one business day.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-8">
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" {...register("name")} className={errors.name ? "border-destructive" : ""} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" {...register("email")} className={errors.email ? "border-destructive" : ""} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" type="tel" {...register("phone")} className={errors.phone ? "border-destructive" : ""} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label>I'm interested in</Label>
          <Select value={selectedReason} onValueChange={(v) => setValue("reason", v as ContactFormData["reason"])}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {reasons.map((reason) => (
                <SelectItem key={reason.value} value={reason.value}>
                  {reason.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label>Preferred Agent (optional)</Label>
          <Select value={selectedAgent} onValueChange={(v) => setValue("agentId", v)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">No preference — match me with someone</SelectItem>
              {agents.map((agent) => (
                <SelectItem key={agent.id} value={agent.slug}>
                  {agent.name} — {agent.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Tell us what you're looking for — budget, neighborhoods, timeline, anything that helps."
            {...register("message")}
            className={errors.message ? "border-destructive" : ""}
          />
          {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
