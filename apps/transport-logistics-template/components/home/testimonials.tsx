"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Supply Chain Director",
    company: "TechCorp Industries",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "TransGlobal has transformed our supply chain operations. Their real-time tracking and proactive communication have reduced our logistics headaches by 80%. Exceptional service!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Global Retail Co.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "We switched to TransGlobal for our international shipments and the difference is remarkable. On-time delivery rates improved to 99%, and their customs expertise saved us thousands.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Logistics Coordinator",
    company: "Fresh Foods Inc.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Their temperature-controlled shipping is top-notch. Our perishables arrive fresh every time, and their team goes above and beyond to ensure quality.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO",
    company: "AutoParts Direct",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Outstanding partner for our automotive parts distribution. Their warehouse management and JIT delivery capabilities are exactly what we needed to scale our business.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Import Manager",
    company: "Fashion Forward Ltd.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content: "From ocean freight to last-mile delivery, TransGlobal handles everything seamlessly. Their digital platform makes tracking our fashion inventory incredibly easy.",
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-12 bg-secondary" />
            <span className="text-secondary font-medium tracking-wider uppercase text-sm">
              Testimonials
            </span>
            <div className="h-px w-12 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          >
            Join thousands of satisfied businesses who trust TransGlobal 
            for their logistics needs.
          </motion.p>
        </div>

        {/* Testimonials Carousel - Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed text-pretty">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-6 bg-card rounded-2xl border border-border"
          >
            <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
            
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
            </div>

            {/* Content */}
            <p className="text-foreground leading-relaxed min-h-[120px] text-pretty">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </p>

            {/* Author */}
            <div className="mt-6 flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
