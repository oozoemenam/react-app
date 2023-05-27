/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './src/',
  resolve: {
    alias: {
      // @ts-ignore
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    origin: 'http://localhost:3000',
    open: 'http://localhost:3000',
    proxy: {
      '/jsonserver': {
        target: 'http://localhost:3111',
        changeOrigin: true,
        secure: false,
        ws: false,
        rewrite: (path) => path.replace(/^\/jsonserver/, '')
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['node_modules']
  }
});
