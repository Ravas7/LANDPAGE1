"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#020617]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors flex items-center gap-2"
        >
          {/* AQUI ESTÁ A TROCA DO NOME */}
          <span className="text-cyan-400">&lt;</span>
          <span className="text-glow">Pedro Monteiro</span>
          <span className="text-cyan-400">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-cyan-400 hover:text-glow transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_#06b6d4]"></span>
            </Link>
          ))}
          <Button 
            className="neon-button rounded-full text-xs font-bold px-6" 
            size="sm"
            asChild
          >
            <a href="#contato">Vamos Conversar</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 hover:text-cyan-400">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#020617]/95 border-l border-white/10 backdrop-blur-xl">
            <div className="flex flex-col gap-8 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="neon-button w-full" asChild>
                <a href="#contato">Entre em Contato</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
