
import Header from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, BrainCircuit, Rocket, GlassWater, Briefcase, ChevronRight, PenTool } from 'lucide-react'

const perks = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "Innovate & Create",
    description: "Work on the cutting-edge of podcasting and AI, shaping the future of content creation with a talented team.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-secondary" />,
    title: "Grow With Us",
    description: "We're invested in your professional development, offering opportunities for growth, learning, and career advancement.",
  },
  {
    icon: <GlassWater className="w-8 h-8" style={{color: '#8acc98'}} />,
    title: "Thrive & Balance",
    description: "Enjoy a flexible, remote-first culture that respects your work-life balance and empowers you to do your best work.",
  },
]

const openPositions = [
    {
        role: "Lead Video Editor",
        location: "Remote",
        department: "Production",
        description: "We are looking for a Lead Video Editor to oversee all post-production for our podcast clients. You'll lead a team of editors, set creative direction, and ensure every video is polished to perfection. Deep expertise in Adobe Premiere Pro, After Effects, and color grading is a must.",
    },
    {
        role: "Content Strategist",
        location: "Remote",
        department: "Marketing",
        description: "As a Content Strategist, you will be responsible for developing and executing content marketing strategies for our clients. You'll work on everything from social media campaigns to SEO-driven blog posts, turning podcast episodes into a full-funnel marketing asset.",
    },
    {
        role: "AI Prompt Engineer",
        location: "Remote",
        department: "Technology",
        description: "Join our AI team to build and refine the prompts that power our creative studio. You will collaborate with our developers and content team to push the boundaries of what's possible with generative AI in podcasting. A creative mind and a technical background are essential.",
    }
]

export default function CareersPage() {
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
              Help Us Build The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Storytelling.</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg font-light text-foreground/70">
              We're a passionate team of creators, strategists, and technologists dedicated to amplifying voices that matter. If you're driven by innovation and creativity, we'd love to hear from you.
            </p>
             <Button className="mt-8 rounded-full border border-white/80 bg-black hover:bg-secondary hover:text-secondary-foreground uppercase tracking-wider text-xs px-8 py-6" variant="outline" asChild>
                <Link href="#open-positions">
                    <Briefcase className="mr-2 h-4 w-4" />
                    View Open Roles
                </Link>
            </Button>
          </div>
        </section>

        {/* Perks Section */}
        <section className="py-16 sm:py-24 bg-card/20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Us?</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
                        We're more than just a studio. We're a community.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {perks.map((perk, index) => (
                    <Card key={index} className="bg-card border-border/50 text-center p-2 transition-all duration-300 hover:border-secondary/50 hover:-translate-y-1">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-muted/50 rounded-full mb-4">
                        {perk.icon}
                        </div>
                        <CardTitle className="font-normal text-2xl">{perk.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2 font-light text-foreground/60">
                        {perk.description}
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </section>
        
        {/* Life at MagnetPod */}
        <section className="py-16 sm:py-24 bg-black">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MagnetPod</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
                        Creativity, collaboration, and a lot of fun.
                    </p>
                </div>
                <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[500px]">
                    <div className="col-span-12 sm:col-span-4 row-span-2 rounded-2xl overflow-hidden group">
                        <Image src="https://picsum.photos/600/800?random=4" data-ai-hint="team collaboration" alt="Team working together" width={600} height={800} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="col-span-12 sm:col-span-8 row-span-1 rounded-2xl overflow-hidden group">
                         <Image src="https://picsum.photos/800/400?random=5" data-ai-hint="creative workspace" alt="Creative workspace" width={800} height={400} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="col-span-12 sm:col-span-4 row-span-1 rounded-2xl overflow-hidden group">
                         <Image src="https://picsum.photos/600/400?random=6" data-ai-hint="podcast recording" alt="Podcast recording session" width={600} height={400} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                     <div className="col-span-12 sm:col-span-4 row-span-1 rounded-2xl overflow-hidden group">
                         <Image src="https://picsum.photos/600/400?random=7" data-ai-hint="team brainstorming" alt="Team brainstorming" width={600} height={400} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                </div>
            </div>
        </section>


        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 sm:py-24 bg-card/20">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Positions</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
                        Find your next great opportunity. We're looking for talented individuals to join our growing team.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {openPositions.map((position, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-border/50 bg-card rounded-2xl px-6">
                            <AccordionTrigger className="text-left font-normal text-lg hover:no-underline py-6">
                               <div className="flex flex-col sm:flex-row justify-between w-full sm:items-center">
                                    <div>
                                        <h3 className="text-xl font-medium text-foreground/90">{position.role}</h3>
                                        <div className="flex items-center gap-4 mt-2">
                                            <div className="flex items-center gap-2 text-sm font-light text-foreground/60">
                                                <MapPin className="w-4 h-4" />
                                                {position.location}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-light text-foreground/60">
                                                <Briefcase className="w-4 h-4" />
                                                {position.department}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-secondary group-hover:text-primary mt-4 sm:mt-0">
                                      Apply Now <ChevronRight className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-90"/>
                                    </div>
                               </div>
                            </AccordionTrigger>
                            <AccordionContent className="font-light text-foreground/70 text-base pb-6">
                                <p className="mb-6">{position.description}</p>
                                <Button>
                                    <PenTool className="mr-2 h-4 w-4" />
                                    Apply for this role
                                </Button>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
        
      </main>
      <FooterSection />
    </div>
  )
}

    