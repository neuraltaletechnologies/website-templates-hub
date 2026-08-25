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
    slug: "northern-parks-safari",
    name: "6 Days Northern Parks Safari",
    category: "Wildlife Safari",
    tagline: "Tanzania's classic circuit, unhurried and full",
    description:
      "Six days across the heart of Tanzania's northern circuit, starting and ending in Arusha. Game drives through Lake Manyara's elephant herds and hippo pools lead to Lake Eyasi, where a morning with the Hadzabe offers a rare window into one of the world's last hunter-gatherer ways of life. After an overnight in Karatu, a full day of game viewing in the Serengeti gives way to Olduvai Gorge — the site that reshaped our understanding of human origins — before the drive climbs into Ngorongoro Crater, often called Africa's Garden of Eden, for a final day among its concentrated wildlife.",
    price: 480,
    originalPrice: 550,
    size: 6,
    capacity: 7,
    beds: "Lodge-based safari (Karatu hub)",
    view: "Northern Circuit",
    image: "/images/room-ocean-suite.jpg",
    gallery: ["/images/room-ocean-suite.jpg", "/images/exterior.jpg", "/images/amenity-pool.jpg"],
    amenities: [
      "Private safari vehicle & driver-guide",
      "Lake Manyara & Ngorongoro Crater fees",
      "Olduvai Gorge museum visit",
      "Hadzabe encounter at Lake Eyasi",
      "Lodge accommodation",
      "All park entry fees included",
    ],
    availability: "available",
    rating: 4.9,
    reviews: 214,
  },
  {
    slug: "kilimanjaro-meru-lengai-treks",
    name: "Kilimanjaro, Meru & Ol Doinyo Lengai Treks",
    category: "Mountain Trekking",
    tagline: "Africa's roof, on the route that suits you",
    description:
      "Climb Mount Kilimanjaro on the route that fits your timeline and acclimatization needs — Marangu (5 days), Rongai (5–6 days), Umbwe (6 days), Machame (7 days), or Lemosho (8 days, our recommendation for the best acclimatization and summit success). For a shorter, lower-altitude introduction to East African trekking, Mount Meru makes an excellent companion climb, and Ol Doinyo Lengai — the still-active 'Mountain of God' — offers a demanding overnight ascent for trekkers chasing something wilder. No technical climbing skill is required on any of these routes, but serious physical training matters. The best trekking windows fall in June–September and February–March.",
    price: 550,
    size: 7,
    capacity: 6,
    beds: "Mountain camping trek",
    view: "Kilimanjaro & Arusha",
    image: "/images/room-garden-villa.jpg",
    gallery: ["/images/room-garden-villa.jpg", "/images/dining-restaurant.jpg", "/images/amenity-spa.jpg"],
    amenities: [
      "Professional mountain guide & porters",
      "Park & camping fees",
      "All trekking meals",
      "Route options: Marangu to Lemosho",
      "Pre-climb briefing & gear check",
      "Mount Meru & Ol Doinyo Lengai add-ons",
    ],
    availability: "available",
    rating: 4.9,
    reviews: 231,
  },
  {
    slug: "zanzibar-beach-holiday",
    name: "Zanzibar Beach Holiday",
    category: "Beach Holiday",
    tagline: "White sand, warm water, and the pace of the coast",
    description:
      "Whether you're unwinding after days on safari or arriving fresh for a standalone island escape, Zanzibar trades savanna dust for turquoise water. Sail out on a traditional dhow fishing boat, walk the beach at sunrise or sunset, and choose accommodation to match your trip — from simple beachfront lodges to boutique hotels to luxury all-inclusive resorts. Beyond the main island of Unguja, Pemba and Mafia offer quieter, less-visited stretches of the same Swahili Coast.",
    price: 350,
    size: 5,
    capacity: 8,
    beds: "Beach lodge or resort stay",
    view: "Zanzibar Archipelago",
    image: "/images/room-deluxe.jpg",
    gallery: ["/images/room-deluxe.jpg", "/images/dining-rooftop.jpg", "/images/amenity-spa.jpg"],
    amenities: [
      "Return transfer to Zanzibar",
      "Beach accommodation of your choice",
      "Dhow sailing excursion",
      "Sunrise or sunset beach walk",
      "Free time to explore Stone Town",
      "Airport transfer (Zanzibar)",
    ],
    availability: "available",
    rating: 4.9,
    reviews: 189,
  },
  {
    slug: "great-migration-safari",
    name: "Great Migration Safari",
    category: "The Great Migration",
    tagline: "Front-row seats to the endless plains",
    description:
      "The Serengeti — Siringet, Maasai for 'endless plains' — is a 14,764 square kilometre ecosystem stretching north into Kenya. Short grass plains give way to granite kopjes and acacia woodland, and the Seronera area is known for big cats and elephants, especially through the dry season. This safari is timed to the herds' movement across the plains, following the seasonal rains that drive one of the largest wildlife migrations on Earth — a landscape of predator and prey playing out much as it always has.",
    price: 620,
    size: 6,
    capacity: 6,
    beds: "Lodge & tented camp safari",
    view: "Serengeti Ecosystem",
    image: "/images/room-honeymoon.jpg",
    gallery: ["/images/room-honeymoon.jpg", "/images/amenity-pool.jpg", "/images/lobby.jpg"],
    amenities: [
      "Private 4x4 safari vehicle",
      "Migration-tracking driver-guide",
      "Serengeti National Park fees",
      "Seronera area game drives",
      "Full-board lodge or tented camp",
      "Itinerary timed to the herds' movement",
    ],
    availability: "limited",
    rating: 5.0,
    reviews: 156,
  },
  {
    slug: "cultural-tourism-maasai-hadzabe-datoga",
    name: "Cultural Tourism: Maasai, Hadzabe & Datoga",
    category: "Cultural Tours",
    tagline: "Three peoples, three ways of life, told by the people who live them",
    description:
      "Northern Tanzania is home to some of Africa's most distinct living cultures, and this tour is built around genuine exchange rather than spectacle. Meet Maasai communities whose migration history traces back centuries to the Nile Valley region, and see the beadwork and jewellery craft passed down through generations. Near Lake Eyasi, spend time with the Hadzabe, among the last hunter-gatherer peoples on Earth, observing traditional hunting and gathering methods practiced largely unchanged for generations. Nearby, the Datoga — who trace their origins to the Ethiopian and South Sudanese highlands — have settled around Mount Oldeanyi and Lake Eyasi, known for their metalworking and pastoral traditions. Throughout, the focus stays on daily life, dress, dance, and tradition, told with the respect these communities and their histories deserve.",
    price: 320,
    size: 4,
    capacity: 8,
    beds: "Day-trip cultural encounters",
    view: "Lake Eyasi & Karatu",
    image: "/images/room-family.jpg",
    gallery: ["/images/room-family.jpg", "/images/beach.jpg", "/images/dining-restaurant.jpg"],
    amenities: [
      "Visits to Maasai, Hadzabe & Datoga communities",
      "Local cultural guide",
      "Small-group, respectful format",
      "Traditional craft demonstrations",
      "Direct community contribution included",
      "Transport from Karatu or Arusha",
    ],
    availability: "available",
    rating: 4.8,
    reviews: 172,
  },
  {
    slug: "stone-town-swahili-coast-heritage",
    name: "Stone Town & Swahili Coast Heritage Tour",
    category: "Historical Sites",
    tagline: "Centuries of trade, culture and history in one walkable town",
    description:
      "Stone Town is Zanzibar's historic heart — a maze of coral-stone buildings, intricately carved wooden doors, and centuries of Swahili, Arab, Persian, Indian and European influence. This walking tour takes in the Old Fort, the House of Wonders, and the Palace Museum, along with the Anglican Cathedral, built on the site of the former slave market — a place of real historical weight that deserves to be visited with care, not glossed over. Stops at the Dhow Countries Music Academy and the Old Dispensary round out the picture, before the day winds down at Forodhani Gardens' night market for grilled seafood and Zanzibar pizza. For travellers with more time, Bagamoyo and Mafia extend the same Swahili Coast history beyond Zanzibar's shores.",
    price: 300,
    size: 3,
    capacity: 10,
    beds: "Guided walking heritage tour",
    view: "Stone Town, Zanzibar",
    image: "/images/room-presidential.jpg",
    gallery: ["/images/room-presidential.jpg", "/images/beach.jpg", "/images/amenity-pool.jpg"],
    amenities: [
      "Guided Stone Town walking tour",
      "Old Fort, House of Wonders & Palace Museum",
      "Anglican Cathedral & former slave market site",
      "Forodhani Gardens night market stop",
      "Dhow Countries Music Academy visit",
      "Optional Bagamoyo extension",
    ],
    availability: "limited",
    rating: 5.0,
    reviews: 143,
  },
]

export function getRoom(slug: string) {
  return rooms.find((r) => r.slug === slug)
}
