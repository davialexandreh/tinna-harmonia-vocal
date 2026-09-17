import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: { '@': resolve(import.meta.dirname, 'src') },
  },
  test: {
    // Só lógica pura: nada aqui precisa de DOM nem de AudioContext real.
    environment: 'node',
    include: ['tests/unit/**/*.test.ts'],
  },
});
