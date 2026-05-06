"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const fleetCategories = [
  {
    id: "trucks",
    name: "Trucks & Trailers",
    vehicles: [
      {
        name: "Semi-Truck Fleet",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
        specs: ["Capacity: 44,000 lbs", "GPS Tracking", "Climate Control Available"],
        description: "Our long-haul semi-trucks handle cross-country shipments with reliability and efficiency.",
      },
      {
        name: "Box Trucks",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&h=400&fit=crop",
        specs: ["Capacity: 10,000 lbs", "Liftgate Equipped", "Urban Delivery Optimized"],
        description: "Perfect for regional deliveries and last-mile logistics in urban areas.",
      },
      {
        name: "Refrigerated Trailers",
        image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop",
        specs: ["Temperature: -20°F to 70°F", "Real-time Monitoring", "HACCP Compliant"],
        description: "Temperature-controlled transport for perishables and pharmaceuticals.",
      },
    ],
  },
  {
    id: "air",
    name: "Air Cargo",
    vehicles: [
      {
        name: "Boeing 747 Freighter",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
        specs: ["Capacity: 120 tons", "Intercontinental Range", "Heavy Cargo Capable"],
        description: "Our partner fleet of 747 freighters handles major international cargo routes.",
      },
      {
        name: "Boeing 737 Cargo",
        image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&h=400&fit=crop",
        specs: ["Capacity: 20 tons", "Regional Routes", "Quick Turnaround"],
        description: "Ideal for express regional air freight with fast loading capabilities.",
      },
      {
        name: "Chartered Aircraft",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&h=400&fit=crop",
        specs: ["On-Demand", "Any Size Cargo", "Direct Routes"],
        description: "Custom charter solutions for urgent or oversized shipments.",
      },
    ],
  },
  {
    id: "ocean",
    name: "Ocean Vessels",
    vehicles: [
      {
        name: "Container Ships",
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop",
        specs: ["Capacity: 20,000+ TEU", "Major Trade Routes", "FCL & LCL"],
        description: "Partnering with major shipping lines for global container transport.",
      },
      {
        name: "Bulk Carriers",
        image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600&h=400&fit=crop",
        specs: ["Dry Bulk Cargo", "Raw Materials", "High Volume"],
        description: "Cost-effective transport for bulk commodities and raw materials.",
      },
      {
        name: "Reefer Vessels",
        image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&h=400&fit=crop",
        specs: ["Temperature Controlled", "Perishables", "Global Coverage"],
        description: "Refrigerated vessels for international perishable goods transport.",
      },
    ],
  },
]

export function FleetShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("trucks")

  return (
    <section className="py-24 bg-muted/50" ref={ref}>
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
              Fleet Showcase
            </span>
            <div className="h-px w-12 bg-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground text-balance"
          >
            Explore Our Vehicles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          >
            From trucks to aircraft to ocean vessels, our diverse fleet covers 
            every mode of transportation.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              {fleetCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {fleetCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.vehicles.map((vehicle, index) => (
                    <motion.div
                      key={vehicle.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative aspect-[3/2]">
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold font-heading text-foreground">
                          {vehicle.name}
                        </h3>
                        <p className="mt-2 text-muted-foreground text-sm text-pretty">
                          {vehicle.description}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {vehicle.specs.map((spec) => (
                            <li key={spec} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                              <span className="text-foreground">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
