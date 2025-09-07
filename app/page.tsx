import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AnnouncementSystem } from "@/components/announcement-system"
import { TrainersCarousel } from "@/components/trainers-carousel"
import { ReviewsMarquee } from "@/components/reviews-marquee"
import { SocialContactFooter } from "@/components/social-contact-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AnnouncementSystem />
      <TrainersCarousel />
      <ReviewsMarquee />
      <SocialContactFooter />
    </main>
  )
}
