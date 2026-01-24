import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Usamos apenas a fonte Inter que é padrão e funciona sempre
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pedro Monteiro | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional - Desenvolvedor Full Stack especializado em criar experiências digitais incríveis",
    icons: {
    icon: "/icon.svg", // O Next.js sabe que "/" se refere à pasta public
  },
},

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
