"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All" },
  { id: "facilities", name: "Facilities" },
  { id: "equipment", name: "Equipment" },
  { id: "team", name: "Team" },
  { id: "patient-care", name: "Patient Care" },
  { id: "events", name: "Events" },
]

const galleryImages = [
  { id: 1, src: "/images/hero-clinic.jpg", title: "Reception Area", category: "facilities" },
  { id: 2, src: "/images/facility-1.jpg", title: "Hospital Corridor", category: "facilities" },
  { id: 3, src: "/images/facility-2.jpg", title: "Patient Room", category: "facilities" },
  { id: 4, src: "/images/facility-3.jpg", title: "Laboratory", category: "equipment" },
  { id: 5, src: "/images/gallery-1.jpg", title: "Waiting Area", category: "facilities" },
  { id: 6, src: "/images/gallery-2.jpg", title: "Team Meeting", category: "team" },
  { id: 7, src: "/images/gallery-3.jpg", title: "Diagnostic Equipment", category: "equipment" },
  { id: 8, src: "/images/gallery-4.jpg", title: "Patient Care", category: "patient-care" },
  { id: 9, src: "/images/gallery-5.jpg", title: "Community Health Fair", category: "events" },
  { id: 10, src: "/images/gallery-6.jpg", title: "Pharmacy", category: "facilities" },
  { id: 11, src: "/images/about-hero.jpg", title: "Medical Team", category: "team" },
  { id: 12, src: "/images/service-general.jpg", title: "Consultation", category: "patient-care" },
  { id: 13, src: "/images/service-diagnostics.jpg", title: "Diagnostics Center", category: "equipment" },
  { id: 14, src: "/images/service-dental.jpg", title: "Dental Care", category: "patient-care" },
  { id: 15, src: "/images/service-cardiology.jpg", title: "Cardiology", category: "equipment" },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    )
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
              Gallery
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Explore Our Facilities
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a visual tour of our state-of-the-art healthcare facilities, meet our team, and see how we deliver exceptional patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-[73px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            layout
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative cursor-pointer overflow-hidden rounded-xl ${
                    index % 5 === 0 ? "sm:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                    <p className="text-sm text-white/70 capitalize">{image.category.replace("-", " ")}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-video mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[currentImageIndex].src}
                alt={filteredImages[currentImageIndex].title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {filteredImages[currentImageIndex].title}
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  {currentImageIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
