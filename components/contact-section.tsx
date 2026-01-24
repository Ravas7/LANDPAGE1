"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-24 px-6 relative overflow-hidden">
      {/* Luz de fundo suave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-2xl text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-white text-glow">Vamos Trabalhar Juntos?</h2>
          <p className="text-gray-400 text-lg">
            Tem um projeto em mente ou apenas quer trocar uma ideia? 
            Me mande uma mensagem!
          </p>
        </div>

        <div className="neon-card p-8 backdrop-blur-md bg-[#020617]/80">
          <form className="space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Nome</label>
                <Input 
                  placeholder="Seu nome" 
                  className="bg-[#0f172a] border-white/10 text-white focus:border-cyan-500 focus:ring-cyan-500/20 h-11"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <Input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="bg-[#0f172a] border-white/10 text-white focus:border-cyan-500 focus:ring-cyan-500/20 h-11"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Mensagem</label>
              <Textarea 
                placeholder="Como posso te ajudar?" 
                className="bg-[#0f172a] border-white/10 text-white focus:border-cyan-500 focus:ring-cyan-500/20 min-h-[150px]"
              />
            </div>

            <Button className="w-full neon-button h-12 text-md font-bold group">
              Enviar Mensagem
              <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-2 text-gray-400">
            <Mail size={18} className="text-cyan-500" />
            <span>predroprem7@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}
