"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"

const categories = ["All", "Fleet", "Warehouses", "Operations", "Team", "Global"]

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
    alt: "Fleet of trucks at distribution center",
    category: "Fleet",
    title: "Truck Fleet",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    alt: "Modern warehouse interior",
    category: "Warehouses",
    title: "Distribution Center",
  },
  {
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop",
    alt: "Warehouse operations with forklifts",
    category: "Operations",
    title: "Warehouse Operations",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    alt: "Team meeting in office",
    category: "Team",
    title: "Planning Session",
  },
  {
    src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop",
    alt: "Container ship at port",
    category: "Global",
    title: "Ocean Freight",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    alt: "Cargo aircraft loading",
    category: "Fleet",
    title: "Air Cargo",
  },
  {
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    alt: "Warehouse shelving system",
    category: "Warehouses",
    title: "Storage Facility",
  },
  {
    src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
    alt: "Package scanning and sorting",
    category: "Operations",
    title: "Package Processing",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    alt: "Operations team collaboration",
    category: "Team",
    title: "Team Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&h=600&fit=crop",
    alt: "Port with containers",
    category: "Global",
    title: "International Port",
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop",
    alt: "Delivery van on route",
    category: "Fleet",
    title: "Last Mile Delivery",
  },
  {
    src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
    alt: "Automated warehouse system",
    category: "Warehouses",
    title: "Automated Systems",
  },
]

export function GalleryGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/90 flex items-center justify-center">
                      <ZoomIn className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-primary-foreground font-medium">{image.title}</p>
                    <p className="text-primary-foreground/70 text-sm">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <X className="h-6 w-6 text-primary-foreground" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xl font-medium text-primary-foreground">{selectedImage.title}</p>
                <p className="text-primary-foreground/70">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
