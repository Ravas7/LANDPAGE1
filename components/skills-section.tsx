import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Web Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 60 },
    ],
  },
  {
    title: "Backend & Lógica",
    skills: [
      { name: "Python", level: 80 },
      { name: "Linguagem C", level: 75 },
      { name: "SQL (Banco de Dados)", level: 85 },
      { name: "Lógica de Programação", level: 90 },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Linux", level: 70 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-foreground">Habilidades</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={cn("h-full bg-primary rounded-full transition-all duration-1000 ease-out")}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
