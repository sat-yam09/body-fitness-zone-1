import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter, Youtube, Dumbbell, Heart } from "lucide-react"

export function SocialContactFooter() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/bodyfitneszone",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/bodyfitneszone",
      color: "hover:text-pink-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/bodyfitneszone",
      color: "hover:text-blue-400",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/bodyfitneszone",
      color: "hover:text-red-500",
    },
  ]

  const operatingHours = [
    { day: "Monday - Friday", hours: "5:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "6:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "7:00 AM - 9:00 PM" },
  ]

  const quickLinks = [
    { name: "Membership Plans", href: "/membership" },
    { name: "Personal Training", href: "/training" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <footer id="social" className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-primary">Body Fitness Zone</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transform your body, elevate your life. Join our community of fitness enthusiasts and achieve your goals
              with professional guidance and state-of-the-art equipment.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    asChild
                    className={`border-border hover:border-accent bg-transparent ${social.color} transition-colors`}
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      <IconComponent className="h-4 w-4" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-foreground font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    123 Fitness Street
                    <br />
                    Downtown District
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground font-medium">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground font-medium">Email</p>
                  <a
                    href="mailto:info@bodyfitneszone.com"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    info@bodyfitneszone.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Operating Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm text-foreground font-medium">We're Open</div>
              </div>

              {operatingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{schedule.day}</span>
                  <span className="text-sm text-foreground font-medium">{schedule.hours}</span>
                </div>
              ))}

              <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-xs text-primary font-medium">24/7 Access Available</p>
                <p className="text-xs text-muted-foreground">For premium members</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <Separator className="my-12 bg-border" />

        <div className="text-center">
          <h4 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h4>
          <p className="text-muted-foreground text-sm mb-6">
            Subscribe to our newsletter for fitness tips, class schedules, and exclusive offers
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Body Fitness Zone. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary fill-primary" />
              <span>for your fitness journey</span>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
