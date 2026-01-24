"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/Ravas7",
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/pedro-monteiro-ravas7",
    label: "LinkedIn" 
  },
  { 
    icon: Mail, 
    href: "mailto:predroprem7@gmail.com", 
    label: "Email" 
  },
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Efeito de luz de fundo opcional */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-20">
        
        <div className="space-y-6 z-10">
          <div className="space-y-2">
            <p className="text-primary text-sm uppercase tracking-widest font-medium font-mono">
              Olá, eu sou
            </p>
            
            {/* APLICANDO O BRILHO NO TEXTO AQUI: className="text-glow" */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance text-glow">
              Pedro Monteiro
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-primary/90">
              Desenvolvedor Full Stack
            </h2>
          </div>

          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Transformando ideias complexas em experiências digitais elegantes e funcionais. 
            Especializado em construir aplicações web modernas e escaláveis.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* Botões com brilho neon */}
            <Button className="rounded-full neon-blue transition-all duration-300 hover:scale-105" size="lg" asChild>
              <a href="#contato">Entre em Contato</a>
            </Button>
            <Button variant="outline" className="rounded-full border-primary/50 hover:neon-purple transition-all duration-300" size="lg" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:neon-blue transition-all p-2 rounded-lg"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end z-10">
          <div className="relative">
            {/* Círculo externo animado */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center animate-in fade-in zoom-in duration-1000 blur-md absolute" />
            
            {/* APLICANDO A BORDA BRILHANTE NA FOTO: className="border-glow" */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-glow flex items-center justify-center relative z-20 bg-background/50 backdrop-blur-sm">
              <img 
                src="profile.png" 
                alt="Pedro Monteiro" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
