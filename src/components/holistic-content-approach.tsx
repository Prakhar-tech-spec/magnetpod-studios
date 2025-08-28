import Image from 'next/image'
import { Check } from 'lucide-react'

const features = [
  "Engaging Show Notes",
  "Viral Social Media Clips",
  "SEO-Optimized Blog Posts",
  "Compelling Audiograms",
]

export default function HolisticContentApproachSection() {
  return (
    <section className="py-16 sm:py-24 bg-card/20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">More Than Just Audio</h2>
            <p className="mt-4 text-lg font-light text-foreground/70">
              We believe a podcast is the heart of a content ecosystem. Our holistic approach transforms each episode into a suite of marketing assets, extending your reach and impact across multiple platforms.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="font-light text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://picsum.photos/600/400"
              alt="Podcast studio setup"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl shadow-primary/10"
              data-ai-hint="podcast studio"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
