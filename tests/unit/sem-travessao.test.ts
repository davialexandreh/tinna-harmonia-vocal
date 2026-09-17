import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * O travessão (—) não é usado na escrita deste projeto, nem no texto do site
 * nem nos comentários. Este teste existe para não voltar por descuido.
 */
const PASTAS = ['src', 'scripts'];
const EXTENSOES = new Set(['.ts', '.tsx', '.css', '.mjs']);

function listarArquivos(pasta: string): string[] {
  return readdirSync(pasta).flatMap((nome) => {
    const caminho = join(pasta, nome);
    if (statSync(caminho).isDirectory()) return listarArquivos(caminho);
    return EXTENSOES.has(extname(caminho)) ? [caminho] : [];
  });
}

describe('escrita do projeto', () => {
  it('não usa travessão em lugar nenhum do código', () => {
    const comTravessao = PASTAS.flatMap(listarArquivos)
      .map((arquivo) => ({ arquivo, conteudo: readFileSync(arquivo, 'utf8') }))
      .filter(({ conteudo }) => conteudo.includes('—'))
      .map(({ arquivo }) => arquivo);

    expect(comTravessao).toEqual([]);
  });
});
