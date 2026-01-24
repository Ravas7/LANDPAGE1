"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Github, href: "https://github.com/Ravas7", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/pedro-monteiro-ravas7", label: "LinkedIn" },
  { icon: Mail, href: "mailto:predroprem7@gmail.com", label: "Email" },
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
      {/* Luzes de fundo ambientais */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono tracking-wider">
              OLÁ, EU SOU
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-glow">
              Pedro Monteiro
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Desenvolvedor Full Stack
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Transformando ideias complexas em experiências digitais elegantes e funcionais. 
            Especializado em interfaces modernas com performance e design futurista.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full neon-button h-12 px-8 font-bold text-md" asChild>
              <a href="#contato">Entre em Contato</a>
            </Button>
            <Button variant="outline" className="rounded-full border-2 border-purple-500/50 hover:bg-purple-500/10 h-12 px-8 text-white hover:text-white" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all hover:scale-110"
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end relative">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full neon-card flex items-center justify-center p-1.5 overflow-hidden">
             <img 
                src="profile.png" 
                alt="Pedro Monteiro" 
                className="w-full h-full object-cover rounded-full" 
              />
          </div>
        </div>
      </div>

      <a href="#sobre" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50 hover:text-cyan-400 animate-bounce transition-colors">
        <ArrowDown size={32} />
      </a>
    </section>
  )
}
