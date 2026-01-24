import { ExternalLink, Github, Database, Terminal, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const featuredProjects = [
  {
    title: "C&R Streetwear",
    description:
      "Plataforma Full Stack de vendas online. Integração com Mercado Pago, Supabase e API Hono. Interface moderna com Shadcn UI.",
    image: "CRPROJECT.png", 
    technologies: ["React", "Supabase", "Mercado Pago", "Shadcn UI"],
    github: "https://github.com/Ravas7/C-R-STREET1",
    live: "https://crstreet.com.br",
    icon: ShoppingBag,
  },
  {
    title: "Sistema SIMCON (Gestão de Contatos)",
    description:
      "Aplicação de alta performance em C. Utiliza alocação dinâmica de memória, manipulação de arquivos binários para persistência e arquitetura modular. Inclui funcionalidades de exportação (CSV), busca e ordenação via QuickSort.",
    image: null, 
    technologies: ["C", "Makefiles", "Binary Files", "Structs", "Ponteiros"],
    github: "https://github.com/Ravas7", 
    live: null, 
    icon: Terminal,
  },
  {
    title: "API de Gerenciamento",
    description:
      "API RESTful robusta para gerenciamento de dados. Foco em endpoints CRUD, tratamento de erros e banco de dados SQL.",
    image: null,
    technologies: ["Python", "Flask", "SQLAlchemy", "Insomnia"],
    github: "https://github.com/Ravas7",
    live: null,
    icon: Database,
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-bold text-white text-glow">Projetos</h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className="neon-card group h-full">
              <div className="p-0 h-full flex flex-col">
                {project.image ? (
                  <div className="w-full h-52 overflow-hidden rounded-t-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 z-20 p-2 bg-black/50 backdrop-blur-md rounded-lg text-cyan-400 border border-cyan-500/30">
                      <project.icon size={20} />
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                      <project.icon size={24} />
                    </div>
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 rounded-full">
                        {tech}
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
