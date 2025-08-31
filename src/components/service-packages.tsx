import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Rocket, TrendingUp } from 'lucide-react'
import Link from "next/link"

const launchFeatures = [
  "Podcast Editing – professional edit of 1–2 hr episodes (audio + video polish)",
  "YouTube Upload – formatted and ready for channel growth",
  "Clip Creation – 10 engaging short clips per episode (Reels, Shorts, LinkedIn, FB)",
  "Repurposed Reels – optimized for vertical platforms",
  "Social Captions – written copy for every clip/post",
  "LinkedIn Posts – 2–3 posts per episode (thought-leadership style)",
  "Content Calendar – clear schedule for when/where to post",
  "Support – quick revisions via email/chat",
]

const scaleFeatures = [
  "Everything in Launch",
  "YouTube Channel Growth – SEO titles, descriptions, and thumbnail support",
  "Clip Creation – 20+ clips per episode, distributed across Shorts, Insta Reels, FB, LinkedIn",
  "LinkedIn Authority Posts – 3–5 posts per week crafted from podcast insights",
  "Hands-Off Posting & Scheduling – we publish everywhere for you",
  "Engagement Boosting – hashtags, formatting, posting optimization",
  "Performance Snapshot – monthly report of reach, engagement & growth",
  "Monthly Strategy Call – refine messaging, content focus, and growth tactics",
  "Priority Support – fast turnaround and direct access",
]

export default function ServicePackagesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">Find Your Perfect Fit</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
            Flexible packages to launch or scale your podcast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="flex flex-col bg-card border-border/50">
            <CardHeader>
              <CardTitle className="font-normal pt-4 text-2xl flex items-center gap-2">
                <Rocket className="w-6 h-6 text-secondary" />
                Launch Package
              </CardTitle>
              <CardDescription className="font-light text-foreground/60 pt-1">From podcast recording to a full week of content.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {launchFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" style={{color: '#8acc98'}}/>
                    <span className="font-light text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-light italic text-foreground/70 bg-muted/30 p-4 rounded-lg">
                <span className="font-normal not-italic">💡 Outcome:</span> “Turn every podcast into a mini content machine across all platforms without lifting a finger.”
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full" asChild><Link href="#contact">Get Started</Link></Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col bg-card border-primary/70 ring-2 ring-primary/20 relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
            <CardHeader>
              <CardTitle className="font-normal pt-4 text-2xl flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Scaling Package
              </CardTitle>
              <CardDescription className="font-light text-foreground/60 pt-1">Your podcast transformed into a complete content engine.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {scaleFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
                    <span className="font-light text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-light italic text-foreground/70 bg-muted/30 p-4 rounded-lg">
                <span className="font-normal not-italic">💡 Outcome:</span> “Your podcast becomes a growth engine — driving authority, leads, and brand visibility across every major platform.”
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild><Link href="#contact">Choose Scaling</Link></Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
