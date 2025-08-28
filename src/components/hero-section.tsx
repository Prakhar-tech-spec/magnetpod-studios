import { Badge } from '@/components/ui/badge'
import { Zap } from 'lucide-react'

const Triangle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="25"
    height="25"
    viewBox="0 0 105 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M52.5 0.999996L104.5 90.5H0.5L52.5 0.999996Z"
      stroke="white"
      strokeOpacity="0.5"
    />
  </svg>
)

const Star = ({ className }: { className?: string }) => (
    <svg 
        className={className}
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" fill="white" fillOpacity="0.8"/>
    </svg>
)

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

        {/* Decorative elements */}
        <Star className="absolute top-[20%] left-[15%] opacity-80 animate-float" />
        <div className="absolute top-[25%] right-[10%] w-2 h-2 bg-white/50 rounded-full animate-float animation-delay-2000"></div>
        <Triangle className="absolute top-1/2 left-[5%] opacity-60 animate-float animation-delay-4000 hidden sm:block" />
        <Triangle className="absolute bottom-[15%] right-[10%] opacity-60 rotate-45 animate-float animation-delay-2000 hidden sm:block" />
        <div className="absolute bottom-[10%] left-[20%] w-1.5 h-1.5 bg-white/50 rounded-full animate-float animation-delay-4000"></div>

        <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 lg:left-8 animate-float animation-delay-4000">
            <Badge variant="default" className="text-sm font-light" style={{ backgroundColor: '#f0917e', color: 'black' }}>Tech Founders</Badge>
        </div>

        <div className="hidden sm:block absolute top-1/4 right-4 sm:right-6 lg:right-8 animate-float">
             <Badge variant="default" className="text-sm font-light" style={{ backgroundColor: '#fadf7c', color: 'black' }}>General Partners</Badge>
        </div>

        <div className="text-center py-24 sm:py-32 lg:py-40">
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground/90 leading-tight flex flex-col items-center gap-4">
            <span className="relative inline-block bg-gradient-to-r from-secondary/40 to-secondary/10 px-4 sm:pl-8 sm:pr-6 py-2 border-l-4 border-secondary">
              Podcasting For Founders
            </span>
            <span className="relative inline-block bg-gradient-to-r from-primary/40 to-primary/10 px-4 sm:pl-8 sm:pr-6 py-2 border-l-4 border-primary">
              & Coaches
              <Zap className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 w-8 h-8 text-primary hidden sm:inline-block" />
            </span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl font-light text-foreground/70">
            We help venture capital funds and tech companies scale content strategies to attract quality deal flow and deepen relationships, either by starting a new podcast or optimizing an existing one.
          </p>
        </div>
      </div>
    </section>
  )
}
