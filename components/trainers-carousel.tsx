"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Award, Dumbbell } from "lucide-react"

interface Trainer {
  id: string
  name: string
  title: string
  photo: string
  experience: number
  achievements: string[]
  specializations: string[]
  bio: string
}

const trainers: Trainer[] = [
  {
    id: "1",
    name: "Marcus Johnson",
    title: "Head Personal Trainer",
    photo: "/trainer-marcus-johnson.jpg",
    experience: 8,
    achievements: ["NASM Certified", "Nutrition Specialist", "Former Athlete"],
    specializations: ["Strength Training", "Weight Loss", "Athletic Performance"],
    bio: "Marcus brings 8 years of experience helping clients achieve their fitness goals through personalized training programs.",
  },
  {
    id: "2",
    name: "Sarah Chen",
    title: "Yoga & Pilates Instructor",
    photo: "/trainer-sarah-chen.jpg",
    experience: 6,
    achievements: ["RYT-500 Certified", "Pilates Method Alliance", "Mindfulness Coach"],
    specializations: ["Hatha Yoga", "Pilates", "Flexibility Training"],
    bio: "Sarah specializes in mind-body connection through yoga and pilates, helping clients find balance and inner strength.",
  },
  {
    id: "3",
    name: "David Rodriguez",
    title: "Strength & Conditioning Coach",
    photo: "/trainer-david-rodriguez.jpg",
    experience: 10,
    achievements: ["CSCS Certified", "Olympic Lifting Coach", "Sports Medicine"],
    specializations: ["Powerlifting", "Olympic Lifting", "Injury Prevention"],
    bio: "With a decade of experience, David helps athletes and fitness enthusiasts build strength safely and effectively.",
  },
  {
    id: "4",
    name: "Emily Thompson",
    title: "Group Fitness Coordinator",
    photo: "/trainer-emily-thompson.jpg",
    experience: 5,
    achievements: ["ACE Certified", "Zumba Instructor", "HIIT Specialist"],
    specializations: ["HIIT", "Dance Fitness", "Group Classes"],
    bio: "Emily brings energy and motivation to every group class, making fitness fun and accessible for everyone.",
  },
  {
    id: "5",
    name: "Michael Park",
    title: "Rehabilitation Specialist",
    photo: "/trainer-michael-park.jpg",
    experience: 12,
    achievements: ["Physical Therapy Assistant", "Corrective Exercise", "Pain Management"],
    specializations: ["Injury Recovery", "Corrective Exercise", "Senior Fitness"],
    bio: "Michael specializes in helping clients recover from injuries and maintain long-term health through targeted exercise.",
  },
  {
    id: "6",
    name: "Lisa Wang",
    title: "Nutrition & Wellness Coach",
    photo: "/trainer-lisa-wang.jpg",
    experience: 7,
    achievements: ["Registered Dietitian", "Wellness Coach", "Meal Planning Expert"],
    specializations: ["Nutrition Counseling", "Meal Planning", "Lifestyle Coaching"],
    bio: "Lisa combines fitness training with nutritional guidance to help clients achieve comprehensive wellness goals.",
  },
]

export function TrainersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + trainers.length) % trainers.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Calculate visible trainers (show 3 on desktop, 1 on mobile)
  const getVisibleTrainers = () => {
    const visibleCount = 3
    const visible = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % trainers.length
      visible.push(trainers[index])
    }
    return visible
  }

  return (
    <section id="trainers" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Expert</span> <span className="text-accent">Trainers</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Our certified professionals are here to guide you on your fitness journey
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-3 gap-6">
              {getVisibleTrainers().map((trainer, index) => (
                <Card
                  key={`${trainer.id}-${currentIndex}-${index}`}
                  className="bg-background border-border hover:border-accent transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6">
                    {/* Trainer Photo */}
                    <div className="relative mb-6">
                      <div className="aspect-square rounded-full overflow-hidden mx-auto w-32 h-32 border-4 border-accent">
                        <img
                          src={trainer.photo || "/placeholder.svg"}
                          alt={trainer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground">{trainer.experience} Years</Badge>
                      </div>
                    </div>

                    {/* Trainer Info */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-primary mb-1">{trainer.name}</h3>
                      <p className="text-accent font-medium">{trainer.title}</p>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed">{trainer.bio}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-foreground">Achievements</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {trainer.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-border text-foreground">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Specializations */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Dumbbell className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Specializations</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {trainer.specializations.map((spec, idx) => (
                          <Badge key={idx} className="text-xs bg-accent text-accent-foreground">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-background border-border hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-background border-border hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {trainers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-border hover:bg-accent"
              }`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-muted-foreground hover:text-accent"
          >
            {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Expert Trainers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">1000+</div>
            <div className="text-sm text-muted-foreground">Clients Trained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">5</div>
            <div className="text-sm text-muted-foreground">Years Average Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
