import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Fitness Street", "Downtown District", "City, State 12345"],
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(123) 456-7890", "Available during business hours", "Emergency: (123) 456-7891"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@bodyfitneszone.com", "support@bodyfitneszone.com", "We respond within 24 hours"],
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Mon-Fri: 5:00 AM - 11:00 PM", "Saturday: 6:00 AM - 10:00 PM", "Sunday: 7:00 AM - 9:00 PM"],
      action: "View Schedule",
    },
  ]

  const departments = [
    { name: "General Inquiries", email: "info@bodyfitneszone.com" },
    { name: "Membership", email: "membership@bodyfitneszone.com" },
    { name: "Personal Training", email: "training@bodyfitneszone.com" },
    { name: "Group Classes", email: "classes@bodyfitneszone.com" },
    { name: "Nutrition", email: "nutrition@bodyfitneszone.com" },
    { name: "Support", email: "support@bodyfitneszone.com" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">Contact Us</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our services, membership, or facilities? We're here to help you start your fitness
            journey.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border-border text-center">
                <CardHeader>
                  <info.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg font-bold text-foreground">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <Card className="border-border">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">First Name</label>
                        <input
                          type="text"
                          className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Last Name</label>
                        <input
                          type="text"
                          className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <input
                        type="email"
                        className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">Phone</label>
                      <input
                        type="tel"
                        className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">Department</label>
                      <select className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option value="">Select a department</option>
                        {departments.map((dept) => (
                          <option key={dept.name} value={dept.email}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">Subject</label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground">Message</label>
                      <textarea
                        rows={5}
                        className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Find Us</h2>

              {/* Map Placeholder */}
              <Card className="border-border mb-6">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Fitness Street, Downtown District</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground">Quick Contact</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Need immediate assistance? Reach out directly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Call Now</p>
                        <p className="text-sm text-muted-foreground">(123) 456-7890</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email Us</p>
                        <p className="text-sm text-muted-foreground">info@bodyfitneszone.com</p>
                      </div>
                    </div>

                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                      <p className="text-sm font-medium text-primary">Response Time</p>
                      <p className="text-xs text-muted-foreground">
                        We typically respond within 2-4 hours during business hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "What are your membership options?",
                answer:
                  "We offer Basic ($29/month), Premium ($59/month), and Elite ($99/month) memberships with varying levels of access and services.",
              },
              {
                question: "Do you offer personal training?",
                answer:
                  "Yes! We have certified personal trainers available for one-on-one sessions, small group training, and specialized programs.",
              },
              {
                question: "Can I try the gym before joining?",
                answer:
                  "We offer free facility tours and day passes so you can experience our gym before committing to a membership.",
              },
              {
                question: "What safety measures do you have in place?",
                answer:
                  "We maintain strict cleaning protocols, have trained staff on-site, and all equipment is regularly inspected and maintained.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
