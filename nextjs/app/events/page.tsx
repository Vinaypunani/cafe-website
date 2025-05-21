import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Calendar, Clock } from "lucide-react"

// Sample events data
const events = [
  {
    id: 1,
    title: "Live Jazz Night",
    description:
      "Join us for an evening of smooth jazz with local musicians. Enjoy special cocktails and small plates while listening to live music.",
    date: "May 15, 2025",
    time: "7:00 PM - 10:00 PM",
    image: "/placeholder.svg?height=400&width=600&query=jazz musicians performing in cafe",
    category: "Music",
  },
  {
    id: 2,
    title: "Coffee Brewing Workshop",
    description:
      "Learn the art of brewing the perfect cup of coffee with our head barista. From pour-over to French press, master various brewing methods.",
    date: "May 22, 2025",
    time: "2:00 PM - 4:00 PM",
    image: "/placeholder.svg?height=400&width=600&query=coffee brewing workshop with people learning",
    category: "Workshop",
  },
  {
    id: 3,
    title: "Farm-to-Table Dinner",
    description:
      "A special dining experience featuring a five-course meal prepared with ingredients sourced directly from local farms.",
    date: "June 5, 2025",
    time: "6:30 PM - 9:30 PM",
    image: "/placeholder.svg?height=400&width=600&query=farm to table dinner with elegant table setting",
    category: "Dining",
  },
  {
    id: 4,
    title: "Book Club Meeting",
    description: "Join our monthly book club discussion. This month we're reading 'The Midnight Library' by Matt Haig.",
    date: "June 12, 2025",
    time: "5:00 PM - 7:00 PM",
    image: "/placeholder.svg?height=400&width=600&query=book club meeting in cozy cafe",
    category: "Community",
  },
]

// Sample news/blog posts
const news = [
  {
    id: 1,
    title: "Introducing Our Spring Menu",
    excerpt:
      "We're excited to unveil our new spring menu featuring seasonal ingredients and fresh flavors. From vibrant salads to refreshing beverages, there's something for everyone.",
    date: "April 1, 2025",
    image: "/placeholder.svg?height=400&width=600&query=spring menu food with flowers and bright colors",
    category: "Menu Update",
  },
  {
    id: 2,
    title: "Meet Our New Head Pastry Chef",
    excerpt:
      "We're thrilled to welcome Sophia Rodriguez to our team. With experience from top patisseries in Paris, she's bringing exciting new desserts to our menu.",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=400&width=600&query=female pastry chef decorating cake",
    category: "Team News",
  },
  {
    id: 3,
    title: "Sustainability Initiatives: Our Progress",
    excerpt:
      "Learn about our ongoing efforts to reduce waste, source ingredients responsibly, and minimize our environmental footprint.",
    date: "February 22, 2025",
    image: "/placeholder.svg?height=400&width=600&query=eco friendly cafe practices with compostable items",
    category: "Sustainability",
  },
]

export default function EventsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">Events & News</h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with our latest events, promotions, and café news.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              title="Upcoming Events"
              subtitle="Join us for special events, workshops, and community gatherings."
              centered
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {events.map((event, index) => (
              <ScrollReveal key={event.id} delay={index + 1}>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video relative">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{event.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-bold mb-2">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button variant="outline" className="w-full">
                      Reserve a Spot
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              title="Latest News"
              subtitle="Stay updated with what's happening at Café Serenity."
              centered
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {news.map((item, index) => (
              <ScrollReveal key={item.id} delay={index + 1}>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video relative">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                    <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link href={`/blog/${item.id}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <SectionHeading
                title="Stay in the Loop"
                subtitle="Subscribe to our newsletter for updates on events, seasonal menus, and special promotions."
                centered
              />

              <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Your email address" className="flex-1" />
                <Button>Subscribe</Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy and will never share your information.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
