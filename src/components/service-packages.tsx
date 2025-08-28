import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from 'lucide-react'
import Link from "next/link"

const launchFeatures = [
  "Strategy & Concept Development",
  "Cover Art & Music Selection",
  "Recording & Editing for 4 Episodes",
  "Show Notes & Transcriptions",
  "Distribution to All Major Platforms",
]

const scaleFeatures = [
  "Everything in Launch, plus:",
  "Weekly Episode Production",
  "Advanced Audio Engineering",
  "Video Podcast Production",
  "Social Media Content Creation",
  "Audience Growth Strategy",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="flex flex-col bg-card border-border/50">
            <CardHeader>
              <Badge variant="outline" className="w-fit" style={{borderColor: '#8acc98', color: '#8acc98'}}>For New Podcasters</Badge>
              <CardTitle className="font-normal pt-4">Launch</CardTitle>
              <CardDescription className="font-light text-foreground/60 pt-1">Everything you need to get your podcast off the ground with a professional touch.</CardDescription>
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
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full" asChild><Link href="#contact">Get Started</Link></Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col bg-card border-primary/70 ring-2 ring-primary/20 relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
            <CardHeader>
              <Badge variant="outline" className="w-fit" style={{borderColor: '#f0917e', color: '#f0917e'}}>For Established Podcasters</Badge>
              <CardTitle className="font-normal pt-4">Scale</CardTitle>
              <CardDescription className="font-light text-foreground/60 pt-1">A comprehensive solution to grow your show and turn it into a content machine.</CardDescription>
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
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild><Link href="#contact">Choose Scale</Link></Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
