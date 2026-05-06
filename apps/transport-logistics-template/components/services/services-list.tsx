"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import {
  Truck,
  Plane,
  Ship,
  Warehouse,
  Package,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "road",
    icon: Truck,
    title: "Road Freight",
    subtitle: "Land Transportation Solutions",
    description: "Our comprehensive road freight services cover full truckload (FTL) and less-than-truckload (LTL) shipments across North America and Europe. With real-time GPS tracking and a fleet of modern vehicles, we ensure your cargo reaches its destination safely and on time.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop",
    features: [
      "Full Truckload (FTL) shipping",
      "Less-than-Truckload (LTL) options",
      "Temperature-controlled transport",
      "Real-time GPS tracking",
      "Cross-border solutions",
      "Dedicated fleet options",
    ],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "air",
    icon: Plane,
    title: "Air Freight",
    subtitle: "Express Air Cargo Services",
    description: "When time is critical, our air freight services deliver. We partner with major airlines worldwide to provide expedited cargo solutions, from same-day courier services to consolidated air shipments. Our customs expertise ensures smooth international transfers.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop",
    features: [
      "Priority express shipping",
      "Charter flight options",
      "Dangerous goods handling",
      "Temperature-sensitive cargo",
      "Door-to-door delivery",
      "Real-time flight tracking",
    ],
    color: "bg-sky-500/10 text-sky-600",
  },
  {
    id: "ocean",
    icon: Ship,
    title: "Ocean Freight",
    subtitle: "Global Sea Shipping",
    description: "For bulk shipments and cost-effective international transport, our ocean freight solutions connect you to ports worldwide. We offer both full container load (FCL) and less-than-container load (LCL) options with comprehensive documentation support.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=500&fit=crop",
    features: [
      "Full Container Load (FCL)",
      "Less-than-Container Load (LCL)",
      "Reefer containers available",
      "Breakbulk and project cargo",
      "Port-to-port and door-to-door",
      "Vessel tracking technology",
    ],
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    id: "warehouse",
    icon: Warehouse,
    title: "Warehousing & Distribution",
    subtitle: "Storage & Fulfillment Solutions",
    description: "Our state-of-the-art warehouses provide secure storage, inventory management, and distribution services. From pick-and-pack to kitting and assembly, we handle your logistics so you can focus on growing your business.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    features: [
      "Climate-controlled storage",
      "Inventory management systems",
      "Pick, pack, and ship services",
      "Kitting and assembly",
      "Cross-docking capabilities",
      "E-commerce fulfillment",
    ],
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    id: "express",
    icon: Package,
    title: "Express Delivery",
    subtitle: "Urgent Shipment Solutions",
    description: "When every minute counts, our express delivery service rises to the challenge. Same-day and next-day options, dedicated courier network, and last-mile excellence ensure your urgent shipments arrive when needed.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=500&fit=crop",
    features: [
      "Same-day delivery available",
      "Next-day guaranteed service",
      "Dedicated courier network",
      "Last-mile optimization",
      "Real-time notifications",
      "Proof of delivery (POD)",
    ],
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    id: "customs",
    icon: FileText,
    title: "Customs Clearance",
    subtitle: "Import & Export Services",
    description: "Navigate complex international trade regulations with our expert customs brokerage services. We handle all documentation, tariff classification, and compliance requirements to ensure your shipments clear customs efficiently.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    features: [
      "Import/export documentation",
      "Tariff classification",
      "Duty optimization strategies",
      "Regulatory compliance",
      "Trade consulting",
      "AEO and C-TPAT certified",
    ],
    color: "bg-emerald-500/10 text-emerald-600",
  },
]

export function ServicesList() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ 
  service, 
  index 
}: { 
  service: typeof services[0]
  index: number 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isReversed = index % 2 === 1

  return (
    <div
      id={service.id}
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={isReversed ? "lg:order-2" : ""}
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={isReversed ? "lg:order-1" : ""}
      >
        <div className={`inline-flex p-3 rounded-xl ${service.color} mb-4`}>
          <service.icon className="h-6 w-6" />
        </div>

        <p className="text-secondary font-medium text-sm uppercase tracking-wider mb-2">
          {service.subtitle}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance">
          {service.title}
        </h2>

        <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
          {service.description}
        </p>

        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/quote">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
