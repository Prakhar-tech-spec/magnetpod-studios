import Header from '@/components/header'
import ReelsSection from '@/components/reels-section'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Video, Film, Share2, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FaqSection from '@/components/faq-section'


const features = [
    {
      icon: <Film className="w-8 h-8 text-primary" />,
      title: "Viral-Potential Clips",
      description: "We analyze your long-form content to identify and extract 10-20 high-impact moments poised to go viral.",
    },
    {
      icon: <Share2 className="w-8 h-8 text-secondary" />,
      title: "Multi-Platform Distribution",
      description: "Your clips are formatted and strategically deployed across YouTube Shorts, Instagram Reels, TikTok, LinkedIn, and X.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" style={{color: '#8acc98'}} />,
      title: "Growth-Focused Strategy",
      description: "It's not just about posting. We implement a content strategy designed to maximize reach, engagement, and audience growth.",
    },
]

export default function ClippingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
             <div className="absolute inset-0 z-0">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            </div>
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-foreground/90 leading-tight">
              We Clip Your Podcasts Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Viral Reels</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg font-light text-foreground/70">
              Stop letting your long-form content collect dust. We dive into your podcasts and extract high-impact, viral-potential clips, perfectly formatted and strategically deployed to grow your brand.
            </p>
             <Button className="mt-8 rounded-full border border-white/80 bg-black hover:bg-secondary hover:text-secondary-foreground uppercase tracking-wider text-xs px-8 py-6" variant="outline" asChild>
                <Link href="#contact">
                    <Video className="mr-2 h-4 w-4" />
                    Get Your Clips
                </Link>
            </Button>
          </div>
        </section>

        {/* Reels Showcase */}
        <ReelsSection />
        
        {/* Why it works Section */}
        <section className="py-16 sm:py-24 bg-black">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">Your Content is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Underperforming</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
                        You're creating amazing long-form content, but its potential is trapped. One podcast episode can be a goldmine of dozens of shareable moments, but finding and producing them is a full-time job.
                    </p>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-card/20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">The All-In-One Clipping <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Solution</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
                        From raw recording to a full-funnel social media strategy. Here's what you get.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="bg-card border-border/50 text-center p-2 transition-all duration-300 hover:border-secondary/50 hover:-translate-y-1">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-muted/50 rounded-full mb-4">
                        {feature.icon}
                        </div>
                        <CardTitle className="font-normal text-2xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2 font-light text-foreground/60">
                        {feature.description}
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </section>
        
        <FaqSection />
      </main>
      <FooterSection />
    </div>
  )
}
