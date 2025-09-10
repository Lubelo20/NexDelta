import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary"></div>
              <span className="text-xl font-bold">NexDelta</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Driving the Next Shift in Innovation through Research, Strategy & Development Consulting.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-sm hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/contact" className="block text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <p>📧 info@nexdelta.co.za</p>
              <p>📞 +27 (0) [Insert number]</p>
              <p>📍 58 Leopard Avenue, Eldo Manor Estate, Centurion, 0157</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <div className="space-y-2">
              <Input placeholder="Enter your email" className="bg-background text-foreground" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 NexDelta Research, Consulting and Development Solutions (Pty) Ltd. All rights reserved.</p>
          <p className="mt-2">Company Registration: [Insert Registration Number]</p>
        </div>
      </div>
    </footer>
  )
}
