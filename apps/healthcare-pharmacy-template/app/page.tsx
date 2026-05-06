"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Award, Clock, Heart, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { ServiceCard } from "@/components/service-card"
import { DoctorCard } from "@/components/doctor-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { StatCard } from "@/components/stat-card"

const services = [
  {
    title: "General Consultation",
    description: "Comprehensive health assessments and personalized care plans for patients of all ages.",
    image: "/images/service-general.jpg",
    href: "/services#general",
  },
  {
    title: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents in a child-friendly environment.",
    image: "/images/service-pediatrics.jpg",
    href: "/services#pediatrics",
  },
  {
    title: "Dental Care",
    description: "Complete dental services from routine cleanings to advanced cosmetic procedures.",
    image: "/images/service-dental.jpg",
    href: "/services#dental",
  },
  {
    title: "Diagnostics",
    description: "State-of-the-art diagnostic imaging and laboratory services for accurate results.",
    image: "/images/service-diagnostics.jpg",
    href: "/services#diagnostics",
  },
  {
    title: "Cardiology",
    description: "Expert cardiovascular care with advanced monitoring and treatment options.",
    image: "/images/service-cardiology.jpg",
    href: "/services#cardiology",
  },
  {
    title: "Dermatology",
    description: "Comprehensive skin care treatments for medical and cosmetic dermatology needs.",
    image: "/images/service-dermatology.jpg",
    href: "/services#dermatology",
  },
]

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Family Medicine",
    credentials: "MD, FAAFP",
    image: "/images/doctor-1.jpg",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Cardiology",
    credentials: "MD, FACC",
    image: "/images/doctor-2.jpg",
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Pediatrics",
    credentials: "MD, FAAP",
    image: "/images/doctor-3.jpg",
  },
  {
    name: "Dr. Michael Park",
    specialty: "Dermatology",
    credentials: "MD, FAAD",
    image: "/images/doctor-4.jpg",
  },
]

const testimonials = [
  {
    name: "Jennifer Adams",
    role: "Patient since 2019",
    image: "/images/patient-1.jpg",
    quote: "The care I received at MediCare was exceptional. The doctors took time to listen and explain everything thoroughly. I felt like a priority, not just another patient.",
    rating: 5,
  },
  {
    name: "Robert Thompson",
    role: "Patient since 2020",
    image: "/images/patient-2.jpg",
    quote: "From the moment I walked in, I knew I was in good hands. The staff is professional, friendly, and the facilities are top-notch. Highly recommend!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Patient since 2021",
    image: "/images/patient-3.jpg",
    quote: "Finding a healthcare provider you can trust is invaluable. MediCare has become my family&apos;s go-to clinic for all our medical needs.",
    rating: 5,
  },
]

const stats = [
  { value: "15K+", label: "Happy Patients", icon: Users },
  { value: "20+", label: "Expert Doctors", icon: Award },
  { value: "25+", label: "Years Experience", icon: Clock },
  { value: "98%", label: "Patient Satisfaction", icon: Heart },
]

const whyChooseUs = [
  "Board-certified physicians with extensive experience",
  "State-of-the-art medical facilities and equipment",
  "Personalized treatment plans for every patient",
  "Convenient appointment scheduling options",
  "Comprehensive follow-up care programs",
  "Insurance-friendly with flexible payment options",
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-clinic.jpg"
            alt="Modern healthcare clinic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              Your Health, Our Priority
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Exceptional Healthcare for Your Family
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed text-pretty">
              At MediCare Clinic, we combine advanced medical expertise with compassionate care to provide you and your loved ones with the best healthcare experience.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-primary-foreground/70 mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Our Services"
            title="Comprehensive Healthcare Solutions"
            description="We offer a wide range of medical services to meet all your healthcare needs under one roof."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Medical team working together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm text-primary-foreground/80">Years of Excellence</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-medium text-primary mb-2 uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Quality Care You Can Trust
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We are committed to providing exceptional healthcare with a patient-first approach. Our team of experienced medical professionals ensures you receive the best care possible.
              </p>
              <ul className="mt-8 space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8" size="lg">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Our Team"
            title="Meet Our Expert Doctors"
            description="Our team of experienced healthcare professionals is dedicated to providing you with the highest quality medical care."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor, index) => (
              <DoctorCard key={doctor.name} {...doctor} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/doctors">
                View All Doctors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Testimonials"
            title="What Our Patients Say"
            description="Hear from our patients about their experiences with our healthcare services."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
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
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Ready to Take Control of Your Health?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Schedule an appointment today and experience the MediCare difference. Our team is ready to provide you with exceptional care.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-foreground">Stay Updated</h3>
            <p className="mt-2 text-muted-foreground max-w-md">
              Subscribe to our newsletter for health tips, news, and updates.
            </p>
            <form className="mt-6 flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
