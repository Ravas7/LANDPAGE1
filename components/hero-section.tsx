"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary text-sm uppercase tracking-widest font-medium">Olá, eu sou</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">Pedro Monteiro</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-primary">Desenvolvedor Full Stack</h2>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            Sou apaixonado por criar experiências digitais acessíveis e pixel-perfect que combinam design thoughtful com
            engenharia robusta. Especializado em React, Next.js e tecnologias modernas de desenvolvimento web.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contato">Entre em Contato</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
                <img src="/professional-developer-portrait-dark-background.png" alt="Foto de perfil" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll para baixo"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
