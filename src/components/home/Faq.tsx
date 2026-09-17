import { Container } from '@/components/ui/Container';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { faq } from '@/content/faq';
import styles from './home.module.css';

/** <details> nativo: acessível por teclado e sem um byte de JavaScript. */
export function Faq() {
  return (
    <Secao alt id="faq">
      <Container narrow>
        <SecHead
          centro
          eyebrow="Dúvidas"
          titulo={
            <>
              Perguntas <em>frequentes</em>
            </>
          }
        />
        <div className={styles.faq}>
          {faq.map((item, i) => (
            <details key={item.pergunta} open={i === 0}>
              <summary>{item.pergunta}</summary>
              <p>{item.resposta}</p>
            </details>
          ))}
        </div>
      </Container>
    </Secao>
  );
}
