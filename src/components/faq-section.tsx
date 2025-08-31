import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What exactly does Atomik Growth do, and how is it different from other podcast agencies?",
    answer: "click here",
  },
  {
    question: "Why do founders launch podcasts?",
    answer: "click here",
  },
  {
    question: "What distinguishes an episode that gets traction from one that doesn’t?",
    answer: "click here",
  },
  {
    question: "Do you handle recording logistics if we prefer in-person interviews?",
    answer: "click here",
  },
  {
    question: "What if we plan to record remotely—what platforms or tools do you recommend, and how do you ensure video/audio quality?",
    answer: "click here",
  },
  {
    question: "How does the end-to-end process work— from guest booking to final distribution?",
    answer: "click here",
  },
  {
    question: "What’s the typical turnaround time for each episode—from recording to going live?",
    answer: "click here",
  },
  {
    question: "What are your pricing structures?",
    answer: "click here",
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
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-normal text-lg hover:text-primary hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="font-light text-foreground/70 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
