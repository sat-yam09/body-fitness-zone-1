import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, CheckCircle, Calendar } from "lucide-react"

export default function FacilityTourPage() {
  const tourOptions = [
    {
      name: "Self-Guided Tour",
      duration: "30 minutes",
      price: "Free",
      description: "Explore our facilities at your own pace with our interactive tour guide",
      features: [
        "Interactive facility map",
        "Equipment demonstrations",
        "Access to all areas",
        "Take photos and videos",
        "No time restrictions",
      ],
      available: "Anytime during operating hours",
    },
    {
      name: "Guided Tour",
      duration: "45 minutes",
      price: "Free",
      description: "Personal tour with one of our fitness consultants",
      features: [
        "Personal fitness consultant",
        "Equipment explanations",
        "Fitness assessment",
        "Program recommendations",
        "Q&A session",
      ],
      available: "By appointment",
      popular: true,
    },
    {
      name: "VIP Experience",
      duration: "90 minutes",
      price: "$25",
      description: "Complete facility tour with complimentary services",
      features: [
        "Everything in Guided Tour",
        "Complimentary smoothie",
        "Mini personal training session",
        "Nutrition consultation",
        "Guest pass for friend",
      ],
      available: "Weekends only",
    },
  ]

  const facilities = [
    {
      name: "Cardio Zone",
      description: "State-of-the-art cardio equipment with entertainment systems",
      image: "/gym-cardio-section.jpg",
      features: ["50+ cardio machines", "Individual TV screens", "Heart rate monitoring", "Virtual training programs"],
    },
    {
      name: "Strength Training Area",
      description: "Complete free weights and resistance training equipment",
      image: "/modern-gym-weights-area.jpg",
      features: [
        "Olympic lifting platforms",
        "Cable machines",
        "Free weights up to 150lbs",
        "Functional training tools",
      ],
    },
    {
      name: "Group Fitness Studio",
      description: "Spacious studio for group classes and personal training",
      image: "/group-fitness-class.jpg",
      features: ["1,200 sq ft studio", "Professional sound system", "Mirrored walls", "Climate controlled"],
    },
    {
      name: "Locker Rooms",
      description: "Clean, spacious locker rooms with premium amenities",
      image: "/gym-locker-room.jpg",
      features: ["Day-use lockers", "Private showers", "Towel service", "Hair dryers & amenities"],
    },
  ]

  const timeSlots = [
    { time: "9:00 AM", available: true, type: "Guided Tour" },
    { time: "11:00 AM", available: true, type: "VIP Experience" },
    { time: "1:00 PM", available: false, type: "Guided Tour" },
    { time: "3:00 PM", available: true, type: "Guided Tour" },
    { time: "5:00 PM", available: true, type: "VIP Experience" },
    { time: "7:00 PM", available: true, type: "Guided Tour" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">Facility Tour</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience our world-class fitness facility before you commit. See why Body Fitness Zone is the perfect
            place for your fitness journey.
          </p>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Tour Options</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {tourOptions.map((tour) => (
              <Card
                key={tour.name}
                className={`relative ${tour.popular ? "ring-2 ring-primary border-primary" : "border-border"}`}
              >
                {tour.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{tour.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{tour.description}</CardDescription>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-primary">{tour.price}</span>
                    <Badge variant="secondary">{tour.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {tour.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mb-6">
                    <strong className="text-foreground">Available:</strong> {tour.available}
                  </p>
                  <Button
                    className={`w-full ${tour.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80"}`}
                  >
                    {tour.price === "Free" ? "Schedule Tour" : "Book Experience"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">What You'll See</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {facilities.map((facility) => (
              <Card key={facility.name} className="border-border overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{facility.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{facility.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="text-xs text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Tour */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Schedule Your Tour</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Available Times */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Today's Availability
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Select a time slot that works for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {timeSlots.map((slot, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${slot.available ? "border-border bg-background hover:bg-accent/50 cursor-pointer" : "border-muted bg-muted/50 cursor-not-allowed"}`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className={`font-medium ${slot.available ? "text-foreground" : "text-muted-foreground"}`}>
                            {slot.time}
                          </p>
                          <p className={`text-sm ${slot.available ? "text-primary" : "text-muted-foreground"}`}>
                            {slot.type}
                          </p>
                        </div>
                        <Badge variant={slot.available ? "default" : "secondary"}>
                          {slot.available ? "Available" : "Booked"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Book Your Tour</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and we'll confirm your tour
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <input
                      type="tel"
                      className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Preferred Tour Type</label>
                    <select className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Self-Guided Tour</option>
                      <option>Guided Tour</option>
                      <option>VIP Experience</option>
                    </select>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Schedule Tour</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
