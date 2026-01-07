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
              Sou o <strong>Pedro Monteiro</strong>, tenho 19 anos e sou apaixonado por tecnologia. 
              Atualmente, estou no <strong>3º semestre</strong> de Análise e Desenvolvimento de Sistemas na 
              <span className="text-primary font-medium"> Unijorge</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Embora esteja no início da minha carreira, dedico meus estudos intensamente às áreas de 
              <span className="text-primary font-medium"> Back-end e Banco de Dados</span>. Gosto de entender como as 
              coisas funcionam "por baixo do capô", estruturando dados e lógica de forma eficiente com C e Python.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Além das competências técnicas, possuo <strong>Inglês Intermediário para Avançado</strong>, o que me permite 
              ler documentações internacionais e aprender constantemente.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Interesses</h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {[
                "Desenvolvimento Backend",
                "Modelagem de Banco de Dados",
                "Lógica e Algoritmos",
                "Python & C",
                "APIs REST",
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
