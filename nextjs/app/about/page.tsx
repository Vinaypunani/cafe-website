import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedImage } from "@/components/ui/animated-image"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Leaf, Users, Utensils } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">Our Story</h1>
            <p className="text-muted-foreground text-lg">
              Learn about our journey, our values, and the people who make Café Serenity special.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <SectionHeading title="From Passion to Reality" subtitle="How Café Serenity came to be." />
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Café Serenity was born in 2015 from a simple yet profound vision: to create a space where
                    exceptional coffee, delicious food, and community could thrive together.
                  </p>
                  <p>
                    Our founder, Emma Chen, spent years traveling the world, exploring coffee cultures from Ethiopia to
                    Colombia, before returning home with a dream to create something special.
                  </p>
                  <p>
                    What started as a tiny corner café with just three tables has grown into a beloved community hub,
                    but our core values remain unchanged: quality, sustainability, and creating moments of joy through
                    food and drink.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <AnimatedImage
                src="/placeholder.svg?height=600&width=800&query=cozy cafe interior with customers and barista"
                alt="Café Serenity interior"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <SectionHeading title="Our Values" subtitle="The principles that guide everything we do." centered />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Coffee className="h-10 w-10 text-primary" />,
                title: "Quality",
                description:
                  "We never compromise on quality. From our coffee beans to our ingredients, we source only the best.",
              },
              {
                icon: <Leaf className="h-10 w-10 text-primary" />,
                title: "Sustainability",
                description:
                  "We're committed to sustainable practices, from our compostable packaging to our locally-sourced ingredients.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Community",
                description:
                  "We believe in creating spaces where people can connect, share ideas, and build relationships.",
              },
              {
                icon: <Utensils className="h-10 w-10 text-primary" />,
                title: "Creativity",
                description:
                  "We approach food and drink as an art form, constantly innovating while respecting tradition.",
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index + 2}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="font-serif text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading title="Meet Our Team" subtitle="The passionate people behind Café Serenity." centered />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Emma Chen",
                role: "Founder & Head Chef",
                bio: "With a background in fine dining and a passion for coffee, Emma brings her global culinary experiences to every dish at Café Serenity.",
                image:
                  "/placeholder.svg?height=400&width=400&query=professional headshot of female chef with dark hair",
              },
              {
                name: "Marcus Johnson",
                role: "Head Barista",
                bio: "A certified Q-grader with over 10 years of experience, Marcus oversees our coffee program and trains our barista team.",
                image: "/placeholder.svg?height=400&width=400&query=professional headshot of male barista with beard",
              },
              {
                name: "Sophia Rodriguez",
                role: "Pastry Chef",
                bio: "Trained in Paris, Sophia creates our delectable pastries and desserts, combining classic techniques with innovative flavors.",
                image: "/placeholder.svg?height=400&width=400&query=professional headshot of female pastry chef",
              },
            ].map((member, index) => (
              <ScrollReveal key={index} delay={index + 2}>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing & Sustainability */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={3}>
              <AnimatedImage
                src="/placeholder.svg?height=600&width=800&query=coffee farm with workers harvesting coffee beans"
                alt="Coffee sourcing"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </ScrollReveal>
            <ScrollReveal>
              <div className="space-y-6">
                <SectionHeading
                  title="Our Commitment to Sustainability"
                  subtitle="How we source our ingredients and reduce our environmental impact."
                />
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We believe that great food and beverages start with exceptional ingredients. That's why we partner
                    with local farmers and producers who share our commitment to quality and sustainability.
                  </p>
                  <p>
                    Our coffee beans are ethically sourced through direct trade relationships with farmers in Ethiopia,
                    Colombia, and Guatemala, ensuring fair compensation and sustainable farming practices.
                  </p>
                  <p>
                    In our kitchen, we prioritize seasonal, organic produce from farms within a 100-mile radius,
                    reducing our carbon footprint while supporting local agriculture.
                  </p>
                  <p>
                    From compostable packaging to our comprehensive recycling program, we're constantly working to
                    minimize waste and reduce our environmental impact.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <SectionHeading title="Behind the Scenes" subtitle="A glimpse into our kitchen and coffee bar." centered />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              "/placeholder.svg?height=500&width=500&query=barista grinding coffee beans",
              "/placeholder.svg?height=500&width=500&query=chef preparing food in restaurant kitchen",
              "/placeholder.svg?height=500&width=500&query=pastry chef decorating cake",
              "/placeholder.svg?height=500&width=500&query=coffee being brewed in chemex",
              "/placeholder.svg?height=500&width=500&query=chef plating food with tweezers",
              "/placeholder.svg?height=500&width=500&query=barista steaming milk for latte",
              "/placeholder.svg?height=500&width=500&query=fresh bread being taken out of oven",
              "/placeholder.svg?height=500&width=500&query=staff meeting in cafe before opening",
            ].map((image, index) => (
              <ScrollReveal key={index} delay={index}>
                <div className="aspect-square relative overflow-hidden rounded-md">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Behind the scenes ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
