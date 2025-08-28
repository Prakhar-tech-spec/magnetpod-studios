import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="text-center py-24 sm:py-32 lg:py-48">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/60 leading-tight">
            Amplify Your Voice.
            <br />
            <span className="text-primary">Magnetize</span> Your Audience.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl font-light text-foreground/70">
            We're the creative agency that turns your podcast into a must-listen experience. From launch to scale, we handle the production so you can focus on your message.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Book a Free Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
