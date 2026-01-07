"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// --- SEUS LINKS ---
const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/SEU_USUARIO", // <--- Coloque seu GitHub aqui
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/SEU_USUARIO", // <--- Coloque seu LinkedIn aqui
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
              Back-end & Banco de Dados
            </h2>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            Estudante de Análise e Desenvolvimento de Sistemas. 
            Tenho 19 anos e foco em criar soluções robustas com <strong>Python, SQL e C</strong>.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full font-bold">
              <a href="#contato">Entre em contato</a>
            </Button>
            
            <div className="flex items-center gap-2 px-4">
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
        </div>

        {/* Lado Direito - Foto */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center animate-in fade-in zoom-in duration-1000">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
                {/* Certifique-se de que a imagem 'profile.png' está na pasta public */}
                <img 
                  src="/profile.png" 
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
