"use client"

import Link from 'next/link'
import { useState } from 'react'
import { X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu"


const navLinks = [
  { href: '/ai-studio', label: 'AI STUDIO' },
  { href: '/clipping', label: 'CLIPPING' },
  { href: '#faq', label: 'CASE STUDIES' },
]

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 16H20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
                <Link href="/#services">Launch Package</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#services">Scale Package</Link>
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
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                  {isOpen ? <X className="w-6 h-6" /> : <MenuIcon />}
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black border-border/40" align="end">
                 <DropdownMenuSub>
                   <DropdownMenuSubTrigger>Podcasting</DropdownMenuSubTrigger>
                   <DropdownMenuSubContent className="bg-black border-border/40">
                     <DropdownMenuItem asChild><Link href="/#services">Launch Package</Link></DropdownMenuItem>
                     <DropdownMenuItem asChild><Link href="/#services">Scale Package</Link></DropdownMenuItem>
                   </DropdownMenuSubContent>
                </DropdownMenuSub>
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Button className="w-full" variant="secondary" asChild>
                    <Link href="#contact">Book a call</Link>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
