import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedImage } from "@/components/ui/animated-image"
import { ArrowRight, Clock, MapPin, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/cozy-cafe.png" alt="Café Serenity" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-center text-white space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold">Where Every Sip Tells a Story</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Experience the perfect blend of artisanal coffee and delicious food in a warm, inviting atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="/menu">Explore Our Menu</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <SectionHeading
                  title="Our Story"
                  subtitle="Café Serenity was born from a passion for creating a space where community and culinary excellence meet."
                />
                <p className="text-muted-foreground">
                  Founded in 2015, our café has become a beloved gathering place for locals and visitors alike. We
                  source only the finest ingredients, with a focus on local and sustainable products.
                </p>
                <Button variant="outline" className="group" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <AnimatedImage
                src="/placeholder.svg?key=qr0x2"
                alt="Barista preparing coffee"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              title="Our Signature Offerings"
              subtitle="Discover our most beloved dishes and drinks, crafted with care and the finest ingredients."
              centered
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Artisanal Avocado Toast",
                description: "Sourdough bread topped with smashed avocado, poached eggs, and microgreens.",
                image: "/avocado-toast.png",
                price: "$12.95",
                category: "Breakfast",
              },
              {
                title: "Signature Latte",
                description: "Our house-blend espresso with velvety steamed milk and a touch of vanilla.",
                image: "/placeholder.svg?key=0twz0",
                price: "$4.95",
                category: "Beverages",
              },
              {
                title: "Seasonal Berry Tart",
                description: "Buttery pastry filled with vanilla custard and topped with fresh seasonal berries.",
                image: "/berry-tart.png",
                price: "$7.95",
                category: "Desserts",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index + 2}>
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-[4/3] relative">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                      <span className="font-medium text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="/menu">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <ScrollReveal delay={6}>
              <Button size="lg" asChild>
                <Link href="/menu">View Full Menu</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Instagram Feed / Gallery */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              title="Moments at Café Serenity"
              subtitle="Follow us on Instagram @cafeserenity for more delicious moments."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/placeholder.svg?key=028ju",
              "/cafe-interior-customers.png",
              "/placeholder.svg?height=500&width=500&query=plate of pancakes with berries and syrup",
              "/placeholder.svg?height=500&width=500&query=barista making latte art",
              "/placeholder.svg?height=500&width=500&query=outdoor cafe seating with plants",
              "/placeholder.svg?height=500&width=500&query=fresh baked pastries on display",
              "/placeholder.svg?height=500&width=500&query=people working on laptops in cafe",
              "/placeholder.svg?height=500&width=500&query=close up of espresso being extracted",
            ].map((image, index) => (
              <ScrollReveal key={index} delay={index}>
                <div className="aspect-square relative overflow-hidden rounded-md group">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <ScrollReveal delay={8}>
              <Button variant="outline" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Follow Us on Instagram
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container">
          <ScrollReveal>
            <SectionHeading title="What Our Customers Say" centered />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                name: "Sarah Johnson",
                quote:
                  "The avocado toast is to die for! And the atmosphere is so peaceful and inviting. My favorite spot to work remotely.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                quote:
                  "Their signature latte is the best I've ever had. The baristas are true artists and the pastries are always fresh and delicious.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                quote:
                  "Such a cozy spot with amazing food. The seasonal menu keeps me coming back to try new things. Highly recommend the berry tart!",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index + 2}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-primary fill-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="flex-1 italic text-muted-foreground mb-4">"{testimonial.quote}"</blockquote>
                    <p className="font-medium">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container">
          <div className="bg-primary/10 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold">Ready to Experience Café Serenity?</h2>
                  <p className="text-muted-foreground">
                    Join us for a memorable dining experience or order your favorites to enjoy at home.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" asChild>
                      <Link href="/contact">Reserve a Table</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/menu">Order Online</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={3}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Hours</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 7am - 7pm</p>
                    <p className="text-sm text-muted-foreground">Sat: 8am - 8pm</p>
                    <p className="text-sm text-muted-foreground">Sun: 8am - 6pm</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Location</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">123 Café Street</p>
                    <p className="text-sm text-muted-foreground">City, State 12345</p>
                    <Button variant="link" className="p-0 h-auto text-sm" asChild>
                      <Link href="/contact">Get Directions</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
