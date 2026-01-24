"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // MUDANÇA VISUAL: Fundo escuro com borda brilhante suave
        isScrolled 
          ? "bg-[#020617]/80 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)] py-4" 
          : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* LOGO PEDRO MONTEIRO */}
          <a href="#" className="text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors flex items-center gap-2 group">
            <span className="text-cyan-400 group-hover:text-white transition-colors">&lt;</span>
            <span className="text-glow group-hover:neon-text transition-all">Pedro Monteiro</span>
            <span className="text-cyan-400 group-hover:text-white transition-colors">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "text-sm font-medium tracking-wide transition-all duration-300 relative group py-2",
                      activeSection === item.href.replace("#", "") 
                        ? "text-cyan-400 text-glow" 
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    {item.label}
                    {/* Linha brilhante embaixo do link ativo */}
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_#06b6d4]",
                      activeSection === item.href.replace("#", "") ? "w-full" : ""
                    )} />
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>

            {/* Ícones Sociais */}
            <div className="flex gap-4">
               <a href="https://github.com/Ravas7" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110">
                   <Github size={20} />
               </a>
               <a href="https://linkedin.com/in/pedro-monteiro-ravas7" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110">
                   <Linkedin size={20} />
               </a>
            </div>

            <Button className="neon-button rounded-full text-xs font-bold px-6 ml-2" size="sm" asChild>
                <a href="#contato">Contato</a>
            </Button>
          </div>

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
          <div className="md:hidden absolute top-full left-0 w-full bg-[#020617]/95 border-b border-cyan-500/20 backdrop-blur-xl animate-in slide-in-from-top-5 shadow-2xl">
            <ul className="flex flex-col p-6 gap-6 items-center">
              {navItems.map((item) => (
                <li key={item.href} className="w-full text-center">
                  <a
                    href={item.href}
                    className={cn(
                      "block text-lg font-medium transition-colors py-2",
                      activeSection === item.href.replace("#", "") 
                        ? "text-cyan-400" 
                        : "text-gray-300 hover:text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-6 border-t border-white/10 w-full flex justify-center gap-8">
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
      </nav>
    </header>
  )
}
