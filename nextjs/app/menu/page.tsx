import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Download } from "lucide-react"

// Menu categories and items
const menuCategories = [
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Start your day with our delicious breakfast options, served until 11:30am.",
    items: [
      {
        name: "Avocado Toast",
        description: "Sourdough bread topped with smashed avocado, poached eggs, and microgreens.",
        price: "$12.95",
        image: "/placeholder.svg?height=300&width=400&query=avocado toast with poached egg",
        dietary: ["vegetarian"],
      },
      {
        name: "Breakfast Bowl",
        description: "Quinoa, roasted sweet potatoes, kale, avocado, and a soft-boiled egg.",
        price: "$14.95",
        image: "/placeholder.svg?height=300&width=400&query=breakfast bowl with quinoa and egg",
        dietary: ["gluten-free"],
      },
      {
        name: "Buttermilk Pancakes",
        description: "Fluffy pancakes served with maple syrup and seasonal berries.",
        price: "$11.95",
        image: "/placeholder.svg?height=300&width=400&query=stack of pancakes with berries and syrup",
        dietary: ["vegetarian"],
      },
      {
        name: "Vegan Breakfast Burrito",
        description: "Scrambled tofu, black beans, roasted vegetables, and avocado in a whole wheat wrap.",
        price: "$13.95",
        image: "/placeholder.svg?height=300&width=400&query=vegan breakfast burrito cut in half",
        dietary: ["vegan"],
      },
    ],
  },
  {
    id: "lunch",
    name: "Lunch",
    description: "Enjoy our lunch offerings, available from 11:30am to 4:00pm.",
    items: [
      {
        name: "Harvest Salad",
        description: "Mixed greens, roasted vegetables, goat cheese, and balsamic vinaigrette.",
        price: "$13.95",
        image: "/placeholder.svg?height=300&width=400&query=fresh salad with roasted vegetables",
        dietary: ["vegetarian", "gluten-free"],
      },
      {
        name: "Grilled Chicken Sandwich",
        description: "Herb-marinated chicken breast with avocado, bacon, and aioli on ciabatta.",
        price: "$15.95",
        image: "/placeholder.svg?height=300&width=400&query=grilled chicken sandwich on wooden board",
        dietary: [],
      },
      {
        name: "Quinoa Buddha Bowl",
        description: "Quinoa, roasted vegetables, chickpeas, and tahini dressing.",
        price: "$14.95",
        image: "/placeholder.svg?height=300&width=400&query=buddha bowl with quinoa and vegetables",
        dietary: ["vegan", "gluten-free"],
      },
      {
        name: "Artisanal Cheese Plate",
        description: "Selection of local cheeses with honey, nuts, and artisanal crackers.",
        price: "$16.95",
        image: "/placeholder.svg?height=300&width=400&query=cheese plate with honey and crackers",
        dietary: ["vegetarian"],
      },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Our signature coffee drinks and refreshing beverages.",
    items: [
      {
        name: "Signature Latte",
        description: "Our house-blend espresso with velvety steamed milk and a touch of vanilla.",
        price: "$4.95",
        image: "/placeholder.svg?height=300&width=400&query=latte with latte art in ceramic cup",
        dietary: [],
      },
      {
        name: "Cold Brew",
        description: "Smooth, slow-steeped cold brew coffee served over ice.",
        price: "$4.50",
        image: "/placeholder.svg?height=300&width=400&query=cold brew coffee in glass with ice",
        dietary: [],
      },
      {
        name: "Matcha Latte",
        description: "Ceremonial grade matcha whisked with your choice of milk.",
        price: "$5.50",
        image: "/placeholder.svg?height=300&width=400&query=matcha latte with latte art",
        dietary: ["vegan"],
      },
      {
        name: "Fresh Fruit Smoothie",
        description: "Seasonal fruits blended with yogurt or plant-based milk.",
        price: "$6.95",
        image: "/placeholder.svg?height=300&width=400&query=fruit smoothie in glass with straw",
        dietary: ["gluten-free"],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Indulge in our house-made desserts and pastries.",
    items: [
      {
        name: "Seasonal Berry Tart",
        description: "Buttery pastry filled with vanilla custard and topped with fresh seasonal berries.",
        price: "$7.95",
        image: "/placeholder.svg?height=300&width=400&query=berry tart with fresh berries",
        dietary: ["vegetarian"],
      },
      {
        name: "Chocolate Espresso Cake",
        description: "Rich chocolate cake infused with our house espresso and topped with ganache.",
        price: "$8.95",
        image: "/placeholder.svg?height=300&width=400&query=chocolate cake with ganache",
        dietary: ["vegetarian"],
      },
      {
        name: "Vegan Coconut Panna Cotta",
        description: "Creamy coconut panna cotta with mango coulis.",
        price: "$7.95",
        image: "/placeholder.svg?height=300&width=400&query=coconut panna cotta with mango sauce",
        dietary: ["vegan", "gluten-free"],
      },
      {
        name: "Assorted Cookie Plate",
        description: "Selection of our house-made cookies.",
        price: "$6.95",
        image: "/placeholder.svg?height=300&width=400&query=assorted cookies on plate",
        dietary: ["vegetarian"],
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">Our Menu</h1>
            <p className="text-muted-foreground text-lg">
              Discover our seasonal offerings, crafted with locally-sourced ingredients and a lot of love.
            </p>
            <Button variant="outline" className="mt-4" asChild>
              <Link href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF Menu
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dietary Filters */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="text-sm py-1 px-3">
              All
            </Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">
              Vegetarian
            </Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">
              Vegan
            </Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">
              Gluten-Free
            </Badge>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="breakfast" className="w-full">
            <ScrollReveal>
              <TabsList className="w-full flex flex-wrap h-auto justify-center mb-8">
                {menuCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-base py-2 px-4">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollReveal>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <ScrollReveal>
                  <SectionHeading title={category.name} subtitle={category.description} centered />
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {category.items.map((item, index) => (
                    <ScrollReveal key={index} delay={index + 1}>
                      <Card className="overflow-hidden h-full">
                        <div className="grid md:grid-cols-2 h-full">
                          <div className="aspect-square md:aspect-auto md:h-full relative">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-serif text-xl font-bold">{item.name}</h3>
                              <span className="font-medium text-primary">{item.price}</span>
                            </div>
                            <p className="text-muted-foreground text-sm flex-1">{item.description}</p>
                            {item.dietary.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-4">
                                {item.dietary.map((diet) => (
                                  <Badge key={diet} variant="secondary" className="text-xs">
                                    {diet.charAt(0).toUpperCase() + diet.slice(1)}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </div>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold">Ready to Order?</h2>
              <p className="text-muted-foreground">
                Place an order for pickup or delivery, or reserve a table for a dine-in experience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button size="lg">Order Online</Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Reserve a Table</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
