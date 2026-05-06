import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TransGlobal Logistics | Worldwide Shipping & Transport Solutions',
  description: 'TransGlobal Logistics offers comprehensive shipping, freight, and supply chain solutions. Track shipments in real-time, explore our global fleet, and get instant quotes.',
  keywords: 'logistics, shipping, freight, transport, supply chain, cargo, trucking, air freight, ocean freight, tracking',
  authors: [{ name: 'TransGlobal Logistics' }],
  openGraph: {
    title: 'TransGlobal Logistics | Worldwide Shipping & Transport Solutions',
    description: 'Comprehensive shipping, freight, and supply chain solutions with real-time tracking.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TransGlobal Logistics',
    description: 'Comprehensive shipping, freight, and supply chain solutions.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1E40AF' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
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
    <html lang="en" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
