"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    toast.success("Thank you — our concierge will be in touch shortly.")
    ;(e.target as HTMLFormElement).reset()
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="grid md:grid-cols-2 gap-5">
          <Field>
            <FieldLabel htmlFor="firstName" className="eyebrow">First Name</FieldLabel>
            <FieldContent>
              <Input id="firstName" name="firstName" required className="bg-background rounded-none h-12" />
            </FieldContent>
          </Field>
          <Field>
            <FieldLabel htmlFor="lastName" className="eyebrow">Last Name</FieldLabel>
            <FieldContent>
              <Input id="lastName" name="lastName" required className="bg-background rounded-none h-12" />
            </FieldContent>
          </Field>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <Field>
            <FieldLabel htmlFor="email" className="eyebrow">Email</FieldLabel>
            <FieldContent>
              <Input id="email" name="email" type="email" required className="bg-background rounded-none h-12" />
            </FieldContent>
          </Field>
          <Field>
            <FieldLabel htmlFor="phone" className="eyebrow">Phone</FieldLabel>
            <FieldContent>
              <Input id="phone" name="phone" type="tel" className="bg-background rounded-none h-12" />
            </FieldContent>
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="reason" className="eyebrow">Nature of Enquiry</FieldLabel>
          <FieldContent>
            <Select name="reason">
              <SelectTrigger className="bg-background rounded-none h-12" id="reason">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="safari">Safari Enquiry</SelectItem>
                <SelectItem value="trek">Kilimanjaro / Mountain Trek</SelectItem>
                <SelectItem value="custom">Custom Itinerary</SelectItem>
                <SelectItem value="group">Group Booking</SelectItem>
                <SelectItem value="press">Press</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="message" className="eyebrow">Message</FieldLabel>
          <FieldContent>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              className="bg-background rounded-none resize-none"
              placeholder="Tell us how we can help..."
            />
          </FieldContent>
        </Field>

        <Button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 rounded-none uppercase tracking-[0.2em] text-xs h-12 px-10"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </FieldGroup>
    </form>
  )
}
