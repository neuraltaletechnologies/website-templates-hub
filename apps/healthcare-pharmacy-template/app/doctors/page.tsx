"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Family Medicine",
    credentials: "MD, FAAFP",
    image: "/images/doctor-1.jpg",
    education: [
      "MD - Harvard Medical School",
      "Residency - Johns Hopkins Hospital",
      "Fellowship - Cleveland Clinic",
    ],
    experience: "15+ years",
    bio: "Dr. Mitchell is a board-certified family medicine physician with over 15 years of experience. She is passionate about providing comprehensive primary care to patients of all ages and building long-term relationships with families.",
    specialties: ["Preventive Care", "Chronic Disease Management", "Women&apos;s Health", "Geriatric Medicine"],
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    specialty: "Cardiology",
    credentials: "MD, FACC",
    image: "/images/doctor-2.jpg",
    education: [
      "MD - Yale School of Medicine",
      "Residency - Massachusetts General Hospital",
      "Fellowship - Mayo Clinic",
    ],
    experience: "20+ years",
    bio: "Dr. Wilson is a renowned cardiologist specializing in interventional cardiology and heart failure management. He has performed thousands of cardiac procedures and is committed to advancing cardiovascular care.",
    specialties: ["Interventional Cardiology", "Heart Failure", "Preventive Cardiology", "Cardiac Imaging"],
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    specialty: "Pediatrics",
    credentials: "MD, FAAP",
    image: "/images/doctor-3.jpg",
    education: [
      "MD - Stanford University",
      "Residency - Children&apos;s Hospital of Philadelphia",
      "Fellowship - Boston Children&apos;s Hospital",
    ],
    experience: "12+ years",
    bio: "Dr. Chen is a compassionate pediatrician dedicated to the health and well-being of children from infancy through adolescence. She creates a warm, child-friendly environment where young patients feel comfortable.",
    specialties: ["General Pediatrics", "Developmental Pediatrics", "Adolescent Medicine", "Immunizations"],
  },
  {
    id: 4,
    name: "Dr. Michael Park",
    specialty: "Dermatology",
    credentials: "MD, FAAD",
    image: "/images/doctor-4.jpg",
    education: [
      "MD - University of Pennsylvania",
      "Residency - NYU Langone Health",
      "Fellowship - Memorial Sloan Kettering",
    ],
    experience: "10+ years",
    bio: "Dr. Park is a board-certified dermatologist with expertise in both medical and cosmetic dermatology. He is known for his meticulous approach to skin cancer detection and his skill in advanced cosmetic procedures.",
    specialties: ["Skin Cancer", "Cosmetic Dermatology", "Acne Treatment", "Laser Therapy"],
  },
  {
    id: 5,
    name: "Dr. Linda Martinez",
    specialty: "Internal Medicine",
    credentials: "MD, FACP",
    image: "/images/doctor-5.jpg",
    education: [
      "MD - Columbia University",
      "Residency - NewYork-Presbyterian Hospital",
      "Fellowship - Mount Sinai Hospital",
    ],
    experience: "18+ years",
    bio: "Dr. Martinez is a highly experienced internist focused on preventive medicine and the management of complex medical conditions. She takes a holistic approach to patient care, addressing both physical and emotional well-being.",
    specialties: ["Internal Medicine", "Preventive Care", "Diabetes Management", "Hypertension"],
  },
  {
    id: 6,
    name: "Dr. David Thompson",
    specialty: "Dental Surgery",
    credentials: "DDS, FAGD",
    image: "/images/doctor-6.jpg",
    education: [
      "DDS - University of Michigan",
      "Residency - UCLA Medical Center",
      "Advanced Training - American Academy of Implant Dentistry",
    ],
    experience: "8+ years",
    bio: "Dr. Thompson is a skilled dental surgeon specializing in implant dentistry and oral surgery. He combines the latest techniques with a gentle approach to ensure patients receive comfortable, effective dental care.",
    specialties: ["Dental Implants", "Oral Surgery", "Cosmetic Dentistry", "Restorative Dentistry"],
  },
]

export default function DoctorsPage() {
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
              Our Team
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Meet Our Expert Doctors
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team of experienced healthcare professionals is dedicated to providing you with the highest quality medical care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground">{doctor.name}</h3>
                    <p className="text-primary font-medium">{doctor.specialty}</p>
                    <p className="text-sm text-muted-foreground mt-1">{doctor.credentials}</p>
                    
                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{doctor.experience}</span>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1">
                            View Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <div className="flex gap-6">
                              <div className="relative h-32 w-32 rounded-xl overflow-hidden shrink-0">
                                <Image
                                  src={doctor.image}
                                  alt={doctor.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <DialogTitle className="text-2xl">{doctor.name}</DialogTitle>
                                <p className="text-primary font-medium mt-1">{doctor.specialty}</p>
                                <p className="text-sm text-muted-foreground">{doctor.credentials}</p>
                                <p className="text-sm text-muted-foreground mt-2">{doctor.experience} of Experience</p>
                              </div>
                            </div>
                          </DialogHeader>
                          <div className="mt-6 space-y-6">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">About</h4>
                              <p className="text-muted-foreground">{doctor.bio}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-primary" />
                                Education & Training
                              </h4>
                              <ul className="space-y-2">
                                {doctor.education.map((edu) => (
                                  <li key={edu} className="text-muted-foreground text-sm flex items-start gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    {edu}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Award className="h-5 w-5 text-primary" />
                                Areas of Expertise
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {doctor.specialties.map((spec) => (
                                  <span
                                    key={spec}
                                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Button asChild className="w-full">
                              <Link href="/appointment">Book Appointment with {doctor.name.split(" ")[1]}</Link>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button asChild size="sm" className="flex-1">
                        <Link href="/appointment">Book Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Schedule Your Visit?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred doctor and book an appointment that fits your schedule.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/appointment">Book an Appointment</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
