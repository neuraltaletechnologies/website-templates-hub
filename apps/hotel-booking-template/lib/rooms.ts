export type Room = {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  price: number
  originalPrice?: number
  size: number
  capacity: number
  beds: string
  view: string
  image: string
  gallery: string[]
  amenities: string[]
  availability: "available" | "limited" | "sold-out"
  rating: number
  reviews: number
}

export const rooms: Room[] = [
  {
    slug: "ocean-view-suite",
    name: "Ocean View Suite",
    category: "Premium Suite",
    tagline: "Where horizon meets heritage",
    description:
      "Wake to the quiet rhythm of the Indian Ocean. Floor-to-ceiling windows frame the horizon, while a private terrace invites the salt breeze in. Handcrafted teak, crisp linen, and subtle brass detailing define this signature suite.",
    price: 680,
    originalPrice: 820,
    size: 72,
    capacity: 2,
    beds: "1 King Bed",
    view: "Ocean View",
    image: "/images/room-ocean-suite.jpg",
    gallery: [
      "/images/room-ocean-suite.jpg",
      "/images/beach.jpg",
      "/images/amenity-pool.jpg",
    ],
    amenities: ["Ocean Terrace", "Walk-in Closet", "Rainfall Shower", "Minibar", "WiFi", "Smart TV"],
    availability: "limited",
    rating: 4.9,
    reviews: 412,
  },
  {
    slug: "garden-villa",
    name: "Private Garden Villa",
    category: "Villa",
    tagline: "A secluded retreat in tropical gardens",
    description:
      "A standalone villa with a private plunge pool, outdoor rain shower, and lush gardens. Designed for those who crave privacy without compromise — every detail has been considered.",
    price: 1240,
    size: 140,
    capacity: 3,
    beds: "1 King + Daybed",
    view: "Garden / Plunge Pool",
    image: "/images/room-garden-villa.jpg",
    gallery: [
      "/images/room-garden-villa.jpg",
      "/images/amenity-spa.jpg",
      "/images/amenity-pool.jpg",
    ],
    amenities: ["Private Plunge Pool", "Outdoor Shower", "Butler Service", "Minibar", "WiFi", "Kitchenette"],
    availability: "available",
    rating: 5.0,
    reviews: 287,
  },
  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    category: "Signature Suite",
    tagline: "The pinnacle of coastal living",
    description:
      "Our most celebrated residence. Two bedrooms, a dedicated library, and a wraparound terrace overlooking the coast. Complimentary airport transfer and personal butler throughout your stay.",
    price: 2400,
    size: 220,
    capacity: 4,
    beds: "2 King Beds",
    view: "Panoramic Ocean",
    image: "/images/room-presidential.jpg",
    gallery: [
      "/images/room-presidential.jpg",
      "/images/lobby.jpg",
      "/images/exterior.jpg",
    ],
    amenities: ["Personal Butler", "Library", "Dining Room", "Private Terrace", "Airport Transfer", "Spa Credits"],
    availability: "limited",
    rating: 5.0,
    reviews: 98,
  },
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    category: "Deluxe",
    tagline: "Quiet luxury, effortlessly",
    description:
      "A beautifully appointed room with a generous reading nook, king bed, and marble bathroom. Perfect for couples or solo travelers seeking refined comfort.",
    price: 420,
    originalPrice: 520,
    size: 42,
    capacity: 2,
    beds: "1 King Bed",
    view: "Garden View",
    image: "/images/room-deluxe.jpg",
    gallery: [
      "/images/room-deluxe.jpg",
      "/images/lobby.jpg",
      "/images/amenity-spa.jpg",
    ],
    amenities: ["Reading Nook", "Marble Bath", "Minibar", "WiFi", "Smart TV", "Nespresso"],
    availability: "available",
    rating: 4.8,
    reviews: 624,
  },
  {
    slug: "honeymoon-suite",
    name: "Honeymoon Suite",
    category: "Romance",
    tagline: "The beginning of always",
    description:
      "Designed for two. A four-poster bed draped in linen, private balcony with ocean view, and curated romantic amenities — champagne, rose petals, and a couples spa credit.",
    price: 890,
    size: 85,
    capacity: 2,
    beds: "1 Four-Poster King",
    view: "Ocean View",
    image: "/images/room-honeymoon.jpg",
    gallery: [
      "/images/room-honeymoon.jpg",
      "/images/amenity-spa.jpg",
      "/images/beach.jpg",
    ],
    amenities: ["Champagne on Arrival", "Couples Spa", "Ocean Balcony", "Rose Petal Turndown", "Private Dinner"],
    availability: "available",
    rating: 4.9,
    reviews: 203,
  },
  {
    slug: "family-suite",
    name: "Family Suite",
    category: "Family",
    tagline: "Room for everyone you love",
    description:
      "Two bedrooms connected by a generous living area, kids' amenities, and access to our dedicated Kids Club. Designed for modern families who travel together, beautifully.",
    price: 780,
    size: 110,
    capacity: 5,
    beds: "2 Queen + Sofa",
    view: "Garden / Pool",
    image: "/images/room-family.jpg",
    gallery: [
      "/images/room-family.jpg",
      "/images/amenity-pool.jpg",
      "/images/lobby.jpg",
    ],
    amenities: ["2 Bedrooms", "Living Area", "Kids Club Access", "Connecting Doors", "Baby Cot", "WiFi"],
    availability: "available",
    rating: 4.8,
    reviews: 341,
  },
]

export function getRoom(slug: string) {
  return rooms.find((r) => r.slug === slug)
}
