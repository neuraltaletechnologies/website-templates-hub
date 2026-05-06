import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingBookButton } from "@/components/floating-book-button"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Maison Lumière — A Luxury Coastal Resort & Spa",
  description:
    "Experience timeless elegance at Maison Lumière. Oceanfront suites, a Michelin-starred restaurant, a renowned spa, and attentive service on the Zanzibar coast.",
  generator: "v0.app",
  openGraph: {
    title: "Maison Lumière — A Luxury Coastal Resort & Spa",
    description:
      "Oceanfront suites, world-class dining, and the serenity of the Zanzibar coast.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#faf8f5",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <FloatingBookButton />
        <Toaster />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
