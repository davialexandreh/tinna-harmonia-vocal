/**
 * Prepara as mídias de `assets/` para o site.
 *
 * O build é estático (`output: 'export'`), então o next/image não otimiza nada:
 * o que for para `public/` é exatamente o que o visitante baixa. Este script é
 * a etapa que falta. Rode sempre que a Tinna mandar foto ou vídeo novo.
 *
 *   node scripts/otimizar-midia.mjs
 *
 * Imagens saem por aqui mesmo (sharp). O vídeo precisa do ffmpeg instalado
 * (`brew install ffmpeg`); sem ele, o script avisa e pula essa parte.
 */
import { execFile } from 'node:child_process';
import { mkdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import sharp from 'sharp';

const executar = promisify(execFile);
const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const entrada = join(raiz, 'assets');
const saida = join(raiz, 'public', 'midia');

/** Larguras geradas para o retrato. O srcset escolhe conforme a tela. */
const LARGURAS_RETRATO = [480, 800, 1200];

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

async function tamanho(caminho) {
  try {
    return (await stat(caminho)).size;
  } catch {
    return 0;
  }
}

async function gerarRetrato() {
  const origem = join(entrada, 'photo-tinna.png');
  const original = await tamanho(origem);
  if (!original) {
    console.log('· retrato: assets/photo-tinna.png não encontrado, pulando');
    return;
  }

  for (const largura of LARGURAS_RETRATO) {
    const destino = join(saida, `tinna-${largura}.webp`);
    await sharp(origem).resize({ width: largura }).webp({ quality: 80 }).toFile(destino);
    console.log(`· retrato ${largura}px webp: ${kb(await tamanho(destino))}`);
  }

  // Fallback para navegador sem webp.
  const jpeg = join(saida, 'tinna-800.jpg');
  await sharp(origem)
    .resize({ width: 800 })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(jpeg);
  console.log(`· retrato 800px jpeg: ${kb(await tamanho(jpeg))}  (original: ${kb(original)})`);
}

async function temFfmpeg() {
  try {
    await executar('ffmpeg', ['-version']);
    return true;
  } catch {
    return false;
  }
}

async function gerarVideo() {
  const origem = join(entrada, 'hero-banner.mp4');
  const original = await tamanho(origem);
  if (!original) {
    console.log('· vídeo: assets/hero-banner.mp4 não encontrado, pulando');
    return;
  }

  if (!(await temFfmpeg())) {
    console.log('· vídeo: ffmpeg não encontrado (brew install ffmpeg). Pulando.');
    return;
  }

  // 720p, sem faixa de áudio, faststart para começar a tocar antes de baixar tudo.
  const mp4 = join(saida, 'hero.mp4');
  await executar('ffmpeg', [
    '-y', '-i', origem,
    '-an',
    '-vf', 'scale=1280:-2',
    '-c:v', 'libx264', '-crf', '30', '-preset', 'slow',
    '-profile:v', 'high', '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    mp4,
  ]);
  console.log(`· vídeo mp4: ${kb(await tamanho(mp4))}  (original: ${kb(original)})`);

  // Sem WebM de propósito: neste material o VP9 ficou MAIOR que o H.264
  // (1490 KB contra 1319 KB). Se um vídeo novo se comportar diferente, vale
  // testar de novo, mas não adianta servir dois arquivos se o segundo não
  // economiza nada.

  // Poster: é o que aparece no celular, com movimento reduzido, e antes do
  // vídeo carregar. Precisa ser leve.
  const quadro = join(saida, 'hero-quadro.png');
  await executar('ffmpeg', ['-y', '-ss', '1.5', '-i', origem, '-frames:v', '1', quadro]);

  // Só jpeg: o pôster entra no atributo poster do <video> e no <img> de
  // reserva, e os dois pedem um formato só. Um webp a mais era peso parado.
  const poster = join(saida, 'hero-poster.jpg');
  await sharp(quadro)
    .resize({ width: 1280 })
    .jpeg({ quality: 70, progressive: true, mozjpeg: true })
    .toFile(poster);
  console.log(`· poster: ${kb(await tamanho(poster))}`);

  await executar('rm', ['-f', quadro]);
}

await mkdir(saida, { recursive: true });
await gerarRetrato();
await gerarVideo();
console.log('\nPronto. Os arquivos estão em public/midia/.');
