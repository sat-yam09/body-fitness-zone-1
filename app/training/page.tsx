import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, CheckCircle, Star } from "lucide-react"

export default function PersonalTrainingPage() {
  const trainers = [
    {
      name: "Marcus Johnson",
      specialty: "Strength & Conditioning",
      experience: "8 years",
      certifications: ["NASM-CPT", "CSCS"],
      image: "/trainer-marcus-johnson.jpg",
      rating: 4.9,
      sessions: 1200,
    },
    {
      name: "Sarah Chen",
      specialty: "Weight Loss & Nutrition",
      experience: "6 years",
      certifications: ["ACE-CPT", "Precision Nutrition"],
      image: "/trainer-sarah-chen.jpg",
      rating: 4.8,
      sessions: 950,
    },
    {
      name: "David Rodriguez",
      specialty: "Athletic Performance",
      experience: "10 years",
      certifications: ["NSCA-CSCS", "FMS"],
      image: "/trainer-david-rodriguez.jpg",
      rating: 4.9,
      sessions: 1500,
    },
  ]

  const packages = [
    {
      name: "Starter Package",
      sessions: 4,
      price: "$320",
      duration: "1 month",
      features: ["Initial assessment", "Custom workout plan", "Progress tracking", "Nutrition basics"],
    },
    {
      name: "Transformation Package",
      sessions: 12,
      price: "$900",
      duration: "3 months",
      features: ["Everything in Starter", "Detailed nutrition plan", "Body composition analysis", "Weekly check-ins"],
      popular: true,
    },
    {
      name: "Elite Package",
      sessions: 24,
      price: "$1680",
      duration: "6 months",
      features: ["Everything in Transformation", "Recovery protocols", "Supplement guidance", "24/7 support"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Target className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">Personal Training</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Achieve your fitness goals faster with one-on-one guidance from our certified personal trainers.
          </p>
        </div>
      </section>

      {/* Training Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Training Packages</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative ${pkg.popular ? "ring-2 ring-primary border-primary" : "border-border"}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {pkg.sessions} sessions • {pkg.duration}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm block mt-1">
                      ${Math.round(Number.parseInt(pkg.price.replace("$", "")) / pkg.sessions)}/session
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80"}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trainers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Expert Trainers</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <Card key={trainer.name} className="border-border">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={trainer.image || "/placeholder.svg"}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{trainer.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{trainer.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium text-foreground">{trainer.rating}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{trainer.sessions}+ sessions</div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Experience:</strong> {trainer.experience}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Certifications:</strong> {trainer.certifications.join(", ")}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Book Session
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
