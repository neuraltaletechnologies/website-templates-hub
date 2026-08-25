import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Meridian Realty | Find Your Place',
  description:
    'Meridian Realty connects buyers, sellers, and renters with exceptional homes. Browse curated listings, work with expert agents, and find the property that fits your life.',
  keywords:
    'real estate, homes for sale, property listings, realtor, buy a home, sell a home, rent, agents, luxury homes',
  authors: [{ name: 'Meridian Realty' }],
  openGraph: {
    title: 'Meridian Realty | Find Your Place',
    description:
      'Curated property listings and expert agents to help you buy, sell, or rent with confidence.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meridian Realty',
    description: 'Curated property listings and expert agents.',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1E2A4A' },
    { media: '(prefers-color-scheme: dark)', color: '#141B2E' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
