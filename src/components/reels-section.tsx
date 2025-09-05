'use client'

import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Volume2, VolumeX } from "lucide-react"

const mockups = [
  {
    src: "https://res.cloudinary.com/dj88p3xio/video/upload/v1757055850/Sometimes_a_product_fails_not_because_it_was_bad_but_because_of_the_story_we_told_around_it.Nano_wasn_t_just_a_small_car_it_became_a_symbol_of_limitation._Not_because_of_its_size_but_because_we_kept_calling_it_affo_azltwx.mp4",
    alt: "Mobile mockup 1",
    rotation: "-rotate-12",
    containerClass: "w-[240px] h-[480px] bg-neutral-800 rounded-[36px] p-2.5 shadow-2xl shadow-primary/20"
  },
  {
    src: "https://res.cloudinary.com/dj88p3xio/video/upload/v1757055849/Tried_something_new_felt_very_excited_creating_this_let_me_know_what_you_think_about_this._Shou_ea20rt.mp4",
    alt: "Mobile mockup 2",
    rotation: "",
    containerClass: "w-[260px] h-[520px] bg-neutral-800 rounded-[40px] p-3 shadow-2xl shadow-secondary/20"
  },
  {
    src: "https://res.cloudinary.com/dj88p3xio/video/upload/v1757055849/videoplayback_vgqb1x.mp4",
    alt: "Mobile mockup 3",
    rotation: "rotate-12",
    containerClass: "w-[240px] h-[480px] bg-neutral-800 rounded-[36px] p-2.5 shadow-2xl shadow-primary/20"
  },
]

interface MutedStates {
  [key: number]: boolean;
}

export default function ReelsSection() {
  const [mutedStates, setMutedStates] = useState<MutedStates>({
    0: true,
    1: true,
    2: true,
  });

  const toggleMute = (index: number) => {
    setMutedStates(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const VideoMockup = ({ mockup, index, isMuted, onToggleMute }: { mockup: typeof mockups[0], index: number, isMuted: boolean, onToggleMute: (index: number) => void }) => (
    <div className={`transform ${mockup.rotation}`}>
      <div className={`${mockup.containerClass} relative`}>
        <div className="w-full h-full bg-black rounded-[26px] overflow-hidden relative">
          <video
            src={mockup.src}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="object-cover w-full h-full"
          />
          <button
            onClick={() => onToggleMute(index)}
            className="absolute top-4 left-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );

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
              <div className={`${mockup.containerClass.replace('relative z-10', '')} relative`}>
                <div className="w-full h-full bg-black rounded-[26px] overflow-hidden">
                  <video
                    src={mockup.src}
                    autoPlay
                    loop
                    muted={mutedStates[index]}
                    playsInline
                    className="object-cover w-full h-full"
                  />
                   <button
                    onClick={() => toggleMute(index)}
                    className="absolute top-4 left-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    aria-label={mutedStates[index] ? "Unmute video" : "Mute video"}
                  >
                    {mutedStates[index] ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
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
                                <div className={`${mockup.containerClass} relative`}>
                                    <div className="w-full h-full bg-black rounded-[28px] overflow-hidden">
                                        <video
                                            src={mockup.src}
                                            autoPlay
                                            loop
                                            muted={mutedStates[index]}
                                            playsInline
                                            className="object-cover w-full h-full"
                                        />
                                         <button
                                          onClick={() => toggleMute(index)}
                                          className="absolute top-4 left-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                                          aria-label={mutedStates[index] ? "Unmute video" : "Mute video"}
                                        >
                                          {mutedStates[index] ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                        </button>
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
