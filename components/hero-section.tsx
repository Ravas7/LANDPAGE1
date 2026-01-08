"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// --- SEUS LINKS ATUALIZADOS ---
const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/Ravas7", // Atualizado
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/pedro-monteiro-ravas7", // Sugestão: verifique se é este o seu URL
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
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-20">
        
        {/* Lado Esquerdo - Texto */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary text-sm uppercase tracking-widest font-medium">
              Olá, eu sou
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
              Pedro Monteiro
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-primary">
              Desenvolvedor Full Stack
            </h2>
          </div>

          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Transformando ideias complexas em experiências digitais elegantes e funcionais. 
            Especializado em construir aplicações web modernas e escaláveis.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="rounded-full" size="lg" asChild>
              <a href="#contato">Entre em Contato</a>
            </Button>
            <Button variant="outline" className="rounded-full" size="lg" asChild>
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
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Lado Direito - Foto */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center animate-in fade-in zoom-in duration-1000">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
                {/* CORREÇÃO AQUI: Adicionado /LANDPAGE1 para funcionar no GitHub Pages */}
                <img 
                  src="/LANDPAGE1/profile.png" 
                  alt="Pedro Monteiro" 
                  className="w-full h-full object-cover" 
                />
              </div>
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
