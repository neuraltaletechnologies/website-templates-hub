"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Target, Eye, Heart, Shield, Award, Users } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { DoctorCard } from "@/components/doctor-card"

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Chief Medical Officer",
    credentials: "MD, FAAFP",
    image: "/images/doctor-1.jpg",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Head of Cardiology",
    credentials: "MD, FACC",
    image: "/images/doctor-2.jpg",
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Head of Pediatrics",
    credentials: "MD, FAAP",
    image: "/images/doctor-3.jpg",
  },
  {
    name: "Dr. Michael Park",
    specialty: "Head of Dermatology",
    credentials: "MD, FAAD",
    image: "/images/doctor-4.jpg",
  },
]

const facilities = [
  {
    title: "Reception & Waiting Area",
    image: "/images/hero-clinic.jpg",
  },
  {
    title: "Patient Rooms",
    image: "/images/facility-2.jpg",
  },
  {
    title: "Diagnostic Laboratory",
    image: "/images/facility-3.jpg",
  },
]

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient with empathy, respect, and genuine care.",
  },
  {
    icon: Shield,
    title: "Excellence",
    description: "We maintain the highest standards in medical care and patient safety.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace advanced technologies to provide cutting-edge treatments.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work together as a team to deliver comprehensive patient care.",
  },
]

const certifications = [
  { name: "Joint Commission International", logo: "/images/cert-jci.svg" },
  { name: "ISO 9001:2015", logo: "/images/cert-iso.svg" },
  { name: "NABH Accredited", logo: "/images/cert-nabh.svg" },
  { name: "Green Hospital", logo: "/images/cert-green.svg" },
]

const timeline = [
  { year: "1998", title: "Foundation", description: "MediCare Clinic was established with a vision to provide accessible healthcare." },
  { year: "2005", title: "Expansion", description: "Opened our second location and added specialized departments." },
  { year: "2012", title: "Digital Transformation", description: "Introduced electronic health records and telemedicine services." },
  { year: "2020", title: "Community Impact", description: "Served over 100,000 patients and expanded community outreach programs." },
  { year: "2024", title: "New Horizons", description: "Launched state-of-the-art diagnostic center and research facility." },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Medical team working together"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About MediCare Clinic
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              For over 25 years, we have been committed to providing exceptional healthcare services to our community with compassion and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 rounded-2xl p-8 lg:p-12"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, high-quality healthcare services that improve the health and well-being of individuals and communities. We are committed to treating every patient with compassion, dignity, and respect while maintaining the highest standards of medical excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-secondary/50 rounded-2xl p-8 lg:p-12"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary mb-6">
                <Eye className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading healthcare provider recognized for clinical excellence, innovation, and patient-centered care. We envision a healthier community where everyone has access to comprehensive medical services that address their unique health needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Our Values"
            title="What We Stand For"
            description="Our core values guide every interaction and decision we make in serving our patients."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Leadership"
            title="Meet Our Leadership Team"
            description="Our experienced leaders are dedicated to maintaining the highest standards of patient care."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <DoctorCard key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Our Journey"
            title="Milestones Through the Years"
            description="A look at our growth and achievements over the past two decades."
          />
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-1" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Our Facilities"
            title="State-of-the-Art Healthcare Environment"
            description="Our modern facilities are designed to provide comfort and the best possible care experience."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">{facility.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-foreground">Certifications & Accreditations</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Recognized for excellence in healthcare quality and safety
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2"
              >
                <div className="h-16 w-16 bg-background rounded-lg border border-border flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground text-center max-w-[100px]">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
