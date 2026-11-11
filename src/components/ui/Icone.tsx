import type { SVGProps } from 'react';

/**
 * Conjunto de ícones do site.
 *
 * Desenhados aqui, em traço de 1,75 e grade de 24, para que todos tenham o
 * mesmo peso. Emoji não serve como ícone: muda de desenho em cada sistema
 * operacional e não aceita a cor do tema.
 */
export type NomeDeIcone =
  | 'naipes'
  | 'diapasao'
  | 'metronomo'
  | 'ouvido'
  | 'microfone'
  | 'calendario'
  | 'ciclo'
  | 'conversa'
  | 'fone'
  | 'pessoa'
  | 'grupo'
  | 'nota'
  | 'presente'
  | 'tocar'
  | 'parar'
  | 'repetir'
  | 'certo'
  | 'errado';

type Desenho = {
  /** Traçado do ícone. */
  tracos: string[];
  /** Partes preenchidas, quando a forma pede massa em vez de linha. */
  massas?: string[];
  circulos?: { cx: number; cy: number; r: number }[];
};

const DESENHOS: Record<NomeDeIcone, Desenho> = {
  // Três vozes na pauta, cada uma com a sua nota.
  naipes: {
    tracos: ['M3 6.5h18', 'M3 12h18', 'M3 17.5h18'],
    circulos: [
      { cx: 8, cy: 6.5, r: 1.7 },
      { cx: 15.5, cy: 12, r: 1.7 },
      { cx: 11, cy: 17.5, r: 1.7 },
    ],
  },
  // Diapasão: a nota de referência.
  diapasao: {
    tracos: ['M8.5 3v6.5a3.5 3.5 0 0 0 7 0V3', 'M12 13v8'],
  },
  metronomo: {
    tracos: ['M7.5 20.5 10.5 4h3l3 16.5Z', 'M5.5 20.5h13', 'M12.5 18 16 8'],
    circulos: [{ cx: 15.4, cy: 10.6, r: 1.3 }],
  },
  ouvido: {
    tracos: [
      'M8.6 20.5c0-3-2.6-4.2-2.6-8.4a6 6 0 1 1 12 0c0 2.2-1.2 3.3-2.8 3.9',
      'M12 8.6a2.6 2.6 0 0 1 1.4 4.8c-1 .7-1.4 1.5-1.4 2.9a2 2 0 0 1-3.4 1.4',
    ],
  },
  microfone: {
    tracos: ['M12 3.5a3 3 0 0 1 3 3v5.5a3 3 0 0 1-6 0V6.5a3 3 0 0 1 3-3Z', 'M5.5 11.5a6.5 6.5 0 0 0 13 0', 'M12 18.2V21', 'M9 21h6'],
  },
  calendario: {
    tracos: ['M4 6.5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z', 'M3 11h18', 'M8 3.5v5', 'M16 3.5v5', 'M8.5 15.5h4'],
  },
  ciclo: {
    tracos: ['M20 11.2a8 8 0 1 0-2.4 6.9', 'M20.5 5v6.2h-6.2'],
  },
  conversa: {
    tracos: ['M20.5 12.2a8 8 0 0 1-11.6 7.1L4 20.5l1.3-4.7A8 8 0 1 1 20.5 12.2Z', 'M9 10.5h6.5', 'M9 14h4'],
  },
  fone: {
    tracos: [
      'M5 14.5v-2.2a7 7 0 0 1 14 0v2.2',
      'M3.4 15.4a1.9 1.9 0 0 1 1.9-1.9h1.4v6.2H5.3a1.9 1.9 0 0 1-1.9-1.9Z',
      'M20.6 15.4a1.9 1.9 0 0 0-1.9-1.9h-1.4v6.2h1.4a1.9 1.9 0 0 0 1.9-1.9Z',
    ],
  },
  pessoa: {
    tracos: ['M12 4a3.75 3.75 0 1 1 0 7.5A3.75 3.75 0 0 1 12 4Z', 'M5 20.5a7 7 0 0 1 14 0'],
  },
  // Três pessoas: o do meio à frente, como num naipe.
  grupo: {
    tracos: [
      'M12 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z',
      'M6.5 20a5.5 5.5 0 0 1 11 0',
      'M5.5 7.8a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Z',
      'M18.5 7.8a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Z',
      'M2 18a4 4 0 0 1 4.6-4',
      'M22 18a4 4 0 0 0-4.6-4',
    ],
  },
  // Duas colcheias ligadas: vozes que andam juntas.
  nota: {
    tracos: [
      'M9 17.5V6l11-2.5v11.5',
      'M9 9.6 20 7.1',
      'M6.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z',
      'M17.5 12.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z',
    ],
  },
  presente: {
    tracos: [
      'M3.5 8h17v3.5h-17Z',
      'M5 11.5h14v9H5Z',
      'M12 8v12.5',
      'M12 8C10.5 4.5 6.8 4 7.3 6.3 7.6 7.6 12 8 12 8Z',
      'M12 8c1.5-3.5 5.2-4 4.7-1.7C16.4 7.6 12 8 12 8Z',
    ],
  },
  tocar: { tracos: [], massas: ['M8.5 5.2 18.5 12l-10 6.8Z'] },
  parar: { tracos: [], massas: ['M7.5 7.5h9v9h-9Z'] },
  repetir: {
    tracos: ['M4 12.8a8 8 0 1 1 2.4 6.9', 'M3.5 19v-6.2h6.2'],
  },
  certo: { tracos: ['m4.5 12.5 5 5 10-11'] },
  errado: { tracos: ['m6.5 6.5 11 11', 'm17.5 6.5-11 11'] },
};

type IconeProps = {
  nome: NomeDeIcone;
  /** Lado do ícone em pixels. O traço não muda de peso com o tamanho. */
  tamanho?: number;
} & Omit<SVGProps<SVGSVGElement>, 'children'>;

export function Icone({ nome, tamanho = 24, ...rest }: IconeProps) {
  const desenho = DESENHOS[nome];

  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {desenho.tracos.map((traco) => (
        <path key={traco} d={traco} />
      ))}
      {desenho.massas?.map((massa) => (
        <path key={massa} d={massa} fill="currentColor" stroke="none" />
      ))}
      {desenho.circulos?.map((circulo) => (
        <circle
          key={`${circulo.cx}-${circulo.cy}`}
          cx={circulo.cx}
          cy={circulo.cy}
          r={circulo.r}
          fill="currentColor"
          stroke="none"
        />
      ))}
    </svg>
  );
}

/**
 * A marca: uma colcheia. Fica separada do conjunto porque é identidade, não
 * ícone de interface, e por isso é sempre massa, nunca traço.
 */
export function MarcaNota({ tamanho = 16 }: { tamanho?: number }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M11 16.4V6.1l7.5-2.1v3.3L13 8.8v7.6a3 3 0 1 1-2-2.8Z" />
    </svg>
  );
}
