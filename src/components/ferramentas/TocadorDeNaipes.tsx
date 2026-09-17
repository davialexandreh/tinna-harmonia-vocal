'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Icone } from '@/components/ui/Icone';
import { acordes, naipes, type NaipeId } from '@/content/acordes';
import { midiParaFrequencia, nomeDaNota, vozesDoAcorde } from '@/lib/audio/notas';
import { tocarVoz, type VozTocando } from '@/lib/audio/vozes';
import { AvisoSemAudio } from './AvisoSemAudio';
import { Soando } from './Soando';
import styles from './ferramentas.module.css';

const VOLUME_POR_NAIPE: Record<NaipeId, number> = {
  soprano: 0.3,
  contralto: 0.26,
  tenor: 0.3,
};

export function TocadorDeNaipes() {
  const [indiceAcorde, setIndiceAcorde] = useState(0);
  const [ativos, setAtivos] = useState<Record<NaipeId, boolean>>({
    soprano: true,
    contralto: true,
    tenor: true,
  });
  const [tocando, setTocando] = useState(false);
  const vozesRef = useRef<VozTocando[]>([]);

  const acorde = acordes[indiceAcorde];
  const notas = vozesDoAcorde(acorde.fundamental, acorde.terca);

  useEffect(() => {
    return () => vozesRef.current.forEach((v) => v.parar(0.05));
  }, []);

  function silenciar(rapido = false) {
    vozesRef.current.forEach((v) => v.parar(rapido ? 0.05 : 0.15));
    vozesRef.current = [];
  }

  function soar(
    indice: number,
    quaisAtivos: Record<NaipeId, boolean>,
  ) {
    const alvo = acordes[indice];
    const notasAlvo = vozesDoAcorde(alvo.fundamental, alvo.terca);

    vozesRef.current = naipes
      .filter((naipe) => quaisAtivos[naipe.id])
      .map((naipe, i) =>
        tocarVoz(midiParaFrequencia(notasAlvo[naipe.id]), {
          volume: VOLUME_POR_NAIPE[naipe.id],
          vibrato: 4.6 + i * 0.5,
        }),
      );
    setTocando(true);
  }

  function alternarReproducao() {
    if (tocando) {
      silenciar();
      setTocando(false);
      return;
    }
    soar(indiceAcorde, ativos);
  }

  function escolherAcorde(indice: number) {
    setIndiceAcorde(indice);
    if (!tocando) return;
    silenciar(true);
    soar(indice, ativos);
  }

  function alternarNaipe(id: NaipeId) {
    const proximos = { ...ativos, [id]: !ativos[id] };
    // Pelo menos um naipe sempre fica ligado.
    if (!proximos.soprano && !proximos.contralto && !proximos.tenor) return;

    setAtivos(proximos);
    if (!tocando) return;
    silenciar(true);
    soar(indiceAcorde, proximos);
  }

  return (
    <div className={styles.painel}>
      <span className={styles.rotulo}>Acorde</span>
      <div className={styles.chips}>
        {acordes.map((item, i) => (
          <button
            key={item.nome}
            type="button"
            className={styles.chip}
            aria-pressed={i === indiceAcorde}
            onClick={() => escolherAcorde(i)}
          >
            {item.nome}
          </button>
        ))}
      </div>

      <span className={styles.rotulo}>Vozes</span>
      <p className={styles.instrucao}>Toque em uma voz para ligar ou desligar.</p>
      <div className={styles.vozes}>
        {naipes.map((naipe) => (
          <button
            key={naipe.id}
            type="button"
            className={styles.voz}
            aria-pressed={ativos[naipe.id]}
            onClick={() => alternarNaipe(naipe.id)}
          >
            <span className={styles.vozNome}>
              <b>{naipe.nome}</b>
              <span>{naipe.descricao}</span>
            </span>
            <span className={styles.vozLado}>
              {tocando && ativos[naipe.id] && <Soando />}
              <span className={styles.vozNota}>{nomeDaNota(notas[naipe.id])}</span>
            </span>
          </button>
        ))}
      </div>

      <Button onClick={alternarReproducao} bloco>
        <Icone nome={tocando ? 'parar' : 'tocar'} tamanho={18} />
        {tocando ? 'Parar' : 'Tocar acorde'}
      </Button>

      <p className={styles.dica}>
        <b>Como treinar:</b> toque só o seu naipe e cante junto até memorizar. Depois
        ligue as três vozes e tente sustentar a sua sem escorregar para a melodia. Esse
        exercício resolve boa parte do problema.
      </p>

      <AvisoSemAudio />
    </div>
  );
}
