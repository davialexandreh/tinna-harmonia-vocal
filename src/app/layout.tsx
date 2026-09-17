import type { Metadata, Viewport } from 'next';
import { Archivo, Inter_Tight } from 'next/font/google';
import { BannerConsentimento } from '@/components/analytics/BannerConsentimento';
import { Medicao } from '@/components/analytics/Medicao';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { site } from '@/content/site';
import '@/styles/globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} · ${site.tagline}`,
    template: `%s · ${site.nome}`,
  },
  description: site.descricao,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: site.nome,
    title: `${site.nome} · ${site.tagline}`,
    description: site.descricao,
  },
};

export const viewport: Viewport = {
  // O site tem um tema só: escuro.
  themeColor: '#140a10',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${interTight.variable} ${archivo.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <BannerConsentimento />
        <Medicao />
      </body>
    </html>
  );
}
