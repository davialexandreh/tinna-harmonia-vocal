// eslint-config-next 16 já exporta flat config — sem FlatCompat.
import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

const config = [
  {
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      // artefatos gerados: relatórios do Robot Framework e do Lighthouse
      'tests/e2e/relatorios/**',
      '.lighthouseci/**',
      '.venv-e2e/**',
    ],
  },
  ...coreWebVitals,
  ...typescript,
];

export default config;
