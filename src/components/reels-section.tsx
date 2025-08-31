'use client'

import Image from 'next/image'

export default function ReelsSection() {
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
        <div className="relative flex justify-center items-center h-[500px]">
          <div className="absolute animate-float" style={{ transform: 'rotate(-10deg) translateX(-180px) translateY(10px) scale(0.95)' }}>
            <div className="relative w-[240px] h-[480px] bg-neutral-800 rounded-[36px] p-2.5 shadow-2xl shadow-primary/20">
              <div className="w-full h-full bg-black rounded-[26px] overflow-hidden">
                <Image
                  src="https://picsum.photos/270/480?random=1"
                  alt="Mobile mockup 1"
                  width={270}
                  height={480}
                  className="object-cover w-full h-full"
                  data-ai-hint="man talking"
                />
              </div>
            </div>
          </div>

          <div className="absolute z-10 animate-float" style={{ animationDelay: '1s' }}>
             <div className="relative w-[260px] h-[520px] bg-neutral-800 rounded-[40px] p-3 shadow-2xl shadow-secondary/20">
                <div className="w-full h-full bg-black rounded-[28px] overflow-hidden">
                    <Image
                    src="https://picsum.photos/270/480?random=2"
                    alt="Mobile mockup 2"
                    width={270}
                    height={480}
                    className="object-cover w-full h-full"
                    data-ai-hint="woman podcasting"
                    />
                </div>
            </div>
          </div>

          <div className="absolute animate-float" style={{ transform: 'rotate(10deg) translateX(180px) translateY(10px) scale(0.95)', animationDelay: '0.5s' }}>
            <div className="relative w-[240px] h-[480px] bg-neutral-800 rounded-[36px] p-2.5 shadow-2xl shadow-primary/20">
              <div className="w-full h-full bg-black rounded-[26px] overflow-hidden">
                <Image
                  src="https://picsum.photos/270/480?random=3"
                  alt="Mobile mockup 3"
                  width={270}
                  height={480}
                  className="object-cover w-full h-full"
                  data-ai-hint="podcast guest"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
