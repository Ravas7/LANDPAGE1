"use client"

import { Briefcase, GraduationCap, Code2, Users } from "lucide-react"

const experiences = [
  {
    type: "work",
    role: "Fundador & Desenvolvedor Full Stack",
    company: "C&R Streetwear (Projeto Próprio)",
    period: "2025 - Presente",
    description: "Desenvolvimento completo de um e-commerce de moda urbana. Responsável pela arquitetura do sistema, integração com Mercado Pago, backend com Supabase e interface moderna com React e Tailwind.",
    skills: ["React", "Supabase", "Pagamentos", "UX/UI"],
    icon: Code2,
  },
  {
    type: "education",
    role: "Análise e Desenvolvimento de Sistemas",
    company: "Unijorge",
    period: "2026 (3º Semestre)",
    description: "Formação focada em engenharia de software, algoritmos, estrutura de dados em C e gestão de projetos tecnológicos.",
    skills: ["Lógica", "C", "Gestão de Projetos"],
    icon: GraduationCap,
  },
  {
    type: "project",
    role: "Desenvolvedor Backend (TecnoGest)",
    company: "Projeto Acadêmico",
    period: "2025",
    description: "Liderança técnica no desenvolvimento de um sistema de gestão para resolver problemas de comunicação interna. Desenvolvimento de APIs e documentação.",
    skills: ["Python", "SQL", "Trabalho em Equipe"],
    icon: Users,
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white text-glow">Experiência</h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent" />
        </div>

        <div className="relative space-y-12">
          {/* Linha vertical brilhante conectando os itens */}
          <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-30 md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((item, index) => (
            <div key={index} className={`relative flex items-start gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Ícone Centralizado na Timeline */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                <div className="w-14 h-14 rounded-full bg-[#020617] border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center justify-center text-cyan-400">
                  <item.icon size={24} />
                </div>
              </div>

              {/* Conteúdo (Metade da tela no Desktop) */}
              <div className={`w-full md:w-[calc(50%-40px)] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                
                <div className="neon-card p-6 bg-[#020617]/50 backdrop-blur-sm group hover:-translate-y-1 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-mono font-bold text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
                    {item.period}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.role}
                  </h3>
                  
                  <p className="text-cyan-500/80 font-medium mb-3">
                    {item.company}
                  </p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {item.skills.map((skill) => (
                      <span key={skill} className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded hover:text-white hover:border-cyan-500/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
