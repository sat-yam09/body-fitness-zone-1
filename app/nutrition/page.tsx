import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Apple, CheckCircle, Star } from "lucide-react"

export default function NutritionCounselingPage() {
  const services = [
    {
      name: "Initial Consultation",
      duration: "90 minutes",
      price: "$150",
      description: "Comprehensive assessment of your current diet, health goals, and lifestyle",
      includes: [
        "Detailed nutrition assessment",
        "Body composition analysis",
        "Goal setting session",
        "Custom meal plan outline",
        "Supplement recommendations",
      ],
    },
    {
      name: "Follow-up Sessions",
      duration: "60 minutes",
      price: "$100",
      description: "Regular check-ins to track progress and adjust your nutrition plan",
      includes: [
        "Progress review",
        "Meal plan adjustments",
        "Recipe suggestions",
        "Troubleshooting challenges",
        "Ongoing support",
      ],
    },
    {
      name: "Meal Planning Package",
      duration: "Monthly",
      price: "$200",
      description: "Complete monthly meal planning with shopping lists and prep guides",
      includes: [
        "4 weeks of meal plans",
        "Grocery shopping lists",
        "Meal prep instructions",
        "Recipe modifications",
        "Nutritional breakdowns",
      ],
    },
  ]

  const nutritionists = [
    {
      name: "Dr. Lisa Wang",
      credentials: "RD, PhD in Nutrition Science",
      specialty: "Sports Nutrition & Performance",
      experience: "12 years",
      image: "/trainer-lisa-wang.jpg",
      rating: 4.9,
      clients: 500,
    },
    {
      name: "Sarah Chen",
      credentials: "RD, Certified Diabetes Educator",
      specialty: "Weight Management & Metabolic Health",
      experience: "8 years",
      image: "/trainer-sarah-chen.jpg",
      rating: 4.8,
      clients: 350,
    },
  ]

  const programs = [
    {
      name: "Weight Loss Program",
      duration: "12 weeks",
      price: "$800",
      description: "Comprehensive program for sustainable weight loss",
      features: [
        "Initial consultation + 6 follow-ups",
        "Custom meal plans",
        "Weekly progress tracking",
        "Recipe database access",
        "24/7 support chat",
      ],
      popular: true,
    },
    {
      name: "Athletic Performance",
      duration: "8 weeks",
      price: "$600",
      description: "Optimize nutrition for peak athletic performance",
      features: [
        "Sport-specific nutrition plan",
        "Pre/post workout nutrition",
        "Supplement protocol",
        "Hydration strategies",
        "Competition day planning",
      ],
      popular: false,
    },
    {
      name: "Healthy Lifestyle",
      duration: "6 weeks",
      price: "$450",
      description: "Build sustainable healthy eating habits",
      features: [
        "Nutrition education sessions",
        "Meal planning guidance",
        "Healthy recipe collection",
        "Grocery shopping tips",
        "Lifestyle integration",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Apple className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">Nutrition Counseling</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your relationship with food through personalized nutrition guidance from our registered
            dietitians.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Services</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.name} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{service.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Badge variant="secondary">{service.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Book Consultation</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Nutrition Programs</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card
                key={program.name}
                className={`relative ${program.popular ? "ring-2 ring-primary border-primary" : "border-border"}`}
              >
                {program.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{program.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-primary">{program.price}</span>
                    <Badge variant="outline">{program.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${program.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80"}`}
                  >
                    Start Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritionists */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Nutritionists</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {nutritionists.map((nutritionist) => (
              <Card key={nutritionist.name} className="border-border">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={nutritionist.image || "/placeholder.svg"}
                      alt={nutritionist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{nutritionist.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{nutritionist.credentials}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium text-foreground">{nutritionist.rating}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{nutritionist.clients}+ clients helped</div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Specialty:</strong> {nutritionist.specialty}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Experience:</strong> {nutritionist.experience}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
