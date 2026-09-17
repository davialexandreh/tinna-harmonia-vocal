/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site 100% estático: sem servidor, sem funções. Publica a pasta `out/`.
  output: 'export',
  // `output: 'export'` desativa o otimizador do next/image.
  // As imagens entram já tratadas no repo.
  images: { unoptimized: true },
  // Gera /rota/index.html em vez de /rota.html — URL canônica estável.
  trailingSlash: true,
};

export default nextConfig;
