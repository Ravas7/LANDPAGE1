import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Ravas7", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/pedro-monteiro-ravas7", label: "LinkedIn" },
  { icon: Mail, href: "mailto:predroprem7@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#020617]">
      <div className="container mx-auto max-w-4xl flex flex-col items-center gap-8">
        
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/25"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-gray-500 text-sm">
            Desenvolvido por <span className="text-cyan-400 font-medium text-glow">Pedro Monteiro</span>
          </p>
          <p className="text-xs text-gray-700">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
