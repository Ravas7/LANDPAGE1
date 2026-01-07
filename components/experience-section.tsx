"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Empresa Atual",
    role: "Desenvolvedor Full Stack Sênior",
    period: "2024 — Presente",
    url: "https://empresa.com",
    description: [
      "Desenvolvo e mantenho componentes críticos utilizados na construção do frontend de toda a plataforma.",
      "Trabalho em estreita colaboração com equipes multifuncionais, incluindo desenvolvedores, designers e gerentes de produto.",
      "Implemento e defendo as melhores práticas em acessibilidade web para entregar uma experiência de usuário inclusiva.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    company: "Startup Tech",
    role: "Desenvolvedor Front-End",
    period: "2022 — 2024",
    url: "https://startup.com",
    description: [
      "Desenvolvi e mantive código para websites de clientes usando principalmente HTML, CSS, JavaScript e React.",
      "Comuniquei manualmente com equipes multidisciplinares de engenheiros, designers e produtores diariamente.",
      "Trabalhei em diversos ambientes de desenvolvedor, incluindo clientes e projetos internos.",
    ],
    technologies: ["JavaScript", "React", "SCSS", "WordPress"],
  },
  {
    company: "Agência Digital",
    role: "Desenvolvedor Web Jr.",
    period: "2020 — 2022",
    url: "https://agencia.com",
    description: [
      "Desenvolvi e enviei código altamente interativo, responsivo e performático para diversos clientes.",
      "Trabalhei com uma variedade de linguagens, plataformas, frameworks e sistemas de gerenciamento de conteúdo.",
      "Colaborei com designers para criar interfaces de usuário atraentes e funcionais.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
]

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experiencia" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-foreground">Experiência</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all",
                  "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                  activeTab === index
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[300px]">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={cn("space-y-4 transition-opacity", activeTab === index ? "block" : "hidden")}
              >
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    {exp.role}{" "}
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      @ {exp.company}
                      <ExternalLink size={14} />
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono mt-1">{exp.period}</p>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
