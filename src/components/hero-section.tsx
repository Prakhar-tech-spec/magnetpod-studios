import { Badge } from '@/components/ui/badge'

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        
        <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 lg:left-8 animate-float animation-delay-4000">
            <Badge variant="default" className="text-sm font-light" style={{ backgroundColor: '#f0917e', color: 'black' }}>Tech Founders</Badge>
        </div>

        <div className="hidden sm:block absolute top-1/4 -translate-y-1/4 right-4 sm:right-6 lg:right-8 animate-float sm:top-1/4">
            <Badge variant="default" className="text-sm font-light" style={{ backgroundColor: '#fadf7c', color: 'black' }}>General Partners</Badge>
        </div>

        <div className="text-center py-24 sm:py-32 lg:py-48">
          <h1 className="text-3xl sm:text-6xl lg:text-8xl font-normal tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/60 leading-tight">
            <span className="whitespace-nowrap">Podcasting for Founders</span>
            <span className="block text-primary">& Coaches</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl font-light text-foreground/70">
            We help venture capital funds and tech companies scale content strategies to attract quality deal flow and deepen relationships, either by starting a new podcast or optimizing an existing one.
          </p>
        </div>
      </div>
    </section>
  )
}
