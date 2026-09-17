'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { midiParaFrequencia, nomeDaNota } from '@/lib/audio/notas';
import { tocarVoz, type VozTocando } from '@/lib/audio/vozes';
import { AvisoSemAudio } from './AvisoSemAudio';
import styles from './ferramentas.module.css';

/** Uma oitava a partir do Dó3, região confortável para a maioria das vozes. */
const NOTAS = Array.from({ length: 13 }, (_, i) => 48 + i);

export function NotaGuia() {
  const [midi, setMidi] = useState(53); // Fá3
  const [tocando, setTocando] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const vozRef = useRef<VozTocando | null>(null);

  // Não deixa som tocando ao sair da página.
  useEffect(() => {
    return () => vozRef.current?.parar(0.05);
  }, []);

  function parar() {
    vozRef.current?.parar();
    vozRef.current = null;
    setTocando(false);
  }

  function tocar(nota: number) {
    vozRef.current?.parar(0.05);
    vozRef.current = tocarVoz(midiParaFrequencia(nota), { volume });
    setTocando(true);
  }

  function alternar() {
    if (tocando) parar();
    else tocar(midi);
  }

  function escolher(nota: number) {
    setMidi(nota);
    if (tocando) tocar(nota);
  }

  function ajustarVolume(valor: number) {
    setVolume(valor);
    vozRef.current?.definirVolume(valor);
  }

  return (
    <div className={styles.painel}>
      <span className={styles.rotulo}>Escolha a nota</span>
      <div className={styles.chips}>
        {NOTAS.map((nota) => (
          <button
            key={nota}
            type="button"
            className={styles.chip}
            aria-pressed={nota === midi}
            onClick={() => escolher(nota)}
          >
            {nomeDaNota(nota)}
          </button>
        ))}
      </div>

      <p className={styles.mostrador} aria-live="polite">
        {nomeDaNota(midi)}
      </p>
      <p className={styles.mostradorLegenda}>
        {midiParaFrequencia(midi).toFixed(1)} Hz
      </p>

      <div className={styles.controle}>
        <span>Volume</span>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(volume * 100)}
          onChange={(e) => ajustarVolume(Number(e.target.value) / 100)}
          aria-label="Volume da nota-guia"
        />
      </div>

      <Button onClick={alternar} bloco>
        {tocando ? '■ Parar' : '▶ Tocar nota-guia'}
      </Button>

      <AvisoSemAudio />
    </div>
  );
}
