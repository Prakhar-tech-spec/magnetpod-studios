import Header from '@/components/header'
import ReelsSection from '@/components/reels-section'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Video } from 'lucide-react'

export default function ClippingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-foreground">
              We Clip Your Podcasts Into Viral Reels
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg font-light text-foreground/70">
              Stop letting your long-form content collect dust. We dive into your podcasts and extract 10-20 high-impact, viral-potential clips, perfectly formatted for every social platform. Our team then deploys them across YouTube Shorts, Instagram Reels, Facebook, LinkedIn, and X (Twitter) with a strategy designed to maximize reach and engagement.
            </p>
             <Button className="mt-8 rounded-full border border-white/80 bg-black hover:bg-secondary hover:text-secondary-foreground uppercase tracking-wider text-xs" variant="outline" asChild>
                <Link href="#contact">
                    <Video className="mr-2 h-4 w-4" />
                    Get Your Clips
                </Link>
            </Button>
          </div>
        </section>
        <ReelsSection />
      </main>
      <FooterSection />
    </div>
  )
}
