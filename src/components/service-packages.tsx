import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Rocket, TrendingUp } from 'lucide-react'
import Link from "next/link"

const launchFeatures = [
  "Professional Podcast Editing",
  "Formatted YouTube Upload",
  "10 engaging short clips per episode",
  "Written social media captions",
  "2-3 LinkedIn posts per episode",
  "Content calendar and scheduling",
  "Email & chat support",
]

const scaleFeatures = [
  "Everything in Launch",
  "YouTube SEO & growth support",
  "20+ engaging short clips per episode",
  "3-5 weekly LinkedIn authority posts",
  "Hands-off posting & scheduling",
  "Monthly performance report",
  "Monthly strategy call",
  "Priority support",
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
              <p className="text-sm font-light text-foreground/70 pt-2">(Up to 4 podcasts per month)</p>
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
               <p className="text-sm font-light text-foreground/70 pt-2">(Up to 4 podcasts per month)</p>
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
