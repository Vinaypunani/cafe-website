import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold">Café Serenity</h3>
          <p className="text-muted-foreground">
            A cozy café serving delicious food and beverages in a warm, inviting atmosphere.
          </p>
          <div className="flex gap-4">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-bold">Hours</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>Monday - Friday: 7am - 7pm</li>
            <li>Saturday: 8am - 8pm</li>
            <li>Sunday: 8am - 6pm</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-bold">Contact</h4>
          <address className="not-italic space-y-2 text-muted-foreground">
            <p>123 Café Street</p>
            <p>City, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: hello@cafeserenity.com</p>
          </address>
        </div>
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-bold">Newsletter</h4>
          <p className="text-muted-foreground">Subscribe to our newsletter for updates on events and seasonal menus.</p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Your email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Café Serenity. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
