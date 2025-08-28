"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#services', label: 'Services' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-normal tracking-tight text-primary">MagnetPod Studios</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/80 font-light">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <Button className="hidden md:flex" variant="secondary" asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>

          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] bg-black">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b border-border/40">
                     <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                        <span className="text-lg font-normal tracking-tight text-primary">MagnetPod Studios</span>
                      </Link>
                  </div>
                  <nav className="flex flex-col gap-4 p-4 text-base">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setSheetOpen(false)} className="transition-colors hover:text-primary text-foreground/80 font-light">
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-4">
                    <Button variant="secondary" className="w-full" asChild>
                      <Link href="#contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
