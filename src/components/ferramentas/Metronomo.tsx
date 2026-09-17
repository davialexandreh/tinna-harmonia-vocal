'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Icone } from '@/components/ui/Icone';
import { obterContexto } from '@/lib/audio/contexto';
import {
  BPM_MAXIMO,
  BPM_MINIMO,
  Metronomo as MotorMetronomo,
  limitarBpm,
} from '@/lib/audio/metronomo';
import { AvisoSemAudio } from './AvisoSemAudio';
import styles from './ferramentas.module.css';

const COMPASSOS = [
  { valor: 4, rotulo: '4/4' },
  { valor: 3, rotulo: '3/4' },
  { valor: 2, rotulo: '2/4' },
  { valor: 6, rotulo: '6/8' },
  { valor: 1, rotulo: 'sem acento' },
];

export function Metronomo() {
  const [bpm, setBpm] = useState(80);
  const [compasso, setCompasso] = useState(4);
  const [tocando, setTocando] = useState(false);
  const [batidaAtual, setBatidaAtual] = useState(-1);
  const motorRef = useRef<MotorMetronomo | null>(null);

  useEffect(() => {
    return () => motorRef.current?.parar();
  }, []);

  // O BPM muda sem reiniciar a contagem: o scheduler usa o valor novo
  // já na próxima batida agendada.
  useEffect(() => {
    motorRef.current?.definirBpm(bpm);
  }, [bpm]);

  useEffect(() => {
    motorRef.current?.definirCompasso(compasso);
  }, [compasso]);

  function alternar() {
    if (tocando) {
      motorRef.current?.parar();
      setTocando(false);
      setBatidaAtual(-1);
      return;
    }

    const ctx = obterContexto();
    const motor = new MotorMetronomo(ctx, {
      bpm,
      compasso,
      aoAgendar: (batida) => {
        // Acende o ponto no instante exato em que a batida vai soar.
        const atraso = Math.max(0, (batida.tempo - ctx.currentTime) * 1000);
        window.setTimeout(() => setBatidaAtual(batida.posicao), atraso);
      },
    });

    motorRef.current = motor;
    motor.iniciar();
    setTocando(true);
  }

  return (
    <div className={styles.painel}>
      <p className={styles.mostrador} aria-live="off">
        {bpm}
      </p>
      <p className={styles.mostradorLegenda}>batidas por minuto</p>

      <div className={styles.batidas} aria-hidden="true">
        {Array.from({ length: compasso }, (_, i) => (
          <span
            key={i}
            className={[
              styles.batida,
              i === 0 && compasso > 1 && styles.batidaAcentuada,
              i === batidaAtual && styles.batidaAtiva,
            ]
              .filter(Boolean)
              .join(' ')}
          />
        ))}
      </div>

      <div className={styles.controle}>
        <span>Andamento</span>
        <input
          type="range"
          min={BPM_MINIMO}
          max={BPM_MAXIMO}
          value={bpm}
          onChange={(e) => setBpm(limitarBpm(Number(e.target.value)))}
          aria-label="Batidas por minuto"
        />
      </div>

      <div className={styles.linha}>
        <Button
          variante="ghost"
          tamanho="sm"
          onClick={() => setBpm(limitarBpm(bpm - 5))}
          aria-label="Diminuir cinco batidas por minuto"
        >
          −5
        </Button>
        <Button
          variante="ghost"
          tamanho="sm"
          onClick={() => setBpm(limitarBpm(bpm + 5))}
          aria-label="Aumentar cinco batidas por minuto"
        >
          +5
        </Button>
      </div>

      <span className={[styles.rotulo, styles.rotuloEspacado].join(' ')}>Compasso</span>
      <div className={styles.chips}>
        {COMPASSOS.map((item) => (
          <button
            key={item.rotulo}
            type="button"
            className={styles.chip}
            aria-pressed={item.valor === compasso}
            onClick={() => setCompasso(item.valor)}
          >
            {item.rotulo}
          </button>
        ))}
      </div>

      <Button onClick={alternar} bloco>
        <Icone nome={tocando ? 'parar' : 'tocar'} tamanho={18} />
        {tocando ? 'Parar' : 'Iniciar'}
      </Button>

      <p className={styles.dica}>
        O agendamento usa o relógio do próprio motor de áudio, com antecipação de 100 ms.
        É por isso que o andamento não escorrega quando o celular fica ocupado.
      </p>

      <AvisoSemAudio />
    </div>
  );
}
