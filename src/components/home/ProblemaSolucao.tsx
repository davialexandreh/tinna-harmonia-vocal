import { Container } from '@/components/ui/Container';
import { Secao } from '@/components/ui/Secao';
import styles from './home.module.css';

export function ProblemaSolucao() {
  return (
    <Secao>
      <Container>
        <div className={styles.duasColunas}>
          <div>
            <h2>Vocês ensaiam há anos e a segunda voz ainda não para em pé</h2>
            <p>
              Todo mundo começa certo. No meio da música o naipe inteiro escorrega de volta
              para a melodia principal, e ninguém sabe dizer onde exatamente perdeu.
            </p>
            <p>
              Aí a conclusão é sempre a mesma: <em>“o pessoal não tem ouvido”</em>. Só que
              não é ouvido. É <b className={styles.destaque}>coordenação</b>, e coordenação
              se treina.
            </p>
          </div>
          <div>
            <h2>Um caminho na ordem certa, aplicado ao ensaio real</h2>
            <p>
              O grupo aprende a encontrar cada voz dentro do arranjo, sustentá-la com os
              outros cantando em volta e levar isso para a segunda-feira de ensaio.
            </p>
            <p>
              Sem teoria musical como pré-requisito, sem exercício de conservatório solto.
              Feito para quem canta servindo.
            </p>
          </div>
        </div>
      </Container>
    </Secao>
  );
}
