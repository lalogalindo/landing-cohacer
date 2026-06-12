// vite.config.js

import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'aviso-privacidad/index.html'),
        terms: resolve(import.meta.dirname, 'terminos-condiciones/index.html'),
      },
    },
  },
});