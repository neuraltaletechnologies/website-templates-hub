"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import {
  Search,
  Package,
  Truck,
  Plane,
  MapPin,
  CheckCircle2,
  Clock,
  Calendar,
  ArrowRight,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock tracking data
const mockShipments: Record<string, {
  id: string
  status: "in_transit" | "out_for_delivery" | "delivered" | "processing"
  origin: string
  destination: string
  estimatedDelivery: string
  weight: string
  service: string
  events: Array<{
    date: string
    time: string
    location: string
    status: string
    description: string
  }>
}> = {
  "TGL-2024-001234": {
    id: "TGL-2024-001234",
    status: "in_transit",
    origin: "Los Angeles, CA",
    destination: "New York, NY",
    estimatedDelivery: "April 20, 2026",
    weight: "150 lbs",
    service: "Road Freight - Express",
    events: [
      { date: "Apr 17", time: "08:30 AM", location: "Denver, CO", status: "In Transit", description: "Shipment departed distribution center" },
      { date: "Apr 16", time: "11:45 PM", location: "Denver, CO", status: "Arrived", description: "Shipment arrived at distribution center" },
      { date: "Apr 16", time: "06:00 AM", location: "Las Vegas, NV", status: "In Transit", description: "Shipment departed sorting facility" },
      { date: "Apr 15", time: "09:15 PM", location: "Las Vegas, NV", status: "Arrived", description: "Shipment arrived at sorting facility" },
      { date: "Apr 15", time: "02:30 PM", location: "Los Angeles, CA", status: "Picked Up", description: "Shipment picked up from sender" },
    ],
  },
  "TGL-2024-005678": {
    id: "TGL-2024-005678",
    status: "out_for_delivery",
    origin: "Chicago, IL",
    destination: "Miami, FL",
    estimatedDelivery: "April 17, 2026",
    weight: "75 lbs",
    service: "Air Freight - Priority",
    events: [
      { date: "Apr 17", time: "09:00 AM", location: "Miami, FL", status: "Out for Delivery", description: "With delivery driver" },
      { date: "Apr 17", time: "06:30 AM", location: "Miami, FL", status: "At Local Facility", description: "Shipment at local delivery facility" },
      { date: "Apr 16", time: "10:00 PM", location: "Miami, FL", status: "Arrived", description: "Arrived at destination airport" },
      { date: "Apr 16", time: "04:00 PM", location: "Chicago, IL", status: "Departed", description: "Flight departed" },
      { date: "Apr 16", time: "01:00 PM", location: "Chicago, IL", status: "Picked Up", description: "Shipment picked up" },
    ],
  },
  "TGL-2024-009012": {
    id: "TGL-2024-009012",
    status: "delivered",
    origin: "Seattle, WA",
    destination: "Houston, TX",
    estimatedDelivery: "April 15, 2026",
    weight: "200 lbs",
    service: "Road Freight - Standard",
    events: [
      { date: "Apr 15", time: "02:45 PM", location: "Houston, TX", status: "Delivered", description: "Package delivered. Signed by: J. Smith" },
      { date: "Apr 15", time: "08:30 AM", location: "Houston, TX", status: "Out for Delivery", description: "With delivery driver" },
      { date: "Apr 14", time: "09:00 PM", location: "Houston, TX", status: "Arrived", description: "Arrived at local facility" },
      { date: "Apr 13", time: "03:00 PM", location: "Dallas, TX", status: "In Transit", description: "Departed sorting center" },
      { date: "Apr 12", time: "10:00 AM", location: "Seattle, WA", status: "Picked Up", description: "Shipment picked up" },
    ],
  },
}

const statusConfig = {
  processing: { label: "Processing", color: "bg-amber-500", icon: Package },
  in_transit: { label: "In Transit", color: "bg-blue-500", icon: Truck },
  out_for_delivery: { label: "Out for Delivery", color: "bg-orange-500", icon: Truck },
  delivered: { label: "Delivered", color: "bg-emerald-500", icon: CheckCircle2 },
}

export function TrackingInterface() {
  const searchParams = useSearchParams()
  const [trackingNumber, setTrackingNumber] = useState("")
  const [shipment, setShipment] = useState<typeof mockShipments[string] | null>(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const id = searchParams.get("id")
    if (id) {
      setTrackingNumber(id)
      handleTrack(id)
    }
  }, [searchParams])

  const handleTrack = async (id?: string) => {
    const searchId = id || trackingNumber.trim().toUpperCase()
    if (!searchId) {
      setError("Please enter a tracking number")
      return
    }

    setIsLoading(true)
    setError("")
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    const found = mockShipments[searchId]
    if (found) {
      setShipment(found)
      setError("")
    } else {
      setShipment(null)
      setError("Tracking number not found. Please check and try again.")
    }
    setIsLoading(false)
  }

  const StatusIcon = shipment ? statusConfig[shipment.status].icon : Package

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
            <h2 className="text-xl font-semibold font-heading text-foreground mb-4">
              Enter Tracking Number
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="e.g., TGL-2024-001234"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                  className="pl-10 h-12"
                />
              </div>
              <Button
                onClick={() => handleTrack()}
                disabled={isLoading}
                className="h-12 px-8 bg-primary hover:bg-primary/90"
              >
                {isLoading ? "Tracking..." : "Track"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Try: TGL-2024-001234, TGL-2024-005678, or TGL-2024-009012
            </p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
              <p className="text-destructive">{error}</p>
            </div>
          </motion.div>
        )}

        {/* Tracking Results */}
        {shipment && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Status Card */}
            <div className="p-6 bg-card rounded-2xl border border-border shadow-sm mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl ${statusConfig[shipment.status].color} flex items-center justify-center`}>
                    <StatusIcon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="text-xl font-semibold text-foreground">
                      {statusConfig[shipment.status].label}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                    <p className="font-semibold text-foreground">{shipment.estimatedDelivery}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-card rounded-2xl border border-border">
                <h3 className="text-lg font-semibold font-heading text-foreground mb-4">
                  Shipment Details
                </h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Tracking Number</dt>
                    <dd className="font-medium text-foreground">{shipment.id}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Service</dt>
                    <dd className="font-medium text-foreground">{shipment.service}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Weight</dt>
                    <dd className="font-medium text-foreground">{shipment.weight}</dd>
                  </div>
                </dl>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border">
                <h3 className="text-lg font-semibold font-heading text-foreground mb-4">
                  Route Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Origin</p>
                      <p className="font-medium text-foreground">{shipment.origin}</p>
                    </div>
                  </div>
                  <div className="ml-4 border-l-2 border-dashed border-border h-6" />
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Destination</p>
                      <p className="font-medium text-foreground">{shipment.destination}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold font-heading text-foreground mb-6">
                Tracking History
              </h3>
              <div className="space-y-0">
                {shipment.events.map((event, index) => (
                  <div key={index} className="relative flex gap-4 pb-6 last:pb-0">
                    {/* Timeline line */}
                    {index < shipment.events.length - 1 && (
                      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border" />
                    )}
                    
                    {/* Timeline dot */}
                    <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      index === 0 ? "bg-primary" : "bg-muted"
                    }`}>
                      {index === 0 ? (
                        <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                      )}
                    </div>
                    
                    {/* Event content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <p className="font-medium text-foreground">{event.status}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
