import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What exactly does MagnetPod Studios do, and how is it different from other podcast agencies?",
    answer: "We’re a boutique agency that launches and scales podcasts with a focus on distribution. Built for Founders and Coaches.",
  },
  {
    question: "Why do founders launch podcasts?",
    answer: "Founders work with us primarily to demonstrate thought leadership, deepen relationships and drive quality deal flow",
  },
  {
    question: "What distinguishes an episode that gets traction from one that doesn’t?",
    answer: "Two things make a great podcast: guest quality and conversation quality. The gap in between? That’s where we shine—handling everything from repurposing content for LinkedIn and X, and grey-hat distribution strategies.",
  },
  {
    question: "What if we plan to record remotely—what platforms or tools do you recommend, and how do you ensure video/audio quality?",
    answer: "For remote recordings, we recommend platforms like Riverside or SquadCast for optimal audio and video quality. In a studio setting, our project managers collaborate with the production team to conduct thorough equipment checks, ensuring smooth recordings.",
  },
  {
    question: "How does the end-to-end process work— from guest booking to final distribution?",
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li>Podcast Editing (polish full episodes, audio mastering)</li>
        <li>Clip Creation (shorts, reels, highlights)</li>
        <li>Publishing (full episode on YouTube & podcast platforms)</li>
        <li>Social Posting (clips on LinkedIn, Instagram, TikTok, Twitter/X)</li>
        <li>Grey-Hat Distribution (boost reach with smart, non-traditional tactics)</li>
      </ul>
    ),
  },
  {
    question: "What’s the typical turnaround time for each episode—from recording to going live?",
    answer: "Our standard turnaround time from recording to release is typically 7 days, with flexibility for faster timelines when urgent.",
  },
  {
    question: "What are your pricing structures?",
    answer: "We tailor our plans to fit each podcast’s budget, with end-to-end production starting at $1,200/month.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-card/20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-foreground/70">
            Have questions? We've got answers.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
              <AccordionTrigger className="text-left font-normal text-lg hover:text-primary hover:no-underline py-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <ChevronDown className="w-5 h-5 text-secondary transition-transform duration-200" />
                  </div>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-light text-foreground/70 text-base pl-16">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
