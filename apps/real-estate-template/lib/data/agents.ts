export interface Agent {
  id: string
  slug: string
  name: string
  title: string
  phone: string
  email: string
  image: string
  bio: string
  specialties: string[]
  listingsCount: number
  yearsExperience: number
  rating: number
  leadership?: boolean
}

export const agents: Agent[] = [
  {
    id: "agent-1",
    slug: "sofia-marchetti",
    name: "Sofia Marchetti",
    title: "Principal Broker",
    phone: "+1 (555) 201-4487",
    email: "sofia.marchetti@meridianrealty.example",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    bio: "Sofia founded Meridian Realty on the idea that buying or selling a home should feel like working with a trusted friend, not a stranger. Over the past 16 years she has guided hundreds of families through the region's biggest life decisions.",
    specialties: ["Luxury Homes", "New Developments", "Relocation"],
    listingsCount: 24,
    yearsExperience: 16,
    rating: 4.9,
    leadership: true,
  },
  {
    id: "agent-2",
    slug: "daniel-osei",
    name: "Daniel Osei",
    title: "Senior Agent, Residential Sales",
    phone: "+1 (555) 201-4491",
    email: "daniel.osei@meridianrealty.example",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    bio: "Daniel specializes in first-time buyers and growing families, breaking down every step of the process so nothing feels overwhelming. He's known for negotiating hard without losing his easygoing style.",
    specialties: ["First-Time Buyers", "Family Homes", "Condos"],
    listingsCount: 19,
    yearsExperience: 9,
    rating: 4.8,
    leadership: true,
  },
  {
    id: "agent-3",
    slug: "priya-nair",
    name: "Priya Nair",
    title: "Senior Agent, Luxury Portfolio",
    phone: "+1 (555) 201-4502",
    email: "priya.nair@meridianrealty.example",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=faces",
    bio: "Priya's background in architecture gives her clients an edge — she can spot a home's potential (or its problems) before an inspection ever happens. Her portfolio skews toward architecturally distinctive properties.",
    specialties: ["Luxury Homes", "Architectural Properties", "Waterfront"],
    listingsCount: 15,
    yearsExperience: 11,
    rating: 5.0,
    leadership: true,
  },
  {
    id: "agent-4",
    slug: "marcus-webb",
    name: "Marcus Webb",
    title: "Agent, Investment Properties",
    phone: "+1 (555) 201-4515",
    email: "marcus.webb@meridianrealty.example",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces",
    bio: "Marcus works primarily with investors building rental portfolios, running the numbers on cap rates and cash flow before anyone signs a thing. He also handles a steady stream of condo and townhome resales.",
    specialties: ["Investment Properties", "Multi-Family", "Condos"],
    listingsCount: 21,
    yearsExperience: 7,
    rating: 4.7,
  },
  {
    id: "agent-5",
    slug: "elena-torres",
    name: "Elena Torres",
    title: "Agent, Residential Sales",
    phone: "+1 (555) 201-4528",
    email: "elena.torres@meridianrealty.example",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=faces",
    bio: "Elena grew up in the neighborhoods she now sells in, and it shows — she can tell you which street floods a little in spring and which block has the best trick-or-treating. Clients love her local knowledge.",
    specialties: ["Family Homes", "Historic Properties", "Relocation"],
    listingsCount: 17,
    yearsExperience: 6,
    rating: 4.9,
  },
  {
    id: "agent-6",
    slug: "jamal-baptiste",
    name: "Jamal Baptiste",
    title: "Agent, New Developments",
    phone: "+1 (555) 201-4533",
    email: "jamal.baptiste@meridianrealty.example",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=faces",
    bio: "Jamal partners directly with builders to get his clients early access to new construction, often before a shovel hits the ground. He's meticulous about walking buyers through builder contracts line by line.",
    specialties: ["New Developments", "Townhomes", "First-Time Buyers"],
    listingsCount: 13,
    yearsExperience: 5,
    rating: 4.8,
  },
]

export function getAgentBySlug(slug: string) {
  return agents.find((agent) => agent.slug === slug)
}
