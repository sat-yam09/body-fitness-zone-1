import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Users, Trophy } from "lucide-react"
import MembershipPage from "@/app/membership/page"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Transform Your <span className="text-primary">Body</span>, <span className="text-accent">Elevate</span>{" "}
                Your Life
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Welcome to Body Fitness Zone - where fitness meets excellence. Join our community of dedicated athletes
                and transform your body with professional guidance and state-of-the-art equipment.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">5</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="MembershipPage">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  View Membership Plans
                </Button>
              </a>
            </div>
          </div>

          {/* Image Right */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-card border border-border">
              <img
                src="/professional-gym-interior-with-modern-equipment-an.jpg"
                alt="Body Fitness Zone gym interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-6 shadow-lg">
              <div className="text-sm text-muted-foreground">Join Today</div>
              <div className="text-2xl font-bold text-primary">$49/month</div>
              <div className="text-sm text-accent">No commitment required</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
