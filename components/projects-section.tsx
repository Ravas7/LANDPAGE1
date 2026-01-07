import { ExternalLink, Github, Database, Terminal } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// --- SEUS PROJETOS DE ESTUDO ---
const featuredProjects = [
  {
    title: "API de Gerenciamento (Estudo)",
    description:
      "Desenvolvimento de uma API RESTful para gerenciamento de dados. Foco na estruturação correta dos endpoints, tratamento de erros e conexão eficiente com banco de dados.",
    image: null, // Deixei null para não quebrar se não tiver imagem
    technologies: ["Python", "Flask/Django", "SQL", "Insomnia"],
    github: "https://github.com/SEU_USUARIO",
    live: null, 
    icon: Database,
  },
  {
    title: "Algoritmos e Estrutura de Dados",
    description:
      "Repositório contendo implementações de algoritmos de ordenação, busca e estruturas de dados em C desenvolvidos durante o curso.",
    image: null,
    technologies: ["Linguagem C", "Lógica", "Estrutura de Dados"],
    github: "https://github.com/SEU_USUARIO",
    live: null,
    icon: Terminal,
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-foreground">Projetos Acadêmicos</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 bg-card/50 hover:border-primary/50 transition-colors">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <project.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ver código no GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 text-xs font-mono text-primary bg-primary/5 border border-primary/20 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
