import Link from "next/link"
import { Home, Search } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="mx-auto max-w-md text-center">
          <p className="font-heading text-7xl font-bold text-primary">404</p>
          <h1 className="mt-4 font-heading text-2xl font-bold text-foreground">Page not found</h1>
          <p className="mt-3 text-muted-foreground">
            The page you're looking for may have been moved, sold, or never existed in the first place.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/properties" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Browse Listings
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
