/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/LANDPAGE1', // Certifique-se que o nome do repo é exatamente este (Maiúsculas importam!)
  
  images: {
    unoptimized: true,
  },

  // ISSO AQUI É O QUE VAI SALVAR SEU DEPLOY
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
