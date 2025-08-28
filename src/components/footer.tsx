import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-black border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-normal text-primary">
              MagnetPod <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e97fe] to-[#23264a]">Studios</span>
            </h3>
            <p className="mt-4 text-base font-light text-foreground/60">
              Your partner in creating unforgettable audio experiences.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors"><Twitter /></Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors"><Instagram /></Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors"><Linkedin /></Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-xl font-normal text-foreground">Get a Free Quote</h3>
            <p className="mt-2 text-base font-light text-foreground/60">
              Ready to start or scale your podcast? Let's talk.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email" className="bg-muted/50 border-border/50" />
              <Button type="submit" variant="secondary" className="flex-shrink-0">Request a Quote</Button>
            </form>
          </div>
        </div>
        <Separator className="my-12 bg-border/40" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-sm font-light text-foreground/50">
            &copy; {new Date().getFullYear()} MagnetPod Studios. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="text-sm font-light text-foreground/50 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm font-light text-foreground/50 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
