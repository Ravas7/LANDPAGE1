import { ExternalLink, Github, Folder } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "Uma plataforma completa de e-commerce com carrinho de compras, processamento de pagamentos, painel administrativo e integração com APIs de entrega. Construída com foco em performance e experiência do usuário.",
    image: "/ecommerce-dashboard-dark-theme-modern.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://projeto.com",
  },
  {
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real, drag and drop, notificações e integração com calendário. Design moderno e intuitivo.",
    image: "/task-management-app-dark-theme-kanban-board.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com",
    live: "https://projeto.com",
  },
]

const otherProjects = [
  {
    title: "Portfolio Template",
    description: "Template de portfólio responsivo e customizável para desenvolvedores.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "https://projeto.com",
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard de previsão do tempo com dados em tempo real e visualizações interativas.",
    technologies: ["Next.js", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
  },
  {
    title: "Chat Application",
    description: "Aplicação de chat em tempo real com suporte a grupos e mensagens privadas.",
    technologies: ["React", "Firebase", "WebRTC"],
    github: "https://github.com",
    live: "https://projeto.com",
  },
  {
    title: "Blog CMS",
    description: "Sistema de gerenciamento de conteúdo para blogs com editor rich text.",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-foreground">Projetos em Destaque</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? "md:text-right" : ""}`}
            >
              {/* Project Image */}
              <div className={`md:col-span-7 ${index % 2 === 1 ? "md:col-start-6" : ""}`}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1 ? "md:left-0 md:text-left" : "md:right-0 md:text-right"
                } z-20`}
              >
                <p className="text-primary font-mono text-sm mb-2">Projeto em Destaque</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="bg-card p-6 rounded-lg shadow-xl mb-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 text-sm text-muted-foreground font-mono mb-4 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-start" : "md:justify-end"}`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="Ver projeto"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Outros Projetos</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <Card key={project.title} className="group bg-card hover:translate-y-[-4px] transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between">
                  <Folder className="text-primary" size={40} />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Ver projeto"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground font-mono pt-2">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
