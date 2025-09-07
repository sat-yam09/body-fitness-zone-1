"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, Play, Pause } from "lucide-react"

interface Review {
  id: string
  clientName: string
  review: string
  rating: number
  date: string
  membershipDuration: string
  achievement: string
}

const reviews: Review[] = [
  {
    id: "1",
    clientName: "Jennifer Martinez",
    review:
      "Body Fitness Zone completely transformed my life! The trainers are incredibly knowledgeable and supportive. I've lost 30 pounds and gained so much confidence in just 6 months.",
    rating: 5,
    date: "2024-01-10",
    membershipDuration: "8 months",
    achievement: "Lost 30 lbs",
  },
  {
    id: "2",
    clientName: "Robert Chen",
    review:
      "The equipment is top-notch and the facility is always clean. Marcus helped me build muscle mass I never thought possible. The community here is amazing and motivating.",
    rating: 5,
    date: "2024-01-08",
    membershipDuration: "1 year",
    achievement: "Gained 15 lbs muscle",
  },
  {
    id: "3",
    clientName: "Sarah Williams",
    review:
      "As a busy mom, I thought I'd never find time for fitness. The flexible class schedules and childcare options made it possible. I feel stronger than ever!",
    rating: 5,
    date: "2024-01-05",
    membershipDuration: "6 months",
    achievement: "Improved strength",
  },
  {
    id: "4",
    clientName: "Michael Thompson",
    review:
      "After my injury, I didn't think I'd be able to work out again. The rehabilitation specialists here helped me recover and get back to peak performance.",
    rating: 5,
    date: "2024-01-03",
    membershipDuration: "10 months",
    achievement: "Full recovery",
  },
  {
    id: "5",
    clientName: "Lisa Park",
    review:
      "The yoga classes with Sarah are incredible. I've improved my flexibility and found inner peace. The mind-body connection I've developed here is life-changing.",
    rating: 5,
    date: "2023-12-28",
    membershipDuration: "4 months",
    achievement: "Better flexibility",
  },
  {
    id: "6",
    clientName: "David Johnson",
    review:
      "I've been to many gyms, but none compare to Body Fitness Zone. The personal attention, variety of equipment, and results speak for themselves.",
    rating: 5,
    date: "2023-12-25",
    membershipDuration: "2 years",
    achievement: "Consistent fitness",
  },
  {
    id: "7",
    clientName: "Amanda Rodriguez",
    review:
      "The nutrition counseling combined with personal training gave me the complete package. I've never felt healthier or more energetic in my life.",
    rating: 5,
    date: "2023-12-20",
    membershipDuration: "7 months",
    achievement: "Improved health",
  },
  {
    id: "8",
    clientName: "Kevin Lee",
    review:
      "The group fitness classes are so much fun! Emily's energy is contagious and I actually look forward to working out now. Best decision I've made.",
    rating: 5,
    date: "2023-12-18",
    membershipDuration: "5 months",
    achievement: "Love for fitness",
  },
]

export function ReviewsMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-border"}`} />
    ))
  }

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section id="reviews" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Members</span> Say
          </h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Real stories from real people who transformed their lives at Body Fitness Zone
          </p>

          {/* Marquee Controls */}
          <div className="flex justify-center mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPaused(!isPaused)}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              {isPaused ? (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Resume
                </>
              ) : (
                <>
                  <Pause className="h-4 w-4 mr-2" />
                  Pause
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Reviews */}
        <div
          className={`flex gap-6 ${isPaused ? "" : "animate-marquee"}`}
          style={{
            width: "fit-content",
            animationDuration: "60s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedReviews.map((review, index) => (
            <Card
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-80 bg-card border-border hover:border-accent transition-colors"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-6 w-6 text-accent flex-shrink-0" />
                  <div className="flex gap-1">{renderStars(review.rating)}</div>
                </div>

                {/* Review Text */}
                <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-4">{review.review}</p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-primary text-sm">{review.clientName}</h4>
                      <p className="text-xs text-muted-foreground">Member for {review.membershipDuration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-accent">{review.achievement}</div>
                      <div className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Happy Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">95%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">1000+</div>
            <div className="text-sm text-muted-foreground">Success Stories</div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
