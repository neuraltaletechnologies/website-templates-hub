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
  title: "Macho Halisi Ltd — Authentic Tanzania Safaris & Tours",
  description:
    "A locally owned Tanzanian safari and tour operator based in Karatu, Arusha Region — wildlife safaris, Kilimanjaro treks, Zanzibar beach holidays, the Great Migration, and cultural tours led by native Tanzanian guides.",
  generator: "v0.app",
  openGraph: {
    title: "Macho Halisi Ltd — Authentic Tanzania Safaris & Tours",
    description:
      "Locally owned, native-run safaris, treks, and cultural tours across Tanzania — from the Serengeti to Kilimanjaro to Zanzibar.",
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
