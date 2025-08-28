import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to launch a new podcast?",
    answer: "Our 'Launch' package is designed to get your podcast live within 4-6 weeks from our initial strategy session. This includes concept development, creating assets, and producing the first batch of episodes.",
  },
  {
    question: "Do I need my own equipment?",
    answer: "You will need a quality microphone, but we can provide recommendations based on your budget. We handle everything else related to production and editing to ensure your audio sounds professional.",
  },
  {
    question: "Can you help me get sponsors for my podcast?",
    answer: "While our primary focus is on production and content strategy, our 'Scale' package includes audience growth strategies that make your podcast more attractive to sponsors. We can offer guidance on how to approach monetization.",
  },
  {
    question: "What if I already have a podcast?",
    answer: "Our 'Scale' package is perfect for existing podcasters who want to improve their quality, offload production work, and amplify their content's reach. We can jump in at any stage of your podcasting journey.",
  },
  {
    question: "How do you measure the success of a podcast?",
    answer: "Success is measured by more than just download numbers. We track audience growth, listener engagement, and how effectively the podcast is driving your business goals. We provide regular reports to keep you informed.",
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
              <AccordionTrigger className="text-left font-normal hover:text-primary">{faq.question}</AccordionTrigger>
              <AccordionContent className="font-light text-foreground/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
