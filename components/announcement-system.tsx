"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ImageIcon, Megaphone, Camera } from "lucide-react"

interface Announcement {
  id: string
  image: string
  content: string
  date: string
  validity: string
  type: "announcement" | "event" | "promotion"
}

interface GymPhoto {
  id: string
  image: string
  title: string
  category: string
}

const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    image: "/gym-equipment-announcement.jpg",
    content:
      "New state-of-the-art cardio equipment has arrived! Experience the latest in fitness technology with our brand new treadmills and elliptical machines.",
    date: "2024-01-15",
    validity: "2024-02-15",
    type: "announcement",
  },
  {
    id: "2",
    image: "/fitness-class-promotion.jpg",
    content:
      "Special promotion: 50% off all group fitness classes this month! Join our yoga, pilates, and HIIT sessions with certified instructors.",
    date: "2024-01-10",
    validity: "2024-01-31",
    type: "promotion",
  },
  {
    id: "3",
    image: "/gym-competition-event.jpg",
    content:
      "Annual Body Fitness Zone Championship coming up! Register now for our strength competition and win amazing prizes.",
    date: "2024-01-08",
    validity: "2024-03-01",
    type: "event",
  },
  {
    id: "4",
    image: "/nutrition-workshop.jpg",
    content:
      "Free nutrition workshop this Saturday! Learn about meal planning and supplements from our certified nutritionist.",
    date: "2024-01-05",
    validity: "2024-01-20",
    type: "event",
  },
]

const mockGymPhotos: GymPhoto[] = [
  {
    id: "1",
    image: "/modern-gym-weights-area.jpg",
    title: "Weight Training Area",
    category: "Equipment",
  },
  {
    id: "2",
    image: "/gym-cardio-section.jpg",
    title: "Cardio Zone",
    category: "Equipment",
  },
  {
    id: "3",
    image: "/group-fitness-class.jpg",
    title: "Group Fitness Classes",
    category: "Classes",
  },
  {
    id: "4",
    image: "/gym-locker-room.jpg",
    title: "Premium Locker Rooms",
    category: "Facilities",
  },
  {
    id: "5",
    image: "/personal-training-session.jpg",
    title: "Personal Training",
    category: "Training",
  },
  {
    id: "6",
    image: "/gym-reception-area.jpg",
    title: "Reception & Lounge",
    category: "Facilities",
  },
]

export function AnnouncementSystem() {
  const [activeView, setActiveView] = useState<"announcements" | "gallery">("announcements")
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null)

  const getTypeColor = (type: string) => {
    switch (type) {
      case "announcement":
        return "bg-primary text-primary-foreground"
      case "event":
        return "bg-accent text-accent-foreground"
      case "promotion":
        return "bg-secondary text-secondary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const isValidAnnouncement = (validity: string) => {
    return new Date(validity) > new Date()
  }

  return (
    <section id="post" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest <span className="text-primary">Updates</span> & <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Stay updated with our latest announcements and explore our state-of-the-art facilities
          </p>
        </div>

        {/* Interactive Menu System */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-card border border-border rounded-lg p-1">
            <Button
              variant={activeView === "announcements" ? "default" : "ghost"}
              onClick={() => setActiveView("announcements")}
              className={`flex items-center gap-2 ${
                activeView === "announcements"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:text-accent"
              }`}
            >
              <Megaphone className="h-4 w-4" />
              Announcements
            </Button>
            <Button
              variant={activeView === "gallery" ? "default" : "ghost"}
              onClick={() => setActiveView("gallery")}
              className={`flex items-center gap-2 ${
                activeView === "gallery" ? "bg-primary text-primary-foreground" : "text-foreground hover:text-accent"
              }`}
            >
              <Camera className="h-4 w-4" />
              Gym Gallery
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeView === "announcements" ? (
              <div className="grid md:grid-cols-2 gap-6">
                {mockAnnouncements.map((announcement) => (
                  <Card
                    key={announcement.id}
                    className="bg-card border-border hover:border-accent transition-colors cursor-pointer"
                    onClick={() => setSelectedAnnouncement(announcement)}
                  >
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={announcement.image || "/placeholder.svg"}
                        alt="Announcement"
                        className="w-full h-full object-cover"
                      />
                      <Badge className={`absolute top-3 left-3 ${getTypeColor(announcement.type)}`}>
                        {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                      </Badge>
                      {!isValidAnnouncement(announcement.validity) && (
                        <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                          Expired
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <p className="text-foreground text-sm leading-relaxed line-clamp-3">{announcement.content}</p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(announcement.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Valid until {new Date(announcement.validity).toLocaleDateString()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockGymPhotos.map((photo) => (
                  <Card key={photo.id} className="bg-card border-border hover:border-accent transition-colors">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                      <img
                        src={photo.image || "/placeholder.svg"}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">{photo.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground">{photo.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Latest Announcements Sidebar */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-primary" />
                  Latest Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockAnnouncements.slice(0, 3).map((announcement) => (
                  <div key={announcement.id} className="border-b border-border pb-3 last:border-b-0">
                    <Badge className={`mb-2 ${getTypeColor(announcement.type)} text-xs`}>{announcement.type}</Badge>
                    <p className="text-sm text-foreground line-clamp-2 leading-relaxed">{announcement.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(announcement.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Gallery Preview */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-accent" />
                  Facility Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {mockGymPhotos.slice(0, 4).map((photo) => (
                    <div key={photo.id} className="aspect-square relative overflow-hidden rounded-lg">
                      <img
                        src={photo.image || "/placeholder.svg"}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  onClick={() => setActiveView("gallery")}
                >
                  View All Photos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Announcement Detail Modal/Panel */}
        {selectedAnnouncement && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className={getTypeColor(selectedAnnouncement.type)}>
                    {selectedAnnouncement.type.charAt(0).toUpperCase() + selectedAnnouncement.type.slice(1)}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedAnnouncement(null)}
                    className="text-foreground hover:text-accent"
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={selectedAnnouncement.image || "/placeholder.svg"}
                    alt="Announcement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground leading-relaxed mb-4">{selectedAnnouncement.content}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Posted: {new Date(selectedAnnouncement.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Valid until: {new Date(selectedAnnouncement.validity).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
