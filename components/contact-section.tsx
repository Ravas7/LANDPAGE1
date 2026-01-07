"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contato" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-3xl font-bold text-foreground">Entre em Contato</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estou atualmente aberto a novas oportunidades e minha caixa de entrada está sempre aberta. Se você tem uma
            pergunta ou apenas quer dizer olá, farei o meu melhor para responder!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Email</h3>
                <a href="mailto:seu@email.com" className="text-muted-foreground hover:text-primary transition-colors">
                  seu@email.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Telefone</h3>
                <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary transition-colors">
                  +55 (11) 99999-9999
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Localização</h3>
                <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>
            <div>
              <Textarea
                placeholder="Sua mensagem"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-secondary border-border resize-none"
              />
            </div>
            <Button type="submit" className="w-full rounded-full" size="lg">
              <Send size={18} className="mr-2" />
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
