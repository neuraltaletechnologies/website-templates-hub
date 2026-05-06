"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Truck, Plane, Ship, Package, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const quoteSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  serviceType: z.enum(["road", "air", "ocean", "express"]),
  originCity: z.string().min(2, "Please enter the origin city"),
  originCountry: z.string().min(2, "Please enter the origin country"),
  destinationCity: z.string().min(2, "Please enter the destination city"),
  destinationCountry: z.string().min(2, "Please enter the destination country"),
  cargoType: z.string().min(2, "Please describe your cargo"),
  weight: z.string().min(1, "Please enter the estimated weight"),
  dimensions: z.string().optional(),
  additionalInfo: z.string().optional(),
})

type QuoteFormData = z.infer<typeof quoteSchema>

const serviceTypes = [
  { value: "road", label: "Road Freight", icon: Truck },
  { value: "air", label: "Air Freight", icon: Plane },
  { value: "ocean", label: "Ocean Freight", icon: Ship },
  { value: "express", label: "Express Delivery", icon: Package },
]

export function QuoteForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      serviceType: "road",
    },
  })

  const selectedService = watch("serviceType")

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Quote request:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold font-heading text-foreground">
              Quote Request Submitted!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Thank you for your request. Our team will review your requirements 
              and send you a customized quote within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="mt-8"
              variant="outline"
            >
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Service Type Selection */}
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold font-heading text-foreground mb-4">
                Select Service Type
              </h3>
              <RadioGroup
                value={selectedService}
                onValueChange={(value) => setValue("serviceType", value as QuoteFormData["serviceType"])}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {serviceTypes.map((service) => (
                  <Label
                    key={service.value}
                    htmlFor={service.value}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedService === service.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <RadioGroupItem value={service.value} id={service.value} className="sr-only" />
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedService === service.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}>
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{service.label}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold font-heading text-foreground mb-4">
                Contact Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    {...register("firstName")}
                    className={errors.firstName ? "border-destructive" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    {...register("lastName")}
                    className={errors.lastName ? "border-destructive" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-destructive">{errors.lastName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="company">Company Name (Optional)</Label>
                  <Input id="company" {...register("company")} />
                </div>
              </div>
            </div>

            {/* Shipping Details */}
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold font-heading text-foreground mb-4">
                Shipping Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="originCity">Origin City *</Label>
                  <Input
                    id="originCity"
                    {...register("originCity")}
                    className={errors.originCity ? "border-destructive" : ""}
                  />
                  {errors.originCity && (
                    <p className="text-sm text-destructive">{errors.originCity.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originCountry">Origin Country *</Label>
                  <Input
                    id="originCountry"
                    {...register("originCountry")}
                    className={errors.originCountry ? "border-destructive" : ""}
                  />
                  {errors.originCountry && (
                    <p className="text-sm text-destructive">{errors.originCountry.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destinationCity">Destination City *</Label>
                  <Input
                    id="destinationCity"
                    {...register("destinationCity")}
                    className={errors.destinationCity ? "border-destructive" : ""}
                  />
                  {errors.destinationCity && (
                    <p className="text-sm text-destructive">{errors.destinationCity.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destinationCountry">Destination Country *</Label>
                  <Input
                    id="destinationCountry"
                    {...register("destinationCountry")}
                    className={errors.destinationCountry ? "border-destructive" : ""}
                  />
                  {errors.destinationCountry && (
                    <p className="text-sm text-destructive">{errors.destinationCountry.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Cargo Information */}
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold font-heading text-foreground mb-4">
                Cargo Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="cargoType">Cargo Type/Description *</Label>
                  <Input
                    id="cargoType"
                    placeholder="e.g., Electronics, Machinery, Textiles"
                    {...register("cargoType")}
                    className={errors.cargoType ? "border-destructive" : ""}
                  />
                  {errors.cargoType && (
                    <p className="text-sm text-destructive">{errors.cargoType.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Estimated Weight (kg) *</Label>
                  <Input
                    id="weight"
                    type="number"
                    {...register("weight")}
                    className={errors.weight ? "border-destructive" : ""}
                  />
                  {errors.weight && (
                    <p className="text-sm text-destructive">{errors.weight.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions (L x W x H cm)</Label>
                  <Input
                    id="dimensions"
                    placeholder="e.g., 100 x 50 x 75"
                    {...register("dimensions")}
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    rows={4}
                    placeholder="Any special requirements, handling instructions, or questions..."
                    {...register("additionalInfo")}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="px-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Quote Request
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
