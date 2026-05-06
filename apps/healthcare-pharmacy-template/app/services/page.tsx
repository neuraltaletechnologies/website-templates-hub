"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const services = [
  {
    id: "general",
    title: "General Consultation",
    description: "Comprehensive health assessments and personalized care plans for patients of all ages.",
    image: "/images/service-general.jpg",
    fullDescription: "Our general consultation services provide thorough health evaluations, preventive care, and management of common illnesses. Our experienced physicians take the time to understand your health concerns and create personalized treatment plans.",
    features: [
      "Annual physical examinations",
      "Preventive health screenings",
      "Chronic disease management",
      "Health risk assessments",
      "Immunizations and vaccinations",
      "Referrals to specialists when needed",
    ],
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents in a child-friendly environment.",
    image: "/images/service-pediatrics.jpg",
    fullDescription: "Our pediatric department offers comprehensive healthcare services for children from birth through adolescence. We create a warm, welcoming environment where children feel comfortable and parents feel confident in the care their children receive.",
    features: [
      "Well-child visits and developmental screenings",
      "Childhood immunizations",
      "Treatment of acute illnesses",
      "Management of chronic conditions",
      "Behavioral and mental health support",
      "Nutrition and growth monitoring",
    ],
  },
  {
    id: "dental",
    title: "Dental Care",
    description: "Complete dental services from routine cleanings to advanced cosmetic procedures.",
    image: "/images/service-dental.jpg",
    fullDescription: "Our dental department provides comprehensive oral healthcare services using the latest technology and techniques. From routine cleanings to complex procedures, we ensure your dental health is in expert hands.",
    features: [
      "Preventive dental care and cleanings",
      "Restorative dentistry",
      "Cosmetic dentistry",
      "Orthodontic consultations",
      "Oral surgery",
      "Emergency dental care",
    ],
  },
  {
    id: "diagnostics",
    title: "Diagnostics",
    description: "State-of-the-art diagnostic imaging and laboratory services for accurate results.",
    image: "/images/service-diagnostics.jpg",
    fullDescription: "Our diagnostic center is equipped with advanced imaging technology and a full-service laboratory. We provide accurate, timely results to support effective diagnosis and treatment planning.",
    features: [
      "Digital X-ray and fluoroscopy",
      "CT and MRI scanning",
      "Ultrasound imaging",
      "Laboratory blood tests",
      "Pathology services",
      "Cardiac diagnostics",
    ],
  },
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Expert cardiovascular care with advanced monitoring and treatment options.",
    image: "/images/service-cardiology.jpg",
    fullDescription: "Our cardiology department offers comprehensive heart care services, from preventive screenings to advanced treatments. Our team of cardiologists uses state-of-the-art technology to diagnose and treat cardiovascular conditions.",
    features: [
      "Cardiac risk assessment",
      "ECG and stress testing",
      "Echocardiography",
      "Holter monitoring",
      "Heart failure management",
      "Cardiovascular rehabilitation",
    ],
  },
  {
    id: "dermatology",
    title: "Dermatology",
    description: "Comprehensive skin care treatments for medical and cosmetic dermatology needs.",
    image: "/images/service-dermatology.jpg",
    fullDescription: "Our dermatology department provides expert care for all skin conditions, from common issues to complex disorders. We also offer cosmetic dermatology services to help you look and feel your best.",
    features: [
      "Skin cancer screening",
      "Acne treatment",
      "Eczema and psoriasis care",
      "Mole and lesion removal",
      "Anti-aging treatments",
      "Laser skin treatments",
    ],
  },
]

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Comprehensive Healthcare Solutions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of medical services to meet all your healthcare needs under one roof, delivered by experienced healthcare professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="/appointment">Book Appointment</Link>
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{service.title}</DialogTitle>
                          <DialogDescription className="text-base mt-4">
                            {service.fullDescription}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-6">
                          <h4 className="font-semibold text-foreground mb-4">What We Offer:</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6">
                          <Button asChild className="w-full">
                            <Link href="/appointment">Schedule an Appointment</Link>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Our team is here to help. Schedule a general consultation and let our experienced physicians guide you to the right care.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/appointment">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
