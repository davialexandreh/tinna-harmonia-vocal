'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Icone } from '@/components/ui/Icone';
import { acordes, naipes, type NaipeId } from '@/content/acordes';
import { midiParaFrequencia, vozesDoAcorde } from '@/lib/audio/notas';
import { tocarVoz, type VozTocando } from '@/lib/audio/vozes';
import { AvisoSemAudio } from './AvisoSemAudio';
import styles from './ferramentas.module.css';

type Rodada = {
  indiceAcorde: number;
  naipe: NaipeId;
};

type Fase = 'parado' | 'acorde' | 'voz' | 'respondendo';

function sortearRodada(): Rodada {
  return {
    indiceAcorde: Math.floor(Math.random() * acordes.length),
    naipe: naipes[Math.floor(Math.random() * naipes.length)].id,
  };
}

/**
 * Formato de maior engajamento do Instagram dela: toca o acorde inteiro,
 * depois uma voz sozinha, e a pessoa diz qual naipe era.
 */
export function TreinoDeOuvido() {
  const [rodada, setRodada] = useState<Rodada | null>(null);
  const [fase, setFase] = useState<Fase>('parado');
  const [resultado, setResultado] = useState<'certo' | 'errado' | null>(null);
  const [escolha, setEscolha] = useState<NaipeId | null>(null);
  const [placar, setPlacar] = useState({ acertos: 0, total: 0 });

  const vozesRef = useRef<VozTocando[]>([]);
  const temporizadoresRef = useRef<number[]>([]);

  const limpar = () => {
    vozesRef.current.forEach((v) => v.parar(0.05));
    vozesRef.current = [];
    temporizadoresRef.current.forEach((t) => window.clearTimeout(t));
    temporizadoresRef.current = [];
  };

  useEffect(() => limpar, []);

  function tocarRodada(nova: Rodada) {
    limpar();
    setResultado(null);
    setEscolha(null);
    setFase('acorde');

    const acorde = acordes[nova.indiceAcorde];
    const notas = vozesDoAcorde(acorde.fundamental, acorde.terca);

    // 1. acorde completo
    vozesRef.current = naipes.map((naipe, i) =>
      tocarVoz(midiParaFrequencia(notas[naipe.id]), {
        volume: 0.28,
        vibrato: 4.6 + i * 0.5,
      }),
    );

    // 2. silêncio curto e então a voz sozinha
    temporizadoresRef.current.push(
      window.setTimeout(() => {
        vozesRef.current.forEach((v) => v.parar(0.2));
        vozesRef.current = [];
      }, 2400),
    );

    temporizadoresRef.current.push(
      window.setTimeout(() => {
        setFase('voz');
        vozesRef.current = [
          tocarVoz(midiParaFrequencia(notas[nova.naipe]), { volume: 0.34 }),
        ];
      }, 3200),
    );

    temporizadoresRef.current.push(
      window.setTimeout(() => {
        vozesRef.current.forEach((v) => v.parar(0.25));
        vozesRef.current = [];
        setFase('respondendo');
      }, 5600),
    );
  }

  function novaRodada() {
    const nova = sortearRodada();
    setRodada(nova);
    tocarRodada(nova);
  }

  function responder(escolhido: NaipeId) {
    if (!rodada || fase === 'parado') return;

    limpar();
    const acertou = escolhido === rodada.naipe;
    setEscolha(escolhido);
    setResultado(acertou ? 'certo' : 'errado');
    setPlacar((p) => ({ acertos: p.acertos + (acertou ? 1 : 0), total: p.total + 1 }));
    setFase('respondendo');
  }

  function repetir() {
    if (rodada) tocarRodada(rodada);
  }

  const nomeDoNaipe = (id: NaipeId) => naipes.find((n) => n.id === id)?.nome ?? id;

  return (
    <div className={styles.painel}>
      <p className={styles.mostrador} aria-hidden="true">
        <Icone
          nome={
            resultado === 'certo'
              ? 'certo'
              : resultado === 'errado'
                ? 'errado'
                : fase === 'voz'
                  ? 'ouvido'
                  : 'naipes'
          }
          tamanho={72}
          strokeWidth={1.25}
        />
      </p>
      <p className={styles.mostradorLegenda} aria-live="polite">
        {fase === 'parado' && 'Toque em começar para ouvir o primeiro acorde'}
        {fase === 'acorde' && 'Ouvindo o acorde completo…'}
        {fase === 'voz' && 'Agora só uma voz. Qual naipe é?'}
        {fase === 'respondendo' && !resultado && 'Responda: qual naipe estava soando?'}
        {resultado === 'certo' && 'Acertou!'}
        {resultado === 'errado' && rodada && `Era ${nomeDoNaipe(rodada.naipe)}.`}
      </p>

      <div className={styles.vozes}>
        {naipes.map((naipe) => {
          const foiEscolhido = escolha === naipe.id;
          const eraCerta = resultado !== null && rodada?.naipe === naipe.id;

          return (
            <button
              key={naipe.id}
              type="button"
              className={[
                styles.voz,
                styles.vozEscolhida,
                eraCerta && styles.vozCerta,
                foiEscolhido && !eraCerta && styles.vozEscolhidaErrada,
                resultado !== null && !eraCerta && !foiEscolhido && styles.vozErrada,
              ]
                .filter(Boolean)
                .join(' ')}
              aria-pressed={foiEscolhido}
              disabled={fase === 'parado' || resultado !== null}
              onClick={() => responder(naipe.id)}
            >
              <span className={styles.vozNome}>
                <b>{naipe.nome}</b>
                <span>{naipe.descricao}</span>
              </span>
              {eraCerta && (
                <span className={styles.marcaResposta}>
                  <Icone nome="certo" tamanho={15} />
                  era esta
                </span>
              )}
              {foiEscolhido && !eraCerta && (
                <span className={[styles.marcaResposta, styles.marcaErro].join(' ')}>
                  sua escolha
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className={styles.linha}>
        <Button onClick={novaRodada}>
          <Icone nome={fase === 'parado' ? 'tocar' : 'repetir'} tamanho={18} />
          {fase === 'parado' ? 'Começar' : 'Próximo acorde'}
        </Button>
        {rodada && (
          <Button variante="ghost" onClick={repetir}>
            Ouvir de novo
          </Button>
        )}
      </div>

      {placar.total > 0 && (
        <p className={styles.placar} aria-live="polite">
          {placar.acertos} de {placar.total} ·{' '}
          {Math.round((placar.acertos / placar.total) * 100)}% de acerto
        </p>
      )}

      <p className={styles.dica}>
        <b>Dica:</b> a contralto é a que mais engana, porque fica no meio do acorde. Se
        você errar sempre nela, está no lugar certo: é exatamente a voz que escorrega no
        ensaio.
      </p>

      <AvisoSemAudio />
    </div>
  );
}
