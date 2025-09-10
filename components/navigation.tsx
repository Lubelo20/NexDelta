"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-foreground/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary"></div>
            <span className="text-xl font-bold text-primary-foreground">NexDelta</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-primary" : "text-primary-foreground",
              )}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/services" ? "text-primary" : "text-primary-foreground",
              )}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/contact" ? "text-primary" : "text-primary-foreground",
              )}
            >
              Contact
            </Link>
          </div>

          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
