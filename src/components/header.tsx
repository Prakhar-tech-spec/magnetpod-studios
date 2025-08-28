"use client"

import { useState } from 'react'
import Link from 'next/link'
import { X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const navLinks = [
  { href: '#services', label: 'AI STUDIO' },
  { href: '#how-it-works', label: 'CLIPPING' },
  { href: '#faq', label: 'CASE STUDIES' },
]

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 16H20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);


export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-normal tracking-tight text-primary">
            MagnetPod <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e97fe] to-[#23264a]">Studios</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm bg-black border border-[#333333] rounded-full p-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-foreground/80 font-light hover:bg-muted/50 hover:text-primary rounded-full px-5 py-1.5 uppercase tracking-wider text-xs">
                Podcasting
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black border-border/40">
              <DropdownMenuItem asChild>
                <Link href="#services">Launch Package</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#services">Scale Package</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/80 font-light px-5 py-1.5 rounded-full hover:bg-muted/50 uppercase tracking-wider text-xs">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <Button className="hidden md:flex rounded-full border border-white/80 bg-black hover:bg-secondary hover:text-secondary-foreground uppercase tracking-wider text-xs" variant="outline" asChild>
            <Link href="#contact">Book a call</Link>
          </Button>

          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <button onClick={() => setSheetOpen(true)}>
                  {isSheetOpen ? <X /> : <MenuIcon />}
                  <span className="sr-only">Open menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] bg-black">
                <SheetHeader className="p-4 border-b border-border/40">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                   <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                      <span className="text-lg font-normal tracking-tight text-primary">
                        MagnetPod <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e97fe] to-[#23264a]">Studios</span>
                      </span>
                    </Link>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col gap-4 p-4 text-base">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                         <button className="flex justify-between items-center w-full transition-colors hover:text-primary text-foreground/80 font-light uppercase tracking-wider text-xs">
                          <span>Podcasting</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-black border-border/40 w-[180px]">
                        <DropdownMenuItem asChild>
                          <Link href="#services" onClick={() => setSheetOpen(false)}>Launch Package</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="#services" onClick={() => setSheetOpen(false)}>Scale Package</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setSheetOpen(false)} className="transition-colors hover:text-primary text-foreground/80 font-light uppercase tracking-wider text-xs">
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-4">
                    <Button variant="secondary" className="w-full uppercase tracking-wider text-xs" asChild>
                      <Link href="#contact">Book a call</Link>
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
