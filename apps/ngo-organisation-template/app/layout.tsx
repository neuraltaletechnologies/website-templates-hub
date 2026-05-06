import type { Metadata, Viewport } from "next"
import { Inter, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Uzima Foundation — Building Hope, One Community at a Time",
    template: "%s · Uzima Foundation",
  },
  description:
    "Uzima Foundation is a non-profit dedicated to transforming lives through education, clean water, healthcare, and economic empowerment across East Africa.",
  keywords: [
    "NGO",
    "non-profit",
    "charity",
    "donate",
    "Africa",
    "education",
    "clean water",
    "healthcare",
    "volunteer",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Uzima Foundation — Building Hope, One Community at a Time",
    description:
      "Join us in creating lasting change through education, clean water, healthcare, and economic empowerment.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#f5f1e8",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased text-foreground bg-background">
        <Suspense fallback={null}>{children}</Suspense>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
