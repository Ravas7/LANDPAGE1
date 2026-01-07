import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Ravas7", label: "GitHub" }, 
  { icon: Linkedin, href: "https://linkedin.com/in/SEU_USUARIO", label: "LinkedIn" },
  { icon: Mail, href: "mailto:predroprem7@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground font-mono">
              Desenvolvido por{" "}
              <span className="text-primary font-medium">
                Pedro Monteiro
              </span>
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
