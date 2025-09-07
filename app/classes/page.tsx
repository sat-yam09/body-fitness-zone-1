import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Calendar, Flame, Heart, Zap, Target } from "lucide-react"

export default function GroupClassesPage() {
  const classes = [
    {
      name: "HIIT Blast",
      instructor: "Sarah Chen",
      duration: "45 min",
      intensity: "High",
      capacity: 20,
      description: "High-intensity interval training for maximum calorie burn",
      schedule: ["Mon 6:00 AM", "Wed 7:00 PM", "Fri 6:00 AM"],
      icon: Flame,
      color: "text-red-500",
    },
    {
      name: "Yoga Flow",
      instructor: "Emily Thompson",
      duration: "60 min",
      intensity: "Low",
      capacity: 25,
      description: "Mindful movement and flexibility training",
      schedule: ["Tue 8:00 AM", "Thu 6:30 PM", "Sat 9:00 AM"],
      icon: Heart,
      color: "text-pink-500",
    },
    {
      name: "Strength Circuit",
      instructor: "Marcus Johnson",
      duration: "50 min",
      intensity: "Medium",
      capacity: 15,
      description: "Full-body strength training with functional movements",
      schedule: ["Mon 7:00 PM", "Wed 6:00 AM", "Fri 7:00 PM"],
      icon: Zap,
      color: "text-yellow-500",
    },
    {
      name: "Cardio Kickboxing",
      instructor: "David Rodriguez",
      duration: "45 min",
      intensity: "High",
      capacity: 18,
      description: "High-energy martial arts inspired cardio workout",
      schedule: ["Tue 7:00 PM", "Thu 6:00 AM", "Sat 10:00 AM"],
      icon: Target,
      color: "text-blue-500",
    },
  ]

  const schedule = [
    {
      day: "Monday",
      classes: [
        { time: "6:00 AM", name: "HIIT Blast", instructor: "Sarah Chen", spots: 5 },
        { time: "7:00 PM", name: "Strength Circuit", instructor: "Marcus Johnson", spots: 8 },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { time: "8:00 AM", name: "Yoga Flow", instructor: "Emily Thompson", spots: 12 },
        { time: "7:00 PM", name: "Cardio Kickboxing", instructor: "David Rodriguez", spots: 3 },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { time: "6:00 AM", name: "Strength Circuit", instructor: "Marcus Johnson", spots: 6 },
        { time: "7:00 PM", name: "HIIT Blast", instructor: "Sarah Chen", spots: 2 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Users className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">Group Classes</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our energizing group fitness classes led by certified instructors. Find your community and stay
            motivated together.
          </p>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Classes</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {classes.map((classItem) => (
              <Card key={classItem.name} className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <classItem.icon className={`h-6 w-6 ${classItem.color}`} />
                    <CardTitle className="text-xl font-bold text-foreground">{classItem.name}</CardTitle>
                    <Badge
                      variant={
                        classItem.intensity === "High"
                          ? "destructive"
                          : classItem.intensity === "Medium"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {classItem.intensity}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">{classItem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{classItem.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">Max {classItem.capacity}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong className="text-foreground">Instructor:</strong> {classItem.instructor}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Schedule:</strong> {classItem.schedule.join(", ")}
                    </p>
                  </div>
                  <Button className="w-full">Book Class</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">This Week's Schedule</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {schedule.map((day) => (
              <Card key={day.day} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day.classes.map((classItem, index) => (
                      <div key={index} className="p-3 bg-background rounded-lg border border-border">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium text-foreground">{classItem.time}</p>
                            <p className="text-sm text-primary font-medium">{classItem.name}</p>
                            <p className="text-xs text-muted-foreground">{classItem.instructor}</p>
                          </div>
                          <Badge variant={classItem.spots <= 3 ? "destructive" : "secondary"} className="text-xs">
                            {classItem.spots} spots left
                          </Badge>
                        </div>
                        <Button size="sm" className="w-full">
                          Reserve Spot
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
