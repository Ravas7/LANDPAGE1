import { Code2, Globe, Server, Database } from "lucide-react"

const skills = [
  {
    icon: Globe,
    title: "Frontend",
    description: "React, Next.js, Tailwind CSS, Shadcn UI",
    color: "text-cyan-400"
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Python, Hono, Supabase",
    color: "text-purple-400"
  },
  {
    icon: Database,
    title: "Database",
    description: "PostgreSQL, SQL, Modelagem de Dados",
    color: "text-blue-400"
  },
  {
    icon: Code2,
    title: "Linguagens",
    description: "JavaScript, TypeScript, Python, C",
    color: "text-green-400"
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-6 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white text-glow">Sobre Mim</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              Sou um <span className="text-cyan-400 font-medium">Desenvolvedor Full Stack</span> apaixonado por criar soluções digitais que unem performance e design.
            </p>
            <p>
              Minha jornada começou com a curiosidade de entender como as coisas funcionam por trás das telas. Hoje, dedico-me a construir aplicações robustas, desde e-commerces complexos com integração de pagamentos até APIs eficientes.
            </p>
            <p>
              Estou sempre em busca de novos desafios e tecnologias que me permitam entregar resultados de alto impacto.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-[#020617] border border-white/10 p-4 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-white/5 ${skill.color}`}>
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">{skill.title}</h3>
                    <p className="text-sm text-gray-500">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
