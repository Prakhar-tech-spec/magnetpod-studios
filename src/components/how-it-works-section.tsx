import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Search, Mic, BarChart, Rocket } from "lucide-react"

const steps = [
  {
    icon: <Search className="w-8 h-8 text-secondary" />,
    title: "1. Discovery & Strategy",
    description: "We dive deep into your brand and goals to craft a unique podcast strategy that resonates with your target audience.",
  },
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: "2. Professional Production",
    description: "From recording to editing and mixing, we ensure your audio is crisp, clear, and professional-sounding every time.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-accent" />,
    title: "3. Content Amplification",
    description: "We repurpose your podcast into show notes, social media clips, and articles, maximizing your content's reach.",
  },
  {
    icon: <Rocket className="w-8 h-8" style={{color: '#8acc98'}}/>,
    title: "4. Growth & Analytics",
    description: "We provide detailed analytics and growth strategies to help you expand your audience and measure your impact.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-border/50 text-center p-2 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="p-4 bg-muted/50 rounded-full mb-4">
                  {step.icon}
                </div>
                <CardTitle className="font-normal">{step.title}</CardTitle>
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
