export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-3xl font-bold text-foreground">Sobre Mim</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Sou um desenvolvedor apaixonado por criar interfaces acessíveis e pixel-perfect que combinam design
              thoughtful com engenharia robusta. Meu trabalho favorito está na interseção de design e desenvolvimento,
              criando experiências que não apenas parecem ótimas, mas são meticulosamente construídas para performance e
              usabilidade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Atualmente, trabalho como <span className="text-primary font-medium">Desenvolvedor Full Stack</span>,
              contribuindo para a criação e manutenção de componentes de UI que impulsionam o frontend de aplicações
              modernas. Trabalho em estreita colaboração com equipes multifuncionais para implementar e defender as
              melhores práticas em acessibilidade web.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No passado, tive a oportunidade de desenvolver software em diversos ambientes — desde{" "}
              <span className="text-primary font-medium">agências de publicidade</span> e{" "}
              <span className="text-primary font-medium">grandes corporações</span> até{" "}
              <span className="text-primary font-medium">startups</span> e{" "}
              <span className="text-primary font-medium">estúdios de produto digital</span>.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Tecnologias</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Tailwind CSS",
                "Git",
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
