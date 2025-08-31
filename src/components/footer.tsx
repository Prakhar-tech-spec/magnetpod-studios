import { Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function FooterSection() {
  const footerNavLinks = [
    { href: '#services', label: 'Podcasting' },
    { href: '#how-it-works', label: 'AI Studio' },
    { href: '#reels', label: 'Clipping' },
    { href: '#faq', label: 'Case Studies' },
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Careers' },
    { href: '#', label: 'Blogs' },
  ]

  return (
    <footer id="contact" className="bg-black border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-normal text-primary">
              MagnetPod <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e97fe] to-[#23264a]">Studios</span>
            </h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors p-2 bg-secondary/20 rounded-full"><Twitter className="w-5 h-5"/></Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors p-2 bg-secondary/20 rounded-full"><Instagram className="w-5 h-5"/></Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors p-2 bg-secondary/20 rounded-full"><Linkedin className="w-5 h-5"/></Link>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {footerNavLinks.map((link) => (
              <Link key={`${link.href}-${link.label}`} href={link.href} className="text-foreground/80 hover:text-primary transition-colors font-light text-sm">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black/50 border-t border-border/20 py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-light text-foreground/50">
              &copy; {new Date().getFullYear()} MagnetPod Studios. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  )
}
