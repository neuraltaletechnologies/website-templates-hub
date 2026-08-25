export type PropertyType = "House" | "Condo" | "Townhome" | "Villa" | "Land"
export type PropertyStatus = "For Sale" | "For Rent" | "Pending"

export interface Property {
  id: string
  slug: string
  title: string
  type: PropertyType
  status: PropertyStatus
  price: number
  priceUnit: "total" | "month"
  beds: number
  baths: number
  sqft: number
  lotSize?: string
  yearBuilt: number
  address: string
  city: string
  state: string
  zip: string
  lat: number
  lng: number
  images: string[]
  description: string
  features: string[]
  agentId: string
  featured: boolean
}

export const properties: Property[] = [
  {
    id: "prop-1",
    slug: "cedar-ridge-modern-farmhouse",
    title: "Cedar Ridge Modern Farmhouse",
    type: "House",
    status: "For Sale",
    price: 875000,
    priceUnit: "total",
    beds: 4,
    baths: 3,
    sqft: 3120,
    lotSize: "0.42 acres",
    yearBuilt: 2021,
    address: "482 Cedar Ridge Lane",
    city: "Austin",
    state: "TX",
    zip: "78735",
    lat: 30.2672,
    lng: -97.7431,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    ],
    description:
      "A light-filled farmhouse on a quiet cul-de-sac, built in 2021 and barely lived in. The open kitchen anchors the main floor with a ten-foot island, and the primary suite sits privately on its own wing. Wide-plank oak floors run throughout, and the covered back porch looks out over a fully fenced yard with mature cedar trees.",
    features: [
      "Open-concept kitchen with quartz island",
      "Primary suite with walk-in closet",
      "Covered back porch",
      "Attached 3-car garage",
      "Tankless water heater",
      "Smart thermostat & lighting",
    ],
    agentId: "agent-1",
    featured: true,
  },
  {
    id: "prop-2",
    slug: "brookhaven-lakeside-townhome",
    title: "Brookhaven Lakeside Townhome",
    type: "Townhome",
    status: "For Sale",
    price: 512000,
    priceUnit: "total",
    beds: 3,
    baths: 2.5,
    sqft: 2040,
    yearBuilt: 2018,
    address: "17 Brookhaven Court",
    city: "Denver",
    state: "CO",
    zip: "80209",
    lat: 39.7392,
    lng: -104.9903,
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=1200&h=800&fit=crop",
    ],
    description:
      "Three levels of thoughtfully laid-out living space two blocks from Brookhaven Lake. The top-floor loft makes a natural home office, and the rooftop deck catches mountain views on clear evenings. HOA covers landscaping and snow removal, so upkeep stays simple.",
    features: [
      "Rooftop deck with mountain views",
      "Top-floor flex loft",
      "Attached 2-car garage",
      "Gas fireplace",
      "HOA-maintained landscaping",
      "Walk to Brookhaven Lake trail",
    ],
    agentId: "agent-4",
    featured: true,
  },
  {
    id: "prop-3",
    slug: "old-town-craftsman-bungalow",
    title: "Old Town Craftsman Bungalow",
    type: "House",
    status: "For Sale",
    price: 618500,
    priceUnit: "total",
    beds: 3,
    baths: 2,
    sqft: 1780,
    lotSize: "0.18 acres",
    yearBuilt: 1932,
    address: "905 Magnolia Street",
    city: "Charleston",
    state: "SC",
    zip: "29403",
    lat: 32.7765,
    lng: -79.9311,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1585128993280-9456c19f56a6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
    ],
    description:
      "Original 1932 details — hardwood floors, picture-rail molding, a deep wraparound porch — paired with a fully updated kitchen and both bathrooms. Walkable to Old Town's restaurants and the farmers market. Zoned for the district's top-rated elementary school.",
    features: [
      "Wraparound front porch",
      "Original hardwood floors",
      "Updated kitchen & baths",
      "Detached studio/workshop",
      "Zoned for top-rated schools",
      "Walk score of 92",
    ],
    agentId: "agent-5",
    featured: true,
  },
  {
    id: "prop-4",
    slug: "riverside-park-condo",
    title: "Riverside Park Condo",
    type: "Condo",
    status: "For Rent",
    price: 2650,
    priceUnit: "month",
    beds: 2,
    baths: 2,
    sqft: 1150,
    yearBuilt: 2016,
    address: "1400 Riverside Park Way, Unit 8C",
    city: "Portland",
    state: "OR",
    zip: "97201",
    lat: 45.5152,
    lng: -122.6784,
    images: [
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
    ],
    description:
      "Floor-to-ceiling windows frame river views from nearly every room in this eighth-floor corner unit. Building amenities include a fitness center, a rooftop lounge, and secure package storage. One reserved parking spot is included in rent.",
    features: [
      "Floor-to-ceiling windows",
      "In-unit washer & dryer",
      "Building fitness center",
      "Rooftop resident lounge",
      "One reserved parking spot",
      "Pet-friendly building",
    ],
    agentId: "agent-4",
    featured: false,
  },
  {
    id: "prop-5",
    slug: "highland-park-family-colonial",
    title: "Highland Park Family Colonial",
    type: "House",
    status: "For Sale",
    price: 749000,
    priceUnit: "total",
    beds: 5,
    baths: 3.5,
    sqft: 3450,
    lotSize: "0.35 acres",
    yearBuilt: 2005,
    address: "212 Highland Park Drive",
    city: "Nashville",
    state: "TN",
    zip: "37205",
    lat: 36.1447,
    lng: -86.8206,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1585128993280-9456c19f56a6?w=1200&h=800&fit=crop",
    ],
    description:
      "A well-kept colonial on one of Highland Park's widest lots, with a finished walk-out basement that works equally well as a media room, gym, or in-law suite. The kitchen opens onto a two-story great room, and the backyard has room for a pool.",
    features: [
      "Finished walk-out basement",
      "Two-story great room",
      "First-floor guest suite",
      "Three-car side-entry garage",
      "Sprinkler irrigation system",
      "Room for a pool",
    ],
    agentId: "agent-2",
    featured: true,
  },
  {
    id: "prop-6",
    slug: "desert-bloom-villa",
    title: "Desert Bloom Villa",
    type: "Villa",
    status: "For Sale",
    price: 1195000,
    priceUnit: "total",
    beds: 4,
    baths: 4,
    sqft: 3890,
    lotSize: "0.6 acres",
    yearBuilt: 2019,
    address: "7740 Desert Bloom Trail",
    city: "Scottsdale",
    state: "AZ",
    zip: "85255",
    lat: 33.6949,
    lng: -111.9426,
    images: [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=1200&h=800&fit=crop",
    ],
    description:
      "Single-story desert modern architecture with disappearing glass walls that open the great room fully onto the pool deck. Mountain views from the primary suite, a chef's kitchen with a full butler's pantry, and xeriscaped grounds that keep water use low.",
    features: [
      "Disappearing glass wall system",
      "Negative-edge pool & spa",
      "Chef's kitchen with butler's pantry",
      "Mountain-view primary suite",
      "Xeriscaped, low-water grounds",
      "Owned solar array",
    ],
    agentId: "agent-3",
    featured: true,
  },
  {
    id: "prop-7",
    slug: "harbor-district-loft",
    title: "Harbor District Loft",
    type: "Condo",
    status: "For Sale",
    price: 465000,
    priceUnit: "total",
    beds: 1,
    baths: 1.5,
    sqft: 980,
    yearBuilt: 2014,
    address: "88 Harbor District Ave, Unit 502",
    city: "San Diego",
    state: "CA",
    zip: "92101",
    lat: 32.7157,
    lng: -117.1611,
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1585128993280-9456c19f56a6?w=1200&h=800&fit=crop",
    ],
    description:
      "Exposed brick and 12-foot ceilings in a converted 1914 cannery building, two blocks from the harbor. The open floor plan makes the most of a compact footprint, and the building's shared rooftop deck has some of the best sunset views in the district.",
    features: [
      "Exposed brick & original beams",
      "12-foot ceilings",
      "Shared rooftop deck",
      "Secure bike storage",
      "Walk to the harbor",
      "Low HOA dues",
    ],
    agentId: "agent-6",
    featured: false,
  },
  {
    id: "prop-8",
    slug: "willow-creek-new-construction",
    title: "Willow Creek New Construction",
    type: "House",
    status: "Pending",
    price: 699900,
    priceUnit: "total",
    beds: 4,
    baths: 3,
    sqft: 2680,
    lotSize: "0.28 acres",
    yearBuilt: 2024,
    address: "56 Willow Creek Way",
    city: "Asheville",
    state: "NC",
    zip: "28806",
    lat: 35.5951,
    lng: -82.5515,
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=1200&h=800&fit=crop",
    ],
    description:
      "Move-in ready new construction backing onto protected greenspace along Willow Creek. Builder warranty included, along with a finished bonus room over the garage that most buyers are using as a fifth bedroom or home office.",
    features: [
      "Backs to protected greenspace",
      "Bonus room over garage",
      "10-year builder warranty",
      "Energy Star certified",
      "Covered patio",
      "Community walking trails",
    ],
    agentId: "agent-6",
    featured: false,
  },
  {
    id: "prop-9",
    slug: "boulder-canyon-view-lot",
    title: "Boulder Canyon View Lot",
    type: "Land",
    status: "For Sale",
    price: 385000,
    priceUnit: "total",
    beds: 0,
    baths: 0,
    sqft: 0,
    lotSize: "2.1 acres",
    yearBuilt: 0,
    address: "Parcel 14, Canyon View Road",
    city: "Boulder",
    state: "CO",
    zip: "80302",
    lat: 40.015,
    lng: -105.2705,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&h=800&fit=crop",
    ],
    description:
      "A rare 2.1-acre buildable parcel with unobstructed canyon views, already perc-tested and platted with utilities at the road. Building plans from a local architect are available on request for buyers who want a head start.",
    features: [
      "Perc-tested & platted",
      "Utilities at the road",
      "Unobstructed canyon views",
      "Architect building plans available",
      "20 minutes to downtown Boulder",
    ],
    agentId: "agent-3",
    featured: false,
  },
]

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug)
}

export function getFeaturedProperties() {
  return properties.filter((property) => property.featured)
}

export function getSimilarProperties(property: Property, count = 3) {
  return properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, count)
    .concat(
      properties.filter((p) => p.id !== property.id && p.type !== property.type).slice(0, count)
    )
    .slice(0, count)
}

export function formatPrice(property: Pick<Property, "price" | "priceUnit">) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price)
  return property.priceUnit === "month" ? `${formatted}/mo` : formatted
}
