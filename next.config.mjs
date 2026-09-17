import { networkInterfaces } from 'node:os';

/*
 * Endereços de rede local desta máquina.
 *
 * O Next 16 bloqueia os recursos de desenvolvimento (`/_next/hmr` e amigos)
 * quando a página é aberta por outro host que não localhost. O efeito é cruel:
 * a página monta, mas não hidrata — os botões ficam inertes, sem erro nenhum
 * no console. Como este site é mobile-first e vai ser testado no celular pelo
 * IP da rede, liberamos os endereços da própria máquina.
 *
 * Só afeta `next dev`; o build estático não usa isso.
 */
const enderecosDaRedeLocal = Object.values(networkInterfaces())
  .flat()
  .filter((interfaceDeRede) => interfaceDeRede?.family === 'IPv4' && !interfaceDeRede.internal)
  .map((interfaceDeRede) => interfaceDeRede.address);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site 100% estático: sem servidor, sem funções. Publica a pasta `out/`.
  output: 'export',
  // `output: 'export'` desativa o otimizador do next/image.
  // As imagens entram já tratadas no repo.
  images: { unoptimized: true },
  // Gera /rota/index.html em vez de /rota.html — URL canônica estável.
  trailingSlash: true,
  allowedDevOrigins: enderecosDaRedeLocal,
};

export default nextConfig;
