"use client"

// --- SUA FORMAÇÃO AQUI ---
const academicHistory = [
  {
    institution: "Centro Universitário Jorge Amado (Unijorge)",
    role: "Análise e Desenvolvimento de Sistemas",
    period: "2023 — Cursando (3º Semestre)",
    url: "https://www.unijorge.edu.br/",
    description: [
      "Foco em desenvolvimento de software, lógica de programação e arquitetura de sistemas.",
      "Aprofundamento em Banco de Dados (SQL) e linguagens como Python e C.",
      "Participação em projetos acadêmicos e atividades práticas.",
    ],
    skills: ["Lógica", "Banco de Dados", "Engenharia de Software"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-foreground">Formação Acadêmica</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 pl-8 md:pl-12">
          {academicHistory.map((item, index) => (
            <div key={index} className="relative group">
              <span className="absolute -left-[41px] md:-left-[57px] top-0 h-5 w-5 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>

              <div>
                <h3 className="text-xl font-medium text-foreground flex flex-wrap gap-2 items-center">
                  {item.role}
                  <span className="text-primary">@ {item.institution}</span>
                </h3>
                <p className="text-sm text-muted-foreground font-mono mt-1 mb-4">{item.period}</p>

                <ul className="space-y-3 mb-6">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">▹</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
