import Header from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Heart, Rocket } from 'lucide-react'
import TestimonialSection from '@/components/testimonial-section'
import FaqSection from '@/components/faq-section'

const values = [
    {
        icon: <Rocket className="w-8 h-8 text-primary" />,
        title: "Client-Obsessed",
        description: "Your success is our success. We are deeply committed to understanding your goals and delivering results that exceed expectations.",
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-secondary" />,
        title: "Uncompromising Quality",
        description: "From audio fidelity to strategic distribution, we uphold the highest standards to ensure your brand is represented with excellence.",
    },
    {
        icon: <Heart className="w-8 h-8" style={{color: '#8acc98'}} />,
        title: "Authentic Partnership",
        description: "We work as an extension of your team, fostering transparent communication and a true partnership built on trust and mutual respect.",
    },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        {/* About Us Hero Section */}
        <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
             <div className="absolute inset-0 z-0">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            </div>
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-foreground/90 leading-tight">
              We're Not An Agency. <br /> We're Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Growth Partner.</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg font-light text-foreground/70">
              At MagnetPod Studios, we believe in building more than just podcasts—we build strategic assets that drive authority, generate deal flow, and create lasting impact for founders and coaches.
            </p>
          </div>
        </section>
        
        {/* Our Story / Values Section */}
        <section className="py-16 sm:py-24 bg-card/20">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">Our Story</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
                        The principles that guide our work and partnerships.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                    <Card key={index} className="bg-card border-border/50 text-center p-2 transition-all duration-300 hover:border-secondary/50 hover:-translate-y-1">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-muted/50 rounded-full mb-4">
                        {value.icon}
                        </div>
                        <CardTitle className="font-normal text-2xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2 font-light text-foreground/60">
                        {value.description}
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-black">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">Ready to Amplify Your Voice?</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
                    Let's discuss how we can partner to build and scale your podcast into a powerful asset for your brand.
                 </p>
                 <Button className="mt-8 rounded-full border border-white/80 bg-black hover:bg-secondary hover:text-secondary-foreground uppercase tracking-wider text-xs px-8 py-6" variant="outline" asChild>
                    <Link href="/#contact">
                        Book a Discovery Call
                    </Link>
                </Button>
            </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />
        
      </main>
      <FooterSection />
    </div>
  )
}
