"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(555) 123-4567", "(555) 123-4568"],
    action: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@medicare.com", "support@medicare.com"],
    action: "mailto:contact@medicare.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Healthcare Avenue", "Medical District, MD 12345"],
    action: "https://maps.google.com",
  },
]

const workingHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
  { day: "Holidays", hours: "Emergency Only" },
]

const services = [
  "General Consultation",
  "Pediatrics",
  "Dental Care",
  "Diagnostics",
  "Cardiology",
  "Dermatology",
  "Other",
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    console.log(data)
    alert("Thank you for your message! We will get back to you shortly.")
    reset()
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary mb-2 uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or need to schedule an appointment? We&apos;re here to help. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={info.action}
                  target={info.title === "Address" ? "_blank" : undefined}
                  rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                >
                  <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      {...register("phone")}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interest
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase().replace(" ", "-")}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    {...register("message", { required: "Message is required" })}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Map & Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-clinic.jpg"
                  alt="Clinic location"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
                  >
                    <MapPin className="inline-block mr-2 h-4 w-4" />
                    View on Google Maps
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Working Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {workingHours.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex justify-between items-center py-2 border-b border-border last:border-0"
                      >
                        <span className="text-foreground">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
