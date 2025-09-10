import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Search,
  BarChart3,
  FileText,
  Lightbulb,
  TrendingUp,
  GraduationCap,
  Building,
  Heart,
  Cpu,
  Leaf,
  Users,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foreground to-primary/20 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty">
            Tailored research, consulting, and development solutions that create measurable impact across diverse
            sectors.
          </p>
        </div>
      </section>

      {/* Core Service Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Service Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive solutions designed to drive innovation and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Research & Insights</CardTitle>
                <CardDescription>
                  Evidence-based research solutions that inform strategic decision-making.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Innovation & Development Consulting</CardTitle>
                <CardDescription>
                  Strategic guidance to foster innovation and accelerate development initiatives.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Strategy & Capacity Building</CardTitle>
                <CardDescription>
                  Comprehensive strategies and capacity development programs for sustainable growth.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Service Offerings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <FileText className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Applied Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Practical research solutions addressing real-world challenges and opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Market Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive market analysis and competitive intelligence services.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <Building className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Policy Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Evidence-based policy analysis and development support.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">R&D Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Strategic management of research and development initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Innovation Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Strategic frameworks for fostering innovation and competitive advantage.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Training & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Customized training programs and capacity building initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Delivering specialized expertise across key sectors driving African development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 bg-primary-foreground/10 p-6 rounded-lg">
              <Building className="h-8 w-8 text-primary-foreground" />
              <div>
                <h3 className="font-semibold">Public Policy & Governance</h3>
                <p className="text-sm text-primary-foreground/80">
                  Strategic policy development and governance solutions
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-primary-foreground/10 p-6 rounded-lg">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
              <div>
                <h3 className="font-semibold">Education & Skills Development</h3>
                <p className="text-sm text-primary-foreground/80">Educational innovation and workforce development</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-primary-foreground/10 p-6 rounded-lg">
              <Heart className="h-8 w-8 text-primary-foreground" />
              <div>
                <h3 className="font-semibold">Health & Life Sciences</h3>
                <p className="text-sm text-primary-foreground/80">Healthcare innovation and life sciences research</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-primary-foreground/10 p-6 rounded-lg">
              <Cpu className="h-8 w-8 text-primary-foreground" />
              <div>
                <h3 className="font-semibold">Technology & Digital Transformation</h3>
                <p className="text-sm text-primary-foreground/80">Digital innovation and technology adoption</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-primary-foreground/10 p-6 rounded-lg">
              <Leaf className="h-8 w-8 text-primary-foreground" />
              <div>
                <h3 className="font-semibold">Renewable Energy & Sustainability</h3>
                <p className="text-sm text-primary-foreground/80">
                  Sustainable energy solutions and environmental impact
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-primary-foreground/10 p-6 rounded-lg">
              <Users className="h-8 w-8 text-primary-foreground" />
              <div>
                <h3 className="font-semibold">Small Business Development & Entrepreneurship</h3>
                <p className="text-sm text-primary-foreground/80">SME support and entrepreneurship development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Let's discuss how our services can help drive innovation and create impact for your organization.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
