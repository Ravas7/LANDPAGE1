import { ExternalLink, Github, Database, Terminal, ShoppingBag } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

const featuredProjects = [
  {
    title: "C&R Streetwear (E-commerce)",
    description:
      "Plataforma Full Stack de vendas online. Integração completa de pagamentos via Mercado Pago, gestão de dados e autenticação com Supabase e API otimizada com Hono. Interface moderna construída com Shadcn UI e React Hook Form para alta performance e validação.",
    image: "CRPROJECT.png", 
    technologies: ["React (Vite)", "Supabase", "Mercado Pago", "Shadcn UI", "Hono"],
    github: "https://github.com/Ravas7/C-R-STREET1",
    live: "https://crstreet.com.br",
    icon: ShoppingBag,
  },
  {
    title: "API de Gerenciamento",
    description:
      "Desenvolvimento de uma API RESTful robusta para gerenciamento de dados. Foco na estruturação correta dos endpoints (CRUD), tratamento de erros escalável e conexão eficiente com banco de dados SQL.",
    image: null, 
    technologies: ["Python", "Flask", "SQLAlchemy", "Insomnia"],
    github: "https://github.com/Ravas7", 
    live: null, 
    icon: Database,
  },
  {
    title: "Algoritmos e Estrutura de Dados",
    description:
      "Repositório de estudo contendo implementações otimizadas de algoritmos de ordenação, busca binária e estruturas de dados fundamentais em C, demonstrando forte base em lógica de programação.",
    image: null,
    technologies: ["C", "Lógica", "Estrutura de Dados"],
    github: "https://github.com/Ravas7",
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
          <h2 className="text-3xl font-bold text-foreground">Projetos</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-colors duration-300 overflow-hidden">
              {/* LÓGICA DE IMAGEM: Se tiver imagem, mostra ela. Se não, mostra o cabeçalho padrão */}
              {project.image ? (
                <div className="w-full h-48 overflow-hidden relative border-b border-border">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <div className="p-2 bg-background/80 backdrop-blur-sm rounded-lg text-primary border border-primary/20">
                      <project.icon size={20} />
                    </div>
                  </div>
                </div>
              ) : (
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                      <project.icon size={24} />
                    </div>
                  </div>
                </CardHeader>
              )}
              
              <CardContent className={`space-y-4 ${project.image ? 'pt-6' : ''}`}>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex gap-3">
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
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Ver projeto online"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
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
