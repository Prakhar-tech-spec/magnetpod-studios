import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import TestimonialSection from '@/components/testimonial-section'
import HowItWorksSection from '@/components/how-it-works-section'
import HolisticContentApproachSection from '@/components/holistic-content-approach'
import ServicePackagesSection from '@/components/service-packages'
import FaqSection from '@/components/faq-section'
import FooterSection from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TestimonialSection />
        <HowItWorksSection />
        <HolisticContentApproachSection />
        <ServicePackagesSection />
        <FaqSection />
      </main>
      <FooterSection />
    </div>
  )
}
