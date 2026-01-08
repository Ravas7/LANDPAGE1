/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // ATENÇÃO: Se o seu repositório é "LANDPAGE1", mantenha assim.
  // Se a URL do site fica ".../landpage1", mude para minúsculo aqui.
  basePath: '/LANDPAGE1',
  
  // ADIÇÃO CRUCIAL: Força o caminho dos assets
  assetPrefix: '/LANDPAGE1/',

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
