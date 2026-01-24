import { Terminal, Layout, Database, Wrench, Code2, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Web Frontend",
    icon: Layout,
    color: "text-cyan-400", // Cor do ícone e da barra
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 60 },
    ]
  },
  {
    title: "Backend & Lógica",
    icon: Database, // Ou Code2 para representar código puro
    color: "text-purple-400",
    skills: [
      { name: "Lógica de Programação", level: 90 },
      { name: "SQL (Banco de Dados)", level: 85 },
      { name: "Python", level: 80 },
      { name: "Linguagem C", level: 75 },
    ]
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    color: "text-green-400", // Um verde neon para diferenciar
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Git / GitHub", level: 85 },
      // Adicionei Linux como extra opcional para preencher o card, 
      // mas se não quiser, pode apagar a linha abaixo:
      { name: "Linux (Básico)", level: 60 }, 
    ]
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-[#020617]">
      {/* Luz de fundo decorativa */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white text-glow">Habilidades</h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="neon-card p-6 bg-[#030b1e] hover:-translate-y-2 transition-transform duration-300">
              
              {/* Cabeçalho do Card */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                <div className={`p-2.5 rounded-xl bg-white/5 ${category.color} shadow-[0_0_10px_currentColor] bg-opacity-10`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
              </div>

              {/* Lista de Skills */}
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2 group">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className={`font-mono text-xs ${category.color}`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Barra de Progresso Neon */}
                    <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_12px_currentColor] ${category.color.replace('text-', 'bg-')}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Adicionais (Opcional, mas fica bonito no design) */}
        <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-6">Outras competências</p>
            <div className="flex flex-wrap justify-center gap-3">
                {["Comunicação", "Liderança", "Scrum", "Inglês Técnico", "Resolução de Problemas"].map((item) => (
                    <span key={item} className="px-4 py-2 border border-white/10 rounded-full text-gray-400 text-sm hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all cursor-default">
                        {item}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}
