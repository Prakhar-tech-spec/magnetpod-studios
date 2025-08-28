import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mic, Scissors, Rocket } from "lucide-react"

const steps = [
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: "1. Record",
    description: "You do what you do best — record your podcast. No extra effort needed. Just send us the raw audio/video.",
  },
  {
    icon: <Scissors className="w-8 h-8 text-secondary" />,
    title: "2. Repurpose",
    description: "Our team edits your full episode and transforms it into 20+ short, branded clips + written LinkedIn posts designed to get engagement and attract clients.",
  },
  {
    icon: <Rocket className="w-8 h-8" style={{color: '#8acc98'}}/>,
    title: "3. Distribute",
    description: "We publish and schedule your content across LinkedIn, YouTube, TikTok, Instagram (or wherever your audience hangs out). You stay consistent without lifting a finger.",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">Our Proven Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
            A streamlined workflow designed for quality and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-border/50 text-center p-2 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="p-4 bg-muted/50 rounded-full mb-4">
                  {step.icon}
                </div>
                <CardTitle className="font-normal text-2xl">{step.title}</CardTitle>
                <CardDescription className="pt-2 font-light text-foreground/60">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
