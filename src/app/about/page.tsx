import Header from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import TestimonialSection from '@/components/testimonial-section'
import FaqSection from '@/components/faq-section'
import { Badge } from '@/components/ui/badge'

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
        
        {/* Our Story Section */}
        <section className="py-16 sm:py-24 bg-black">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                 <div className="bg-card/30 border border-border/50 rounded-3xl p-8 sm:p-12">
                    <Badge className="bg-green-900/50 text-green-300 border border-green-700/60 mb-8">Our Story</Badge>
                    <div className="space-y-6 text-foreground/80 text-lg font-light max-w-4xl">
                        <p>
                            When we started MagnetPod Studios, we'd seen too many promising podcasts stall before gaining traction. Shows would launch with excitement, strong guests, and sharp conversations—but soon lose momentum. Guest research became inconsistent. Editing slipped. Distribution lacked strategy. Good conversations went unheard.
                        </p>
                        <p className="font-medium text-foreground">
                            We knew there was a better way.
                        </p>
                        <p>
                            We built MagnetPod Studios to help Founders and Coaches launch and scale podcasts effectively. Our distributed team across 11 countries handles production, post-production, and strategic distribution.
                        </p>
                        <p className="font-medium text-foreground">
                            Important voices deserve to be heard clearly. Our job is to ensure they are.
                        </p>
                    </div>
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
