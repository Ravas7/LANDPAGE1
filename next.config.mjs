/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Gera arquivos estáticos (HTML/CSS/JS) necessários para o GitHub Pages
  output: 'export',

  // 2. Coloque o nome exato do seu repositório no GitHub entre as barras
  // Exemplo: se o link é github.com/Ravas7/LANDPAGE1, o basePath é '/LANDPAGE1'
  basePath: '/LANDPAGE1',

  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true,
  },

  // Opcional: Impede que links quebrados parem o build
  trailingSlash: true, 
}

export default nextConfig
