"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "Working with MagnetPod was a game-changer. Our production quality skyrocketed, and our audience has doubled. They are true professionals.",
    name: "Sarah Jones",
    title: "Host, 'Tech Unfiltered'",
    avatar: "SJ",
    image: "https://picsum.photos/100/100?random=1",
    dataAiHint: 'woman portrait',
  },
  {
    quote: "The holistic content approach is incredible. I now have show notes, social clips, and blog posts for every episode, all handled by their team. It's saved me so much time.",
    name: "Michael Chen",
    title: "Creator, 'The Founder's Journey'",
    avatar: "MC",
    image: "https://picsum.photos/100/100?random=2",
    dataAiHint: 'man portrait',
  },
  {
    quote: "As a new podcaster, their Launch package was perfect. They guided me through every step and made the whole process seamless and stress-free.",
    name: "Emily Rodriguez",
    title: "Host, 'Creative Minds'",
    avatar: "ER",
    image: "https://picsum.photos/100/100?random=3",
    dataAiHint: 'woman smiling',
  },
]

export default function TestimonialSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-card/20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">Trusted by Top Podcasters</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>
        
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between bg-black/30 border-secondary/20">
                    <CardContent className="p-6 flex flex-col justify-between flex-grow">
                      <blockquote className="text-lg font-light text-foreground/80 mb-6 flex-grow">
                        “{testimonial.quote}”
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} width={100} height={100}/>
                          <AvatarFallback style={{backgroundColor: '#8acc98', color: '#000'}}>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-normal text-foreground">{testimonial.name}</p>
                          <p className="text-sm font-light text-foreground/60">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
