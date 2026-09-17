import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { MarcaNota } from '@/components/ui/Icone';
import { site } from '@/content/site';
import { whatsappUrl } from '@/lib/whatsapp';
import styles from './Footer.module.css';

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.cols}>
          <div>
            <Link href="/" className={styles.marca}>
              <span className={styles.mark}>
                <MarcaNota />
              </span>
              {site.nome}
            </Link>
            <p className={styles.sobre}>
              Harmonia vocal na prática. Servindo ministérios através da música.
            </p>
          </div>

          <div className={styles.coluna}>
            <h2>Institucional</h2>
            <Link href="/sobre/">Sobre a Tinna</Link>
            <Link href="/workshops/">Workshops</Link>
            <Link href="/contato/">Contato</Link>
          </div>

          <div className={styles.coluna}>
            <h2>Grátis</h2>
            <Link href="/ferramentas/">Ferramentas</Link>
          </div>

          <div className={styles.coluna}>
            <h2>Fale comigo</h2>
            <a
              href={whatsappUrl(site.whatsapp.mensagens.geral)}
              target="_blank"
              rel="noopener noreferrer"
              data-evento="whatsapp"
              data-origem="footer"
            >
              WhatsApp
            </a>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
              {site.instagram.usuario}
            </a>
          </div>
        </div>

        <div className={styles.base}>
          <span>
            © {ano} {site.nome} · Todos os direitos reservados
          </span>
          <span>
            <Link href="/termos/">Termos de uso</Link> ·{' '}
            <Link href="/privacidade/">Política de privacidade</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}
