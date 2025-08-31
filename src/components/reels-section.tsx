'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function ReelsSection() {
  const mockups = [
    {
      src: "https://picsum.photos/270/480?random=1",
      alt: "Mobile mockup 1",
      aiHint: "man talking",
      rotation: "-rotate-12",
      width: 240,
      height: 480,
      containerClass: "w-[240px] h-[480px] bg-neutral-800 rounded-[36px] p-2.5 shadow-2xl shadow-primary/20"
    },
    {
      src: "https://picsum.photos/270/480?random=2",
      alt: "Mobile mockup 2",
      aiHint: "woman podcasting",
      rotation: "",
      width: 260,
      height: 520,
      containerClass: "w-[260px] h-[520px] bg-neutral-800 rounded-[40px] p-3 shadow-2xl shadow-secondary/20 relative z-10"
    },
    {
      src: "https://picsum.photos/270/480?random=3",
      alt: "Mobile mockup 3",
      aiHint: "podcast guest",
      rotation: "rotate-12",
      width: 240,
      height: 480,
      containerClass: "w-[240px] h-[480px] bg-neutral-800 rounded-[36px] p-2.5 shadow-2xl shadow-primary/20"
    },
  ]
  return (
    <section className="py-16 sm:py-24 bg-card/20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
            From Podcast to Viral Reels
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
            We transform your long-form content into engaging, short-form videos ready for social media.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:flex justify-center items-center gap-12">
          {mockups.map((mockup, index) => (
            <div key={index} className={`transform ${mockup.rotation}`}>
              <div className={mockup.containerClass.replace('relative z-10', '')}>
                <div className="w-full h-full bg-black rounded-[26px] overflow-hidden">
                  <Image
                    src={mockup.src}
                    alt={mockup.alt}
                    width={mockup.width}
                    height={mockup.height}
                    className="object-cover w-full h-full"
                    data-ai-hint={mockup.aiHint}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="sm:hidden">
            <Carousel opts={{ loop: true }} className="w-full max-w-xs mx-auto">
                <CarouselContent>
                    {mockups.map((mockup, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <div className={mockup.containerClass}>
                                    <div className="w-full h-full bg-black rounded-[28px] overflow-hidden">
                                        <Image
                                            src={mockup.src}
                                            alt={mockup.alt}
                                            width={mockup.width}
                                            height={mockup.height}
                                            className="object-cover w-full h-full"
                                            data-ai-hint={mockup.aiHint}
                                        />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>

      </div>
    </section>
  )
}
