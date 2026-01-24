"use client"

import * as React from "react"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

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
          ? "bg-[#020617]/80 backdrop-blur-md border-b border-cyan-500/20 py-4 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO PEDRO MONTEIRO */}
        <a 
          href="/" 
          className="text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors flex items-center gap-2"
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="text-glow">Pedro Monteiro</span>
          <span className="text-cyan-400">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-cyan-400 hover:text-glow transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_#06b6d4]"></span>
            </a>
          ))}
          
          <div className="h-6 w-[1px] bg-white/10 mx-2"></div>

          <div className="flex gap-4">
            <a href="https://github.com/Ravas7" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/pedro-monteiro-ravas7" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <Linkedin size={20} />
            </a>
          </div>

          <Button 
            className="neon-button rounded-full text-xs font-bold px-6 ml-2" 
            size="sm"
            asChild
          >
            <a href="#contato">Vamos Conversar</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-cyan-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#020617]/95 border-b border-cyan-500/20 backdrop-blur-xl animate-in slide-in-from-top-5">
          <ul className="flex flex-col p-6 gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10 flex gap-6 justify-center">
                <a href="https://github.com/Ravas7" target="_blank" className="text-gray-400 hover:text-cyan-400">
                    <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/pedro-monteiro-ravas7" target="_blank" className="text-gray-400 hover:text-cyan-400">
                    <Linkedin size={24} />
                </a>
                <a href="mailto:predroprem7@gmail.com" className="text-gray-400 hover:text-cyan-400">
                    <Mail size={24} />
                </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
