"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { Calendar, Clock, User, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"
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

interface AppointmentFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  notes: string
}

const steps = [
  { id: 1, name: "Select Service", icon: Calendar },
  { id: 2, name: "Choose Doctor", icon: User },
  { id: 3, name: "Pick Date & Time", icon: Clock },
  { id: 4, name: "Your Details", icon: CheckCircle2 },
]

const services = [
  { id: "general", name: "General Consultation", duration: "30 min", price: "$75" },
  { id: "pediatrics", name: "Pediatrics", duration: "30 min", price: "$85" },
  { id: "dental", name: "Dental Care", duration: "45 min", price: "$120" },
  { id: "diagnostics", name: "Diagnostics", duration: "60 min", price: "$150" },
  { id: "cardiology", name: "Cardiology", duration: "45 min", price: "$200" },
  { id: "dermatology", name: "Dermatology", duration: "30 min", price: "$95" },
]

const doctors = [
  { id: 1, name: "Dr. Sarah Mitchell", specialty: "Family Medicine", image: "/images/doctor-1.jpg", available: true },
  { id: 2, name: "Dr. James Wilson", specialty: "Cardiology", image: "/images/doctor-2.jpg", available: true },
  { id: 3, name: "Dr. Emily Chen", specialty: "Pediatrics", image: "/images/doctor-3.jpg", available: true },
  { id: 4, name: "Dr. Michael Park", specialty: "Dermatology", image: "/images/doctor-4.jpg", available: false },
  { id: 5, name: "Dr. Linda Martinez", specialty: "Internal Medicine", image: "/images/doctor-5.jpg", available: true },
  { id: 6, name: "Dr. David Thompson", specialty: "Dental Surgery", image: "/images/doctor-6.jpg", available: true },
]

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
]

export default function AppointmentPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<AppointmentFormData>()

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const onSubmit = (data: AppointmentFormData) => {
    console.log({ ...data, selectedService, selectedDoctor, selectedDate, selectedTime })
    setIsSubmitted(true)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedService !== null
      case 2: return selectedDoctor !== null
      case 3: return selectedDate !== "" && selectedTime !== null
      default: return true
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Appointment Confirmed!</h1>
          <p className="text-muted-foreground mb-8">
            Your appointment has been successfully scheduled. You will receive a confirmation email shortly with all the details.
          </p>
          <div className="bg-muted rounded-xl p-6 text-left mb-8">
            <h3 className="font-semibold text-foreground mb-4">Appointment Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service:</span>
                <span className="text-foreground font-medium">
                  {services.find(s => s.id === selectedService)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Doctor:</span>
                <span className="text-foreground font-medium">
                  {doctors.find(d => d.id === selectedDoctor)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="text-foreground font-medium">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span className="text-foreground font-medium">{selectedTime}</span>
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setCurrentStep(1)
              setSelectedService(null)
              setSelectedDoctor(null)
              setSelectedDate("")
              setSelectedTime(null)
            }}
          >
            Book Another Appointment
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary mb-2 uppercase tracking-wider">
              Book Online
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Schedule Your Appointment
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Book your appointment in just a few easy steps. Choose your service, doctor, and preferred time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center ${
                  index < steps.length - 1 ? "flex-1" : ""
                }`}
              >
                <div className="flex items-center w-full">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      currentStep >= step.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 rounded ${
                        currentStep > step.id ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`mt-2 text-xs font-medium hidden sm:block ${
                    currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">Select a Service</h2>
                <p className="text-muted-foreground mb-8">Choose the type of appointment you need.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all ${
                        selectedService === service.id
                          ? "ring-2 ring-primary border-primary"
                          : "hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {service.duration}
                          </span>
                          <span className="font-medium text-primary">{service.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Choose Doctor */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">Choose Your Doctor</h2>
                <p className="text-muted-foreground mb-8">Select a healthcare provider for your appointment.</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {doctors.map((doctor) => (
                    <Card
                      key={doctor.id}
                      className={`cursor-pointer transition-all ${
                        !doctor.available ? "opacity-50 cursor-not-allowed" : ""
                      } ${
                        selectedDoctor === doctor.id
                          ? "ring-2 ring-primary border-primary"
                          : doctor.available ? "hover:border-primary/50" : ""
                      }`}
                      onClick={() => doctor.available && setSelectedDoctor(doctor.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="relative h-16 w-16 rounded-full overflow-hidden shrink-0">
                            <Image
                              src={doctor.image}
                              alt={doctor.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                            <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                            <span
                              className={`text-xs font-medium ${
                                doctor.available ? "text-green-600" : "text-red-500"
                              }`}
                            >
                              {doctor.available ? "Available" : "Unavailable"}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Pick Date & Time */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">Select Date & Time</h2>
                <p className="text-muted-foreground mb-8">Choose your preferred appointment date and time.</p>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Select Date
                    </label>
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="text-sm"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Your Details */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">Your Information</h2>
                <p className="text-muted-foreground mb-8">Please provide your details to complete the booking.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        placeholder="John"
                        {...register("firstName", { required: "First name is required" })}
                        className={errors.firstName ? "border-destructive" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        placeholder="Doe"
                        {...register("lastName", { required: "Last name is required" })}
                        className={errors.lastName ? "border-destructive" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
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
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        {...register("phone", { required: "Phone number is required" })}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Date of Birth
                    </label>
                    <Input
                      type="date"
                      {...register("dateOfBirth")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Notes (Optional)
                    </label>
                    <Textarea
                      rows={3}
                      placeholder="Any specific concerns or information you'd like us to know..."
                      {...register("notes")}
                    />
                  </div>

                  {/* Appointment Summary */}
                  <Card className="bg-muted/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">Appointment Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Service:</span>
                          <span className="text-foreground font-medium">
                            {services.find(s => s.id === selectedService)?.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Doctor:</span>
                          <span className="text-foreground font-medium">
                            {doctors.find(d => d.id === selectedDoctor)?.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="text-foreground font-medium">{selectedDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time:</span>
                          <span className="text-foreground font-medium">{selectedTime}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-border mt-2">
                          <span className="text-muted-foreground">Price:</span>
                          <span className="text-primary font-semibold">
                            {services.find(s => s.id === selectedService)?.price}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button type="submit" size="lg" className="w-full">
                    Confirm Appointment
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className="flex justify-between mt-12">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
